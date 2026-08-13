import { BackHeader } from "../../components/ui/Header";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";
import type { MyTicket } from "../../components/mockData";

type TicketDetailScreenProps = {
	ticket: MyTicket;
	onBack: () => void;
};

export default function TicketDetailScreen({
	ticket,
	onBack,
}: TicketDetailScreenProps) {
	const isValid = ticket.status === "valid";

	return (
		<div className="flex h-full flex-col bg-neutral-950">
			<BackHeader title="Ingresso" onBack={onBack} />
			<div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
				<div className="rounded-2xl bg-neutral-900 p-4">
					<div className="flex items-start justify-between gap-3">
						<div>
							<p className="text-sm text-neutral-400">Evento</p>
							<h2 className="mt-1 font-serif text-2xl font-bold text-white">
								{ticket.eventTitle}
							</h2>
						</div>
						<Badge tone={isValid ? "green" : "neutral"}>
							{isValid ? "Válido" : "Usado"}
						</Badge>
					</div>

					<div className="mt-4 rounded-xl border border-dashed border-neutral-700 bg-neutral-950/60 p-4 text-center">
						<p className="font-mono text-sm tracking-[0.2em] text-amber-300">
							{ticket.code}
						</p>
					</div>
				</div>

				<div className="rounded-2xl bg-neutral-900 p-4">
					<p className="text-xs uppercase tracking-wide text-neutral-500">
						Detalhes
					</p>
					<div className="mt-3 space-y-2 text-sm text-neutral-300">
						<div className="flex justify-between">
							<span>Tipo</span>
							<span>{ticket.typeLabel}</span>
						</div>
						<div className="flex justify-between">
							<span>Local</span>
							<span>{ticket.venue}</span>
						</div>
						<div className="flex justify-between">
							<span>Data</span>
							<span>{ticket.dateLabel}</span>
						</div>
					</div>
				</div>
			</div>

			<div className="border-t border-neutral-800 px-4 py-4">
				<Button variant="outline" onClick={onBack}>
					Voltar
				</Button>
			</div>
		</div>
	);
}
