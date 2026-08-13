import { api, extractApiErrorMessage } from "../../lib/api";

export type CheckoutCard = {
	number: string;
	name: string;
	expiry: string;
	cvv: string;
};

export type CheckoutResult = {
	approved: boolean;
	tickets: Array<{
		id: string;
		accessCode: string;
		qrCodeToken: string;
		shareToken: string;
	}>;
};

export async function submitCheckout(
	eventId: string,
	params: {
		ticketTypeId: string;
		seatIds?: string[];
		quantity?: number;
		card: CheckoutCard;
	},
) {
	const { data } = await api.post<CheckoutResult>(
		`/events/${eventId}/checkout`,
		params,
	);
	return data;
}

export async function releaseSeats(eventId: string, seatIds: string[]) {
	await api.post(`/events/${eventId}/seats/release`, { seatIds });
}

export { extractApiErrorMessage };
