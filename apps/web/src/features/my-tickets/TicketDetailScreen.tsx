import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { BackHeader } from "../../components/ui/Header";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";
import { formatDateLabel, seatLabel, type ApiTicket } from "./ticketsApi";

type Props = {
	ticket: ApiTicket;
	onBack: () => void;
};

export default function TicketDetailScreen({ ticket, onBack }: Props) {
	const isValid = ticket.status === "VALID";
	const [copied, setCopied] = useState(false);
	const shareUrl = `${window.location.origin}/t/${ticket.shareToken}`;

	async function handleShare() {
		try {
			await navigator.clipboard.writeText(shareUrl);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch {
			// clipboard pode falhar em contexto não-seguro (http) — usuário ainda pode copiar manualmente
		}
	}

	return (
		<div className="flex h-full flex-col bg-neutral-950">
			<BackHeader title="Ingresso" onBack={onBack} />
			<div className="flex-1 overflow-y-auto px-4 py-4 md:px-8">
				<div className="mx-auto w-full max-w-3xl space-y-4">
					<div className="rounded-2xl bg-neutral-900 p-4">
						<div className="flex items-start justify-between gap-3">
							<div>
								<p className="text-sm text-neutral-400">
									Evento
								</p>
								<h2 className="mt-1 font-serif text-2xl font-bold text-white">
									{ticket.event.title}
								</h2>
							</div>
							<Badge tone={isValid ? "green" : "neutral"}>
								{isValid ? "Válido" : "Usado"}
							</Badge>
						</div>

						<div className="mt-4 flex flex-col items-center gap-3 rounded-xl border border-dashed border-neutral-700 bg-neutral-950/60 p-4">
							<div className="rounded-lg bg-white p-3">
								<QRCodeSVG
									value={ticket.qrCodeToken}
									size={180}
								/>
							</div>
							<p className="font-mono text-sm tracking-[0.2em] text-amber-300">
								{ticket.accessCode}
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
								<span>{ticket.ticketType.name}</span>
							</div>
							{seatLabel(ticket) && (
								<div className="flex justify-between">
									<span>Assento</span>
									<span>{seatLabel(ticket)}</span>
								</div>
							)}
							<div className="flex justify-between">
								<span>Local</span>
								<span>{ticket.event.venue.name}</span>
							</div>
							<div className="flex justify-between">
								<span>Data</span>
								<span>
									{formatDateLabel(ticket.event.startTime)}
								</span>
							</div>
						</div>
					</div>

					<button
						type="button"
						onClick={handleShare}
						className="w-full rounded-xl border border-neutral-700 bg-transparent px-4 py-3 text-sm font-semibold text-neutral-100"
					>
						{copied ? (
							"Link copiado!"
						) : (
							<>
								<FontAwesomeIcon icon={faLink} /> Compartilhar
								ingresso
							</>
						)}
					</button>
				</div>
			</div>

			<div className="border-t border-neutral-800 px-4 py-4 md:px-8">
				<div className="mx-auto w-full max-w-3xl">
					<Button variant="outline" onClick={onBack}>
						Voltar
					</Button>
				</div>
			</div>
		</div>
	);
}
