import Button from "../ui/Button";

type TicketConfirmedScreenProps = {
	order: {
		event: { title: string };
		total: number;
	};
	paymentApproved?: boolean;
	onViewTickets: () => void;
	onHome: () => void;
};

function money(value: number) {
	return `R$ ${value.toFixed(2).replace(".", ",")}`;
}

export default function TicketConfirmedScreen({
	order,
	paymentApproved = true,
	onViewTickets,
	onHome,
}: TicketConfirmedScreenProps) {
	const approved = paymentApproved;

	return (
		<div className="flex h-full flex-col bg-neutral-950 px-4 py-8 text-center">
			<div
				className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full text-4xl ${
					approved ? "bg-green-500/15" : "bg-red-500/15"
				}`}
			>
				{approved ? "✅" : "❌"}
			</div>
			<h1 className="mt-6 font-serif text-3xl font-bold text-white">
				{approved ? "Pedido confirmado" : "Pagamento recusado"}
			</h1>
			<p className="mt-3 text-sm text-neutral-400">
				{approved
					? `Seu ingresso para ${order.event.title} foi reservado com sucesso.`
					: "A cobrança foi recusada e o pedido não foi concluído. Verifique os dados do cartão e tente novamente."}
			</p>

			<div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-900 px-4 py-4 text-left">
				<p className="text-xs uppercase tracking-wide text-neutral-500">
					Resumo
				</p>
				<div className="mt-3 flex items-center justify-between text-sm text-neutral-300">
					<span>{approved ? "Total pago" : "Valor em análise"}</span>
					<span className="font-semibold text-amber-400">
						{money(order.total)}
					</span>
				</div>
			</div>

			<div className="mt-8 space-y-3">
				{approved ? (
					<Button onClick={onViewTickets}>Ver meus ingressos</Button>
				) : (
					<Button variant="secondary" onClick={onHome}>
						Tentar novamente
					</Button>
				)}
				<button
					type="button"
					onClick={onHome}
					className="w-full rounded-xl border border-neutral-700 bg-transparent px-4 py-3 text-sm font-semibold text-neutral-100"
				>
					{approved ? "Voltar para início" : "Voltar ao início"}
				</button>
			</div>
		</div>
	);
}
