export type EventType = "show" | "cinema" | "theater" | "festival" | "sport";

export type EventItem = {
	id: string;
	type: EventType;
	title: string;
	venue: string;
	city: string;
	dateLabel: string;
	dateShort: string;
	time: string;
	cover: string;
	description: string;
	organizer: string;
	price: number;
	ticketTypes: Array<{
		id?: string;
		name: string;
		price: number;
		available: number;
	}>;
	seatMap?: "grid" | "theater" | "standard";
	// campos presentes apenas quando o evento vem da API real (não do mock/catálogo TMDb)
	venueId?: string;
	hasAssignedSeats?: boolean;
	eventType?: string;
};

export const EVENTS: EventItem[] = [
	{
		id: "the-weeknd",
		type: "show",
		title: "The Weeknd",
		venue: "Arena Barueri",
		city: "São Paulo",
		dateLabel: "22 de Agosto",
		dateShort: "22 ago",
		time: "20:00",
		cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop",
		description:
			"A turnê mais esperada do ano com visual imersivo, luzes e um repertório de grandes sucessos.",
		organizer: "T4F Entretenimento",
		price: 420,
		seatMap: "standard",
		ticketTypes: [
			{ name: "Pista Premium", price: 420, available: 80 },
			{ name: "Arquibancada", price: 260, available: 110 },
			{ name: "VIP", price: 680, available: 30 },
		],
	},
	{
		id: "dune",
		type: "cinema",
		title: "Dune: Parte Três",
		venue: "Cinepolis Paulista",
		city: "São Paulo",
		dateLabel: "14 de Setembro",
		dateShort: "14 set",
		time: "19:30",
		cover: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop",
		description:
			"Uma paisagem épica em IMAX com seleção de assentos e mais de 1.200 lugares para explorar.",
		organizer: "Cinepolis",
		price: 48,
		seatMap: "grid",
		ticketTypes: [{ name: "Inteira", price: 48, available: 1200 }],
	},
	{
		id: "alexandre",
		type: "theater",
		title: "Alexandre Pires",
		venue: "Teatro Bradesco",
		city: "Rio de Janeiro",
		dateLabel: "30 de Setembro",
		dateShort: "30 set",
		time: "21:00",
		cover: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?q=80&w=1200&auto=format&fit=crop",
		description:
			"Uma noite com sucessos, performances marcantes e uma experiência de teatro premium.",
		organizer: "JBL Produções",
		price: 210,
		seatMap: "theater",
		ticketTypes: [
			{ name: "Plateia A", price: 210, available: 120 },
			{ name: "Plateia B", price: 180, available: 90 },
			{ name: "Balcão", price: 140, available: 80 },
		],
	},
	{
		id: "festival-tribe",
		type: "festival",
		title: "Festival Tribe",
		venue: "Parque do Ibirapuera",
		city: "São Paulo",
		dateLabel: "12 de Outubro",
		dateShort: "12 out",
		time: "16:00",
		cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
		description:
			"Três palcos, artistas convidados e uma programação de música eletrônica e indie.",
		organizer: "Tribe Live",
		price: 180,
		seatMap: "standard",
		ticketTypes: [
			{ name: "Single Day", price: 180, available: 420 },
			{ name: "VIP", price: 420, available: 120 },
		],
	},
	{
		id: "sao-paulo-derby",
		type: "sport",
		title: "São Paulo x Palmeiras",
		venue: "Morumbi",
		city: "São Paulo",
		dateLabel: "18 de Outubro",
		dateShort: "18 out",
		time: "18:30",
		cover: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1200&auto=format&fit=crop",
		description:
			"Confronto decisivo do campeonato com torcida mista, setor premium e acesso integrado.",
		organizer: "SPFC / Palmeiras",
		price: 240,
		seatMap: "standard",
		ticketTypes: [
			{ name: "Cadeira Central", price: 240, available: 260 },
			{ name: "VIP", price: 540, available: 70 },
		],
	},
];

export type MyTicket = {
	id: string;
	eventTitle: string;
	dateLabel: string;
	venue: string;
	code: string;
	status: "valid" | "used";
	typeLabel: string;
	cover: string;
};

export type OrganizerEvent = {
	id: string;
	title: string;
	status: "Publicado" | "Rascunho";
	sold: number;
	capacity: number;
	dateShort: string;
};

export const ORGANIZER_EVENTS: OrganizerEvent[] = [
	{
		id: "evt-1",
		title: "The Weeknd",
		status: "Publicado",
		sold: 980,
		capacity: 1400,
		dateShort: "22 ago",
	},
	{
		id: "evt-2",
		title: "Alexandre Pires",
		status: "Publicado",
		sold: 640,
		capacity: 900,
		dateShort: "30 set",
	},
	{
		id: "evt-3",
		title: "Festival Tribe",
		status: "Rascunho",
		sold: 190,
		capacity: 500,
		dateShort: "12 out",
	},
];

export const TEST_CODES: Array<{
	code: string;
	status: "valid" | "used" | "invalid";
}> = [
	{ code: "TKT-OK-1234", status: "valid" },
	{ code: "TKT-USED-9876", status: "used" },
	{ code: "TKT-INVALID-99", status: "invalid" },
];
