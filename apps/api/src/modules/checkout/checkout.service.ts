import { prisma } from "../../prisma-client";
import { AppError, ConflictError } from "../../shared/errors/AppError";
import { buildTicketData } from "../tickets/tickets.service";

type CheckoutInput = {
	eventId: string;
	ticketTypeId: string;
	buyerId: string;
	buyerName: string;
	seatIds?: string[];
	quantity?: number;
	card: { number: string; name: string; expiry: string; cvv: string };
};

function simulateApproval(cardNumber: string): boolean {
	const digits = cardNumber.replace(/\s/g, "");
	return !digits.endsWith("0000");
}

export async function checkout(input: CheckoutInput) {
	const event = await prisma.event.findUnique({
		where: { id: input.eventId },
		include: { venue: true },
	});
	if (!event) throw new AppError(404, "Evento não encontrado");

	const ticketType = await prisma.ticketType.findUnique({
		where: { id: input.ticketTypeId },
	});
	if (!ticketType || ticketType.eventId !== event.id) {
		throw new AppError(
			404,
			"Tipo de ingresso não encontrado para este evento",
		);
	}

	const approved = simulateApproval(input.card.number);

	if (event.venue.hasAssignedSeats) {
		const seatIds = input.seatIds ?? [];
		if (seatIds.length === 0)
			throw new AppError(400, "Informe os assentos selecionados");

		if (!approved) {
			await prisma.eventSeat.updateMany({
				where: {
					eventId: event.id,
					seatId: { in: seatIds },
					reservedById: input.buyerId,
				},
				data: {
					status: "AVAILABLE",
					reservedById: null,
					reservationExpiresAt: null,
				},
			});
			return { approved: false, tickets: [] };
		}

		const tickets = await prisma.$transaction(async (tx) => {
			const created = [];
			for (const seatId of seatIds) {
				const es = await tx.eventSeat.findUnique({
					where: { eventId_seatId: { eventId: event.id, seatId } },
				});
				const now = new Date();
				const stillReserved =
					es &&
					es.status === "RESERVED" &&
					es.reservedById === input.buyerId &&
					es.reservationExpiresAt &&
					es.reservationExpiresAt > now;

				if (!stillReserved) {
					throw new ConflictError(
						`Reserva do assento ${seatId} expirou ou não é sua`,
					);
				}

				await tx.eventSeat.update({
					where: { id: es!.id },
					data: { status: "SOLD" },
				});

				const ticket = await tx.ticket.create({
					data: buildTicketData({
						eventId: event.id,
						ticketTypeId: ticketType.id,
						buyerId: input.buyerId,
						buyerName: input.buyerName,
						seatId,
					}),
				});
				created.push(ticket);
			}
			return created;
		});

		return { approved: true, tickets };
	}

	const quantity = input.quantity ?? 1;
	const soldCount = await prisma.ticket.count({
		where: { ticketTypeId: ticketType.id },
	});
	if (soldCount + quantity > ticketType.quantityAvailable) {
		throw new AppError(
			409,
			"Não há ingressos suficientes disponíveis para este tipo",
		);
	}

	if (!approved) return { approved: false, tickets: [] };

	const tickets = [];
	for (let i = 0; i < quantity; i += 1) {
		tickets.push(
			await prisma.ticket.create({
				data: buildTicketData({
					eventId: event.id,
					ticketTypeId: ticketType.id,
					buyerId: input.buyerId,
					buyerName: input.buyerName,
					seatId: null,
				}),
			}),
		);
	}

	return { approved: true, tickets };
}
