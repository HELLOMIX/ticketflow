import { useState } from "react";
import Button from "../ui/Button";
import { EventTypeBadge } from "../ui/Badge";
import type { EventItem } from "../mockData";

function money(value: number) {
	return `R$ ${value.toFixed(2).replace(".", ",")}`;
}

type EventDetailScreenProps = {
	event: EventItem;
	onBack: () => void;
	onBuy: (payload: {
		event: EventItem;
		ticketType: { name: string; price: number; available: number };
		qty: number;
		total: number;
	}) => void;
};

export default function EventDetailScreen({
	event,
	onBack,
	onBuy,
}: EventDetailScreenProps) {
	const [ticketTypeIdx, setTicketTypeIdx] = useState(0);
	const [qty, setQty] = useState(1);
	const ticketType = event.ticketTypes[ticketTypeIdx];
	const total = ticketType.price * qty;

	return (
		<div className="flex h-full flex-col bg-neutral-950">
			<div className="relative h-56 shrink-0">
				<img
					src={event.cover}
					alt={event.title}
					className="h-full w-full object-cover"
				/>
				<button
					type="button"
					onClick={onBack}
					className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-xl text-white"
					aria-label="Voltar"
				>
					‹
				</button>
			</div>

			<div className="flex-1 space-y-5 overflow-y-auto px-4 py-4">
				<div>
					<EventTypeBadge type={event.type} />
					<h1 className="mt-2 font-serif text-2xl font-bold text-white">
						{event.title}
					</h1>
					<p className="mt-2 text-sm text-neutral-400">
						📅 {event.dateLabel} às {event.time}
					</p>
					<p className="mt-1 text-sm text-neutral-400">
						📍 {event.venue}, {event.city}
					</p>
				</div>

				<div className="border-t border-neutral-800 pt-4">
					<h2 className="mb-1.5 font-semibold text-white">
						Sobre o evento
					</h2>
					<p className="text-sm leading-relaxed text-neutral-400">
						{event.description}
					</p>
				</div>

				<div className="border-t border-neutral-800 pt-4">
					<h2 className="mb-3 font-semibold text-white">
						Tipos de ingresso
					</h2>
					<div className="space-y-2.5">
						{event.ticketTypes.map((t, idx) => (
							<button
								key={t.name}
								type="button"
								onClick={() => setTicketTypeIdx(idx)}
								className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left ${
									idx === ticketTypeIdx
										? "border-red-500 bg-red-950/40"
										: "border-neutral-800 bg-neutral-900"
								}`}
							>
								<div>
									<p className="text-sm font-semibold text-white">
										{t.name}
									</p>
									<p className="text-xs text-neutral-500">
										{t.available} disponíveis
									</p>
								</div>
								<span className="font-bold text-amber-400">
									{money(t.price)}
								</span>
							</button>
						))}
					</div>
				</div>

				<div className="flex items-center justify-between border-t border-neutral-800 pt-4">
					<span className="font-semibold text-white">Quantidade</span>
					<div className="flex items-center gap-4">
						<button
							type="button"
							onClick={() =>
								setQty((current) => Math.max(1, current - 1))
							}
							className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 text-white"
						>
							−
						</button>
						<span className="w-4 text-center font-semibold text-white">
							{qty}
						</span>
						<button
							type="button"
							onClick={() =>
								setQty((current) =>
									Math.min(ticketType.available, current + 1),
								)
							}
							className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 text-white"
						>
							+
						</button>
					</div>
				</div>

				<p className="text-xs text-neutral-500">
					Organizador:{" "}
					<span className="text-neutral-300">{event.organizer}</span>
				</p>
			</div>

			<div className="flex items-center justify-between gap-4 border-t border-neutral-800 bg-neutral-950 px-4 py-4">
				<div>
					<p className="text-xs text-neutral-500">Total</p>
					<p className="text-lg font-bold text-amber-400">
						{money(total)}
					</p>
				</div>
				<Button
					variant="secondary"
					className="w-auto px-8"
					onClick={() => onBuy({ event, ticketType, qty, total })}
				>
					Comprar Ingresso
				</Button>
			</div>
		</div>
	);
}
