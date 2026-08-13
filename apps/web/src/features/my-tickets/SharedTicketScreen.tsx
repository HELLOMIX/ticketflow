import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import Badge from "../../components/ui/Badge";
import {
	fetchSharedTicket,
	formatDateLabel,
	seatLabel,
	type ApiTicket,
} from "./ticketsApi";

export default function SharedTicketScreen() {
	const { shareToken } = useParams();
	const [ticket, setTicket] = useState<ApiTicket | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!shareToken) return;
		fetchSharedTicket(shareToken)
			.then(setTicket)
			.catch(() => setError("Ingresso não encontrado ou link inválido."))
			.finally(() => setLoading(false));
	}, [shareToken]);

	if (loading) {
		return (
			<div className="flex min-h-screen items-center justify-center bg-neutral-950 text-neutral-400">
				Carregando…
			</div>
		);
	}

	if (error || !ticket) {
		return (
			<div className="flex min-h-screen items-center justify-center bg-neutral-950 text-red-400">
				{error}
			</div>
		);
	}

	const isValid = ticket.status === "VALID";

	return (
		<div className="flex min-h-screen items-center justify-center bg-neutral-950 px-4 py-10">
			<div className="w-full max-w-md rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
				<p className="text-center text-xs text-neutral-500">
					Ingresso compartilhado
				</p>
				<div className="mt-3 flex items-start justify-between gap-3">
					<h1 className="font-serif text-2xl font-bold text-white">
						{ticket.event.title}
					</h1>
					<Badge tone={isValid ? "green" : "neutral"}>
						{isValid ? "Válido" : "Usado"}
					</Badge>
				</div>

				<div className="mt-4 flex flex-col items-center gap-3 rounded-xl border border-dashed border-neutral-700 bg-neutral-950/60 p-4">
					<div className="rounded-lg bg-white p-3">
						<QRCodeSVG value={ticket.qrCodeToken} size={180} />
					</div>
					<p className="font-mono text-sm tracking-[0.2em] text-amber-300">
						{ticket.accessCode}
					</p>
				</div>

				<div className="mt-4 space-y-2 text-sm text-neutral-300">
					<div className="flex justify-between">
						<span>Titular</span>
						<span>{ticket.buyerName}</span>
					</div>
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
						<span>{formatDateLabel(ticket.event.startTime)}</span>
					</div>
				</div>
			</div>
		</div>
	);
}
