import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { BackHeader } from "../../components/ui/Header";
import Button from "../../components/ui/Button";
import {
	createEvent,
	fetchCatalog,
	searchCatalog,
	extractApiErrorMessage,
	type CatalogItem,
	type CreateEventPayload,
	fetchOrganizerEvent,
	updateEvent,
	updateTicketType,
} from "./organizerApi";

type Props = {
	eventId?: string; // presente = modo edição
	onBack: () => void;
	onSave: () => void;
};

const EVENT_TYPES: Array<{
	value: CreateEventPayload["eventType"];
	label: string;
}> = [
	{ value: "SHOW", label: "Show" },
	{ value: "MOVIE", label: "Cinema" },
	{ value: "THEATER", label: "Teatro" },
	{ value: "FESTIVAL", label: "Festival" },
	{ value: "OTHER", label: "Outro" },
];

const STATUS_OPTIONS: Array<{
	value: "DRAFT" | "PUBLISHED" | "CANCELLED";
	label: string;
}> = [
	{ value: "PUBLISHED", label: "Publicado" },
	{ value: "DRAFT", label: "Rascunho" },
	{ value: "CANCELLED", label: "Cancelado" },
];

type TicketTypeForm = {
	id?: string;
	name: string;
	price: string;
	quantityAvailable: string;
};

function toLocalDatetimeInput(iso: string) {
	const date = new Date(iso);
	const offset = date.getTimezoneOffset();
	const local = new Date(date.getTime() - offset * 60 * 1000);
	return local.toISOString().slice(0, 16);
}

