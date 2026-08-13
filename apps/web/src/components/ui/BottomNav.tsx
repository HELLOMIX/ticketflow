import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
	faHouse,
	faMagnifyingGlass,
	faTicket,
	faCalendarDays,
	faPlus,
	faUser,
} from "@fortawesome/free-solid-svg-icons";

type BottomNavProps = {
	active: "home" | "search" | "tickets" | "events" | "profile";
	onNavigate: (dest: string) => void;
};

function NavButton({
	label,
	icon,
	active,
	onClick,
}: {
	label: string;
	icon: IconDefinition;
	active: boolean;
	onClick: () => void;
}) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`flex flex-1 flex-col items-center justify-center gap-1 py-2 text-[10px] transition ${
				active ? "text-amber-400" : "text-neutral-500"
			}`}
		>
			<span className="text-lg">
				<FontAwesomeIcon icon={icon} />
			</span>
			<span className="font-medium">{label}</span>
		</button>
	);
}

export function ClientBottomNav({ active, onNavigate }: BottomNavProps) {
	return (
		<nav className="flex items-center border-t border-neutral-800 bg-neutral-950 px-2 py-1 md:hidden">
			<NavButton
				label="Início"
				icon={faHouse}
				active={active === "home"}
				onClick={() => onNavigate("home")}
			/>
			<NavButton
				label="Buscar"
				icon={faMagnifyingGlass}
				active={active === "search"}
				onClick={() => onNavigate("search")}
			/>
			<NavButton
				label="Ingressos"
				icon={faTicket}
				active={active === "tickets"}
				onClick={() => onNavigate("tickets")}
			/>
		</nav>
	);
}

export function OrganizerBottomNav({ active, onNavigate }: BottomNavProps) {
	return (
		<nav className="flex items-center border-t border-neutral-800 bg-neutral-950 px-2 py-1 md:hidden">
			<NavButton
				label="Eventos"
				icon={faCalendarDays}
				active={active === "events"}
				onClick={() => onNavigate("home")}
			/>
			<NavButton
				label="Criar"
				icon={faPlus}
				active={false}
				onClick={() => onNavigate("create")}
			/>
			<NavButton
				label="Perfil"
				icon={faUser}
				active={active === "profile"}
				onClick={() => onNavigate("profile")}
			/>
		</nav>
	);
}
