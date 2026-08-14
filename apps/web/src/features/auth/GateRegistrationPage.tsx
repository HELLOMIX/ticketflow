import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
	createGatekeeper,
	extractApiErrorMessage,
} from "../organizer/organizerApi";
import { formatCPF, formatPhone } from "../organizer/../../lib/inputMasks";

type Props = {
	event: { id: string; title: string };
	onBack: () => void;
};

export default function GateRegistrationPage({ event, onBack }: Props) {
	const navigate = useNavigate();
	const [form, setForm] = useState({
		name: "",
		email: "",
		password: "",
		phone: "",
		cpf: "",
	});
	const [error, setError] = useState("");
	const [submitting, setSubmitting] = useState(false);

	function handleChange(field: keyof typeof form, value: string) {
		setForm((current) => ({ ...current, [field]: value }));
	}

	async function handleSubmit(submitEvent: FormEvent) {
		submitEvent.preventDefault();
		setSubmitting(true);
		setError("");
		try {
			await createGatekeeper(event.id, form);
			navigate("/organizer");
		} catch (err) {
			setError(
				extractApiErrorMessage(
					err,
					"Não foi possível cadastrar o porteiro.",
				),
			);
		} finally {
			setSubmitting(false);
		}
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
								maxLength={100}
								value={form.name}
								onChange={(e) =>
									handleChange("name", e.target.value)
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
								maxLength={254}
								value={form.email}
								onChange={(e) =>
									handleChange("email", e.target.value)
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
								minLength={6}
								maxLength={72}
								value={form.password}
								onChange={(e) =>
									handleChange("password", e.target.value)
								}
								className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-3.5 py-3 text-sm text-white"
							/>
						</label>
						<label className="block">
							<span className="mb-2 block text-sm text-neutral-300">
								CPF
							</span>
							<input
								required
								inputMode="numeric"
								placeholder="000.000.000-00"
								maxLength={14}
								value={form.cpf}
								onChange={(e) =>
									handleChange(
										"cpf",
										formatCPF(e.target.value),
									)
								}
								className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-3.5 py-3 text-sm text-white"
							/>
						</label>
						<label className="block">
							<span className="mb-2 block text-sm text-neutral-300">
								Telefone
							</span>
							<input
								inputMode="numeric"
								placeholder="(00) 00000-0000"
								maxLength={15}
								value={form.phone}
								onChange={(e) =>
									handleChange(
										"phone",
										formatPhone(e.target.value),
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
							disabled={submitting}
							className="flex-1 rounded-xl bg-red-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-red-400 disabled:opacity-50"
						>
							{submitting ? "Cadastrando…" : "Cadastrar porteiro"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
