import { useState } from "react";
import Button from "../../components/ui/Button";

const STATUS_MAP = {
	valid: { label: "Válido", icon: "✅", tone: "text-green-400" },
	used: { label: "Já utilizado", icon: "⏺", tone: "text-neutral-400" },
	invalid: { label: "Inválido", icon: "❌", tone: "text-red-400" },
};

type TestCodeItem = { code: string; status: "valid" | "used" | "invalid" };

type ValidateTicketScreenProps = {
	testCodes: TestCodeItem[];
	onValidate: (code: string) => void;
	onScanQr: () => void;
};

function TestCodeRow({
	item,
	onTry,
}: {
	item: TestCodeItem;
	onTry: (code: string) => void;
}) {
	const meta = STATUS_MAP[item.status];
	return (
		<button
			type="button"
			onClick={() => onTry(item.code)}
			className="flex w-full items-center justify-between rounded-lg bg-neutral-900 px-3.5 py-2.5 text-left"
		>
			<span className="truncate pr-2 font-mono text-[11px] text-neutral-400">
				{item.code}
			</span>
			<span className={`shrink-0 text-xs font-semibold ${meta.tone}`}>
				{meta.icon} {meta.label}
			</span>
		</button>
	);
}

export default function ValidateTicketScreen({
	testCodes,
	onValidate,
	onScanQr,
}: ValidateTicketScreenProps) {
	const [code, setCode] = useState("");

	return (
		<div className="relative flex h-full flex-col bg-neutral-950">
			<div className="bg-red-600 px-4 py-5">
				<h1 className="font-serif text-xl font-bold text-white">
					TicketFlow
				</h1>
				<p className="mt-0.5 text-xs text-red-100">Portaria</p>
			</div>

			<div className="flex-1 space-y-5 overflow-y-auto px-4 py-5">
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
						placeholder="TKT-XXXXX-..."
						className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-3 font-mono text-sm text-neutral-100 placeholder:text-neutral-500"
					/>
					<Button
						variant="secondary"
						className="mt-3"
						disabled={!code}
						onClick={() => onValidate(code)}
					>
						✓ Confirmar entrada
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
					<span className="text-3xl">📷</span>
					<span className="font-bold">Ler QR Code</span>
					<span className="text-xs font-medium opacity-70">
						Abrir câmera para escanear
					</span>
				</button>

				<div>
					<h3 className="mb-2 text-sm font-semibold text-neutral-300">
						Códigos de teste
					</h3>
					<div className="space-y-2">
						{testCodes.map((item) => (
							<TestCodeRow
								key={item.code}
								item={item}
								onTry={onValidate}
							/>
						))}
					</div>
				</div>
			</div>

			<button
				type="button"
				onClick={onScanQr}
				className="absolute bottom-5 right-1/2 flex h-12 w-12 translate-x-1/2 items-center justify-center rounded-full bg-amber-400 text-lg shadow-lg"
				aria-label="Ler QR Code"
			>
				🔳
			</button>
		</div>
	);
}
