import { BackHeader } from "../../components/ui/Header";

type QrScanScreenProps = {
	backgroundImage: string;
	onCancel: () => void;
	onScan: () => void;
};

export default function QrScanScreen({
	backgroundImage,
	onCancel,
	onScan,
}: QrScanScreenProps) {
	return (
		<div className="flex h-full flex-col bg-neutral-950">
			<BackHeader title="Escanear QR Code" onBack={onCancel} />

			<div className="relative flex-1 overflow-hidden">
				<div
					className="absolute inset-0 bg-cover bg-center"
					style={{
						backgroundImage: `url(${backgroundImage})`,
						filter: "brightness(0.52)",
					}}
				/>
				<div className="absolute inset-0 bg-black/40" />

				<div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
					<div className="relative h-56 w-56 rounded-2xl border-4 border-amber-400/80 bg-black/20 backdrop-blur-[1px]">
						<div className="absolute inset-4 rounded-xl border border-dashed border-white/80" />
						<div className="absolute left-6 right-6 top-1/2 h-px -translate-y-1/2 bg-white/70" />
					</div>

					<div className="mt-6 text-center">
						<p className="text-sm font-medium text-white">
							Posicione o QR Code no centro da tela
						</p>
						<p className="mt-2 text-xs text-neutral-300">
							A validação será feita automaticamente
						</p>
					</div>

					<div className="mt-8 flex w-full gap-3">
						<button
							type="button"
							onClick={onCancel}
							className="flex-1 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm font-semibold text-white"
						>
							Cancelar
						</button>
						<button
							type="button"
							onClick={onScan}
							className="flex-1 rounded-xl bg-amber-400 px-4 py-3 text-sm font-bold text-neutral-950"
						>
							Validar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
