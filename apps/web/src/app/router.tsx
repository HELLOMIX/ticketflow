import { useState } from "react";
import {
	Navigate,
	Route,
	Routes,
	useLocation,
	useNavigate,
	useParams,
} from "react-router-dom";
import HomeScreen from "../components/client/HomeScreen";
import SearchScreen from "../components/client/SearchScreen";
import EventDetailScreen from "../components/client/EventDetailScreen";
import SeatMapCinemaScreen from "../components/client/SeatMapCinemaScreen";
import SeatMapTheaterScreen from "../components/client/SeatMapTheaterScreen";
import PaymentScreen from "../components/client/PaymentScreen";
import ConfirmPaymentScreen from "../components/client/ConfirmPaymentScreen";
import TicketConfirmedScreen from "../components/client/TicketConfirmedScreen";
import MyTicketsScreen from "../components/client/MyTicketsScreen";
import TicketDetailScreen from "../components/client/TicketDetailScreen";
import MyEventsScreen from "../components/organizer/MyEventsScreen";
import EventFormScreen from "../components/organizer/EventFormScreen";
import OrganizerProfileScreen from "../components/organizer/OrganizerProfileScreen";
import ValidateTicketScreen from "../components/porteiro/ValidateTicketScreen";
import QrScanScreen from "../components/porteiro/QrScanScreen";
import ValidationResultScreen from "../components/porteiro/ValidationResultScreen";
import { EVENTS, MY_TICKETS, ORGANIZER_EVENTS } from "../components/mockData";
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
		phone: "(11) 99999-0001",
		birthDate: "1994-06-10",
	},
	{
		id: "organizer-demo",
		name: "Tiago Organizador",
		email: "organizador@ticketflow.com",
		password: "123456",
		role: "ORGANIZER",
		phone: "(11) 98888-2222",
		birthDate: "1988-02-15",
	},
	{
		id: "gate-demo",
		name: "Ana Porteira",
		email: "porteiro@ticketflow.com",
		password: "123456",
		role: "GATE",
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

function ClientHome() {
	const navigate = useNavigate();

	return (
		<HomeScreen
			events={EVENTS}
			onSelectEvent={(event) => navigate(`/client/event/${event.id}`)}
			onNavigate={(dest) => {
				if (dest === "search") navigate("/client/search");
				else if (dest === "tickets") navigate("/client/tickets");
				else navigate("/client");
			}}
		/>
	);
}

function ClientSearch() {
	const navigate = useNavigate();

	return (
		<SearchScreen
			events={EVENTS}
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

function ClientEventDetail() {
	const { eventId } = useParams();
	const navigate = useNavigate();
	const event = EVENTS.find((item) => item.id === eventId);

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

function ClientRoutes() {
	return (
		<Routes>
			<Route path="" element={<ClientHome />} />
			<Route path="search" element={<ClientSearch />} />
			<Route path="tickets" element={<ClientTickets />} />
			<Route path="ticket/:ticketId" element={<ClientTicketDetail />} />
			<Route path="event/:eventId" element={<ClientEventDetail />} />
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
		<div className="min-h-screen bg-neutral-950 py-6">
			<div className="mx-auto flex w-full max-w-sm flex-col overflow-hidden rounded-[2rem] border border-neutral-800 bg-neutral-950 shadow-2xl shadow-black/30">
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
								<ClientRoutes />
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
