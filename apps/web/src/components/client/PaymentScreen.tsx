import { useState } from "react";
import { BackHeader } from "../ui/Header";
import Button from "../ui/Button";
import type { EventItem } from "../mockData";

function money(value: number) {
	return `R$ ${value.toFixed(2).replace(".", ",")}`;
}

type PaymentScreenProps = {
	order: {
		event: EventItem;
		ticketType: { name: string; price: number; available: number };
		qty: number;
		total: number;
	};
	onBack: () => void;
	onReview: (order: {
		event: EventItem;
		ticketType: { name: string; price: number; available: number };
		qty: number;
		total: number;
		card: { name: string; number: string; expiry: string; cvv: string };
	}) => void;
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

	const update =
		(field: keyof typeof form) =>
		(event: React.ChangeEvent<HTMLInputElement>) =>
			setForm((current) => ({ ...current, [field]: event.target.value }));

	const isValid = form.name && form.number && form.expiry && form.cvv;

	return (
		<div className="flex h-full flex-col bg-neutral-950">
			<BackHeader title="Pagamento" onBack={onBack} />
			<div className="flex-1 space-y-5 overflow-y-auto px-4 py-4">
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
						onChange={update("name")}
						placeholder="João Silva"
						className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-3 text-sm text-neutral-100 placeholder:text-neutral-500"
					/>
				</Field>

				<Field label="Número do cartão">
					<input
						value={form.number}
						onChange={update("number")}
						placeholder="0000 0000 0000 0000"
						inputMode="numeric"
						className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-3 text-sm text-neutral-100 placeholder:text-neutral-500"
					/>
				</Field>

				<div className="flex gap-3">
					<Field label="Validade" className="flex-1">
						<input
							value={form.expiry}
							onChange={update("expiry")}
							placeholder="MM/AA"
							className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-3 text-sm text-neutral-100 placeholder:text-neutral-500"
						/>
					</Field>
					<Field label="CVV" className="flex-1">
						<input
							value={form.cvv}
							onChange={update("cvv")}
							placeholder="123"
							inputMode="numeric"
							className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-3 text-sm text-neutral-100 placeholder:text-neutral-500"
						/>
					</Field>
				</div>

				<div className="rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-xs text-green-400">
					🔒 Ambiente seguro. Pagamento simulado para fins de
					protótipo.
				</div>
			</div>

			<div className="border-t border-neutral-800 px-4 py-4">
				<Button
					variant="secondary"
					disabled={!isValid}
					onClick={() => onReview({ ...order, card: form })}
				>
					Revisar pagamento
				</Button>
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
