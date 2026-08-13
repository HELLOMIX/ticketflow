import { api, extractApiErrorMessage } from "../../lib/api";

export type GateStatus = "VALID" | "USED" | "INVALID" | "WRONG_EVENT";

export type GateTicketSummary = {
	eventTitle: string;
	ticketType: string;
	holderName: string;
	code: string;
};

export type GateValidationResult = {
	status: GateStatus;
	ticket?: GateTicketSummary;
};

export async function validateByCode(
	code: string,
	eventId?: string,
): Promise<GateValidationResult> {
	const { data } = await api.post<GateValidationResult>(
		"/gate/validate/code",
		{ code, eventId },
	);
	return data;
}

export async function validateByQrToken(
	token: string,
	eventId?: string,
): Promise<GateValidationResult> {
	const { data } = await api.post<GateValidationResult>("/gate/validate/qr", {
		token,
		eventId,
	});
	return data;
}

export { extractApiErrorMessage };
