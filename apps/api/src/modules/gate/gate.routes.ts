import { Router } from "express";
import { requireAuth, requireRole } from "../auth/auth.middleware";
import { validateByCodeHandler, validateByQrHandler } from "./gate.controller";

const router = Router();

router.post(
	"/validate/code",
	requireAuth,
	requireRole("GATE"),
	validateByCodeHandler,
);
router.post(
	"/validate/qr",
	requireAuth,
	requireRole("GATE"),
	validateByQrHandler,
);

export default router;
