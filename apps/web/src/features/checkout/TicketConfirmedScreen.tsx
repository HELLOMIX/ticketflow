import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircleCheck,
	faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/ui/Button";
import type { CheckoutResult } from "./checkoutApi";

type Props = {
	eventTitle: string;
	total: number;
	result: CheckoutResult;
	onViewTickets: () => void;
	onHome: () => void;
};

function money(value: number) {
	return `R$ ${value.toFixed(2).replace(".", ",")}`;
}

export default function TicketConfirmedScreen({
	eventTitle,
	total,
	result,
	onViewTickets,
	onHome,
}: Props) {
	const approved = result.approved;

	return (
		<div className="flex h-full flex-col bg-neutral-950 px-4 py-8 text-center md:px-8">
			<div className="mx-auto w-full max-w-md">
				<div
					className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full text-4xl ${approved ? "bg-green-500/15" : "bg-red-500/15"}`}
				>
					<FontAwesomeIcon
						icon={approved ? faCircleCheck : faCircleXmark}
					/>
				</div>
				<h1 className="mt-6 font-serif text-3xl font-bold text-white">
					{approved ? "Pedido confirmado" : "Pagamento recusado"}
				</h1>
				<p className="mt-3 text-sm text-neutral-400">
					{approved
						? `Seu ingresso para ${eventTitle} foi emitido com sucesso.`
						: "A cobrança foi recusada. O(s) assento(s) foram liberados — você pode tentar de novo."}
				</p>

				<div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-900 px-4 py-4 text-left">
					<p className="text-xs uppercase tracking-wide text-neutral-500">
						Resumo
					</p>
					<div className="mt-3 flex items-center justify-between text-sm text-neutral-300">
						<span>
							{approved ? "Total pago" : "Valor não cobrado"}
						</span>
						<span className="font-semibold text-amber-400">
							{money(total)}
						</span>
					</div>
				</div>

				<div className="mt-8 space-y-3">
					{approved ? (
						<Button onClick={onViewTickets}>
							Ver meus ingressos
						</Button>
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
						Voltar para início
					</button>
				</div>
			</div>
		</div>
	);
}
