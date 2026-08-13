import { prisma } from "../../prisma-client";
import { verifyQrToken } from "../tickets/qrcode.service";

export type ValidationStatus = "VALID" | "USED" | "INVALID" | "WRONG_EVENT";

export type ValidationResult = {
	status: ValidationStatus;
	ticket?: {
		eventTitle: string;
		ticketType: string;
		holderName: string;
		code: string;
	};
};

async function assertGatekeeperCanValidate(
	gatekeeperId: string,
	eventId: string,
) {
	const assignment = await prisma.eventGatekeeper.findUnique({
		where: { eventId_gatekeeperId: { eventId, gatekeeperId } },
	});
	return !!assignment;
}

async function finalizeValidation(
	ticket: {
		id: string;
		eventId: string;
		status: string;
		ticketType: { name: string };
		buyerName: string;
		accessCode: string;
		event: { title: string };
	},
	gatekeeperId: string,
	contextEventId?: string,
): Promise<ValidationResult> {
	// Se a portaria está vinculada a um evento específico, ingresso de outro evento é rejeitado
	if (contextEventId && ticket.eventId !== contextEventId) {
		return { status: "WRONG_EVENT", ticket: buildTicketSummary(ticket) };
	}

	const canValidate = await assertGatekeeperCanValidate(
		gatekeeperId,
		ticket.eventId,
	);
	if (!canValidate) {
		return { status: "WRONG_EVENT", ticket: buildTicketSummary(ticket) };
	}

	if (ticket.status === "USED") {
		return { status: "USED", ticket: buildTicketSummary(ticket) };
	}

	if (ticket.status !== "VALID") {
		return { status: "INVALID", ticket: buildTicketSummary(ticket) };
	}

	// Marca como usado de forma atômica: só atualiza se ainda estiver VALID,
	// isso evita que duas validações simultâneas do mesmo ingresso passem as duas.
	const updateResult = await prisma.ticket.updateMany({
		where: { id: ticket.id, status: "VALID" },
		data: {
			status: "USED",
			validatedAt: new Date(),
			validatedById: gatekeeperId,
		},
	});

	if (updateResult.count === 0) {
		// outra validação venceu a corrida entre a leitura acima e este update
		return { status: "USED", ticket: buildTicketSummary(ticket) };
	}

	return { status: "VALID", ticket: buildTicketSummary(ticket) };
}

function buildTicketSummary(ticket: {
	ticketType: { name: string };
	buyerName: string;
	accessCode: string;
	event: { title: string };
}) {
	return {
		eventTitle: ticket.event.title,
		ticketType: ticket.ticketType.name,
		holderName: ticket.buyerName,
		code: ticket.accessCode,
	};
}

export async function validateByAccessCode(
	accessCode: string,
	gatekeeperId: string,
	contextEventId?: string,
): Promise<ValidationResult> {
	const ticket = await prisma.ticket.findUnique({
		where: { accessCode },
		include: { event: true, ticketType: true },
	});

	if (!ticket) return { status: "INVALID" };

	return finalizeValidation(ticket, gatekeeperId, contextEventId);
}

export async function validateByQrToken(
	token: string,
	gatekeeperId: string,
	contextEventId?: string,
): Promise<ValidationResult> {
	const payload = verifyQrToken(token);
	if (!payload) return { status: "INVALID" }; // assinatura não bate = forjado ou corrompido

	const ticket = await prisma.ticket.findUnique({
		where: { id: payload.ticketId },
		include: { event: true, ticketType: true },
	});

	if (!ticket || ticket.qrCodeToken !== token) return { status: "INVALID" };

	return finalizeValidation(ticket, gatekeeperId, contextEventId);
}
