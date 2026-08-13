import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCheck,
	faCamera,
	faQrcode,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/ui/Button";
import { useAuth } from "../auth/AuthContext";

type Props = {
	onValidate: (code: string) => void;
	onScanQr: () => void;
	submitting?: boolean;
};

export default function ValidateTicketScreen({
	onValidate,
	onScanQr,
	submitting,
}: Props) {
	const [code, setCode] = useState("");
	const { logout } = useAuth();

	return (
		<div className="relative flex h-full flex-col bg-neutral-950">
			<div className="border-b border-neutral-800 px-4 py-4 md:px-8">
				<div className="mx-auto flex max-w-7xl items-center justify-between">
					<div>
						<h1 className="font-serif text-2xl font-bold text-red-500">
							TicketFlow
						</h1>
						<p className="mt-0.5 text-xs text-neutral-500">
							Portaria
						</p>
					</div>
					<button
						type="button"
						onClick={logout}
						className="rounded-lg border border-neutral-700 px-3 py-1.5 text-xs font-semibold text-neutral-300"
					>
						Sair
					</button>
				</div>
			</div>

			<div className="flex-1 overflow-y-auto pb-5">
				<div className="mx-auto w-full max-w-3xl space-y-5 px-4 py-5 md:px-8">
					<h2 className="font-serif text-lg font-bold text-white">
						Validar Ingresso
					</h2>

					<div>
						<label className="mb-2 block text-sm text-neutral-400">
							Digite o código do ingresso manualmente:
						</label>
						<input
							value={code}
							onChange={(e) => setCode(e.target.value)}
							placeholder="TKT-XXXXXXXX"
							className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-3 font-mono text-sm text-neutral-100 placeholder:text-neutral-500"
						/>
						<Button
							variant="secondary"
							className="mt-3"
							disabled={!code || submitting}
							onClick={() => onValidate(code)}
						>
							{submitting ? (
								"Validando…"
							) : (
								<>
									<FontAwesomeIcon icon={faCheck} />{" "}
									Confirmar entrada
								</>
							)}
						</Button>
					</div>

					<div className="flex items-center gap-3 text-xs text-neutral-600">
						<div className="h-px flex-1 bg-neutral-800" />
						ou
						<div className="h-px flex-1 bg-neutral-800" />
					</div>

					<button
						type="button"
						onClick={onScanQr}
						className="flex w-full flex-col items-center gap-2 rounded-2xl bg-amber-400 py-8 text-neutral-950"
					>
						<span className="text-3xl">
							<FontAwesomeIcon icon={faCamera} />
						</span>
						<span className="font-bold">Ler QR Code</span>
						<span className="text-xs font-medium opacity-70">
							Abrir câmera para escanear
						</span>
					</button>
				</div>
			</div>

			<button
				type="button"
				onClick={onScanQr}
				className="absolute bottom-5 right-1/2 flex h-12 w-12 translate-x-1/2 items-center justify-center rounded-full bg-amber-400 text-lg shadow-lg"
				aria-label="Ler QR Code"
			>
				<FontAwesomeIcon icon={faQrcode} />
			</button>
		</div>
	);
}
