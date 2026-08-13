import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLocationDot,
	faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { AppHeader } from "../../components/ui/Header";
import { ClientBottomNav } from "../../components/ui/BottomNav";
import Badge from "../../components/ui/Badge";
import {
	useMyTickets,
	formatDateLabel,
	ticketCover,
	type ApiTicket,
} from "./ticketsApi";

type Props = {
	onSelectTicket: (ticket: ApiTicket) => void;
	onNavigate: (dest: string) => void;
};

export default function MyTicketsScreen({ onSelectTicket, onNavigate }: Props) {
	const { tickets, loading, error } = useMyTickets();

	return (
		<div className="flex h-full flex-col bg-neutral-950">
			<AppHeader active="tickets" onNavigate={onNavigate} />
			<div className="mx-auto w-full max-w-7xl px-4 pb-2 pt-4 md:px-8">
				<h2 className="font-serif text-xl font-bold text-white">
					Meus Ingressos
				</h2>
			</div>

			<div className="flex-1 overflow-y-auto pb-4">
				<div className="mx-auto w-full max-w-7xl px-4 md:px-8">
					{loading && (
						<p className="text-sm text-neutral-500">
							Carregando ingressos…
						</p>
					)}
					{error && <p className="text-sm text-red-400">{error}</p>}
					{!loading && !error && tickets.length === 0 && (
						<p className="text-sm text-neutral-500">
							Você ainda não tem ingressos.
						</p>
					)}

					<div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
						{tickets.map((ticket) => {
							const isValid = ticket.status === "VALID";
							return (
								<button
									key={ticket.id}
									type="button"
									onClick={() => onSelectTicket(ticket)}
									className="w-full rounded-2xl bg-neutral-900 p-3 text-left"
								>
									<div className="flex items-start gap-3">
										<img
											src={ticketCover(ticket)}
											alt={ticket.event.title}
											className="h-16 w-16 shrink-0 rounded-xl object-cover"
										/>
										<div className="min-w-0 flex-1">
											<div className="flex items-center justify-between gap-2">
												<p className="truncate text-sm font-semibold text-white">
													{ticket.event.title}
												</p>
												<Badge
													tone={
														isValid
															? "green"
															: "neutral"
													}
												>
													{isValid
														? "Válido"
														: "Usado"}
												</Badge>
											</div>
											<p className="mt-1 text-xs text-neutral-400">
												<FontAwesomeIcon
													icon={faLocationDot}
												/>{" "}
												{ticket.event.venue.name}
											</p>
											<p className="mt-1 text-xs text-neutral-500">
												<FontAwesomeIcon
													icon={faCalendarDays}
												/>{" "}
												{formatDateLabel(
													ticket.event.startTime,
												)}
											</p>
											<p className="mt-2 font-mono text-[11px] text-neutral-300">
												{ticket.accessCode}
											</p>
										</div>
									</div>
								</button>
							);
						})}
					</div>
				</div>
			</div>
			<ClientBottomNav active="tickets" onNavigate={onNavigate} />
		</div>
	);
}
