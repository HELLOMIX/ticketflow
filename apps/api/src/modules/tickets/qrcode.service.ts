import { createHmac, randomBytes, timingSafeEqual } from "crypto";
import { env } from "../../config/env";

type QrPayload = {
	ticketId: string;
	eventId: string;
	seatId: string | null;
};

function sign(data: string): string {
	return createHmac("sha256", env.QR_SIGNING_SECRET)
		.update(data)
		.digest("hex");
}

export function generateQrToken(payload: QrPayload): string {
	const data = `${payload.ticketId}.${payload.eventId}.${payload.seatId ?? "GA"}`;
	const signature = sign(data);
	return Buffer.from(`${data}.${signature}`).toString("base64url");
}

export function verifyQrToken(token: string): QrPayload | null {
	try {
		const decoded = Buffer.from(token, "base64url").toString("utf-8");
		const parts = decoded.split(".");
		if (parts.length !== 4) return null;

		const [ticketId, eventId, seatPart, signature] = parts;
		const expectedSignature = sign(`${ticketId}.${eventId}.${seatPart}`);

		const sigBuffer = Buffer.from(signature);
		const expectedBuffer = Buffer.from(expectedSignature);
		if (sigBuffer.length !== expectedBuffer.length) return null;
		if (!timingSafeEqual(sigBuffer, expectedBuffer)) return null;

		return {
			ticketId,
			eventId,
			seatId: seatPart === "GA" ? null : seatPart,
		};
	} catch {
		return null;
	}
}

export function generateAccessCode(): string {
	return `TKT-${randomBytes(4).toString("hex").toUpperCase()}`;
}

export function generateShareToken(): string {
	return randomBytes(16).toString("hex");
}
