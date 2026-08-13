import type { NextFunction, Request, Response } from "express";
import { z } from "zod";
import * as authService from "./auth.service";
import type { AuthenticatedRequest } from "../../shared/types/auth-request";

const registerSchema = z.object({
	name: z.string().min(2),
	email: z.string().email(),
	password: z.string().min(6),
	cpf: z.string().min(11).max(14),
	phone: z.string().optional(),
	birthDate: z.string().optional(),
	role: z.enum(["CLIENT", "ORGANIZER"]),
});

const loginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(1),
});

const updateProfileSchema = z.object({
	name: z.string().min(2).optional(),
	phone: z.string().optional(),
	profilePictureUrl: z.string().optional(), // aceita data URL base64 ou link externo
});

export async function registerHandler(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	try {
		const input = registerSchema.parse(req.body);
		const result = await authService.register(input);
		res.status(201).json(result);
	} catch (err) {
		next(err);
	}
}

export async function loginHandler(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	try {
		const input = loginSchema.parse(req.body);
		const result = await authService.login(input);
		res.json(result);
	} catch (err) {
		next(err);
	}
}

export async function updateProfileHandler(
	req: AuthenticatedRequest,
	res: Response,
	next: NextFunction,
) {
	try {
		const input = updateProfileSchema.parse(req.body);
		const user = await authService.updateProfile(req.user!.id, input);
		res.json(user);
	} catch (err) {
		next(err);
	}
}

export async function meHandler(
	req: AuthenticatedRequest,
	res: Response,
	next: NextFunction,
) {
	try {
		const user = await authService.getUserById(req.user!.id);
		res.json(user);
	} catch (err) {
		next(err);
	}
}
