import cors from "cors";
import express from "express";
import { getCatalogEvents } from "./modules/external-catalog/catalog.service";

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

app.listen(port, () => {
	console.log(`TicketFlow API running on http://localhost:${port}`);
});
