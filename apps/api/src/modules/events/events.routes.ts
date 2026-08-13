import { Router } from "express";
import {
	createEventHandler,
	createGatekeeperHandler,
	getEventHandler,
	listEventsHandler,
	listMyEventsHandler,
	updateEventHandler,
	updateEventStatusHandler,
	updateTicketTypeHandler,
} from "./events.controller";
import { requireAuth, requireRole } from "../auth/auth.middleware";

const router = Router();

// públicas
router.get("/", listEventsHandler);
router.get("/:eventId", getEventHandler);

// organizador
router.post("/", requireAuth, requireRole("ORGANIZER"), createEventHandler);
router.get(
	"/mine/list",
	requireAuth,
	requireRole("ORGANIZER"),
	listMyEventsHandler,
);
router.patch(
	"/:eventId/status",
	requireAuth,
	requireRole("ORGANIZER"),
	updateEventStatusHandler,
);
router.patch(
	"/:eventId",
	requireAuth,
	requireRole("ORGANIZER"),
	updateEventHandler,
);
router.patch(
	"/:eventId/ticket-types/:ticketTypeId",
	requireAuth,
	requireRole("ORGANIZER"),
	updateTicketTypeHandler,
);
router.post(
	"/:eventId/gatekeepers",
	requireAuth,
	requireRole("ORGANIZER"),
	createGatekeeperHandler,
);

export default router;
