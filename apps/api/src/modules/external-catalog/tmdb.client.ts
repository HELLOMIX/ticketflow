import "dotenv/config";

import { env } from "../../config/env";

const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = env.TMDB_BEARER_TOKEN;

type TmdbMovie = {
	id: number;
	title: string;
	overview: string;
	release_date?: string;
	poster_path?: string | null;
	backdrop_path?: string | null;
	popularity?: number;
};

type TmdbPaginatedResponse<T> = {
	page: number;
	results: T[];
	total_pages: number;
	total_results: number;
};

export type TmdbCatalogMovie = {
	id: number;
	title: string;
	description: string;
	releaseDate?: string;
	posterPath?: string;
	backdropPath?: string;
	popularity?: number;
};

async function getTmdb<T>(
	path: string,
	params: Record<string, string | number> = {},
): Promise<T> {
	const url = new URL(`${TMDB_BASE_URL}${path}`);

	for (const [key, value] of Object.entries(params)) {
		url.searchParams.set(key, String(value));
	}

	const response = await fetch(url, {
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${TMDB_TOKEN}`,
		},
	});

	if (!response.ok) {
		const errorText = await response.text();
		throw new Error(
			`TMDB request failed (${response.status}): ${errorText}`,
		);
	}

	return (await response.json()) as T;
}

export async function getPopularMovies(
	params: { language?: string; page?: number } = {},
): Promise<TmdbCatalogMovie[]> {
	const response = await getTmdb<TmdbPaginatedResponse<TmdbMovie>>(
		"/movie/popular",
		{
			language: params.language ?? "pt-BR",
			page: params.page ?? 1,
		},
	);

	return response.results.map((movie) => ({
		id: movie.id,
		title: movie.title,
		description: movie.overview || "Sinopse indisponível no momento.",
		releaseDate: movie.release_date,
		posterPath: movie.poster_path
			? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
			: undefined,
		backdropPath: movie.backdrop_path
			? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
			: undefined,
		popularity: movie.popularity,
	}));
}

export async function getTrendingMovies(
	params: { language?: string; page?: number } = {},
): Promise<TmdbCatalogMovie[]> {
	const response = await getTmdb<TmdbPaginatedResponse<TmdbMovie>>(
		"/trending/movie/week",
		{
			language: params.language ?? "pt-BR",
			page: params.page ?? 1,
		},
	);

	return response.results.map((movie) => ({
		id: movie.id,
		title: movie.title,
		description: movie.overview || "Sinopse indisponível no momento.",
		releaseDate: movie.release_date,
		posterPath: movie.poster_path
			? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
			: undefined,
		backdropPath: movie.backdrop_path
			? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
			: undefined,
		popularity: movie.popularity,
	}));
}

export async function getTmdbConfiguration() {
	return getTmdb<{
		images: { secure_base_url: string; poster_sizes: string[] };
	}>("/configuration");
}

export async function searchMovies(
	query: string,
	params: { language?: string; page?: number } = {},
): Promise<TmdbCatalogMovie[]> {
	const response = await getTmdb<TmdbPaginatedResponse<TmdbMovie>>(
		"/search/movie",
		{
			query,
			language: params.language ?? "pt-BR",
			page: params.page ?? 1,
		},
	);

	return response.results.map((movie) => ({
		id: movie.id,
		title: movie.title,
		description: movie.overview || "Sinopse indisponível no momento.",
		releaseDate: movie.release_date,
		posterPath: movie.poster_path
			? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
			: undefined,
		backdropPath: movie.backdrop_path
			? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
			: undefined,
		popularity: movie.popularity,
	}));
}
