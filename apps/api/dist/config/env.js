"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
require("dotenv/config");
exports.env = {
    PORT: Number(process.env.PORT ?? 4000),
    TMDB_BEARER_TOKEN: process.env.TMDB_BEARER_TOKEN ??
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmFiMjFhZjhhNGE0Y2E0MjY1MDUzNzNiYzExMGMwNCIsIm5iZiI6MTc4NjQ5OTY4Mi45MzIsInN1YiI6IjZhN2JkMjYyY2VkZjRhNmQxNzU4MTY5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lYsKAXW8O-0uiaUE7YWH-fD2OaIpVTsv4QbcVnX8pCg",
};
