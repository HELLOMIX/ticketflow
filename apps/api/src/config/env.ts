import "dotenv/config";

export const env = {
	PORT: Number(process.env.PORT ?? 4000),
	TMDB_BEARER_TOKEN: process.env.TMDB_BEARER_TOKEN ?? "sua api key aqui",
};
