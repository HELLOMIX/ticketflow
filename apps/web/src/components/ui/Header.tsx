import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../features/auth/AuthContext";

type AppHeaderProps = {
	title?: string;
	active?: "home" | "search" | "tickets";
	onNavigate?: (dest: string) => void;
};

const NAV_ITEMS: Array<{ key: "home" | "search" | "tickets"; label: string }> =
	[
		{ key: "home", label: "Início" },
		{ key: "search", label: "Buscar" },
		{ key: "tickets", label: "Meus Ingressos" },
	];

export function AppHeader({
	title = "TicketFlow",
	active,
	onNavigate,
}: AppHeaderProps) {
	const { user, logout } = useAuth();
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="relative border-b border-neutral-800 bg-neutral-950 px-4 py-4 md:px-8">
			<div className="mx-auto flex max-w-7xl items-center justify-between">
				<div className="flex items-center gap-8">
					<p className="font-serif text-xl font-bold text-red-500">
						{title}
					</p>

					{onNavigate && (
						<nav className="hidden items-center gap-6 md:flex">
							{NAV_ITEMS.map((item) => (
								<button
									key={item.key}
									type="button"
									onClick={() => onNavigate(item.key)}
									className={`text-sm font-medium transition ${
										active === item.key
											? "text-amber-400"
											: "text-neutral-400 hover:text-neutral-200"
									}`}
								>
									{item.label}
								</button>
							))}
						</nav>
					)}
				</div>

				<div className="relative">
					<button
						type="button"
						onClick={() => setMenuOpen((current) => !current)}
						className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-sm text-neutral-300"
						aria-label="Perfil"
					>
						<FontAwesomeIcon icon={faUser} />
					</button>

					{menuOpen && (
						<>
							<button
								type="button"
								aria-label="Fechar menu"
								onClick={() => setMenuOpen(false)}
								className="fixed inset-0 z-10 cursor-default"
							/>
							<div className="absolute right-0 top-11 z-20 w-48 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 shadow-xl">
								{user && (
									<div className="border-b border-neutral-800 px-3.5 py-2.5">
										<p className="truncate text-xs font-semibold text-white">
											{user.name}
										</p>
										<p className="truncate text-[11px] text-neutral-500">
											{user.email}
										</p>
									</div>
								)}
								<button
									type="button"
									onClick={logout}
									className="w-full px-3.5 py-2.5 text-left text-sm text-red-400 hover:bg-neutral-800"
								>
									Sair da conta
								</button>
							</div>
						</>
					)}
				</div>
			</div>
		</header>
	);
}

type BackHeaderProps = {
	title: string;
	onBack: () => void;
};

export function BackHeader({ title, onBack }: BackHeaderProps) {
	return (
		<header className="border-b border-neutral-800 bg-neutral-950 px-4 py-4 md:px-8">
			<div className="mx-auto flex max-w-3xl items-center gap-3">
				<button
					type="button"
					onClick={onBack}
					className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-xl text-white"
					aria-label="Voltar"
				>
					‹
				</button>
				<h1 className="text-base font-semibold text-white">{title}</h1>
			</div>
		</header>
	);
}
