import type { Request } from "express";
import type { AppRole } from "../../modules/auth/auth.service";

export interface AuthenticatedRequest extends Request {
	user?: {
		id: string;
		role: AppRole;
	};
}
