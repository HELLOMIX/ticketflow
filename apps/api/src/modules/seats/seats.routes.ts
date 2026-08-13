import { Router } from "express";
import { z } from "zod";
import { requireAuth, requireRole } from "../auth/auth.middleware";
import type { AuthenticatedRequest } from "../../shared/types/auth-request";
import * as seatsService from "./seats.service";

const router = Router({ mergeParams: true });

const eventIdParamSchema = z.object({ eventId: z.string().uuid() });
const seatIdsBodySchema = z.object({
	seatIds: z.array(z.string().uuid()).min(1),
});

router.get("/", async (req, res, next) => {
	try {
		const { eventId } = eventIdParamSchema.parse(req.params);
		const authReq = req as AuthenticatedRequest;
		const map = await seatsService.getSeatMap(eventId, authReq.user?.id);
		res.json(map);
	} catch (err) {
		next(err);
	}
});

router.post(
	"/reserve",
	requireAuth,
	requireRole("CLIENT"),
	async (req, res, next) => {
		try {
			const { eventId } = eventIdParamSchema.parse(req.params);
			const { seatIds } = seatIdsBodySchema.parse(req.body);
			const authReq = req as AuthenticatedRequest;
			const reserved = await seatsService.reserveSeats(
				eventId,
				seatIds,
				authReq.user!.id,
			);
			res.json({
				reserved: reserved.map((r) => r.seatId),
				expiresInMinutes: 10,
			});
		} catch (err) {
			next(err);
		}
	},
);

router.post(
	"/release",
	requireAuth,
	requireRole("CLIENT"),
	async (req, res, next) => {
		try {
			const { eventId } = eventIdParamSchema.parse(req.params);
			const { seatIds } = seatIdsBodySchema.parse(req.body);
			const authReq = req as AuthenticatedRequest;
			await seatsService.releaseSeats(eventId, seatIds, authReq.user!.id);
			res.json({ released: seatIds });
		} catch (err) {
			next(err);
		}
	},
);

export default router;
