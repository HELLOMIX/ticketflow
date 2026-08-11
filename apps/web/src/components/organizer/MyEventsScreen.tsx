import { OrganizerBottomNav } from "../ui/BottomNav";
import Badge from "../ui/Badge";
import type { OrganizerEvent } from "../mockData";

type MyEventsScreenProps = {
	events: OrganizerEvent[];
	onEdit: (event: OrganizerEvent) => void;
	onPorteiro: (event: OrganizerEvent) => void;
	onNavigate: (dest: string) => void;
};

function EventRow({
	event,
	onEdit,
	onPorteiro,
}: {
	event: OrganizerEvent;
	onEdit: (event: OrganizerEvent) => void;
	onPorteiro: (event: OrganizerEvent) => void;
}) {
	const pct = Math.round((event.sold / event.capacity) * 100);
	const isPublished = event.status === "Publicado";

	return (
		<div className="rounded-xl bg-neutral-900 px-4 py-4">
			<div className="flex items-start justify-between gap-3">
				<h3 className="text-sm font-semibold text-white">
					{event.title}
				</h3>
				<Badge tone={isPublished ? "green" : "yellow"}>
					{event.status}
				</Badge>
			</div>
			<p className="mt-1.5 text-xs text-neutral-400">
				📅 {event.dateShort}
			</p>

			<div className="mt-3">
				<div className="mb-1.5 flex items-center justify-between text-xs">
					<span className="text-neutral-500">Ingressos vendidos</span>
					<span className="font-medium text-neutral-300">
						{event.sold}/{event.capacity}
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
					✏️ Editar
				</button>
				<button
					type="button"
					onClick={() => onPorteiro(event)}
					className="px-1 text-xs font-semibold text-indigo-300"
				>
					👤 Porteiro
				</button>
			</div>
		</div>
	);
}

export default function MyEventsScreen({
	events,
	onEdit,
	onPorteiro,
	onNavigate,
}: MyEventsScreenProps) {
	return (
		<div className="flex h-full flex-col bg-neutral-950">
			<div className="flex items-center justify-between px-4 py-4">
				<h1 className="font-serif text-2xl font-bold text-red-500">
					TicketFlow
				</h1>
				<div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 text-neutral-300">
					🏢
				</div>
			</div>
			<div className="px-4 pb-2">
				<h2 className="mb-4 font-serif text-xl font-bold text-white">
					Meus Eventos
				</h2>
			</div>
			<div className="flex-1 space-y-3 overflow-y-auto px-4 pb-4">
				{events.map((event) => (
					<EventRow
						key={event.id}
						event={event}
						onEdit={onEdit}
						onPorteiro={onPorteiro}
					/>
				))}
			</div>
			<OrganizerBottomNav active="events" onNavigate={onNavigate} />
		</div>
	);
}
