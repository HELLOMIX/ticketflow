import { useEffect, useState } from "react";
import {
	Navigate,
	Route,
	Routes,
	useLocation,
	useNavigate,
	useParams,
} from "react-router-dom";
import HomeScreen from "../features/events/HomeScreen";
import SearchScreen from "../features/events/SearchScreen";
import EventDetailScreen from "../features/events/EventDetailScreen";
import SeatMapCinemaScreen from "../features/seat-map/SeatMapCinemaScreen";
import SeatMapTheaterScreen from "../features/seat-map/SeatMapTheaterScreen";
import PaymentScreen from "../features/checkout/PaymentScreen";
import ConfirmPaymentScreen from "../features/checkout/ConfirmPaymentScreen";
import TicketConfirmedScreen from "../features/checkout/TicketConfirmedScreen";
import MyTicketsScreen from "../features/my-tickets/MyTicketsScreen";
import TicketDetailScreen from "../features/my-tickets/TicketDetailScreen";
import MyEventsScreen from "../features/organizer/MyEventsScreen";
import EventFormScreen from "../features/organizer/EventFormScreen";
import OrganizerProfileScreen from "../features/organizer/OrganizerProfileScreen";
import ValidateTicketScreen from "../features/gate/ValidateTicketScreen";
import QrScanScreen from "../features/gate/QrScanScreen";
import ValidationResultScreen from "../features/gate/ValidationResultScreen";
import {
	EVENTS,
	MY_TICKETS,
	ORGANIZER_EVENTS,
	type EventItem,
} from "../components/mockData";
import LoginPage, {
	type AppRole,
	type AppUser,
} from "../features/auth/LoginPage";
import RegisterPage from "../features/auth/RegisterPage";
import GateRegistrationPage from "../features/auth/GateRegistrationPage";

const DEMO_USERS: AppUser[] = [
	{
		id: "client-demo",
		name: "Maria Cliente",
		email: "cliente@ticketflow.com",
		password: "123456",
		role: "CLIENT",
		cpf: "123.456.789-00",
		phone: "(11) 99999-0001",
		birthDate: "1994-06-10",
	},
	{
		id: "organizer-demo",
		name: "Tiago Organizador",
		email: "organizador@ticketflow.com",
		password: "123456",
		role: "ORGANIZER",
		cpf: "987.654.321-00",
		phone: "(11) 98888-2222",
		birthDate: "1988-02-15",
	},
	{
		id: "gate-demo",
		name: "Ana Porteira",
		email: "porteiro@ticketflow.com",
		password: "123456",
		role: "GATE",
		cpf: "456.123.789-10",
		phone: "(11) 97777-3333",
		birthDate: "1992-11-28",
		assignedEventIds: ["the-weeknd"],
	},
];

const GATE_TICKETS = [
	{
		code: "TKT-WKND-2401",
		eventId: "the-weeknd",
		eventTitle: "The Weeknd",
		ticketType: "Pista Premium",
		holderName: "Maria Cliente",
		status: "valid" as const,
	},
	{
		code: "TKT-USED-9876",
		eventId: "the-weeknd",
		eventTitle: "The Weeknd",
		ticketType: "Pista Premium",
		holderName: "Lucas Almeida",
		status: "used" as const,
	},
	{
		code: "TKT-WRONG-EVT",
		eventId: "dune",
		eventTitle: "Dune: Parte Três",
		ticketType: "Inteira",
		holderName: "Catarina Reis",
		status: "valid" as const,
	},
	{
		code: "TKT-INVALID-99",
		eventId: "the-weeknd",
		eventTitle: "The Weeknd",
		ticketType: "Pista Premium",
		holderName: "Visitante",
		status: "invalid" as const,
	},
];

