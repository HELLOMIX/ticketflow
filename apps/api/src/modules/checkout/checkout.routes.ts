import { Router } from "express";
import { z } from "zod";
import { requireAuth, requireRole } from "../auth/auth.middleware";
import type { AuthenticatedRequest } from "../../shared/types/auth-request";
import { getUserById } from "../auth/auth.service";
import { checkout } from "./checkout.service";

const router = Router({ mergeParams: true });

const eventIdParamSchema = z.object({ eventId: z.string().uuid() });
const checkoutSchema = z.object({
	ticketTypeId: z.string().uuid(),
	seatIds: z.array(z.string().uuid()).optional(),
	quantity: z.number().int().positive().optional(),
	card: z.object({
		number: z.string().min(12),
		name: z.string().min(2),
		expiry: z.string().min(4),
		cvv: z.string().min(3),
	}),
});

router.post("/", requireAuth, requireRole("CLIENT"), async (req, res, next) => {
	try {
		const { eventId } = eventIdParamSchema.parse(req.params);
		const input = checkoutSchema.parse(req.body);
		const authReq = req as AuthenticatedRequest;

		const buyer = await getUserById(authReq.user!.id);

		const result = await checkout({
			eventId,
			ticketTypeId: input.ticketTypeId,
			seatIds: input.seatIds,
			quantity: input.quantity,
			buyerId: authReq.user!.id,
			buyerName: buyer.name,
			card: input.card,
		});

		res.status(result.approved ? 201 : 402).json(result);
	} catch (err) {
		next(err);
	}
});

export default router;
