import { useRef, useState } from "react";
import { BackHeader } from "../../components/ui/Header";
import Button from "../../components/ui/Button";
import { useAuth } from "../auth/AuthContext";
import { formatPhone } from "../../lib/inputMasks";

type Props = {
	onBack: () => void;
	onSave: () => void;
};

const MAX_LOGO_SIZE_BYTES = 500 * 1024; // 500KB — evita salvar base64 gigante no banco

export default function OrganizerProfileScreen({ onBack, onSave }: Props) {
	const { user, updateProfile } = useAuth();
	const fileInputRef = useRef<HTMLInputElement>(null);

	const [name, setName] = useState(user?.name ?? "");
	const [phone, setPhone] = useState(user?.phone ?? "");
	const [logoPreview, setLogoPreview] = useState(
		user?.profilePictureUrl ?? "",
	);
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);

	function handleLogoChange(event: React.ChangeEvent<HTMLInputElement>) {
		const file = event.target.files?.[0];
		if (!file) return;

		if (file.size > MAX_LOGO_SIZE_BYTES) {
			setError("A imagem precisa ter no máximo 500KB.");
			return;
		}

		const reader = new FileReader();
		reader.onload = () => setLogoPreview(reader.result as string);
		reader.readAsDataURL(file);
	}

	async function handleSubmit() {
		setError(null);
		setSubmitting(true);
		const result = await updateProfile({
			name,
			phone,
			profilePictureUrl: logoPreview,
		});
		setSubmitting(false);

		if (!result.ok) {
			setError(result.message);
			return;
		}
		onSave();
	}

	return (
		<div className="flex h-full flex-col bg-neutral-950">
			<BackHeader title="Minha Página" onBack={onBack} />
			<div className="flex-1 overflow-y-auto px-4 py-4 md:px-8">
				<div className="mx-auto w-full max-w-3xl space-y-6">
					<button
						type="button"
						onClick={() => fileInputRef.current?.click()}
						className="flex h-20 w-20 flex-col items-center justify-center gap-1 overflow-hidden rounded-xl bg-neutral-900 text-neutral-500"
					>
						{logoPreview ? (
							<img
								src={logoPreview}
								alt="Logo"
								className="h-full w-full object-cover"
							/>
						) : (
							<>
								<span className="text-2xl">＋</span>
								<span className="text-[10px]">Logo</span>
							</>
						)}
					</button>
					<input
						ref={fileInputRef}
						type="file"
						accept="image/*"
						onChange={handleLogoChange}
						className="hidden"
					/>

					<div className="space-y-4">
						<label className="block">
							<span className="mb-2 block text-sm text-neutral-400">
								Nome
							</span>
							<input
								maxLength={100}
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-3 text-sm text-white"
							/>
						</label>

						<label className="block">
							<span className="mb-2 block text-sm text-neutral-400">
								Telefone
							</span>
							<input
								inputMode="numeric"
								placeholder="(00) 00000-0000"
								maxLength={15}
								value={phone}
								onChange={(e) =>
									setPhone(formatPhone(e.target.value))
								}
								className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-3 text-sm text-white"
							/>
						</label>

						<label className="block">
							<span className="mb-2 block text-sm text-neutral-400">
								E-mail
							</span>
							<input
								value={user?.email ?? ""}
								readOnly
								className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-3 text-sm text-neutral-500"
							/>
						</label>
					</div>

					{error && <p className="text-sm text-red-400">{error}</p>}
				</div>
			</div>

			<div className="border-t border-neutral-800 mx-auto w-full max-w-3xl space-y-6 px-4 py-4">
				<Button
					variant="secondary"
					onClick={handleSubmit}
					disabled={submitting}
				>
					{submitting ? "Salvando…" : "Salvar"}
				</Button>
			</div>
		</div>
	);
}
