import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCalendarDays,
	faPenToSquare,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { OrganizerBottomNav } from "../../components/ui/BottomNav";
import Badge from "../../components/ui/Badge";
import { useMyOrganizerEvents, type OrganizerEventDTO } from "./organizerApi";
import { useAuth } from "../auth/AuthContext";

type Props = {
	onEdit: (event: OrganizerEventDTO) => void;
	onPorteiro: (event: OrganizerEventDTO) => void;
	onNavigate: (dest: string) => void;
};

function EventRow({
	event,
	onEdit,
	onPorteiro,
}: {
	event: OrganizerEventDTO;
	onEdit: (e: OrganizerEventDTO) => void;
	onPorteiro: (e: OrganizerEventDTO) => void;
}) {
	const capacity = event.venue.totalCapacity;
	const sold = event.tickets.length;
	const pct = capacity > 0 ? Math.round((sold / capacity) * 100) : 0;
	const isPublished = event.status === "PUBLISHED";
	const dateShort = new Date(event.startTime).toLocaleDateString("pt-BR", {
		day: "2-digit",
		month: "short",
	});

	return (
		<div className="rounded-xl bg-neutral-900 px-4 py-4">
			<div className="flex items-start justify-between gap-3">
				<h3 className="text-sm font-semibold text-white">
					{event.title}
				</h3>
				<Badge tone={isPublished ? "green" : "yellow"}>
					{isPublished
						? "Publicado"
						: event.status === "DRAFT"
							? "Rascunho"
							: "Cancelado"}
				</Badge>
			</div>
			<p className="mt-1.5 text-xs text-neutral-400">
				<FontAwesomeIcon icon={faCalendarDays} /> {dateShort}
			</p>

			<div className="mt-3">
				<div className="mb-1.5 flex items-center justify-between text-xs">
					<span className="text-neutral-500">Ingressos vendidos</span>
					<span className="font-medium text-neutral-300">
						{sold}/{capacity}
					</span>
				</div>
				<div className="h-1.5 overflow-hidden rounded-full bg-neutral-800">
					<div
						className="h-full rounded-full bg-red-600"
						style={{ width: `${pct}%` }}
					/>
				</div>
			</div>

			<div className="mt-3.5 flex items-center gap-3">
				<button
					type="button"
					onClick={() => onEdit(event)}
					className="rounded-lg border border-neutral-700 px-3.5 py-2 text-xs font-semibold text-neutral-200"
				>
					<FontAwesomeIcon icon={faPenToSquare} /> Editar
				</button>
				<button
					type="button"
					onClick={() => onPorteiro(event)}
					className="px-1 text-xs font-semibold text-indigo-300"
				>
					<FontAwesomeIcon icon={faUser} /> Porteiro
				</button>
			</div>
		</div>
	);
}

const NAV_ITEMS: Array<{
	key: "events" | "create" | "profile";
	label: string;
}> = [
	{ key: "events", label: "Eventos" },
	{ key: "create", label: "Criar Evento" },
	{ key: "profile", label: "Perfil" },
];

export default function MyEventsScreen({
	onEdit,
	onPorteiro,
	onNavigate,
}: Props) {
	const { events, loading, error } = useMyOrganizerEvents();
	const { logout } = useAuth();

	return (
		<div className="flex h-full flex-col bg-neutral-950">
			<div className="border-b border-neutral-800 px-4 py-4 md:px-8">
				<div className="mx-auto flex max-w-7xl items-center justify-between">
					<div className="flex items-center gap-8">
						<h1 className="font-serif text-2xl font-bold text-red-500">
							TicketFlow
						</h1>
						<nav className="hidden items-center gap-6 md:flex">
							{NAV_ITEMS.map((item) => (
								<button
									key={item.key}
									type="button"
									onClick={() => onNavigate(item.key)}
									className={`text-sm font-medium transition ${
										item.key === "events"
											? "text-amber-400"
											: "text-neutral-400 hover:text-neutral-200"
									}`}
								>
									{item.label}
								</button>
							))}
						</nav>
					</div>
					<button
						type="button"
						onClick={logout}
						className="rounded-lg border border-neutral-700 px-3 py-1.5 text-xs font-semibold text-neutral-300"
					>
						Sair
					</button>
				</div>
			</div>

			<div className="flex-1 overflow-y-auto pb-4">
				<div className="mx-auto w-full max-w-7xl px-4 md:px-8">
					<h2 className="mb-4 mt-4 font-serif text-xl font-bold text-white">
						Meus Eventos
					</h2>
					{loading && (
						<p className="text-sm text-neutral-500">Carregando…</p>
					)}
					{error && <p className="text-sm text-red-400">{error}</p>}
					{!loading && !error && events.length === 0 && (
						<p className="text-sm text-neutral-500">
							Você ainda não criou nenhum evento.
						</p>
					)}
					<div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
						{events.map((event) => (
							<EventRow
								key={event.id}
								event={event}
								onEdit={onEdit}
								onPorteiro={onPorteiro}
							/>
						))}
					</div>
				</div>
			</div>
			<OrganizerBottomNav active="events" onNavigate={onNavigate} />
		</div>
	);
}
