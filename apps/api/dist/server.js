"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const catalog_service_1 = require("./modules/external-catalog/catalog.service");
const app = (0, express_1.default)();
const port = Number(process.env.PORT ?? 4000);
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/health", (_req, res) => {
    res.json({ ok: true, service: "ticketflow-api" });
});
app.get("/api/catalog", async (_req, res) => {
    try {
        const events = await (0, catalog_service_1.getCatalogEvents)();
        res.json({ source: "TMDB", items: events });
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "Catalog fetch failed";
        res.status(500).json({ message });
    }
});
app.listen(port, () => {
    console.log(`TicketFlow API running on http://localhost:${port}`);
});
