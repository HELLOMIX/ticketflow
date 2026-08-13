import type { NextFunction, Request, Response } from "express";
import { z } from "zod";
import * as eventsService from "./events.service";
import * as authService from "../auth/auth.service";
import type { AuthenticatedRequest } from "../../shared/types/auth-request";

const eventIdParamSchema = z.object({
	eventId: z.string().uuid(),
});

const venueSchema = z.union([
	z.object({ id: z.string().uuid() }),
	z.object({
		name: z.string().min(2),
		address: z.string().min(2),
		hasAssignedSeats: z.boolean(),
		totalCapacity: z.number().int().positive(),
		seatMap: z
			.object({
				rows: z.number().int().positive(),
				seatsPerRow: z.number().int().positive(),
			})
			.optional(),
	}),
]);

const createEventSchema = z.object({
	title: z.string().min(2),
	description: z.string().optional(),
	bannerUrl: z.string().url().optional(),
	eventType: z.enum(["MOVIE", "SHOW", "THEATER", "FESTIVAL", "OTHER"]),
	startTime: z.string().datetime(),
	externalApiSource: z.enum(["TMDB", "TICKETMASTER"]).optional(),
	externalApiId: z.string().optional(),
	status: z.enum(["DRAFT", "PUBLISHED"]).optional(),
	venue: venueSchema,
	ticketTypes: z
		.array(
			z.object({
				name: z.string().min(1),
				price: z.number().nonnegative(),
				quantityAvailable: z.number().int().positive(),
			}),
		)
		.min(1),
});

const updateEventSchema = z.object({
	title: z.string().min(2).optional(),
	description: z.string().optional(),
	bannerUrl: z.string().url().optional(),
	eventType: z
		.enum(["MOVIE", "SHOW", "THEATER", "FESTIVAL", "OTHER"])
		.optional(),
	startTime: z.string().datetime().optional(),
	status: z.enum(["DRAFT", "PUBLISHED", "CANCELLED"]).optional(),
});

const listFiltersSchema = z.object({
	search: z.string().optional(),
	eventType: z
		.enum(["MOVIE", "SHOW", "THEATER", "FESTIVAL", "OTHER"])
		.optional(),
	city: z.string().optional(),
});

const gatekeeperSchema = z.object({
	name: z.string().min(2),
	email: z.string().email(),
	password: z.string().min(6),
	cpf: z.string().min(11).max(14),
	phone: z.string().optional(),
});

const ticketTypeIdParamSchema = z.object({
	eventId: z.string().uuid(),
	ticketTypeId: z.string().uuid(),
});

const updateTicketTypeSchema = z.object({
	price: z.number().nonnegative().optional(),
	quantityAvailable: z.number().int().positive().optional(),
});

export async function createEventHandler(
	req: AuthenticatedRequest,
	res: Response,
	next: NextFunction,
) {
	try {
		const input = createEventSchema.parse(req.body);
		const event = await eventsService.createEvent({
			...input,
			organizerId: req.user!.id,
		});
		res.status(201).json(event);
	} catch (err) {
		next(err);
	}
}

export async function listEventsHandler(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	try {
		const filters = listFiltersSchema.parse(req.query);
		const events = await eventsService.listPublishedEvents(filters);
		res.json(events);
	} catch (err) {
		next(err);
	}
}

export async function getEventHandler(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	try {
		const { eventId } = eventIdParamSchema.parse(req.params);
		const event = await eventsService.getEventById(eventId);
		res.json(event);
	} catch (err) {
		next(err);
	}
}

export async function listMyEventsHandler(
	req: AuthenticatedRequest,
	res: Response,
	next: NextFunction,
) {
	try {
		const events = await eventsService.listEventsByOrganizer(req.user!.id);
		res.json(events);
	} catch (err) {
		next(err);
	}
}

export async function updateEventStatusHandler(
	req: AuthenticatedRequest,
	res: Response,
	next: NextFunction,
) {
	try {
		const { eventId } = eventIdParamSchema.parse(req.params);
		const status = z
			.enum(["DRAFT", "PUBLISHED", "CANCELLED"])
			.parse(req.body.status);
		const event = await eventsService.updateEventStatus(
			eventId,
			req.user!.id,
			status,
		);
		res.json(event);
	} catch (err) {
		next(err);
	}
}

export async function updateEventHandler(
	req: AuthenticatedRequest,
	res: Response,
	next: NextFunction,
) {
	try {
		const { eventId } = eventIdParamSchema.parse(req.params);
		const input = updateEventSchema.parse(req.body);
		const event = await eventsService.updateEvent(
			eventId,
			req.user!.id,
			input,
		);
		res.json(event);
	} catch (err) {
		next(err);
	}
}

export async function updateTicketTypeHandler(
	req: AuthenticatedRequest,
	res: Response,
	next: NextFunction,
) {
	try {
		const { ticketTypeId } = ticketTypeIdParamSchema.parse(req.params);
		const input = updateTicketTypeSchema.parse(req.body);
		const ticketType = await eventsService.updateTicketType(
			ticketTypeId,
			req.user!.id,
			input,
		);
		res.json(ticketType);
	} catch (err) {
		next(err);
	}
}

export async function createGatekeeperHandler(
	req: AuthenticatedRequest,
	res: Response,
	next: NextFunction,
) {
	try {
		const { eventId } = eventIdParamSchema.parse(req.params);
		await eventsService.assertOrganizerOwnsEvent(eventId, req.user!.id);
		const input = gatekeeperSchema.parse(req.body);
		const gatekeeper = await authService.createGatekeeper(input);

		const { prisma } = await import("../../prisma-client");
		await prisma.eventGatekeeper.create({
			data: { eventId, gatekeeperId: gatekeeper.id },
		});

		res.status(201).json(gatekeeper);
	} catch (err) {
		next(err);
	}
}