export default function EventFormScreen({ eventId, onBack, onSave }: Props) {
	const isEditing = Boolean(eventId);

	const [loadingEvent, setLoadingEvent] = useState(isEditing);
	const [venueSummary, setVenueSummary] = useState<{
		name: string;
		address: string;
		hasAssignedSeats: boolean;
	} | null>(null);

	const [source, setSource] = useState<"manual" | "catalog">("manual");
	const [catalog, setCatalog] = useState<CatalogItem[]>([]);
	const [catalogLoading, setCatalogLoading] = useState(false);
	const [selectedCatalogItem, setSelectedCatalogItem] =
		useState<CatalogItem | null>(null);

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [bannerUrl, setBannerUrl] = useState("");
	const [eventType, setEventType] =
		useState<CreateEventPayload["eventType"]>("SHOW");
	const [startTime, setStartTime] = useState("");
	const [status, setStatus] = useState<"DRAFT" | "PUBLISHED" | "CANCELLED">(
		"PUBLISHED",
	);

	const [venueName, setVenueName] = useState("");
	const [venueAddress, setVenueAddress] = useState("");
	const [hasAssignedSeats, setHasAssignedSeats] = useState(false);
	const [totalCapacity, setTotalCapacity] = useState("100");
	const [seatRows, setSeatRows] = useState("10");
	const [seatsPerRow, setSeatsPerRow] = useState("10");

	const [ticketTypes, setTicketTypes] = useState<TicketTypeForm[]>([
		{ name: "Inteira", price: "0", quantityAvailable: "100" },
	]);

	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const [catalogQuery, setCatalogQuery] = useState("");

	useEffect(() => {
		if (!eventId) return;
		setLoadingEvent(true);
		fetchOrganizerEvent(eventId)
			.then((event: any) => {
				setTitle(event.title);
				setDescription(event.description ?? "");
				setBannerUrl(event.bannerUrl ?? "");
				setEventType(event.eventType);
				setStartTime(toLocalDatetimeInput(event.startTime));
				setStatus(event.status);
				setVenueSummary({
					name: event.venue.name,
					address: event.venue.address,
					hasAssignedSeats: event.venue.hasAssignedSeats,
				});
				setTicketTypes(
					event.ticketTypes.map((t: any) => ({
						id: t.id,
						name: t.name,
						price: String(t.price),
						quantityAvailable: String(t.quantityAvailable),
					})),
				);
			})
			.catch(() =>
				setError("Não foi possível carregar os dados do evento."),
			)
			.finally(() => setLoadingEvent(false));
	}, [eventId]);

	useEffect(() => {
		if (isEditing || source !== "catalog" || catalog.length > 0) return;
		setCatalogLoading(true);
		fetchCatalog()
			.then(setCatalog)
			.catch(() =>
				setError("Não foi possível carregar o catálogo do TMDb."),
			)
			.finally(() => setCatalogLoading(false));
	}, [isEditing, source, catalog.length]);

	useEffect(() => {
		if (source !== "catalog") return;

		const timeoutId = setTimeout(() => {
			setCatalogLoading(true);
			(catalogQuery.trim() ? searchCatalog(catalogQuery) : fetchCatalog())
				.then(setCatalog)
				.catch(() =>
					setError("Não foi possível carregar o catálogo do TMDb."),
				)
				.finally(() => setCatalogLoading(false));
		}, 400);

		return () => clearTimeout(timeoutId);
	}, [source, catalogQuery]);

	function applyCatalogItem(item: CatalogItem) {
		setSelectedCatalogItem(item);
		setTitle(item.title);
		setDescription(item.description);
		setBannerUrl(item.banner);
		setEventType("MOVIE");
		if (ticketTypes.length === 1 && !ticketTypes[0].id) {
			setTicketTypes([
				{
					name: "Inteira",
					price: String(item.price),
					quantityAvailable: "100",
				},
			]);
		}
	}

	function updateTicketTypeField(
		index: number,
		field: keyof TicketTypeForm,
		value: string,
	) {
		setTicketTypes((current) =>
			current.map((t, i) => (i === index ? { ...t, [field]: value } : t)),
		);
	}

	function addTicketType() {
		setTicketTypes((current) => [
			...current,
			{ name: "", price: "0", quantityAvailable: "50" },
		]);
	}

	function removeTicketType(index: number) {
		setTicketTypes((current) => current.filter((_, i) => i !== index));
	}

	async function handleCreate() {
		if (!title || !startTime || !venueName || !venueAddress) {
			setError("Preencha título, data, nome e endereço do local.");
			return;
		}
		if (
			ticketTypes.some(
				(t) =>
					!t.name ||
					Number.isNaN(Number(t.price)) ||
					Number.isNaN(Number(t.quantityAvailable)),
			)
		) {
			setError(
				"Revise os tipos de ingresso — nome, preço e quantidade são obrigatórios.",
			);
			return;
		}

		const payload: CreateEventPayload = {
			title,
			description: description || undefined,
			bannerUrl: bannerUrl || undefined,
			eventType,
			startTime: new Date(startTime).toISOString(),
			externalApiSource: selectedCatalogItem ? "TMDB" : undefined,
			externalApiId: selectedCatalogItem?.id,
			status: "PUBLISHED",
			venue: {
				name: venueName,
				address: venueAddress,
				hasAssignedSeats,
				totalCapacity: hasAssignedSeats
					? Number(seatRows) * Number(seatsPerRow)
					: Number(totalCapacity),
				seatMap: hasAssignedSeats
					? {
							rows: Number(seatRows),
							seatsPerRow: Number(seatsPerRow),
						}
					: undefined,
			},
			ticketTypes: ticketTypes.map((t) => ({
				name: t.name,
				price: Number(t.price),
				quantityAvailable: Number(t.quantityAvailable),
			})),
		};

		await createEvent(payload);
	}

	async function handleUpdate() {
		if (!eventId) return;
		if (!title || !startTime) {
			setError("Preencha ao menos título e data.");
			return;
		}

		await updateEvent(eventId, {
			title,
			description: description || undefined,
			bannerUrl: bannerUrl || undefined,
			eventType,
			startTime: new Date(startTime).toISOString(),
			status,
		});

		for (const t of ticketTypes) {
			if (!t.id) continue;
			await updateTicketType(eventId, t.id, {
				price: Number(t.price),
				quantityAvailable: Number(t.quantityAvailable),
			});
		}
	}

	async function handleSubmit() {
		setError(null);
		setSubmitting(true);
		try {
			if (isEditing) await handleUpdate();
			else await handleCreate();
			onSave();
		} catch (err) {
			setError(
				extractApiErrorMessage(
					err,
					"Não foi possível salvar o evento.",
				),
			);
		} finally {
			setSubmitting(false);
		}
	}

	if (loadingEvent) {
		return (
			<div className="flex h-full flex-col bg-neutral-950">
				<BackHeader title="Editar Evento" onBack={onBack} />
				<div className="flex-1 p-4 text-sm text-neutral-500">
					Carregando evento…
				</div>
			</div>
		);
	}

	return (
		<div className="flex h-full flex-col bg-neutral-950">
			<BackHeader
				title={isEditing ? "Editar Evento" : "Criar Evento"}
				onBack={onBack}
			/>
			<div className="flex-1 overflow-y-auto px-4 py-4 md:px-8">
				<div className="mx-auto w-full max-w-3xl space-y-6">
					{!isEditing && (
						<>
							<div>
								<span className="mb-2 block text-sm text-neutral-400">
									Origem do evento
								</span>
								<div className="flex gap-2">
									<button
										type="button"
										onClick={() => setSource("manual")}
										className={`flex-1 rounded-xl px-3 py-2 text-xs font-semibold ${source === "manual" ? "bg-red-500 text-white" : "border border-neutral-800 text-neutral-300"}`}
									>
										Preencher manualmente
									</button>
									<button
										type="button"
										onClick={() => setSource("catalog")}
										className={`flex-1 rounded-xl px-3 py-2 text-xs font-semibold ${source === "catalog" ? "bg-red-500 text-white" : "border border-neutral-800 text-neutral-300"}`}
									>
										Escolher do catálogo (TMDb)
									</button>
								</div>
							</div>

							{source === "catalog" && (
								<div className="space-y-3">
									<input
										value={catalogQuery}
										onChange={(e) =>
											setCatalogQuery(e.target.value)
										}
										placeholder="Buscar filme no TMDb…"
										className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-3 text-sm text-white placeholder:text-neutral-500"
									/>

									{catalogLoading && (
										<p className="text-xs text-neutral-500">
											Buscando…
										</p>
									)}
									{!catalogLoading &&
										catalog.length === 0 && (
											<p className="text-xs text-neutral-500">
												Nenhum filme encontrado.
											</p>
										)}

									<div className="grid grid-cols-2 gap-2">
										{catalog.map((item) => (
											<button
												key={item.id}
												type="button"
												onClick={() =>
													applyCatalogItem(item)
												}
												className={`overflow-hidden rounded-xl border text-left ${selectedCatalogItem?.id === item.id ? "border-amber-400" : "border-neutral-800"}`}
											>
												<img
													src={item.cover}
													alt={item.title}
													className="h-24 w-full object-cover"
												/>
												<p className="truncate p-2 text-xs font-semibold text-white">
													{item.title}
												</p>
											</button>
										))}
									</div>
								</div>
							)}
						</>
					)}

					<div className="space-y-4 border-t border-neutral-800 pt-4">
						<label className="block">
							<span className="mb-2 block text-sm text-neutral-400">
								Nome do evento
							</span>
							<input
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-3 text-sm text-white"
							/>
						</label>

						<label className="block">
							<span className="mb-2 block text-sm text-neutral-400">
								Descrição
							</span>
							<textarea
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								className="min-h-[80px] w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-3 text-sm text-white"
							/>
						</label>

						<label className="block">
							<span className="mb-2 block text-sm text-neutral-400">
								Data e hora
							</span>
							<input
								type="datetime-local"
								value={startTime}
								onChange={(e) => setStartTime(e.target.value)}
								className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-3 text-sm text-white"
							/>
						</label>

						<div>
							<span className="mb-2 block text-sm text-neutral-400">
								Tipo de evento
							</span>
							<div className="flex flex-wrap gap-2">
								{EVENT_TYPES.map((t) => (
									<button
										key={t.value}
										type="button"
										onClick={() => setEventType(t.value)}
										className={`rounded-full px-3 py-1.5 text-xs font-semibold ${eventType === t.value ? "bg-red-500 text-white" : "border border-neutral-700 text-neutral-300"}`}
									>
										{t.label}
									</button>
								))}
							</div>
						</div>

						{isEditing && (
							<div>
								<span className="mb-2 block text-sm text-neutral-400">
									Status
								</span>
								<div className="flex flex-wrap gap-2">
									{STATUS_OPTIONS.map((s) => (
										<button
											key={s.value}
											type="button"
											onClick={() => setStatus(s.value)}
											className={`rounded-full px-3 py-1.5 text-xs font-semibold ${status === s.value ? "bg-red-500 text-white" : "border border-neutral-700 text-neutral-300"}`}
										>
											{s.label}
										</button>
									))}
								</div>
							</div>
						)}
					</div>

					{isEditing ? (
						venueSummary && (
							<div className="space-y-2 border-t border-neutral-800 pt-4">
								<h3 className="font-semibold text-white">
									Local
								</h3>
								<p className="text-sm text-neutral-300">
									{venueSummary.name}
								</p>
								<p className="text-xs text-neutral-500">
									{venueSummary.address}
								</p>
								<p className="text-xs text-neutral-600">
									O local não pode ser alterado depois que o
									evento é criado, para preservar a
									integridade dos assentos e ingressos já
									emitidos.
								</p>
							</div>
						)
					) : (
						<div className="space-y-4 border-t border-neutral-800 pt-4">
							<h3 className="font-semibold text-white">Local</h3>
							<label className="block">
								<span className="mb-2 block text-sm text-neutral-400">
									Nome do local
								</span>
								<input
									value={venueName}
									onChange={(e) =>
										setVenueName(e.target.value)
									}
									className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-3 text-sm text-white"
								/>
							</label>
							<label className="block">
								<span className="mb-2 block text-sm text-neutral-400">
									Endereço
								</span>
								<input
									value={venueAddress}
									onChange={(e) =>
										setVenueAddress(e.target.value)
									}
									className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-3 text-sm text-white"
								/>
							</label>

							<label className="flex items-center gap-2 text-sm text-neutral-300">
								<input
									type="checkbox"
									checked={hasAssignedSeats}
									onChange={(e) =>
										setHasAssignedSeats(e.target.checked)
									}
								/>
								Este evento tem assentos numerados
								(cinema/teatro)
							</label>

							{hasAssignedSeats ? (
								<div className="flex gap-3">
									<label className="block flex-1">
										<span className="mb-2 block text-sm text-neutral-400">
											Fileiras
										</span>
										<input
											type="number"
											min={1}
											value={seatRows}
											onChange={(e) =>
												setSeatRows(e.target.value)
											}
											className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-3 text-sm text-white"
										/>
									</label>
									<label className="block flex-1">
										<span className="mb-2 block text-sm text-neutral-400">
											Assentos por fileira
										</span>
										<input
											type="number"
											min={1}
											value={seatsPerRow}
											onChange={(e) =>
												setSeatsPerRow(e.target.value)
											}
											className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-3 text-sm text-white"
										/>
									</label>
								</div>
							) : (
								<label className="block">
									<span className="mb-2 block text-sm text-neutral-400">
										Capacidade total
									</span>
									<input
										type="number"
										min={1}
										value={totalCapacity}
										onChange={(e) =>
											setTotalCapacity(e.target.value)
										}
										className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-3 text-sm text-white"
									/>
								</label>
							)}
						</div>
					)}

					<div className="space-y-3 border-t border-neutral-800 pt-4">
						<div className="flex items-center justify-between">
							<h3 className="font-semibold text-white">
								Tipos de ingresso
							</h3>
							{!isEditing && (
								<button
									type="button"
									onClick={addTicketType}
									className="text-xs font-semibold text-amber-300"
								>
									+ Adicionar
								</button>
							)}
						</div>

						{isEditing && (
							<p className="text-xs text-neutral-600">
								Só é possível ajustar preço e quantidade dos
								tipos existentes por aqui — criar novos tipos de
								ingresso não é suportado após a publicação.
							</p>
						)}

						{ticketTypes.map((t, idx) => (
							<div
								key={t.id ?? idx}
								className="flex items-end gap-2 rounded-xl border border-neutral-800 p-3"
							>
								<label className="block flex-1">
									<span className="mb-1 block text-xs text-neutral-500">
										Nome
									</span>
									<input
										value={t.name}
										disabled={isEditing}
										onChange={(e) =>
											updateTicketTypeField(
												idx,
												"name",
												e.target.value,
											)
										}
										className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-2.5 py-2 text-sm text-white disabled:opacity-60"
									/>
								</label>
								<label className="block w-20">
									<span className="mb-1 block text-xs text-neutral-500">
										Preço
									</span>
									<input
										type="number"
										min={0}
										value={t.price}
										onChange={(e) =>
											updateTicketTypeField(
												idx,
												"price",
												e.target.value,
											)
										}
										className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-2.5 py-2 text-sm text-white"
									/>
								</label>
								<label className="block w-20">
									<span className="mb-1 block text-xs text-neutral-500">
										Qtd.
									</span>
									<input
										type="number"
										min={1}
										value={t.quantityAvailable}
										onChange={(e) =>
											updateTicketTypeField(
												idx,
												"quantityAvailable",
												e.target.value,
											)
										}
										className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-2.5 py-2 text-sm text-white"
									/>
								</label>
								{!isEditing && ticketTypes.length > 1 && (
									<button
										type="button"
										onClick={() => removeTicketType(idx)}
										className="pb-2 text-red-400"
									>
										<FontAwesomeIcon icon={faXmark} />
									</button>
								)}
							</div>
						))}
					</div>

					{error && <p className="text-sm text-red-400">{error}</p>}
				</div>
			</div>

			<div className="border-t border-neutral-800 mx-auto w-full max-w-3xl space-y-6 px-4 py-4">
				<Button
					variant="secondary"
					onClick={handleSubmit}
					disabled={submitting}
				>
					{submitting
						? "Salvando…"
						: isEditing
							? "Salvar alterações"
							: "Publicar evento"}
				</Button>
			</div>
		</div>
	);
}
