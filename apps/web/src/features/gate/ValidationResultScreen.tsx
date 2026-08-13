import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
	faCircleCheck,
	faCircleXmark,
	faTriangleExclamation,
	faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/ui/Button";

type ValidationResultScreenProps = {
	status: "valid" | "used" | "invalid" | "wrong_event";
	ticket?: {
		eventTitle?: string;
		ticketType?: string;
		holderName?: string;
		code?: string;
	};
	onValidateAnother: () => void;
	onHome: () => void;
};

const STATUS_MAP: Record<
	"valid" | "used" | "invalid" | "wrong_event",
	{ title: string; color: string; icon: IconDefinition; message: string }
> = {
	valid: {
		title: "Ingresso válido",
		color: "text-green-400",
		icon: faCircleCheck,
		message: "Entrada liberada para o evento.",
	},
	used: {
		title: "Ingresso já utilizado",
		color: "text-neutral-300",
		icon: faClockRotateLeft,
		message: "Este código foi registrado anteriormente.",
	},
	invalid: {
		title: "Ingresso inválido",
		color: "text-red-400",
		icon: faCircleXmark,
		message: "Código inexistente ou não reconhecido.",
	},
	wrong_event: {
		title: "Evento errado",
		color: "text-amber-400",
		icon: faTriangleExclamation,
		message:
			"Este ingresso pertence a outro evento ou sessão vinculada a esta portaria.",
	},
};

export default function ValidationResultScreen({
	status,
	ticket,
	onValidateAnother,
	onHome,
}: ValidationResultScreenProps) {
	const meta = STATUS_MAP[status];

	return (
		<div className="flex h-full flex-col bg-neutral-950 px-4 py-6 md:px-8">
			<div className="mx-auto w-full max-w-md">
				<div className="rounded-2xl border border-neutral-800 bg-neutral-900 px-4 py-5 text-center">
					<div className="text-4xl">
						<FontAwesomeIcon icon={meta.icon} />
					</div>
					<h2 className={`mt-3 text-xl font-bold ${meta.color}`}>
						{meta.title}
					</h2>
					<p className="mt-2 text-sm text-neutral-400">
						{meta.message}
					</p>
				</div>

				{ticket && (
					<div className="mt-4 rounded-2xl bg-neutral-900 p-4 text-sm text-neutral-300">
						<p className="text-neutral-500">Evento</p>
						<p className="mt-1 font-semibold text-white">
							{ticket.eventTitle ?? "Evento"} ·{" "}
							{ticket.ticketType ?? "Ingresso"}
						</p>
						<p className="mt-3 text-neutral-500">Titular</p>
						<p className="mt-1 text-white">
							{ticket.holderName ?? "Visitante"}
						</p>
						<p className="mt-3 text-neutral-500">Código</p>
						<p className="mt-1 font-mono text-xs text-amber-300">
							{ticket.code ?? "—"}
						</p>
					</div>
				)}

				<div className="mt-6 space-y-3">
					<Button onClick={onValidateAnother}>
						Validar outro ingresso
					</Button>
					<button
						type="button"
						onClick={onHome}
						className="w-full rounded-xl border border-neutral-700 bg-transparent px-4 py-3 text-sm font-semibold text-neutral-100"
					>
						Voltar para portaria
					</button>
				</div>
			</div>
		</div>
	);
}
