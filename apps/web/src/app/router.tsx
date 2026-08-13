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
import { EVENTS, type EventItem } from "../components/mockData";
import LoginPage from "../features/auth/LoginPage";
import RegisterPage from "../features/auth/RegisterPage";
import GateRegistrationPage from "../features/auth/GateRegistrationPage";
import { useAuth, type AppRole } from "../features/auth/AuthContext";
import { fetchPublishedEvents } from "../features/events/eventsApi";
import { releaseSeats } from "../features/checkout/checkoutApi";
import SharedTicketScreen from "../features/my-tickets/SharedTicketScreen";
import {
	fetchTicketById,
	type ApiTicket,
} from "../features/my-tickets/ticketsApi";
import { validateByCode, validateByQrToken } from "../features/gate/gateApi";

function normalizeGateStatus(
	status: string,
): "valid" | "used" | "invalid" | "wrong_event" {
	return status.toLowerCase() as "valid" | "used" | "invalid" | "wrong_event";
}

function getRoleRoot(role: AppRole) {
	if (role === "CLIENT") return "/client";
	if (role === "ORGANIZER") return "/organizer";
	return "/gate";
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
	const [ticket, setTicket] = useState<ApiTicket | null>(null);
	const [notFound, setNotFound] = useState(false);

	useEffect(() => {
		if (!ticketId) return;
		fetchTicketById(ticketId)
			.then(setTicket)
			.catch(() => setNotFound(true));
	}, [ticketId]);

	if (notFound) return <Navigate to="/client/tickets" replace />;
	if (!ticket)
		return (
			<div className="p-8 text-center text-neutral-400">Carregando…</div>
		);

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

	async function handleBack() {
		if (order.seatIds?.length) {
			await releaseSeats(order.event.id, order.seatIds).catch(() => {});
		}
		navigate(`/client/event/${eventId}`);
	}

	return (
		<PaymentScreen
			order={order}
			onBack={handleBack}
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
			onConfirm={(result) =>
				navigate("/client/tickets/confirmed", {
					state: { order, result },
				})
			}
		/>
	);
}

function ClientTicketConfirmed() {
	const navigate = useNavigate();
	const location = useLocation() as {
		state?: {
			order: any;
			result: import("../features/checkout/checkoutApi").CheckoutResult;
		};
	};
	const order = location.state?.order;
	const result = location.state?.result;
	if (!order || !result) return <Navigate to="/client" replace />;

	return (
		<TicketConfirmedScreen
			eventTitle={order.event.title}
			total={order.total}
			result={result}
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
	const { eventId } = useParams();
	if (!eventId) return <Navigate to="/organizer" replace />;

	return (
		<EventFormScreen
			eventId={eventId}
			onBack={() => navigate("/organizer")}
			onSave={() => navigate("/organizer")}
		/>
	);
}

function OrganizerProfile() {
	const navigate = useNavigate();
	return (
		<OrganizerProfileScreen
			onBack={() => navigate("/organizer")}
			onSave={() => navigate("/organizer")}
		/>
	);
}

function OrganizerGateRegister() {
	const navigate = useNavigate();
	const location = useLocation() as {
		state?: { event?: { id: string; title: string } };
	};
	const { eventId } = useParams();
	const event =
		location.state?.event ??
		(eventId ? { id: eventId, title: "Evento" } : undefined);
	if (!event) return <Navigate to="/organizer" replace />;

	return (
		<GateRegistrationPage
			event={event}
			onBack={() => navigate("/organizer")}
		/>
	);
}

function OrganizerRoutes() {
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
				element={<OrganizerGateRegister />}
			/>
			<Route path="profile" element={<OrganizerProfile />} />
			<Route path="*" element={<Navigate to="/organizer" replace />} />
		</Routes>
	);
}

function GateValidate() {
	const navigate = useNavigate();
	const [submitting, setSubmitting] = useState(false);

	async function handleValidate(code: string) {
		setSubmitting(true);
		try {
			const result = await validateByCode(code);
			navigate("/gate/result", {
				state: {
					status: normalizeGateStatus(result.status),
					ticket: result.ticket,
				},
			});
		} catch (err) {
			navigate("/gate/result", {
				state: { status: "invalid", ticket: { code } },
			});
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<ValidateTicketScreen
			onValidate={handleValidate}
			onScanQr={() => navigate("/gate/scan")}
			submitting={submitting}
		/>
	);
}

function GateScan() {
	const navigate = useNavigate();

	async function handleDetected(token: string) {
		try {
			const result = await validateByQrToken(token);
			navigate("/gate/result", {
				state: {
					status: normalizeGateStatus(result.status),
					ticket: result.ticket,
				},
			});
		} catch {
			navigate("/gate/result", {
				state: { status: "invalid", ticket: {} },
			});
		}
	}

	return (
		<QrScanScreen
			onCancel={() => navigate("/gate")}
			onDetected={handleDetected}
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
	const ticket = location.state?.ticket ?? { code: "—" };

	return (
		<ValidationResultScreen
			status={status}
			ticket={ticket}
			onValidateAnother={() => navigate("/gate")}
			onHome={() => navigate("/gate")}
		/>
	);
}

function GateRoutes() {
	return (
		<Routes>
			<Route path="" element={<GateValidate />} />
			<Route path="scan" element={<GateScan />} />
			<Route path="result" element={<GateResult />} />
			<Route path="*" element={<Navigate to="/gate" replace />} />
		</Routes>
	);
}

export default function AppRouter() {
	const { user, loading } = useAuth();
	const [events, setEvents] = useState<EventItem[]>(EVENTS);

	useEffect(() => {
		let isMounted = true;

		fetchPublishedEvents()
			.then((realEvents) => {
				if (isMounted)
					setEvents(realEvents.length > 0 ? realEvents : EVENTS);
			})
			.catch(() => {
				if (isMounted) setEvents(EVENTS);
			});

		return () => {
			isMounted = false;
		};
	}, []);

	if (loading) {
		return (
			<div className="flex min-h-screen items-center justify-center bg-neutral-950 text-neutral-400">
				Carregando...
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-neutral-950">
			<Routes>
				<Route
					path="/"
					element={
						<Navigate
							to={user ? getRoleRoot(user.role) : "/login"}
							replace
						/>
					}
				/>
				<Route
					path="/login"
					element={
						user ? (
							<Navigate to={getRoleRoot(user.role)} replace />
						) : (
							<LoginPage />
						)
					}
				/>
				<Route
					path="/register"
					element={
						user ? (
							<Navigate to={getRoleRoot(user.role)} replace />
						) : (
							<RegisterPage />
						)
					}
				/>
				<Route
					path="/client/*"
					element={
						user?.role === "CLIENT" ? (
							<ClientRoutes events={events} />
						) : (
							<Navigate to="/login" replace />
						)
					}
				/>
				<Route
					path="/organizer/*"
					element={
						user?.role === "ORGANIZER" ? (
							<OrganizerRoutes />
						) : (
							<Navigate to="/login" replace />
						)
					}
				/>
				<Route
					path="/gate/*"
					element={
						user?.role === "GATE" ? (
							<GateRoutes />
						) : (
							<Navigate to="/login" replace />
						)
					}
				/>
				<Route
					path="*"
					element={
						<Navigate
							to={user ? getRoleRoot(user.role) : "/login"}
							replace
						/>
					}
				/>
				<Route path="/t/:shareToken" element={<SharedTicketScreen />} />
			</Routes>
		</div>
	);
}
