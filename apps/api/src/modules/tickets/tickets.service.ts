import { randomUUID } from "crypto";
import { prisma } from "../../prisma-client";
import { AppError, ForbiddenError } from "../../shared/errors/AppError";
import {
	generateAccessCode,
	generateQrToken,
	generateShareToken,
} from "./qrcode.service";

type BuildTicketParams = {
	eventId: string;
	ticketTypeId: string;
	buyerId: string;
	buyerName: string;
	seatId?: string | null;
};

export function buildTicketData(params: BuildTicketParams) {
	const ticketId = randomUUID();
	const qrCodeToken = generateQrToken({
		ticketId,
		eventId: params.eventId,
		seatId: params.seatId ?? null,
	});

	return {
		id: ticketId,
		eventId: params.eventId,
		ticketTypeId: params.ticketTypeId,
		buyerId: params.buyerId,
		buyerName: params.buyerName,
		seatId: params.seatId ?? undefined,
		accessCode: generateAccessCode(),
		qrCodeToken,
		shareToken: generateShareToken(),
	};
}

export async function issueTicket(params: BuildTicketParams) {
	return prisma.ticket.create({ data: buildTicketData(params) });
}

export async function listMyTickets(buyerId: string) {
	return prisma.ticket.findMany({
		where: { buyerId },
		include: {
			event: { include: { venue: true } },
			ticketType: true,
			seat: true,
		},
		orderBy: { purchasedAt: "desc" },
	});
}

export async function getTicketById(ticketId: string, requesterId: string) {
	const ticket = await prisma.ticket.findUnique({
		where: { id: ticketId },
		include: {
			event: { include: { venue: true } },
			ticketType: true,
			seat: true,
		},
	});
	if (!ticket) throw new AppError(404, "Ingresso não encontrado");
	if (ticket.buyerId !== requesterId) {
		throw new ForbiddenError("Este ingresso não pertence a você");
	}
	return ticket;
}

export async function getTicketByShareToken(shareToken: string) {
	const ticket = await prisma.ticket.findUnique({
		where: { shareToken },
		include: {
			event: { include: { venue: true } },
			ticketType: true,
			seat: true,
		},
	});
	if (!ticket)
		throw new AppError(404, "Ingresso não encontrado ou link inválido");
	return ticket;
}
