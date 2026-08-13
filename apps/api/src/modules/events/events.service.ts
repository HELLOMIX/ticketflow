import { prisma } from "../../prisma-client";
import { ForbiddenError, AppError } from "../../shared/errors/AppError";

type EventType = "MOVIE" | "SHOW" | "THEATER" | "FESTIVAL" | "OTHER";
type EventStatus = "DRAFT" | "PUBLISHED" | "CANCELLED";

type VenueInput =
	| { id: string }
	| {
			name: string;
			address: string;
			hasAssignedSeats: boolean;
			totalCapacity: number;
			seatMap?: { rows: number; seatsPerRow: number };
	  };

export type CreateEventInput = {
	organizerId: string;
	title: string;
	description?: string;
	bannerUrl?: string;
	eventType: EventType;
	startTime: string; // ISO
	externalApiSource?: "TMDB" | "TICKETMASTER";
	externalApiId?: string;
	status?: EventStatus;
	venue: VenueInput;
	ticketTypes: Array<{
		name: string;
		price: number;
		quantityAvailable: number;
	}>;
};

export type UpdateEventInput = Partial<{
	title: string;
	description: string;
	bannerUrl: string;
	eventType: EventType;
	startTime: string;
	status: EventStatus;
}>;

function generateSeatRows(venueId: string, rows: number, seatsPerRow: number) {
	const seats = [];
	for (let row = 1; row <= rows; row += 1) {
		for (let col = 1; col <= seatsPerRow; col += 1) {
			seats.push({
				venueId,
				rowLabel: String.fromCharCode(64 + row), // A, B, C...
				seatNumber: col,
				gridX: col,
				gridY: row,
				seatType: "STANDARD" as const,
			});
		}
	}
	return seats;
}

export async function createEvent(input: CreateEventInput) {
	return prisma.$transaction(async (tx) => {
		let venueId: string;

		if ("id" in input.venue) {
			const existing = await tx.venue.findUnique({
				where: { id: input.venue.id },
			});
			if (!existing) throw new AppError(404, "Local não encontrado");
			venueId = existing.id;
		} else {
			const venue = await tx.venue.create({
				data: {
					name: input.venue.name,
					address: input.venue.address,
					hasAssignedSeats: input.venue.hasAssignedSeats,
					totalCapacity: input.venue.totalCapacity,
				},
			});
			venueId = venue.id;

			if (input.venue.hasAssignedSeats && input.venue.seatMap) {
				await tx.seat.createMany({
					data: generateSeatRows(
						venueId,
						input.venue.seatMap.rows,
						input.venue.seatMap.seatsPerRow,
					),
				});
			}
		}

		const event = await tx.event.create({
			data: {
				organizerId: input.organizerId,
				venueId,
				title: input.title,
				description: input.description,
				bannerUrl: input.bannerUrl,
				eventType: input.eventType,
				startTime: new Date(input.startTime),
				externalApiSource: input.externalApiSource,
				externalApiId: input.externalApiId,
				status: input.status ?? "PUBLISHED",
			},
		});

		await tx.ticketType.createMany({
			data: input.ticketTypes.map((tt) => ({
				eventId: event.id,
				name: tt.name,
				price: tt.price,
				quantityAvailable: tt.quantityAvailable,
			})),
		});

		return tx.event.findUniqueOrThrow({
			where: { id: event.id },
			include: { venue: true, ticketTypes: true },
		});
	});
}

export type ListEventsFilters = {
	search?: string;
	eventType?: EventType;
	city?: string;
};

export async function listPublishedEvents(filters: ListEventsFilters = {}) {
	return prisma.event.findMany({
		where: {
			status: "PUBLISHED",
			title: filters.search ? { contains: filters.search } : undefined,
			eventType: filters.eventType,
			venue: filters.city
				? { address: { contains: filters.city } }
				: undefined,
		},
		include: { venue: true, ticketTypes: true },
		orderBy: { startTime: "asc" },
	});
}

export async function getEventById(eventId: string) {
	const event = await prisma.event.findUnique({
		where: { id: eventId },
		include: {
			venue: true,
			ticketTypes: true,
			organizer: { select: { id: true, name: true } },
		},
	});
	if (!event) throw new AppError(404, "Evento não encontrado");
	return event;
}

export async function listEventsByOrganizer(organizerId: string) {
	return prisma.event.findMany({
		where: { organizerId },
		include: {
			venue: true,
			ticketTypes: true,
			tickets: { select: { id: true } }, // usado pra contar vendidos
		},
		orderBy: { startTime: "asc" },
	});
}

export async function updateEventStatus(
	eventId: string,
	organizerId: string,
	status: EventStatus,
) {
	const event = await prisma.event.findUnique({ where: { id: eventId } });
	if (!event) throw new AppError(404, "Evento não encontrado");
	if (event.organizerId !== organizerId) {
		throw new ForbiddenError("Você não é o organizador deste evento");
	}
	return prisma.event.update({ where: { id: eventId }, data: { status } });
}

export async function assertOrganizerOwnsEvent(
	eventId: string,
	organizerId: string,
) {
	const event = await prisma.event.findUnique({ where: { id: eventId } });
	if (!event) throw new AppError(404, "Evento não encontrado");
	if (event.organizerId !== organizerId) {
		throw new ForbiddenError("Você não é o organizador deste evento");
	}
	return event;
}

export async function updateEvent(
	eventId: string,
	organizerId: string,
	data: UpdateEventInput,
) {
	await assertOrganizerOwnsEvent(eventId, organizerId);

	return prisma.event.update({
		where: { id: eventId },
		data: {
			title: data.title,
			description: data.description,
			bannerUrl: data.bannerUrl,
			eventType: data.eventType,
			startTime: data.startTime ? new Date(data.startTime) : undefined,
			status: data.status,
		},
		include: { venue: true, ticketTypes: true },
	});
}

export async function updateTicketType(
	ticketTypeId: string,
	organizerId: string,
	data: { price?: number; quantityAvailable?: number },
) {
	const ticketType = await prisma.ticketType.findUnique({
		where: { id: ticketTypeId },
		include: { event: true },
	});
	if (!ticketType) throw new AppError(404, "Tipo de ingresso não encontrado");
	if (ticketType.event.organizerId !== organizerId) {
		throw new ForbiddenError("Você não é o organizador deste evento");
	}

	if (data.quantityAvailable !== undefined) {
		const soldCount = await prisma.ticket.count({
			where: { ticketTypeId },
		});
		if (data.quantityAvailable < soldCount) {
			throw new AppError(
				400,
				`Já existem ${soldCount} ingressos vendidos deste tipo — quantidade não pode ser menor que isso`,
			);
		}
	}

	return prisma.ticketType.update({
		where: { id: ticketTypeId },
		data: { price: data.price, quantityAvailable: data.quantityAvailable },
	});
}
