import cors from "cors";
import express from "express";
import {
	getCatalogEvents,
	searchCatalogEvents,
} from "./modules/external-catalog/catalog.service";
import authRoutes from "./modules/auth/auth.routes";
import eventsRoutes from "./modules/events/events.routes";
import { errorHandler } from "./shared/middlewares/errorHandler";
import seatsRoutes from "./modules/seats/seats.routes";
import checkoutRoutes from "./modules/checkout/checkout.routes";
import ticketsRoutes from "./modules/tickets/tickets.routes";
import gateRoutes from "./modules/gate/gate.routes";

const app = express();
const port = Number(process.env.PORT ?? 4000);

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
	res.json({ ok: true, service: "ticketflow-api" });
});

app.get("/api/catalog", async (_req, res) => {
	try {
		const events = await getCatalogEvents();
		res.json({ source: "TMDB", items: events });
	} catch (error) {
		const message =
			error instanceof Error ? error.message : "Catalog fetch failed";
		res.status(500).json({ message });
	}
});

app.get("/api/catalog/search", async (req, res) => {
	try {
		const query = typeof req.query.q === "string" ? req.query.q : "";
		const events = await searchCatalogEvents(query);
		res.json({ source: "TMDB", items: events });
	} catch (error) {
		const message =
			error instanceof Error ? error.message : "Catalog search failed";
		res.status(500).json({ message });
	}
});

app.use("/api/auth", authRoutes);
app.use("/api/events", eventsRoutes);
app.use("/api/events/:eventId/seats", seatsRoutes);
app.use("/api/events/:eventId/checkout", checkoutRoutes);
app.use("/api/tickets", ticketsRoutes);
app.use("/api/gate", gateRoutes);

app.use(errorHandler); // sempre por último

app.listen(port, () => {
	console.log(`TicketFlow API running on http://localhost:${port}`);
});
