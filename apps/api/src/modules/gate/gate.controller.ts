import type { NextFunction, Response } from "express";
import { z } from "zod";
import * as gateService from "./gate.service";
import type { AuthenticatedRequest } from "../../shared/types/auth-request";

const validateByCodeSchema = z.object({
	code: z.string().min(4),
	eventId: z.string().uuid().optional(),
});

const validateByQrSchema = z.object({
	token: z.string().min(10),
	eventId: z.string().uuid().optional(),
});

export async function validateByCodeHandler(
	req: AuthenticatedRequest,
	res: Response,
	next: NextFunction,
) {
	try {
		const { code, eventId } = validateByCodeSchema.parse(req.body);
		const result = await gateService.validateByAccessCode(
			code,
			req.user!.id,
			eventId,
		);
		res.json(result);
	} catch (err) {
		next(err);
	}
}

export async function validateByQrHandler(
	req: AuthenticatedRequest,
	res: Response,
	next: NextFunction,
) {
	try {
		const { token, eventId } = validateByQrSchema.parse(req.body);
		const result = await gateService.validateByQrToken(
			token,
			req.user!.id,
			eventId,
		);
		res.json(result);
	} catch (err) {
		next(err);
	}
}
