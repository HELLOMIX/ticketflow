import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/api";

export type ApiTicket = {
	id: string;
	status: "VALID" | "USED" | "EXPIRED" | "CANCELLED";
	buyerName: string;
	accessCode: string;
	qrCodeToken: string;
	shareToken: string;
	purchasedAt: string;
	event: {
		id: string;
		title: string;
		startTime: string;
		bannerUrl?: string | null;
		venue: { name: string; address: string };
	};
	ticketType: { name: string; price: number };
	seat?: { rowLabel: string; seatNumber: number } | null;
};

const FALLBACK_COVER =
	"https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=800&auto=format&fit=crop";

export function formatDateLabel(iso: string) {
	const date = new Date(iso);
	return (
		date.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" }) +
		" · " +
		date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
	);
}

export function ticketCover(ticket: ApiTicket) {
	return ticket.event.bannerUrl ?? FALLBACK_COVER;
}

export function seatLabel(ticket: ApiTicket) {
	return ticket.seat
		? `Fileira ${ticket.seat.rowLabel}, assento ${ticket.seat.seatNumber}`
		: null;
}

export function useMyTickets() {
	const [tickets, setTickets] = useState<ApiTicket[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const load = useCallback(async () => {
		setLoading(true);
		try {
			const { data } = await api.get<ApiTicket[]>("/tickets/mine");
			setTickets(data);
			setError(null);
		} catch {
			setError("Não foi possível carregar seus ingressos.");
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		load();
	}, [load]);

	return { tickets, loading, error, refetch: load };
}

export async function fetchTicketById(ticketId: string) {
	const { data } = await api.get<ApiTicket>(`/tickets/${ticketId}`);
	return data;
}

export async function fetchSharedTicket(shareToken: string) {
	const { data } = await api.get<ApiTicket>(`/tickets/shared/${shareToken}`);
	return data;
}