function resolveGateValidation(code: string, currentUser: AppUser | null) {
	const normalized = code.trim();
	const match = GATE_TICKETS.find(
		(item) => item.code.toLowerCase() === normalized.toLowerCase(),
	);

	if (!match) {
		return {
			status: "invalid" as const,
			ticket: { code: normalized || "—" },
		};
	}

	if (currentUser?.role === "GATE") {
		const assigned = currentUser.assignedEventIds ?? [];
		if (!assigned.includes(match.eventId)) {
			return {
				status: "wrong_event" as const,
				ticket: {
					eventTitle: match.eventTitle,
					ticketType: match.ticketType,
					holderName: match.holderName,
					code: match.code,
				},
			};
		}
	}

	return {
		status: match.status,
		ticket: {
			eventTitle: match.eventTitle,
			ticketType: match.ticketType,
			holderName: match.holderName,
			code: match.code,
		},
	};
}

function getRoleRoot(role: AppRole) {
	if (role === "CLIENT") return "/client";
	if (role === "ORGANIZER") return "/organizer";
	return "/gate";
}

function normalizeCatalogEvent(item: any): EventItem {
	const typeMap: Record<string, EventItem["type"]> = {
		MOVIE: "cinema",
		SHOW: "show",
		THEATER: "theater",
		FESTIVAL: "festival",
		OTHER: "show",
	};

	const normalizedType =
		typeMap[item.eventType ?? item.type ?? "SHOW"] ?? "show";

	return {
		id: String(item.id ?? crypto.randomUUID()),
		type: normalizedType,
		title: item.title ?? "Evento",
		venue: item.venue ?? "Cinema TMDb",
		city: item.city ?? "São Paulo",
		dateLabel: item.dateLabel ?? "Em breve",
		dateShort: item.dateShort ?? "Em breve",
		time: item.time ?? "19:30",
		cover:
			item.cover ??
			item.banner ??
			"https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop",
		description:
			item.description ??
			"Evento em cartaz com catálogo externo integrado.",
		organizer: item.organizer ?? "TicketFlow",
		price: Number(item.price ?? 0),
		seatMap:
			item.seatMap ??
			(normalizedType === "cinema" || normalizedType === "theater"
				? "grid"
				: "standard"),
		ticketTypes:
			Array.isArray(item.ticketTypes) && item.ticketTypes.length > 0
				? item.ticketTypes.map((ticket: any) => ({
						name: ticket.name ?? "Ingresso",
						price: Number(ticket.price ?? item.price ?? 0),
						available: Number(ticket.available ?? 100),
					}))
				: [
						{
							name: "Ingresso",
							price: Number(item.price ?? 0),
							available: 100,
						},
					],
	};
}

async function fetchCatalogEvents(): Promise<EventItem[]> {
	const apiBaseUrl = import.meta.env.VITE_API_URL ?? "http://localhost:4000";
	const response = await fetch(`${apiBaseUrl}/api/catalog`);

	if (!response.ok) {
		throw new Error("Failed to fetch catalog");
	}

	const data = await response.json();
	const items = Array.isArray(data?.items) ? data.items : [];
	return items.map(normalizeCatalogEvent);
}

function ClientHome({ events }: { events: EventItem[] }) {
	const navigate = useNavigate();

	return (
		<HomeScreen
			events={events}
			onSelectEvent={(event) => navigate(`/client/event/${event.id}`)}
			onNavigate={(dest) => {
				if (dest === "search") navigate("/client/search");
				else if (dest === "tickets") navigate("/client/tickets");
				else navigate("/client");
			}}
		/>
	);
}

function ClientSearch({ events }: { events: EventItem[] }) {
	const navigate = useNavigate();

	return (
		<SearchScreen
			events={events}
			onSelectEvent={(event) => navigate(`/client/event/${event.id}`)}
			onNavigate={(dest) => {
				if (dest === "home") navigate("/client");
				else if (dest === "tickets") navigate("/client/tickets");
				else navigate("/client/search");
			}}
		/>
	);
}

function ClientTickets() {
	const navigate = useNavigate();

	return (
		<MyTicketsScreen
			tickets={MY_TICKETS}
			onSelectTicket={(ticket) => navigate(`/client/ticket/${ticket.id}`)}
			onNavigate={(dest) => {
				if (dest === "home") navigate("/client");
				else if (dest === "search") navigate("/client/search");
				else navigate("/client/tickets");
			}}
		/>
	);
}

