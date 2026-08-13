import { Router } from "express";
import { requireAuth, requireRole } from "../auth/auth.middleware";
import {
	getSharedTicketHandler,
	getTicketHandler,
	listMyTicketsHandler,
} from "./tickets.controller";

const router = Router();

router.get("/mine", requireAuth, requireRole("CLIENT"), listMyTicketsHandler);
router.get("/shared/:shareToken", getSharedTicketHandler);
router.get("/:ticketId", requireAuth, requireRole("CLIENT"), getTicketHandler);

export default router;
