import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLocationDot,
	faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { ClientBottomNav } from "../../components/ui/BottomNav";
import { EventTypeBadge } from "../../components/ui/Badge";
import type { EventItem } from "../../components/mockData";
import { AppHeader } from "../../components/ui/Header";
import { useMemo, useState } from "react";

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
	const [query, setQuery] = useState("");

	const items = useMemo(() => {
		const normalized = query.trim().toLowerCase();
		if (!normalized) return events;

		return events.filter((event) => {
			const haystack =
				`${event.title} ${event.venue} ${event.city}`.toLowerCase();
			return haystack.includes(normalized);
		});
	}, [events, query]);
	return (
		<div className="flex h-full flex-col bg-neutral-950">
			<AppHeader active="search" onNavigate={onNavigate} />
			<div className="mx-auto w-full max-w-7xl px-4 py-4 md:px-8">
				<h1 className="font-serif text-2xl font-bold text-white">
					Buscar
				</h1>
			</div>

			<div className="mx-auto w-full max-w-7xl px-4 pb-4 md:px-8">
				<input
					type="text"
					value={query}
					onChange={(e) => setQuery(e.target.value.slice(0, 100))}
					maxLength={100}
					placeholder="Buscar eventos"
					className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-3 text-sm text-white placeholder:text-neutral-500 md:max-w-md"
				/>
			</div>

			<div className="flex-1 overflow-y-auto pb-4">
				<div className="mx-auto w-full max-w-7xl px-4 md:px-8">
					{items.length === 0 && (
						<p className="text-sm text-neutral-500">
							Nenhum evento encontrado para "{query}".
						</p>
					)}
					<div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
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
									className="h-20 w-20 shrink-0 rounded-xl object-cover"
								/>
								<div className="min-w-0 flex-1">
									<EventTypeBadge type={event.type} />
									<p className="mt-2 truncate text-sm font-semibold text-white">
										{event.title}
									</p>
									<p className="mt-1 text-xs text-neutral-400">
										<FontAwesomeIcon icon={faLocationDot} />{" "}
										{event.venue}
									</p>
									<p className="mt-1 text-xs text-neutral-400">
										<FontAwesomeIcon
											icon={faCalendarDays}
										/>{" "}
										{event.dateShort}
									</p>
								</div>
								<div className="shrink-0 text-right">
									<p className="text-sm font-bold text-amber-400">
										{money(event.price)}
									</p>
								</div>
							</button>
						))}
					</div>
				</div>
			</div>

			<ClientBottomNav active="search" onNavigate={onNavigate} />
		</div>
	);
}
