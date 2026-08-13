import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import type { AppUser } from "./LoginPage";

type GateRegistrationPageProps = {
	event: {
		id: string;
		title: string;
	};
	onCreate: (user: AppUser) => { ok: boolean; message?: string };
	onBack: () => void;
};

export default function GateRegistrationPage({
	event,
	onCreate,
	onBack,
}: GateRegistrationPageProps) {
	const navigate = useNavigate();
	const [form, setForm] = useState({
		name: "",
		email: "",
		password: "",
		phone: "",
		birthDate: "",
	});
	const [error, setError] = useState("");

	function handleChange(field: keyof typeof form, value: string) {
		setForm((current) => ({ ...current, [field]: value }));
	}

	function handleSubmit(submitEvent: FormEvent) {
		submitEvent.preventDefault();

		const user: AppUser = {
			id: crypto.randomUUID(),
			name: form.name,
			email: form.email,
			password: form.password,
			phone: form.phone,
			birthDate: form.birthDate,
			role: "GATE",
			assignedEventIds: [event.id],
		};

		const result = onCreate(user);
		if (!result.ok) {
			setError(
				result.message ?? "Não foi possível cadastrar o porteiro.",
			);
			return;
		}

		setError("");
		navigate("/organizer");
	}

	return (
		<div className="flex min-h-screen items-center justify-center bg-neutral-950 px-4 py-10 text-white">
			<div className="w-full max-w-lg rounded-[2rem] border border-neutral-800 bg-neutral-900 p-5 shadow-2xl shadow-black/40 sm:p-6 xl:max-w-2xl">
				<div className="mb-6 text-center">
					<p className="font-serif text-3xl font-bold text-red-500">
						TicketFlow
					</p>
					<p className="mt-2 text-sm text-neutral-400">
						Cadastro de porteiro
					</p>
				</div>

				<div className="mb-5 rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-sm text-amber-200">
					Vinculando conta ao evento:{" "}
					<span className="font-semibold text-white">
						{event.title}
					</span>
				</div>

				<form onSubmit={handleSubmit} className="space-y-4">
					<div className="grid gap-4 md:grid-cols-2">
						<label className="block md:col-span-2">
							<span className="mb-2 block text-sm text-neutral-300">
								Nome completo
							</span>
							<input
								required
								value={form.name}
								onChange={(event) =>
									handleChange("name", event.target.value)
								}
								className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-3.5 py-3 text-sm text-white"
							/>
						</label>

						<label className="block md:col-span-2">
							<span className="mb-2 block text-sm text-neutral-300">
								E-mail
							</span>
							<input
								type="email"
								required
								value={form.email}
								onChange={(event) =>
									handleChange("email", event.target.value)
								}
								className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-3.5 py-3 text-sm text-white"
							/>
						</label>

						<label className="block md:col-span-2">
							<span className="mb-2 block text-sm text-neutral-300">
								Senha
							</span>
							<input
								type="password"
								required
								value={form.password}
								onChange={(event) =>
									handleChange("password", event.target.value)
								}
								className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-3.5 py-3 text-sm text-white"
							/>
						</label>

						<label className="block">
							<span className="mb-2 block text-sm text-neutral-300">
								Telefone
							</span>
							<input
								value={form.phone}
								onChange={(event) =>
									handleChange("phone", event.target.value)
								}
								className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-3.5 py-3 text-sm text-white"
							/>
						</label>

						<label className="block">
							<span className="mb-2 block text-sm text-neutral-300">
								Data de nascimento
							</span>
							<input
								type="date"
								value={form.birthDate}
								onChange={(event) =>
									handleChange(
										"birthDate",
										event.target.value,
									)
								}
								className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-3.5 py-3 text-sm text-white"
							/>
						</label>
					</div>

					{error && <p className="text-sm text-red-400">{error}</p>}

					<div className="flex gap-3 pt-2">
						<button
							type="button"
							onClick={onBack}
							className="flex-1 rounded-xl border border-neutral-700 bg-transparent px-4 py-3 text-sm font-semibold text-neutral-200"
						>
							Voltar
						</button>
						<button
							type="submit"
							className="flex-1 rounded-xl bg-red-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-red-400"
						>
							Cadastrar porteiro
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
