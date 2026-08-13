import { ClientBottomNav } from "../../components/ui/BottomNav";
import { EventTypeBadge } from "../../components/ui/Badge";
import type { EventItem } from "../../components/mockData";

function money(value: number) {
	return `R$ ${value.toFixed(2).replace(".", ",")}`;
}

type SearchScreenProps = {
	events: EventItem[];
	onSelectEvent: (event: EventItem) => void;
	onNavigate: (dest: string) => void;
};

export default function SearchScreen({
	events,
	onSelectEvent,
	onNavigate,
}: SearchScreenProps) {
	const items = events;

	return (
		<div className="flex h-full flex-col bg-neutral-950">
			<div className="px-4 py-4">
				<h1 className="font-serif text-2xl font-bold text-white">
					Buscar
				</h1>
			</div>

			<div className="px-4 pb-4">
				<input
					type="text"
					placeholder="Buscar eventos"
					className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-3 text-sm text-white placeholder:text-neutral-500"
				/>
			</div>

			<div className="flex-1 space-y-3 overflow-y-auto px-4 pb-4">
				{items.map((event) => (
					<button
						key={event.id}
						type="button"
						onClick={() => onSelectEvent(event)}
						className="flex w-full items-center gap-3 rounded-2xl bg-neutral-900 p-3 text-left"
					>
						<img
							src={event.cover}
							alt={event.title}
							className="h-20 w-20 rounded-xl object-cover"
						/>
						<div className="min-w-0 flex-1">
							<EventTypeBadge type={event.type} />
							<p className="mt-2 truncate text-sm font-semibold text-white">
								{event.title}
							</p>
							<p className="mt-1 text-xs text-neutral-400">
								📍 {event.venue}
							</p>
							<p className="mt-1 text-xs text-neutral-400">
								📅 {event.dateShort}
							</p>
						</div>
						<div className="text-right">
							<p className="text-sm font-bold text-amber-400">
								{money(event.price)}
							</p>
						</div>
					</button>
				))}
			</div>

			<ClientBottomNav active="search" onNavigate={onNavigate} />
		</div>
	);
}
