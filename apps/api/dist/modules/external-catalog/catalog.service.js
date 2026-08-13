"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCatalogEvents = getCatalogEvents;
const tmdb_client_1 = require("./tmdb.client");
function toEventType(movie) {
    return "MOVIE";
}
function formatDate(date) {
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
async function getCatalogEvents() {
    const movies = await (0, tmdb_client_1.getPopularMovies)({ page: 1, language: "pt-BR" });
    return movies.slice(0, 8).map((movie, index) => {
        const formattedDate = formatDate(movie.releaseDate);
        const price = 32 + index * 8;
        return {
            id: `tmdb-${movie.id}`,
            source: "TMDB",
            eventType: toEventType(movie),
            title: movie.title,
            description: movie.description,
            cover: movie.posterPath ?? movie.backdropPath ?? "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c",
            banner: movie.backdropPath ?? movie.posterPath ?? "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c",
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