function ClientTicketDetail() {
	const { ticketId } = useParams();
	const navigate = useNavigate();
	const ticket = MY_TICKETS.find((item) => item.id === ticketId);

	if (!ticket) return <Navigate to="/client/tickets" replace />;

	return (
		<TicketDetailScreen
			ticket={ticket}
			onBack={() => navigate("/client/tickets")}
		/>
	);
}

function ClientEventDetail({ events }: { events: EventItem[] }) {
	const { eventId } = useParams();
	const navigate = useNavigate();
	const event = events.find((item) => item.id === eventId);

	if (!event) return <Navigate to="/client" replace />;

	if (event.seatMap === "grid") {
		return (
			<SeatMapCinemaScreen
				event={event}
				onBack={() => navigate("/client")}
				onBuy={(order) =>
					navigate(`/client/event/${event.id}/payment`, {
						state: { order },
					})
				}
			/>
		);
	}

	if (event.seatMap === "theater") {
		return (
			<SeatMapTheaterScreen
				event={event}
				onBack={() => navigate("/client")}
				onBuy={(order) =>
					navigate(`/client/event/${event.id}/payment`, {
						state: { order },
					})
				}
			/>
		);
	}

	return (
		<EventDetailScreen
			event={event}
			onBack={() => navigate("/client")}
			onBuy={(order) =>
				navigate(`/client/event/${event.id}/payment`, {
					state: { order },
				})
			}
		/>
	);
}

function ClientPayment() {
	const { eventId } = useParams();
	const navigate = useNavigate();
	const location = useLocation() as { state?: { order: any } };
	const order = location.state?.order;

	if (!order)
		return (
			<Navigate to={`/client/event/${eventId ?? "unknown"}`} replace />
		);

	return (
		<PaymentScreen
			order={order}
			onBack={() => navigate(`/client/event/${eventId}`)}
			onReview={(nextOrder) =>
				navigate("/client/event/confirm", {
					state: { order: nextOrder },
				})
			}
		/>
	);
}

function ClientConfirmPayment() {
	const navigate = useNavigate();
	const location = useLocation() as { state?: { order: any } };
	const order = location.state?.order;

	if (!order) return <Navigate to="/client" replace />;

	return (
		<ConfirmPaymentScreen
			order={order}
			onBack={() => navigate("/client")}
			onConfirm={() => {
				const paymentApproved = Math.random() < 0.8;
				navigate("/client/tickets/confirmed", {
					state: { order, paymentApproved },
				});
			}}
		/>
	);
}

function ClientTicketConfirmed() {
	const navigate = useNavigate();
	const location = useLocation() as {
		state?: { order: any; paymentApproved?: boolean };
	};
	const order = location.state?.order;
	const paymentApproved = location.state?.paymentApproved ?? true;

	if (!order) return <Navigate to="/client" replace />;

	return (
		<TicketConfirmedScreen
			order={order}
			paymentApproved={paymentApproved}
			onViewTickets={() => navigate("/client/tickets")}
			onHome={() => navigate("/client")}
		/>
	);
}

function ClientRoutes({ events }: { events: EventItem[] }) {
	return (
		<Routes>
			<Route path="" element={<ClientHome events={events} />} />
			<Route path="search" element={<ClientSearch events={events} />} />
			<Route path="tickets" element={<ClientTickets />} />
			<Route path="ticket/:ticketId" element={<ClientTicketDetail />} />
			<Route
				path="event/:eventId"
				element={<ClientEventDetail events={events} />}
			/>
			<Route path="event/:eventId/payment" element={<ClientPayment />} />
			<Route path="event/confirm" element={<ClientConfirmPayment />} />
			<Route
				path="tickets/confirmed"
				element={<ClientTicketConfirmed />}
			/>
			<Route path="*" element={<Navigate to="/client" replace />} />
		</Routes>
	);
}

