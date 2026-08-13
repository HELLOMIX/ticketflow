import {
	getPopularMovies,
	searchMovies,
	type TmdbCatalogMovie,
} from "./tmdb.client";

export type CatalogEvent = {
	id: string;
	source: "TMDB";
	eventType: "MOVIE" | "SHOW" | "THEATER" | "FESTIVAL" | "OTHER";
	title: string;
	description: string;
	cover: string;
	banner: string;
	venue: string;
	city: string;
	dateLabel: string;
	dateShort: string;
	time: string;
	price: number;
	ticketTypes: Array<{ name: string; price: number; available: number }>;
};

function toEventType(movie: TmdbCatalogMovie): CatalogEvent["eventType"] {
	return "MOVIE";
}

function formatDate(date?: string): { dateLabel: string; dateShort: string } {
	if (!date) {
		return {
			dateLabel: "Próximas estreias",
			dateShort: "Em breve",
		};
	}

	const parsed = new Date(date);
	if (Number.isNaN(parsed.getTime())) {
		return {
			dateLabel: "Próximas estreias",
			dateShort: "Em breve",
		};
	}

	return {
		dateLabel: parsed.toLocaleDateString("pt-BR", {
			day: "2-digit",
			month: "short",
			year: "numeric",
		}),
		dateShort: parsed.toLocaleDateString("pt-BR", {
			day: "2-digit",
			month: "short",
		}),
	};
}

function mapMoviesToCatalogEvents(movies: TmdbCatalogMovie[]): CatalogEvent[] {
	return movies.map((movie, index) => {
		const formattedDate = formatDate(movie.releaseDate);
		const price = 32 + index * 8;

		return {
			id: `tmdb-${movie.id}`,
			source: "TMDB",
			eventType: toEventType(movie),
			title: movie.title,
			description: movie.description,
			cover:
				movie.posterPath ??
				movie.backdropPath ??
				"https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c",
			banner:
				movie.backdropPath ??
				movie.posterPath ??
				"https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c",
			venue: "Cinema TMDb",
			city: "São Paulo",
			dateLabel: formattedDate.dateLabel,
			dateShort: formattedDate.dateShort,
			time: index % 2 === 0 ? "19:30" : "21:00",
			price,
			ticketTypes: [
				{ name: "Inteira", price, available: 180 },
				{ name: "Meia", price: Math.max(18, price / 2), available: 90 },
			],
		};
	});
}

export async function getCatalogEvents(): Promise<CatalogEvent[]> {
	const movies = await getPopularMovies({ page: 1, language: "pt-BR" });
	return mapMoviesToCatalogEvents(movies.slice(0, 8));
}

export async function searchCatalogEvents(
	query: string,
): Promise<CatalogEvent[]> {
	if (!query.trim()) return getCatalogEvents();
	const movies = await searchMovies(query, { page: 1, language: "pt-BR" });
	return mapMoviesToCatalogEvents(movies.slice(0, 12));
}
