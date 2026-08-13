import { BackHeader } from "../../components/ui/Header";
import Button from "../../components/ui/Button";

type OrganizerProfileScreenProps = {
	organizer: {
		name: string;
		description: string;
	};
	onBack: () => void;
	onSave: () => void;
};

export default function OrganizerProfileScreen({
	organizer,
	onBack,
	onSave,
}: OrganizerProfileScreenProps) {
	return (
		<div className="flex h-full flex-col bg-neutral-950">
			<BackHeader title="Minha Página" onBack={onBack} />
			<div className="flex-1 space-y-5 overflow-y-auto px-4 py-4">
				<button
					type="button"
					className="flex h-20 w-20 flex-col items-center justify-center gap-1 rounded-xl bg-neutral-900 text-neutral-500"
				>
					<span className="text-2xl">＋</span>
					<span className="text-[10px]">Logo</span>
				</button>

				<div className="space-y-4">
					<label className="block">
						<span className="mb-2 block text-sm text-neutral-400">
							Nome
						</span>
						<input
							value={organizer.name}
							className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-3 text-sm text-white"
							readOnly
						/>
					</label>

					<label className="block">
						<span className="mb-2 block text-sm text-neutral-400">
							Descrição
						</span>
						<textarea
							value={organizer.description}
							className="min-h-[100px] w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-3 text-sm text-white"
							readOnly
						/>
					</label>
				</div>
			</div>

			<div className="border-t border-neutral-800 px-4 py-4">
				<Button variant="secondary" onClick={onSave}>
					Salvar
				</Button>
			</div>
		</div>
	);
}
