import { Router } from "express";
import {
	loginHandler,
	meHandler,
	registerHandler,
	updateProfileHandler,
} from "./auth.controller";
import { requireAuth } from "./auth.middleware";

const router = Router();

router.post("/register", registerHandler);
router.post("/login", loginHandler);
router.get("/me", requireAuth, meHandler);
router.patch("/me", requireAuth, updateProfileHandler);

export default router;
