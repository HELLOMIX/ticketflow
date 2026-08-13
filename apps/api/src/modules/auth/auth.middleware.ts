import type { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import { env } from "../../config/env";
import {
	ForbiddenError,
	UnauthorizedError,
} from "../../shared/errors/AppError";
import type { AuthenticatedRequest } from "../../shared/types/auth-request";
import type { AppRole } from "./auth.service";

type TokenPayload = { sub: string; role: AppRole };

export function requireAuth(
	req: AuthenticatedRequest,
	_res: Response,
	next: NextFunction,
) {
	const header = req.headers.authorization;
	if (!header?.startsWith("Bearer ")) {
		return next(new UnauthorizedError("Token não informado"));
	}

	const token = header.slice("Bearer ".length);

	try {
		const payload = jwt.verify(token, env.JWT_SECRET) as TokenPayload;
		req.user = { id: payload.sub, role: payload.role };
		next();
	} catch {
		next(new UnauthorizedError("Token inválido ou expirado"));
	}
}

export function requireRole(...roles: AppRole[]) {
	return (req: AuthenticatedRequest, _res: Response, next: NextFunction) => {
		if (!req.user) return next(new UnauthorizedError());
		if (!roles.includes(req.user.role)) {
			return next(
				new ForbiddenError(`Requer papel: ${roles.join(" ou ")}`),
			);
		}
		next();
	};
}
