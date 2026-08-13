import { prisma } from "../../prisma-client";
import { AppError, ConflictError } from "../../shared/errors/AppError";

const RESERVATION_MINUTES = 10;

export async function getSeatMap(eventId: string, userId?: string) {
	const event = await prisma.event.findUnique({
		where: { id: eventId },
		include: { venue: true },
	});
	if (!event) throw new AppError(404, "Evento não encontrado");
	if (!event.venue.hasAssignedSeats) {
		throw new AppError(400, "Este evento não usa mapa de assentos");
	}

	const seats = await prisma.seat.findMany({
		where: { venueId: event.venueId },
		orderBy: [{ gridY: "asc" }, { gridX: "asc" }],
		include: { eventSeats: { where: { eventId } } },
	});

	const now = new Date();
	const byRow = new Map<string, any[]>();

	for (const seat of seats) {
		const es = seat.eventSeats[0];
		let status: "AVAILABLE" | "RESERVED" | "SOLD" | "BLOCKED" = "AVAILABLE";
		if (es) {
			const expired =
				es.status === "RESERVED" &&
				es.reservationExpiresAt &&
				es.reservationExpiresAt < now;
			status = expired ? "AVAILABLE" : (es.status as any);
		}
		if (!byRow.has(seat.rowLabel)) byRow.set(seat.rowLabel, []);
		byRow.get(seat.rowLabel)!.push({
			id: seat.id,
			rowLabel: seat.rowLabel,
			seatNumber: seat.seatNumber,
			gridX: seat.gridX,
			gridY: seat.gridY,
			seatType: seat.seatType,
			status,
			reservedByMe: !!userId && es?.reservedById === userId,
		});
	}

	const rows = [...byRow.entries()]
		.map(([rowLabel, seatsInRow]) => ({
			rowLabel,
			seats: seatsInRow,
			gridY: seatsInRow[0].gridY,
		}))
		.sort((a, b) => b.gridY - a.gridY);

	return { venue: event.venue, rows };
}

export async function reserveSeats(
	eventId: string,
	seatIds: string[],
	userId: string,
) {
	const expiresAt = new Date(Date.now() + RESERVATION_MINUTES * 60 * 1000);

	return prisma.$transaction(async (tx) => {
		const results = [];
		for (const seatId of seatIds) {
			const existing = await tx.eventSeat.findUnique({
				where: { eventId_seatId: { eventId, seatId } },
			});
			const now = new Date();
			const isFree =
				!existing ||
				existing.status === "AVAILABLE" ||
				(existing.status === "RESERVED" &&
					existing.reservationExpiresAt !== null &&
					existing.reservationExpiresAt < now);

			if (!isFree)
				throw new ConflictError(`Assento ${seatId} indisponível`);

			const updated = existing
				? await tx.eventSeat.update({
						where: { id: existing.id },
						data: {
							status: "RESERVED",
							reservedById: userId,
							reservationExpiresAt: expiresAt,
						},
					})
				: await tx.eventSeat.create({
						data: {
							eventId,
							seatId,
							status: "RESERVED",
							reservedById: userId,
							reservationExpiresAt: expiresAt,
						},
					});
			results.push(updated);
		}
		return results;
	});
}

export async function releaseSeats(
	eventId: string,
	seatIds: string[],
	userId: string,
) {
	return prisma.eventSeat.updateMany({
		where: {
			eventId,
			seatId: { in: seatIds },
			reservedById: userId,
			status: "RESERVED",
		},
		data: {
			status: "AVAILABLE",
			reservedById: null,
			reservationExpiresAt: null,
		},
	});
}
