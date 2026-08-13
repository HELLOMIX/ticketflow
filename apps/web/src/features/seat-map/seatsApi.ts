import { useCallback, useEffect, useState } from "react";
import { api, extractApiErrorMessage } from "../../lib/api";

export type SeatStatus = "AVAILABLE" | "RESERVED" | "SOLD" | "BLOCKED";
export type SeatType =
	| "STANDARD"
	| "WHEELCHAIR"
	| "COMPANION"
	| "OBESE"
	| "REDUCED_MOBILITY";

export type SeatDTO = {
	id: string;
	rowLabel: string;
	seatNumber: number;
	gridX: number;
	gridY: number;
	seatType: SeatType;
	status: SeatStatus;
	reservedByMe: boolean;
};

export type SeatRow = { rowLabel: string; seats: SeatDTO[]; gridY: number };

export function useSeatMap(eventId: string) {
	const [rows, setRows] = useState<SeatRow[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const load = useCallback(async () => {
		setLoading(true);
		try {
			const { data } = await api.get<{ rows: SeatRow[] }>(
				`/events/${eventId}/seats`,
			);
			setRows(data.rows);
			setError(null);
		} catch {
			setError("Não foi possível carregar o mapa de assentos.");
		} finally {
			setLoading(false);
		}
	}, [eventId]);

	useEffect(() => {
		load();
	}, [load]);

	return { rows, loading, error, refetch: load };
}

export async function reserveSeats(eventId: string, seatIds: string[]) {
	const { data } = await api.post<{
		reserved: string[];
		expiresInMinutes: number;
	}>(`/events/${eventId}/seats/reserve`, { seatIds });
	return data;
}

export { extractApiErrorMessage };
