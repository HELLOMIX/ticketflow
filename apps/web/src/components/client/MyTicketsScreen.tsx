import { AppHeader } from "../ui/Header";
import { ClientBottomNav } from "../ui/BottomNav";
import Badge from "../ui/Badge";
import type { MyTicket } from "../mockData";

type MyTicketsScreenProps = {
	tickets: MyTicket[];
	onSelectTicket: (ticket: MyTicket) => void;
	onNavigate: (dest: string) => void;
};

export default function MyTicketsScreen({
	tickets,
	onSelectTicket,
	onNavigate,
}: MyTicketsScreenProps) {
	return (
		<div className="flex h-full flex-col bg-neutral-950">
			<AppHeader />
			<div className="px-4 pb-2 pt-4">
				<h2 className="font-serif text-xl font-bold text-white">
					Meus Ingressos
				</h2>
			</div>
			<div className="flex-1 space-y-3 overflow-y-auto px-4 pb-4">
				{tickets.map((ticket) => {
					const isValid = ticket.status === "valid";
					return (
						<button
							key={ticket.id}
							type="button"
							onClick={() => onSelectTicket(ticket)}
							className="w-full rounded-2xl bg-neutral-900 p-3 text-left"
						>
							<div className="flex items-start gap-3">
								<img
									src={ticket.cover}
									alt={ticket.eventTitle}
									className="h-16 w-16 rounded-xl object-cover"
								/>
								<div className="min-w-0 flex-1">
									<div className="flex items-center justify-between gap-2">
										<p className="truncate text-sm font-semibold text-white">
											{ticket.eventTitle}
										</p>
										<Badge
											tone={isValid ? "green" : "neutral"}
										>
											{isValid ? "Válido" : "Usado"}
										</Badge>
									</div>
									<p className="mt-1 text-xs text-neutral-400">
										📍 {ticket.venue}
									</p>
									<p className="mt-1 text-xs text-neutral-500">
										📅 {ticket.dateLabel}
									</p>
									<p className="mt-2 font-mono text-[11px] text-neutral-300">
										{ticket.code}
									</p>
								</div>
							</div>
						</button>
					);
				})}
			</div>
			<ClientBottomNav active="tickets" onNavigate={onNavigate} />
		</div>
	);
}
