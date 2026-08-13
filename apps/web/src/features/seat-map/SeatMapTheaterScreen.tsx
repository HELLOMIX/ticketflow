import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCalendarDays,
	faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/ui/Button";
import type { EventItem } from "../../components/mockData";
import {
	useSeatMap,
	reserveSeats,
	extractApiErrorMessage,
	type SeatDTO,
} from "./seatsApi";

function money(value: number) {
	return `R$ ${value.toFixed(2).replace(".", ",")}`;
}

const LEGEND = [
	{ label: "Disponível", dot: "bg-blue-500" },
	{ label: "Selecionado", dot: "bg-red-500" },
	{ label: "Ocupado", dot: "bg-neutral-700" },
	{ label: "Acompanhante", dot: "bg-blue-400" },
];

type Props = {
	event: EventItem;
	onBack: () => void;
	onBuy: (payload: {
		event: EventItem;
		ticketType: {
			id?: string;
			name: string;
			price: number;
			available: number;
		};
		qty: number;
		total: number;
		seatIds: string[];
	}) => void;
};

export default function SeatMapTheaterScreen({ event, onBack, onBuy }: Props) {
	const { rows, loading, error, refetch } = useSeatMap(event.id);
	const [selected, setSelected] = useState<Set<string>>(new Set());
	const [activeTypeIdx, setActiveTypeIdx] = useState(0);
	const [reserving, setReserving] = useState(false);
	const [conflictError, setConflictError] = useState<string | null>(null);

	const activeType = event.ticketTypes[activeTypeIdx];

	function toggleSeat(seat: SeatDTO) {
		if (seat.status !== "AVAILABLE") return;
		setSelected((current) => {
			const next = new Set(current);
			if (next.has(seat.id)) next.delete(seat.id);
			else next.add(seat.id);
			return next;
		});
	}

	const total = selected.size * (activeType?.price ?? 0);

	async function handleReserveAndBuy() {
		setReserving(true);
		setConflictError(null);
		try {
			await reserveSeats(event.id, [...selected]);
			onBuy({
				event,
				ticketType: activeType,
				qty: selected.size,
				total,
				seatIds: [...selected],
			});
		} catch (err) {
			setConflictError(
				extractApiErrorMessage(
					err,
					"Um dos assentos foi reservado por outra pessoa.",
				),
			);
			await refetch();
			setSelected((current) => {
				const next = new Set(current);
				for (const row of rows) {
					for (const seat of row.seats) {
						if (
							next.has(seat.id) &&
							seat.status !== "AVAILABLE" &&
							!seat.reservedByMe
						) {
							next.delete(seat.id);
						}
					}
				}
				return next;
			});
		} finally {
			setReserving(false);
		}
	}

	if (loading)
		return (
			<div className="p-8 text-center text-neutral-400">
				Carregando mapa de assentos…
			</div>
		);
	if (error)
		return <div className="p-8 text-center text-red-400">{error}</div>;

	return (
		<div className="flex h-full flex-col bg-neutral-950">
			<div className="border-b border-neutral-800 px-4 py-4 md:px-8">
				<div className="mx-auto flex max-w-3xl items-center gap-3">
					<button
						type="button"
						onClick={onBack}
						className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 text-white"
					>
						‹
					</button>
				</div>
			</div>

			<div className="flex-1 overflow-y-auto px-4 pb-4 md:px-8">
				<div className="mx-auto w-full max-w-3xl space-y-4 pt-4">
					<h1 className="font-serif text-2xl font-bold text-white">
						{event.title}
					</h1>
					<p className="text-sm text-neutral-400">
						<FontAwesomeIcon icon={faCalendarDays} />{" "}
						{event.dateLabel} às {event.time}
					</p>
					<p className="text-sm text-neutral-400">
						<FontAwesomeIcon icon={faLocationDot} /> {event.venue},{" "}
						{event.city}
					</p>

					<div className="border-t border-neutral-800 pt-3">
						<h2 className="font-semibold text-white">
							Escolha seus assentos
						</h2>
						<p className="mb-3 text-xs text-neutral-500">
							Selecione o tipo de ingresso e depois os assentos
						</p>

						<div className="mb-4 space-y-2">
							{event.ticketTypes.map((t, idx) => (
								<button
									key={t.id ?? t.name}
									type="button"
									onClick={() => setActiveTypeIdx(idx)}
									className={`flex w-full items-center justify-between rounded-xl border px-4 py-2.5 text-left ${
										idx === activeTypeIdx
											? "border-amber-400 bg-amber-400/10"
											: "border-neutral-800"
									}`}
								>
									<span className="text-sm font-semibold text-white">
										{t.name}
									</span>
									<span className="text-sm font-semibold text-amber-400">
										{money(t.price)}
									</span>
								</button>
							))}
						</div>

						<div className="rounded-xl bg-neutral-900 p-4">
							<div className="mb-4 rounded-md border border-neutral-700 py-1.5 text-center text-xs tracking-widest text-neutral-400">
								PALCO
							</div>
							<div className="flex flex-col items-center space-y-1.5">
								{rows.map(({ rowLabel, seats }) => (
									<div
										key={rowLabel}
										className="flex items-center gap-1.5"
									>
										<span className="w-4 text-[10px] text-neutral-500">
											{rowLabel}
										</span>
										<div className="flex flex-wrap gap-1">
											{seats.map((seat) => {
												const isSelected = selected.has(
													seat.id,
												);
												const color =
													seat.status !== "AVAILABLE"
														? "bg-neutral-700 cursor-not-allowed"
														: isSelected
															? "bg-red-500"
															: seat.seatType ===
																  "STANDARD"
																? "bg-blue-500 hover:bg-blue-400"
																: "bg-blue-400 hover:bg-blue-300";
												return (
													<button
														key={seat.id}
														type="button"
														title={`Fileira ${seat.rowLabel}, assento ${seat.seatNumber}`}
														disabled={
															seat.status !==
															"AVAILABLE"
														}
														onClick={() =>
															toggleSeat(seat)
														}
														className={`h-3.5 w-3.5 rounded-sm ${color}`}
													/>
												);
											})}
										</div>
									</div>
								))}
							</div>
							<div className="mt-4 flex flex-wrap gap-3">
								{LEGEND.map((item) => (
									<span
										key={item.label}
										className="flex items-center gap-1.5 text-[11px] text-neutral-400"
									>
										<span
											className={`h-2.5 w-2.5 rounded-full ${item.dot}`}
										/>
										{item.label}
									</span>
								))}
							</div>
						</div>
					</div>

					{conflictError && (
						<p className="text-xs text-red-400">{conflictError}</p>
					)}

					{selected.size > 0 && (
						<div className="flex items-center justify-between rounded-xl border border-red-500/40 bg-red-950/40 px-4 py-3">
							<span className="text-sm text-neutral-200">
								{selected.size} assento
								{selected.size > 1 ? "s" : ""} selecionado
								{selected.size > 1 ? "s" : ""}
							</span>
							<span className="font-bold text-amber-400">
								{money(total)}
							</span>
						</div>
					)}
				</div>
			</div>

			<div className="border-t border-neutral-800 px-4 py-4 md:px-8">
				<div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-4">
					<div>
						<p className="text-xs text-neutral-500">
							{selected.size} assentos
						</p>
						<p className="text-lg font-bold text-amber-400">
							{money(total)}
						</p>
					</div>
					<Button
						variant="secondary"
						className="w-auto px-8"
						disabled={selected.size === 0 || reserving}
						onClick={handleReserveAndBuy}
					>
						{reserving ? "Reservando…" : "Comprar Ingresso"}
					</Button>
				</div>
			</div>
		</div>
	);
}
