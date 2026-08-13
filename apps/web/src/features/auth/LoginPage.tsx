import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function LoginPage() {
	const navigate = useNavigate();
	const { login } = useAuth();
	const [email, setEmail] = useState("cliente1@ticketflow.com");
	const [password, setPassword] = useState("123456");
	const [error, setError] = useState("");
	const [submitting, setSubmitting] = useState(false);

	async function handleSubmit(event: FormEvent) {
		event.preventDefault();
		setSubmitting(true);
		const result = await login(email, password);
		setSubmitting(false);

		if (!result.ok) {
			setError(result.message);
			return;
		}

		setError("");
		navigate(`/${result.user.role.toLowerCase()}`);
	}

	return (
		<div className="flex min-h-screen items-center justify-center bg-neutral-950 px-4 py-10 text-white">
			<div className="w-full max-w-md rounded-[2rem] border border-neutral-800 bg-neutral-900 p-5 shadow-2xl shadow-black/40 sm:p-6 lg:max-w-lg">
				<div className="mb-6 text-center">
					<p className="font-serif text-3xl font-bold text-red-500">
						TicketFlow
					</p>
					<p className="mt-2 text-sm text-neutral-400">
						Acesse sua conta
					</p>
				</div>

				<form onSubmit={handleSubmit} className="space-y-4">
					<label className="block">
						<span className="mb-2 block text-sm text-neutral-300">
							E-mail
						</span>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-3.5 py-3 text-sm text-white placeholder:text-neutral-500"
							placeholder="seu@email.com"
						/>
					</label>

					<label className="block">
						<span className="mb-2 block text-sm text-neutral-300">
							Senha
						</span>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-3.5 py-3 text-sm text-white placeholder:text-neutral-500"
							placeholder="••••••••"
						/>
					</label>

					{error && <p className="text-sm text-red-400">{error}</p>}

					<button
						type="submit"
						disabled={submitting}
						className="w-full rounded-xl bg-amber-400 px-4 py-3 text-sm font-bold text-neutral-950 transition hover:bg-amber-300 disabled:opacity-50"
					>
						{submitting ? "Entrando..." : "Entrar"}
					</button>
				</form>

				<div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-950/70 p-3 text-xs text-neutral-300">
					<p className="mb-2 font-semibold text-white">
						Contas de teste (seed)
					</p>
					<ul className="space-y-1">
						<li>
							<span className="font-semibold text-amber-300">
								Organizador
							</span>{" "}
							· organizador@ticketflow.com / 123456
						</li>
						<li>
							<span className="font-semibold text-amber-300">
								Cliente
							</span>{" "}
							· cliente1@ticketflow.com / 123456
						</li>
						<li>
							<span className="font-semibold text-amber-300">
								Cliente
							</span>{" "}
							· cliente2@ticketflow.com / 123456
						</li>
						<li>
							<span className="font-semibold text-amber-300">
								Portaria
							</span>{" "}
							· portaria@ticketflow.com / 123456
						</li>
					</ul>
				</div>

				<p className="mt-5 text-center text-sm text-neutral-400">
					Não tem conta?{" "}
					<Link
						to="/register"
						className="font-semibold text-amber-300"
					>
						Cadastre-se
					</Link>
				</p>
			</div>
		</div>
	);
}
