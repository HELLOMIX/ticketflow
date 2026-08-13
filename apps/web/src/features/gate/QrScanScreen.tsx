import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { BackHeader } from "../../components/ui/Header";

type Props = {
	onCancel: () => void;
	onDetected: (token: string) => void;
};

const SCANNER_ELEMENT_ID = "qr-scanner-region";

export default function QrScanScreen({ onCancel, onDetected }: Props) {
	const scannerRef = useRef<Html5Qrcode | null>(null);
	const [error, setError] = useState<string | null>(null);
	const detectedRef = useRef(false); // evita disparar onDetected mais de uma vez pro mesmo frame

	useEffect(() => {
		const scanner = new Html5Qrcode(SCANNER_ELEMENT_ID);
		scannerRef.current = scanner;

		scanner
			.start(
				{ facingMode: "environment" },
				{ fps: 10, qrbox: { width: 240, height: 240 } },
				(decodedText) => {
					if (detectedRef.current) return;
					detectedRef.current = true;
					onDetected(decodedText);
				},
				() => {
					// erro de leitura por frame (nenhum QR encontrado) — ignorado de propósito, é o comportamento normal
				},
			)
			.catch(() =>
				setError(
					"Não foi possível acessar a câmera. Verifique as permissões do navegador.",
				),
			);

		return () => {
			scanner.stop().catch(() => {});
		};
	}, [onDetected]);

	return (
		<div className="flex h-full flex-col bg-neutral-950">
			<BackHeader title="Escanear QR Code" onBack={onCancel} />
			<div className="relative flex-1 overflow-hidden">
				<div
					id={SCANNER_ELEMENT_ID}
					className="h-full w-full [&>video]:h-full [&>video]:w-full [&>video]:object-cover"
				/>

				{error && (
					<div className="absolute inset-x-4 top-4 rounded-xl bg-red-950/90 px-4 py-3 text-sm text-red-300">
						{error}
					</div>
				)}

				<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
					<div className="h-56 w-56 rounded-2xl border-4 border-amber-400/80" />
				</div>
			</div>
		</div>
	);
}
