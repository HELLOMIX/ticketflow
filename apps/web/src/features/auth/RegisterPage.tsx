import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { AppRole, AppUser } from "./LoginPage";

type RegisterPageProps = {
	onRegister: (user: AppUser) => { ok: boolean; message?: string };
};

const roleOptions: AppRole[] = ["CLIENT", "ORGANIZER"];

export default function RegisterPage({ onRegister }: RegisterPageProps) {
	const navigate = useNavigate();
	const [form, setForm] = useState({
		name: "",
		email: "",
		password: "",
		cpf: "",
		phone: "",
		birthDate: "",
		role: "CLIENT" as AppRole,
	});
	const [error, setError] = useState("");

	function handleChange(field: keyof typeof form, value: string) {
		setForm((current) => ({ ...current, [field]: value }));
	}

	function handleSubmit(event: FormEvent) {
		event.preventDefault();

		const user: AppUser = {
			id: crypto.randomUUID(),
			name: form.name,
			email: form.email,
			password: form.password,
			cpf: form.cpf,
			phone: form.phone,
			birthDate: form.birthDate,
			role: form.role,
			assignedEventIds: form.role === "GATE" ? ["the-weeknd"] : [],
		};

		const result = onRegister(user);
		if (!result.ok) {
			setError(result.message ?? "Não foi possível concluir o cadastro.");
			return;
		}

		setError("");
		navigate(`/${form.role.toLowerCase()}`);
	}

	return (
		<div className="flex min-h-screen items-center justify-center bg-neutral-950 px-4 py-10 text-white">
			<div className="w-full max-w-lg rounded-[2rem] border border-neutral-800 bg-neutral-900 p-5 shadow-2xl shadow-black/40 sm:p-6 xl:max-w-2xl">
				<div className="mb-6 text-center">
					<p className="font-serif text-3xl font-bold text-red-500">
						TicketFlow
					</p>
					<p className="mt-2 text-sm text-neutral-400">
						Crie sua conta
					</p>
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

						<label className="block md:col-span-2">
							<span className="mb-2 block text-sm text-neutral-300">
								CPF
							</span>
							<input
								required
								value={form.cpf}
								onChange={(event) =>
									handleChange("cpf", event.target.value)
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

					<div>
						<span className="mb-2 block text-sm text-neutral-300">
							Tipo de conta
						</span>
						<div className="grid gap-2 sm:grid-cols-2">
							{roleOptions.map((role) => (
								<button
									key={role}
									type="button"
									onClick={() => handleChange("role", role)}
									className={`rounded-xl border px-3 py-2 text-sm font-semibold ${
										form.role === role
											? "border-amber-400 bg-amber-400/10 text-amber-300"
											: "border-neutral-700 bg-neutral-950 text-neutral-300"
									}`}
								>
									{role === "CLIENT"
										? "Cliente"
										: "Organizador"}
								</button>
							))}
						</div>
					</div>

					{error && <p className="text-sm text-red-400">{error}</p>}

					<button
						type="submit"
						className="w-full rounded-xl bg-red-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-red-400"
					>
						Cadastrar
					</button>
				</form>

				<p className="mt-5 text-center text-sm text-neutral-400">
					Já tem conta?{" "}
					<Link to="/login" className="font-semibold text-amber-300">
						Faça login
					</Link>
				</p>
			</div>
		</div>
	);
}