function OrganizerHome() {
	const navigate = useNavigate();

	return (
		<MyEventsScreen
			events={ORGANIZER_EVENTS}
			onEdit={(event) =>
				navigate(`/organizer/events/${event.id}/edit`, {
					state: { event },
				})
			}
			onPorteiro={(event) =>
				navigate(`/organizer/events/${event.id}/porteiro`)
			}
			onNavigate={(dest) => {
				if (dest === "create") navigate("/organizer/events/create");
				else if (dest === "profile") navigate("/organizer/profile");
				else navigate("/organizer");
			}}
		/>
	);
}

function OrganizerCreateEvent() {
	const navigate = useNavigate();

	return (
		<EventFormScreen
			onBack={() => navigate("/organizer")}
			onSave={() => navigate("/organizer")}
		/>
	);
}

function OrganizerEditEvent() {
	const navigate = useNavigate();
	const location = useLocation() as { state?: { event?: any } };
	const { eventId } = useParams();
	const eventFromList =
		ORGANIZER_EVENTS.find((item) => item.id === eventId) ??
		location.state?.event;

	return (
		<EventFormScreen
			event={eventFromList}
			onBack={() => navigate("/organizer")}
			onSave={() => navigate("/organizer")}
		/>
	);
}

function OrganizerProfile() {
	const navigate = useNavigate();

	return (
		<OrganizerProfileScreen
			organizer={{
				name: "T4F Entretenimento",
				description:
					"Produtora líder em entretenimento ao vivo no Brasil.",
			}}
			onBack={() => navigate("/organizer")}
			onSave={() => navigate("/organizer")}
		/>
	);
}

function OrganizerGateRegister({
	onCreate,
}: {
	onCreate: (user: AppUser) => { ok: boolean; message?: string };
}) {
	const navigate = useNavigate();
	const { eventId } = useParams();
	const event = ORGANIZER_EVENTS.find((item) => item.id === eventId);

	if (!event) {
		return <Navigate to="/organizer" replace />;
	}

	return (
		<GateRegistrationPage
			event={{ id: event.id, title: event.title }}
			onCreate={onCreate}
			onBack={() => navigate("/organizer")}
		/>
	);
}

function OrganizerRoutes({
	onGateCreate,
}: {
	onGateCreate: (user: AppUser) => { ok: boolean; message?: string };
}) {
	return (
		<Routes>
			<Route path="" element={<OrganizerHome />} />
			<Route path="events/create" element={<OrganizerCreateEvent />} />
			<Route
				path="events/:eventId/edit"
				element={<OrganizerEditEvent />}
			/>
			<Route
				path="events/:eventId/porteiro"
				element={<OrganizerGateRegister onCreate={onGateCreate} />}
			/>
			<Route path="profile" element={<OrganizerProfile />} />
			<Route path="*" element={<Navigate to="/organizer" replace />} />
		</Routes>
	);
}

function GateValidate({ currentUser }: { currentUser: AppUser | null }) {
	const navigate = useNavigate();

	return (
		<ValidateTicketScreen
			testCodes={GATE_TICKETS.map((item) => ({
				code: item.code,
				status: item.status,
			}))}
			onValidate={(code) => {
				const result = resolveGateValidation(code, currentUser);
				navigate("/gate/result", { state: result });
			}}
			onScanQr={() => navigate("/gate/scan")}
		/>
	);
}

function GateScan({ currentUser }: { currentUser: AppUser | null }) {
	const navigate = useNavigate();

	return (
		<QrScanScreen
			backgroundImage="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=800&auto=format&fit=crop"
			onCancel={() => navigate("/gate")}
			onScan={() => {
				const result = resolveGateValidation(
					"TKT-WKND-2401",
					currentUser,
				);
				navigate("/gate/result", { state: result });
			}}
		/>
	);
}

