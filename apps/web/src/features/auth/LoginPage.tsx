import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

export type AppRole = "CLIENT" | "ORGANIZER" | "GATE";

export type AppUser = {
	id: string;
	name: string;
	email: string;
	password: string;
	role: AppRole;
	phone?: string;
	birthDate?: string;
	profilePictureUrl?: string;
	assignedEventIds?: string[];
};

type LoginPageProps = {
	users: AppUser[];
	onLogin: (user: AppUser) => void;
};

const roleLabels: Record<AppRole, string> = {
	CLIENT: "Cliente",
	ORGANIZER: "Organizador",
	GATE: "Porteiro",
};

export default function LoginPage({ users, onLogin }: LoginPageProps) {
	const navigate = useNavigate();
	const [email, setEmail] = useState("cliente@ticketflow.com");
	const [password, setPassword] = useState("123456");
	const [error, setError] = useState("");

	function handleSubmit(event: FormEvent) {
		event.preventDefault();
		const matchedUser = users.find(
			(user) =>
				user.email.toLowerCase() === email.toLowerCase() &&
				user.password === password,
		);

		if (!matchedUser) {
			setError("E-mail ou senha inválidos.");
			return;
		}

		setError("");
		onLogin(matchedUser);
		navigate(`/${matchedUser.role.toLowerCase()}`);
	}

	return (
		<div className="flex min-h-screen items-center justify-center bg-neutral-950 px-4 py-10 text-white">
			<div className="w-full max-w-md rounded-[2rem] border border-neutral-800 bg-neutral-900 p-6 shadow-2xl shadow-black/40">
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
							onChange={(event) => setEmail(event.target.value)}
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
							onChange={(event) =>
								setPassword(event.target.value)
							}
							className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-3.5 py-3 text-sm text-white placeholder:text-neutral-500"
							placeholder="••••••••"
						/>
					</label>

					{error && <p className="text-sm text-red-400">{error}</p>}

					<button
						type="submit"
						className="w-full rounded-xl bg-amber-400 px-4 py-3 text-sm font-bold text-neutral-950 transition hover:bg-amber-300"
					>
						Entrar
					</button>
				</form>

				<div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-950/70 p-3 text-xs text-neutral-300">
					<p className="mb-2 font-semibold text-white">Contas demo</p>
					<ul className="space-y-1">
						{users.map((user) => (
							<li key={user.id}>
								<span className="font-semibold text-amber-300">
									{roleLabels[user.role]}
								</span>{" "}
								· {user.email} / {user.password}
							</li>
						))}
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
