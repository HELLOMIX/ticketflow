import {
	createContext,
	useContext,
	useEffect,
	useState,
	type ReactNode,
} from "react";
import {
	api,
	extractApiErrorMessage,
	getStoredToken,
	setStoredToken,
} from "../../lib/api";

export type AppRole = "CLIENT" | "ORGANIZER" | "GATE";

export type AuthUser = {
	id: string;
	name: string;
	email: string;
	role: AppRole;
	phone?: string;
	profilePictureUrl?: string;
};

type AuthContextValue = {
	user: AuthUser | null;
	loading: boolean;
	login: (
		email: string,
		password: string,
	) => Promise<{ ok: true; user: AuthUser } | { ok: false; message: string }>;
	register: (
		input: RegisterInput,
	) => Promise<{ ok: true; user: AuthUser } | { ok: false; message: string }>;
	updateProfile: (
		input: Partial<{
			name: string;
			phone: string;
			profilePictureUrl: string;
		}>,
	) => Promise<{ ok: true; user: AuthUser } | { ok: false; message: string }>;
	logout: () => void;
};

export type RegisterInput = {
	name: string;
	email: string;
	password: string;
	cpf: string;
	phone?: string;
	birthDate?: string;
	role: "CLIENT" | "ORGANIZER";
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<AuthUser | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const token = getStoredToken();
		if (!token) {
			setLoading(false);
			return;
		}

		api.get<AuthUser>("/auth/me")
			.then((res) => setUser(res.data))
			.catch(() => setStoredToken(null))
			.finally(() => setLoading(false));
	}, []);

	async function login(email: string, password: string) {
		try {
			const res = await api.post<{ token: string; user: AuthUser }>(
				"/auth/login",
				{ email, password },
			);
			setStoredToken(res.data.token);
			setUser(res.data.user);
			return { ok: true as const, user: res.data.user };
		} catch (err) {
			return {
				ok: false as const,
				message: extractApiErrorMessage(
					err,
					"E-mail ou senha inválidos",
				),
			};
		}
	}

	async function register(input: RegisterInput) {
		try {
			const res = await api.post<{ token: string; user: AuthUser }>(
				"/auth/register",
				input,
			);
			setStoredToken(res.data.token);
			setUser(res.data.user);
			return { ok: true as const, user: res.data.user };
		} catch (err) {
			return {
				ok: false as const,
				message: extractApiErrorMessage(
					err,
					"Não foi possível concluir o cadastro.",
				),
			};
		}
	}

	async function updateProfile(
		input: Partial<{
			name: string;
			phone: string;
			profilePictureUrl: string;
		}>,
	) {
		try {
			const res = await api.patch<AuthUser>("/auth/me", input);
			setUser(res.data);
			return { ok: true as const, user: res.data };
		} catch (err) {
			return {
				ok: false as const,
				message: extractApiErrorMessage(
					err,
					"Não foi possível salvar o perfil.",
				),
			};
		}
	}

	function logout() {
		setStoredToken(null);
		setUser(null);
	}

	return (
		<AuthContext.Provider
			value={{ user, loading, login, register, updateProfile, logout }}
		>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const ctx = useContext(AuthContext);
	if (!ctx) throw new Error("useAuth precisa estar dentro de <AuthProvider>");
	return ctx;
}
