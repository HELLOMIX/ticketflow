import { useState } from "react";
import { BackHeader } from "../../components/ui/Header";
import Button from "../../components/ui/Button";

type EventFormScreenProps = {
	event?: {
		title: string;
		dateShort?: string;
		status?: string;
	};
	onBack: () => void;
	onSave: (payload?: unknown) => void;
};

export default function EventFormScreen({
	event,
	onBack,
	onSave,
}: EventFormScreenProps) {
	const isEditing = Boolean(event);
	const [form, setForm] = useState({
		title: event?.title ?? "",
		date: event?.dateShort ?? "",
		status: event?.status ?? "Publicado",
	});

	return (
		<div className="flex h-full flex-col bg-neutral-950">
			<BackHeader
				title={isEditing ? "Editar Evento" : "Criar Evento"}
				onBack={onBack}
			/>
			<div className="flex-1 space-y-5 overflow-y-auto px-4 py-4">
				<button
					type="button"
					className="flex h-32 w-full flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-neutral-700 bg-neutral-900 text-neutral-500"
				>
					<span className="text-2xl">＋</span>
					<span className="text-xs">Adicionar capa</span>
				</button>

				<div className="space-y-4">
					<label className="block">
						<span className="mb-2 block text-sm text-neutral-400">
							Nome do evento
						</span>
						<input
							value={form.title}
							onChange={(e) =>
								setForm((current) => ({
									...current,
									title: e.target.value,
								}))
							}
							className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-3 text-sm text-white"
						/>
					</label>

					<label className="block">
						<span className="mb-2 block text-sm text-neutral-400">
							Data
						</span>
						<input
							value={form.date}
							onChange={(e) =>
								setForm((current) => ({
									...current,
									date: e.target.value,
								}))
							}
							className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-3 text-sm text-white"
						/>
					</label>

					<div>
						<span className="mb-2 block text-sm text-neutral-400">
							Status
						</span>
						<div className="flex gap-2">
							{["Publicado", "Rascunho"].map((status) => (
								<button
									key={status}
									type="button"
									onClick={() =>
										setForm((current) => ({
											...current,
											status,
										}))
									}
									className={`rounded-full px-3 py-2 text-xs font-semibold ${
										form.status === status
											? "bg-red-500 text-white"
											: "bg-neutral-900 text-neutral-300 border border-neutral-800"
									}`}
								>
									{status}
								</button>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="border-t border-neutral-800 px-4 py-4">
				<Button variant="secondary" onClick={() => onSave(form)}>
					{isEditing ? "Salvar alterações" : "Publicar evento"}
				</Button>
			</div>
		</div>
	);
}
