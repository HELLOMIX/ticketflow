import { AppHeader } from "../ui/Header";
import { ClientBottomNav } from "../ui/BottomNav";
import { EventTypeBadge } from "../ui/Badge";
import type { EventItem } from "../mockData";

function money(value: number) {
	return `R$ ${value.toFixed(2).replace(".", ",")}`;
}

type HomeScreenProps = {
	events: EventItem[];
	onSelectEvent: (event: EventItem) => void;
	onNavigate: (dest: string) => void;
};

function HeroCard({
	event,
	onSelect,
}: {
	event: EventItem;
	onSelect: (event: EventItem) => void;
}) {
	return (
		<button
			type="button"
			onClick={() => onSelect(event)}
			className="relative block h-56 w-full overflow-hidden rounded-2xl text-left"
		>
			<img
				src={event.cover}
				alt={event.title}
				className="absolute inset-0 h-full w-full object-cover"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
			<div className="absolute inset-x-0 bottom-0 p-4">
				<EventTypeBadge type={event.type} />
				<h3 className="mt-2 font-serif text-xl font-bold text-white">
					{event.title}
				</h3>
				<p className="mt-1 text-sm text-neutral-300">
					📍 {event.venue} · {money(event.price)}
				</p>
			</div>
		</button>
	);
}

function RowCard({
	event,
	onSelect,
}: {
	event: EventItem;
	onSelect: (event: EventItem) => void;
}) {
	return (
		<button
			type="button"
			onClick={() => onSelect(event)}
			className="w-40 shrink-0 overflow-hidden rounded-xl bg-neutral-900 text-left"
		>
			<img
				src={event.cover}
				alt={event.title}
				className="h-24 w-full object-cover"
			/>
			<div className="p-2.5">
				<p className="line-clamp-2 text-sm font-semibold text-neutral-100">
					{event.title}
				</p>
				<p className="mt-1 text-sm font-semibold text-amber-400">
					{money(event.price)}
				</p>
			</div>
		</button>
	);
}

function FeaturedEventCard({
	event,
	onSelect,
}: {
	event: EventItem;
	onSelect: (event: EventItem) => void;
}) {
	return (
		<button
			type="button"
			onClick={() => onSelect(event)}
			className="block w-full overflow-hidden rounded-2xl bg-neutral-900 text-left"
		>
			<img
				src={event.cover}
				alt={event.title}
				className="h-40 w-full object-cover"
			/>
			<div className="p-4">
				<div className="flex items-start justify-between gap-3">
					<h3 className="font-serif text-lg font-bold text-white">
						{event.title}
					</h3>
					<span className="shrink-0 font-bold text-amber-400">
						{money(event.price)}
					</span>
				</div>
				<div className="mt-2 flex items-center gap-2">
					<EventTypeBadge type={event.type} />
					<span className="text-xs text-neutral-400">
						📍 {event.venue}
					</span>
				</div>
				<p className="mt-2 text-xs text-neutral-400">
					📅 {event.dateShort} às {event.time}
				</p>
			</div>
		</button>
	);
}

export default function HomeScreen({
	events,
	onSelectEvent,
	onNavigate,
}: HomeScreenProps) {
	const shows = events.filter((event) => event.type === "show");
	const featured =
		events.find((event) => event.type === "cinema") ?? events[0];
	const others = events.filter((event) => event.id !== featured.id);

	return (
		<div className="flex h-full flex-col bg-neutral-950">
			<AppHeader />
			<div className="flex-1 space-y-6 overflow-y-auto px-4 pb-4">
				<HeroCard event={featured} onSelect={onSelectEvent} />

				<section>
					<div className="mb-3 flex items-center justify-between">
						<h2 className="flex items-center gap-2 font-serif text-white">
							🎵 Shows
						</h2>
						<button
							type="button"
							onClick={() => onNavigate("search")}
							className="text-sm font-medium text-amber-400"
						>
							Ver todos
						</button>
					</div>
					<div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-1">
						{shows.map((event) => (
							<RowCard
								key={event.id}
								event={event}
								onSelect={onSelectEvent}
							/>
						))}
					</div>
				</section>

				<section>
					<h2 className="mb-3 font-serif text-white">🎬 Em Cartaz</h2>
					<FeaturedEventCard
						event={featured}
						onSelect={onSelectEvent}
					/>
				</section>

				<section>
					<h2 className="mb-3 font-serif text-white">
						Outros Eventos
					</h2>
					<div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-1">
						{others.map((event) => (
							<RowCard
								key={event.id}
								event={event}
								onSelect={onSelectEvent}
							/>
						))}
					</div>
				</section>
			</div>
			<ClientBottomNav active="home" onNavigate={onNavigate} />
		</div>
	);
}
