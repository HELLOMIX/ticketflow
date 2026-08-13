import type { NextFunction, Response } from "express";
import { z } from "zod";
import * as ticketsService from "./tickets.service";
import type { AuthenticatedRequest } from "../../shared/types/auth-request";

export async function listMyTicketsHandler(
	req: AuthenticatedRequest,
	res: Response,
	next: NextFunction,
) {
	try {
		const tickets = await ticketsService.listMyTickets(req.user!.id);
		res.json(tickets);
	} catch (err) {
		next(err);
	}
}

const ticketIdParamSchema = z.object({ ticketId: z.string().uuid() });

export async function getTicketHandler(
	req: AuthenticatedRequest,
	res: Response,
	next: NextFunction,
) {
	try {
		const { ticketId } = ticketIdParamSchema.parse(req.params);
		const ticket = await ticketsService.getTicketById(
			ticketId,
			req.user!.id,
		);
		res.json(ticket);
	} catch (err) {
		next(err);
	}
}

const shareTokenParamSchema = z.object({ shareToken: z.string().min(10) });

export async function getSharedTicketHandler(
	req: AuthenticatedRequest,
	res: Response,
	next: NextFunction,
) {
	try {
		const { shareToken } = shareTokenParamSchema.parse(req.params);
		const ticket = await ticketsService.getTicketByShareToken(shareToken);
		res.json(ticket);
	} catch (err) {
		next(err);
	}
}
