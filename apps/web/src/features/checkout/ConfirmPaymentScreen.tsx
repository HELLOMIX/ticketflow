import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { BackHeader } from "../../components/ui/Header";
import Button from "../../components/ui/Button";
import type { EventItem } from "../../components/mockData";
import {
	submitCheckout,
	extractApiErrorMessage,
	type CheckoutResult,
} from "./checkoutApi";

function money(value: number) {
	return `R$ ${value.toFixed(2).replace(".", ",")}`;
}

type Order = {
	event: EventItem;
	ticketType: { id?: string; name: string; price: number; available: number };
	qty: number;
	total: number;
	seatIds?: string[];
	card: { number: string; expiry: string };
};

type Props = {
	order: Order;
	onBack: () => void;
	onConfirm: (result: CheckoutResult) => void;
};

export default function ConfirmPaymentScreen({
	order,
	onBack,
	onConfirm,
}: Props) {
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const last4 = order.card.number.replace(/\s/g, "").slice(-4) || "0000";

	async function handleConfirm() {
		if (!order.ticketType.id) {
			setError(
				"Tipo de ingresso inválido — volte e selecione novamente.",
			);
			return;
		}

		setSubmitting(true);
		setError(null);
		try {
			const result = await submitCheckout(order.event.id, {
				ticketTypeId: order.ticketType.id,
				seatIds: order.seatIds,
				quantity: order.seatIds ? undefined : order.qty,
				card: { ...order.card, name: "Titular do cartão" } as any,
			});
			onConfirm(result);
		} catch (err) {
			setError(
				extractApiErrorMessage(
					err,
					"Não foi possível processar o pagamento.",
				),
			);
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<div className="flex h-full flex-col bg-neutral-950">
			<BackHeader title="Confirmar pagamento" onBack={onBack} />
			<div className="flex-1 overflow-y-auto px-4 py-4 md:px-8">
				<div className="mx-auto w-full max-w-3xl space-y-4">
					<div className="rounded-xl bg-neutral-900 px-4 py-4">
						<h2 className="mb-3 font-semibold text-white">
							Resumo do pedido
						</h2>
						<p className="text-sm text-neutral-300">
							{order.event.title}
						</p>
						<div className="mt-1 flex items-center justify-between">
							<span className="text-sm text-neutral-500">
								{order.ticketType.name} × {order.qty}
							</span>
							<span className="text-sm text-neutral-300">
								{money(order.total)}
							</span>
						</div>
						<div className="mt-3 flex items-center justify-between border-t border-neutral-800 pt-3">
							<span className="font-semibold text-white">
								Total
							</span>
							<span className="font-bold text-amber-400">
								{money(order.total)}
							</span>
						</div>
					</div>

					<div className="rounded-xl bg-neutral-900 px-4 py-4">
						<h2 className="font-semibold text-white">
							Cartão terminado em {last4}
						</h2>
						<p className="mt-1 text-xs text-neutral-500">
							{order.card.expiry}
						</p>
					</div>

					<div className="rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-xs text-amber-300">
						<FontAwesomeIcon icon={faTriangleExclamation} /> Esta é
						uma cobrança simulada. Nenhum valor real será debitado.
					</div>

					{error && <p className="text-sm text-red-400">{error}</p>}
				</div>
			</div>

			<div className="border-t border-neutral-800 px-4 py-4 md:px-8">
				<div className="mx-auto w-full max-w-3xl">
					<Button onClick={handleConfirm} disabled={submitting}>
						{submitting
							? "Processando…"
							: `Confirmar e pagar ${money(order.total)}`}
					</Button>
				</div>
			</div>
		</div>
	);
}
