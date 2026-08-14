import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { BackHeader } from "../../components/ui/Header";
import Button from "../../components/ui/Button";
import type { EventItem } from "../../components/mockData";
import {
	formatCardExpiry,
	formatCardNumber,
	formatCVV,
} from "../../lib/inputMasks";

function money(value: number) {
	return `R$ ${value.toFixed(2).replace(".", ",")}`;
}

type Order = {
	event: EventItem;
	ticketType: { id?: string; name: string; price: number; available: number };
	qty: number;
	total: number;
	seatIds?: string[];
};

type PaymentScreenProps = {
	order: Order;
	onBack: () => void;
	onReview: (
		order: Order & {
			card: { name: string; number: string; expiry: string; cvv: string };
		},
	) => void;
};

export default function PaymentScreen({
	order,
	onBack,
	onReview,
}: PaymentScreenProps) {
	const [form, setForm] = useState({
		name: "",
		number: "",
		expiry: "",
		cvv: "",
	});

	const isValid = form.name && form.number && form.expiry && form.cvv;

	return (
		<div className="flex h-full flex-col bg-neutral-950">
			<BackHeader title="Pagamento" onBack={onBack} />
			<div className="flex-1 overflow-y-auto px-4 py-4 md:px-8">
				<div className="mx-auto w-full max-w-3xl space-y-5">
					<div className="flex items-center justify-between rounded-xl bg-neutral-900 px-4 py-3">
						<span className="text-sm text-neutral-200">
							{order.event.title} · {order.ticketType.name} ×{" "}
							{order.qty}
						</span>
						<span className="text-sm font-semibold text-amber-400">
							{money(order.total)}
						</span>
					</div>

					<Field label="Nome no cartão">
						<input
							value={form.name}
							onChange={(e) =>
								setForm((c) => ({
									...c,
									name: e.target.value.slice(0, 60),
								}))
							}
							placeholder="João Silva"
							maxLength={60}
							className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-3 text-sm text-neutral-100 placeholder:text-neutral-500"
						/>
					</Field>

					<Field label="Número do cartão">
						<input
							value={form.number}
							onChange={(e) =>
								setForm((c) => ({
									...c,
									number: formatCardNumber(e.target.value),
								}))
							}
							placeholder="0000 0000 0000 0000"
							inputMode="numeric"
							maxLength={19}
							className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-3 text-sm text-neutral-100 placeholder:text-neutral-500"
						/>
					</Field>

					<div className="flex gap-3">
						<Field label="Validade" className="flex-1">
							<input
								value={form.expiry}
								onChange={(e) =>
									setForm((c) => ({
										...c,
										expiry: formatCardExpiry(
											e.target.value,
										),
									}))
								}
								placeholder="MM/AA"
								inputMode="numeric"
								maxLength={5}
								className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-3 text-sm text-neutral-100 placeholder:text-neutral-500"
							/>
						</Field>
						<Field label="CVV" className="flex-1">
							<input
								value={form.cvv}
								onChange={(e) =>
									setForm((c) => ({
										...c,
										cvv: formatCVV(e.target.value),
									}))
								}
								placeholder="123"
								inputMode="numeric"
								maxLength={4}
								className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-3 text-sm text-neutral-100 placeholder:text-neutral-500"
							/>
						</Field>
					</div>

					<div className="rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-xs text-green-400">
						<FontAwesomeIcon icon={faLock} /> Pagamento simulado.
						Cartão terminado em <strong>0000</strong> é recusado de
						propósito — use qualquer outro final pra aprovar.
					</div>
				</div>
			</div>

			<div className="border-t border-neutral-800 px-4 py-4 md:px-8">
				<div className="mx-auto w-full max-w-3xl">
					<Button
						variant="secondary"
						disabled={!isValid}
						onClick={() => onReview({ ...order, card: form })}
					>
						Revisar pagamento
					</Button>
				</div>
			</div>
		</div>
	);
}

function Field({
	label,
	children,
	className = "",
}: {
	label: string;
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<label className={`block ${className}`}>
			<span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wide text-neutral-400">
				{label}
			</span>
			{children}
		</label>
	);
}
