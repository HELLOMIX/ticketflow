"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPopularMovies = getPopularMovies;
exports.getTrendingMovies = getTrendingMovies;
exports.getTmdbConfiguration = getTmdbConfiguration;
require("dotenv/config");
const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = process.env.TMDB_BEARER_TOKEN ??
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmFiMjFhZjhhNGE0Y2E0MjY1MDUzNzNiYzExMGMwNCIsIm5iZiI6MTc4NjQ5OTY4Mi45MzIsInN1YiI6IjZhN2JkMjYyY2VkZjRhNmQxNzU4MTY5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lYsKAXW8O-0uiaUE7YWH-fD2OaIpVTsv4QbcVnX8pCg";
async function getTmdb(path, params = {}) {
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
        throw new Error(`TMDB request failed (${response.status}): ${errorText}`);
    }
    return (await response.json());
}
async function getPopularMovies(params = {}) {
    const response = await getTmdb("/movie/popular", {
        language: params.language ?? "pt-BR",
        page: params.page ?? 1,
    });
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
async function getTrendingMovies(params = {}) {
    const response = await getTmdb("/trending/movie/week", {
        language: params.language ?? "pt-BR",
        page: params.page ?? 1,
    });
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
async function getTmdbConfiguration() {
    return getTmdb("/configuration");
}
