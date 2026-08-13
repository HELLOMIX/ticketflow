import axios from "axios";

const TOKEN_STORAGE_KEY = "ticketflow:token";

export const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:4000/api",
});

export function getStoredToken(): string | null {
	return localStorage.getItem(TOKEN_STORAGE_KEY);
}

export function setStoredToken(token: string | null) {
	if (token) localStorage.setItem(TOKEN_STORAGE_KEY, token);
	else localStorage.removeItem(TOKEN_STORAGE_KEY);
}

api.interceptors.request.use((config) => {
	const token = getStoredToken();
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

// Se o token expirar/for inválido, a API responde 401 — limpamos o token guardado
// para forçar novo login. Não redirecionamos aqui dentro pra não acoplar lib/api.ts
// ao react-router; quem consome (AuthContext) decide o que fazer com isso.
api.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response?.status === 401) {
			setStoredToken(null);
		}
		return Promise.reject(error);
	},
);

export function extractApiErrorMessage(
	error: unknown,
	fallback = "Algo deu errado",
): string {
	if (axios.isAxiosError(error)) {
		return error.response?.data?.error ?? fallback;
	}
	return fallback;
}
