import { useCallback, useEffect, useState } from "react";
import { api, extractApiErrorMessage } from "../../lib/api";

export type OrganizerEventDTO = {
	id: string;
	title: string;
	status: "DRAFT" | "PUBLISHED" | "CANCELLED";
	startTime: string;
	venue: { totalCapacity: number };
	ticketTypes: Array<{ quantityAvailable: number }>;
	tickets: Array<{ id: string }>;
};

export type UpdateEventPayload = Partial<{
	title: string;
	description: string;
	bannerUrl: string;
	eventType: "MOVIE" | "SHOW" | "THEATER" | "FESTIVAL" | "OTHER";
	startTime: string;
	status: "DRAFT" | "PUBLISHED" | "CANCELLED";
}>;

export function useMyOrganizerEvents() {
	const [events, setEvents] = useState<OrganizerEventDTO[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const load = useCallback(async () => {
		setLoading(true);
		try {
			const { data } =
				await api.get<OrganizerEventDTO[]>("/events/mine/list");
			setEvents(data);
			setError(null);
		} catch {
			setError("Não foi possível carregar seus eventos.");
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		load();
	}, [load]);

	return { events, loading, error, refetch: load };
}

export type CreateEventPayload = {
	title: string;
	description?: string;
	bannerUrl?: string;
	eventType: "MOVIE" | "SHOW" | "THEATER" | "FESTIVAL" | "OTHER";
	startTime: string; // ISO
	externalApiSource?: "TMDB";
	externalApiId?: string;
	status?: "DRAFT" | "PUBLISHED";
	venue:
		| { id: string }
		| {
				name: string;
				address: string;
				hasAssignedSeats: boolean;
				totalCapacity: number;
				seatMap?: { rows: number; seatsPerRow: number };
		  };
	ticketTypes: Array<{
		name: string;
		price: number;
		quantityAvailable: number;
	}>;
};

export async function createEvent(payload: CreateEventPayload) {
	const { data } = await api.post("/events", payload);
	return data;
}

export async function updateEventStatus(
	eventId: string,
	status: "DRAFT" | "PUBLISHED" | "CANCELLED",
) {
	const { data } = await api.patch(`/events/${eventId}/status`, { status });
	return data;
}

export async function updateEvent(
	eventId: string,
	payload: UpdateEventPayload,
) {
	const { data } = await api.patch(`/events/${eventId}`, payload);
	return data;
}

export async function updateTicketType(
	eventId: string,
	ticketTypeId: string,
	payload: { price?: number; quantityAvailable?: number },
) {
	const { data } = await api.patch(
		`/events/${eventId}/ticket-types/${ticketTypeId}`,
		payload,
	);
	return data;
}

// GET /events/:id é pública — reaproveitada aqui pra carregar o evento no modo edição
export async function fetchOrganizerEvent(eventId: string) {
	const { data } = await api.get(`/events/${eventId}`);
	return data;
}

export type CreateGatekeeperPayload = {
	name: string;
	email: string;
	password: string;
	cpf: string;
	phone?: string;
};

export async function createGatekeeper(
	eventId: string,
	payload: CreateGatekeeperPayload,
) {
	const { data } = await api.post(`/events/${eventId}/gatekeepers`, payload);
	return data;
}

export type CatalogItem = {
	id: string;
	title: string;
	description: string;
	cover: string;
	banner: string;
	dateLabel: string;
	price: number;
};

export async function fetchCatalog(): Promise<CatalogItem[]> {
	const { data } = await api.get<{ items: CatalogItem[] }>("/catalog");
	return data.items ?? [];
}

export async function searchCatalog(query: string): Promise<CatalogItem[]> {
	const { data } = await api.get<{ items: CatalogItem[] }>(
		"/catalog/search",
		{ params: { q: query } },
	);
	return data.items ?? [];
}

export { extractApiErrorMessage };