function GateResult() {
	const navigate = useNavigate();
	const location = useLocation() as {
		state?: {
			status: "valid" | "used" | "invalid" | "wrong_event";
			ticket?: any;
		};
	};
	const status = location.state?.status ?? "invalid";
	const ticket = location.state?.ticket ?? { code: "TKT-INVALID-99" };

	return (
		<ValidationResultScreen
			status={status}
			ticket={ticket}
			onValidateAnother={() => navigate("/gate")}
			onHome={() => navigate("/gate")}
		/>
	);
}

function GateRoutes({ currentUser }: { currentUser: AppUser | null }) {
	return (
		<Routes>
			<Route
				path=""
				element={<GateValidate currentUser={currentUser} />}
			/>
			<Route
				path="scan"
				element={<GateScan currentUser={currentUser} />}
			/>
			<Route path="result" element={<GateResult />} />
			<Route path="*" element={<Navigate to="/gate" replace />} />
		</Routes>
	);
}

export default function AppRouter() {
	const [users, setUsers] = useState<AppUser[]>(DEMO_USERS);
	const [currentUser, setCurrentUser] = useState<AppUser | null>(null);
	const [events, setEvents] = useState<EventItem[]>(EVENTS);

	useEffect(() => {
		let isMounted = true;

		fetchCatalogEvents()
			.then((catalogEvents) => {
				if (isMounted) {
					setEvents(
						catalogEvents.length > 0 ? catalogEvents : EVENTS,
					);
				}
			})
			.catch(() => {
				if (isMounted) {
					setEvents(EVENTS);
				}
			});

		return () => {
			isMounted = false;
		};
	}, []);

	const handleLogin = (user: AppUser) => setCurrentUser(user);
	const handleRegister = (user: AppUser) => {
		const exists = users.some(
			(entry) => entry.email.toLowerCase() === user.email.toLowerCase(),
		);

		if (exists) {
			return { ok: false, message: "Este e-mail já está cadastrado." };
		}

		setUsers((current) => [...current, user]);
		setCurrentUser(user);
		return { ok: true };
	};

	return (
		<div className="min-h-screen bg-neutral-950 px-3 py-4 sm:px-6 lg:px-8">
			<div className="mx-auto flex w-full max-w-6xl flex-col overflow-hidden rounded-[1.5rem] border border-neutral-800 bg-neutral-950 shadow-2xl shadow-black/30 sm:rounded-[2rem]">
				<Routes>
					<Route
						path="/"
						element={
							<Navigate
								to={
									currentUser
										? getRoleRoot(currentUser.role)
										: "/login"
								}
								replace
							/>
						}
					/>
					<Route
						path="/login"
						element={
							currentUser ? (
								<Navigate
									to={getRoleRoot(currentUser.role)}
									replace
								/>
							) : (
								<LoginPage
									users={users}
									onLogin={handleLogin}
								/>
							)
						}
					/>
					<Route
						path="/register"
						element={
							currentUser ? (
								<Navigate
									to={getRoleRoot(currentUser.role)}
									replace
								/>
							) : (
								<RegisterPage onRegister={handleRegister} />
							)
						}
					/>
					<Route
						path="/client/*"
						element={
							currentUser && currentUser.role === "CLIENT" ? (
								<ClientRoutes events={events} />
							) : (
								<Navigate to="/login" replace />
							)
						}
					/>
					<Route
						path="/organizer/*"
						element={
							currentUser && currentUser.role === "ORGANIZER" ? (
								<OrganizerRoutes
									onGateCreate={handleRegister}
								/>
							) : (
								<Navigate to="/login" replace />
							)
						}
					/>
					<Route
						path="/gate/*"
						element={
							currentUser && currentUser.role === "GATE" ? (
								<GateRoutes currentUser={currentUser} />
							) : (
								<Navigate to="/login" replace />
							)
						}
					/>
					<Route
						path="*"
						element={
							<Navigate
								to={
									currentUser
										? getRoleRoot(currentUser.role)
										: "/login"
								}
								replace
							/>
						}
					/>
				</Routes>
			</div>
		</div>
	);
}
