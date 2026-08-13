import { api } from "../../lib/api";
import type { EventItem } from "../../components/mockData";

type ApiTicketType = {
	id: string;
	name: string;
	price: number;
	quantityAvailable: number;
};

type ApiVenue = {
	id: string;
	name: string;
	address: string;
	hasAssignedSeats: boolean;
	totalCapacity: number;
};

type ApiEvent = {
	id: string;
	title: string;
	description?: string | null;
	bannerUrl?: string | null;
	eventType: string; // 'MOVIE' | 'SHOW' | 'THEATER' | 'FESTIVAL' | 'OTHER'
	startTime: string;
	venue: ApiVenue;
	ticketTypes: ApiTicketType[];
	organizer?: { id: string; name: string };
};

const TYPE_MAP: Record<string, EventItem["type"]> = {
	MOVIE: "cinema",
	SHOW: "show",
	THEATER: "theater",
	FESTIVAL: "festival",
	OTHER: "show",
};

const FALLBACK_COVER =
	"https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop";

function formatDate(iso: string) {
	const date = new Date(iso);
	return {
		dateLabel: date.toLocaleDateString("pt-BR", {
			day: "2-digit",
			month: "long",
			year: "numeric",
		}),
		dateShort: date.toLocaleDateString("pt-BR", {
			day: "2-digit",
			month: "short",
		}),
		time: date.toLocaleTimeString("pt-BR", {
			hour: "2-digit",
			minute: "2-digit",
		}),
	};
}

function guessCity(address: string) {
	const parts = address.split(/[-,]/).map((p) => p.trim());
	return parts[parts.length - 1] || address;
}

export function normalizeRealEvent(item: ApiEvent): EventItem {
	const type = TYPE_MAP[item.eventType] ?? "show";
	const { dateLabel, dateShort, time } = formatDate(item.startTime);
	const cheapestPrice = item.ticketTypes.length
		? Math.min(...item.ticketTypes.map((t) => t.price))
		: 0;

	return {
		id: item.id,
		type,
		title: item.title,
		venue: item.venue.name,
		city: guessCity(item.venue.address),
		dateLabel,
		dateShort,
		time,
		cover: item.bannerUrl ?? FALLBACK_COVER,
		description:
			item.description ?? "Sem descrição informada pelo organizador.",
		organizer: item.organizer?.name ?? "Organizador",
		price: cheapestPrice,
		ticketTypes: item.ticketTypes.map((t) => ({
			id: t.id,
			name: t.name,
			price: t.price,
			available: t.quantityAvailable,
		})),
		seatMap: item.venue.hasAssignedSeats
			? type === "theater"
				? "theater"
				: "grid"
			: "standard",
		venueId: item.venue.id,
		hasAssignedSeats: item.venue.hasAssignedSeats,
		eventType: item.eventType,
	};
}

export async function fetchPublishedEvents(): Promise<EventItem[]> {
	const { data } = await api.get<ApiEvent[]>("/events");
	return data.map(normalizeRealEvent);
}

export async function fetchEventById(eventId: string): Promise<EventItem> {
	const { data } = await api.get<ApiEvent>(`/events/${eventId}`);
	return normalizeRealEvent(data);
}
