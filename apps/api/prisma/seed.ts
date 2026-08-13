import { prisma } from "../src/prisma-client";
import bcrypt from "bcryptjs";
import { randomUUID, randomBytes } from "crypto";

async function upsertRole(name: string) {
	return prisma.role.upsert({
		where: { name },
		update: {},
		create: { name },
	});
}

function accessCode() {
	return `TKT-${randomBytes(4).toString("hex").toUpperCase()}`;
}

async function main() {
<<<<<<< HEAD
	const existingEvent = await prisma.event.findFirst();
	if (existingEvent) {
		console.log("Seed já aplicado anteriormente, pulando.");
		return;
	}

=======
>>>>>>> 9537621e1bcd97fb1a478806aaadc32d28f08e4b
	const [organizerRole, clientRole, gateRole] = await Promise.all([
		upsertRole("ORGANIZER"),
		upsertRole("CLIENT"),
		upsertRole("GATE"),
	]);

	const passwordHash = await bcrypt.hash("123456", 10);

	const organizer = await prisma.user.upsert({
		where: { email: "organizador@ticketflow.com" },
		update: {},
		create: {
			roleId: organizerRole.id,
			name: "Cinepolis Produções",
			email: "organizador@ticketflow.com",
			passwordHash,
			cpf: "00000000001",
		},
	});

	const client1 = await prisma.user.upsert({
		where: { email: "cliente1@ticketflow.com" },
		update: {},
		create: {
			roleId: clientRole.id,
			name: "Ana Cliente",
			email: "cliente1@ticketflow.com",
			passwordHash,
			cpf: "00000000002",
		},
	});

	const client2 = await prisma.user.upsert({
		where: { email: "cliente2@ticketflow.com" },
		update: {},
		create: {
			roleId: clientRole.id,
			name: "Bruno Cliente",
			email: "cliente2@ticketflow.com",
			passwordHash,
			cpf: "00000000003",
		},
	});

	const gatekeeper = await prisma.user.upsert({
		where: { email: "portaria@ticketflow.com" },
		update: {},
		create: {
			roleId: gateRole.id,
			name: "Porteiro Principal",
			email: "portaria@ticketflow.com",
			passwordHash,
			cpf: "00000000004",
		},
	});

	// Sala pequena de demonstração: 5 fileiras x 8 assentos
	const venue = await prisma.venue.create({
		data: {
			name: "Cinepolis Paulista - Sala 3",
			address: "Av. Paulista, 1000 - São Paulo",
			hasAssignedSeats: true,
			totalCapacity: 40,
		},
	});

	const seatsData = [];
	for (let row = 1; row <= 5; row += 1) {
		for (let col = 1; col <= 8; col += 1) {
			seatsData.push({
				venueId: venue.id,
				rowLabel: String.fromCharCode(64 + row), // A, B, C, D, E
				seatNumber: col,
				gridX: col,
				gridY: row,
				seatType: col === 1 ? "WHEELCHAIR" : "STANDARD",
			});
		}
	}
	await prisma.seat.createMany({ data: seatsData });
	const seats = await prisma.seat.findMany({ where: { venueId: venue.id } });

	const event = await prisma.event.create({
		data: {
			organizerId: organizer.id,
			venueId: venue.id,
			title: "Dune: Parte Três",
			description: "Sessão de estreia, com assentos numerados.",
			eventType: "MOVIE",
			startTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // daqui 7 dias
			status: "PUBLISHED",
		},
	});

	await prisma.eventGatekeeper.create({
		data: { eventId: event.id, gatekeeperId: gatekeeper.id },
	});

	const ticketType = await prisma.ticketType.create({
		data: {
			eventId: event.id,
			name: "Inteira",
			price: 48,
			quantityAvailable: seats.length,
		},
	});

	// Vende 2 assentos de exemplo pra já ter ingresso pra testar "Meus ingressos" e portaria
	const [seatA, seatB] = seats;
	for (const [seat, buyer] of [
		[seatA, client1],
		[seatB, client2],
	] as const) {
		await prisma.eventSeat.create({
			data: { eventId: event.id, seatId: seat.id, status: "SOLD" },
		});
		await prisma.ticket.create({
			data: {
				eventId: event.id,
				ticketTypeId: ticketType.id,
				buyerId: buyer.id,
				seatId: seat.id,
				buyerName: buyer.name,
				accessCode: accessCode(),
				qrCodeToken: randomUUID(), // placeholder — Fase 3 troca por token assinado (HMAC) real
				shareToken: randomUUID(),
			},
		});
	}

	console.log("✅ Seed concluído");
	console.log("Organizador: organizador@ticketflow.com / 123456");
	console.log("Cliente 1:   cliente1@ticketflow.com / 123456");
	console.log("Cliente 2:   cliente2@ticketflow.com / 123456");
	console.log("Portaria:    portaria@ticketflow.com / 123456");
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(() => prisma.$disconnect());
