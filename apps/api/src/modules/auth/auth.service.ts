import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../../prisma-client";
import { env } from "../../config/env";
import { ConflictError, UnauthorizedError } from "../../shared/errors/AppError";

export type AppRole = "ORGANIZER" | "CLIENT" | "GATE";

export type RegisterInput = {
	name: string;
	email: string;
	password: string;
	cpf: string;
	phone?: string;
	birthDate?: string;
	role: "CLIENT" | "ORGANIZER"; // GATE não se auto-registra, ver createGatekeeper
};

export type UpdateProfileInput = Partial<{
	name: string;
	phone: string;
	profilePictureUrl: string;
}>;

export type LoginInput = {
	email: string;
	password: string;
};

const TOKEN_EXPIRES_IN = "8h";

async function getRoleByName(name: AppRole) {
	const role = await prisma.role.findUnique({ where: { name } });
	if (!role) {
		throw new Error(`Role "${name}" não está seedada no banco`);
	}
	return role;
}

function generateToken(user: { id: string; role: { name: string } }) {
	return jwt.sign({ sub: user.id, role: user.role.name }, env.JWT_SECRET, {
		expiresIn: TOKEN_EXPIRES_IN,
	});
}

function toPublicUser(user: {
	id: string;
	name: string;
	email: string;
	role: { name: string };
}) {
	return {
		id: user.id,
		name: user.name,
		email: user.email,
		role: user.role.name,
	};
}

export async function register(input: RegisterInput) {
	const existing = await prisma.user.findFirst({
		where: { OR: [{ email: input.email }, { cpf: input.cpf }] },
	});
	if (existing) {
		throw new ConflictError("Já existe uma conta com este e-mail ou CPF");
	}

	const role = await getRoleByName(input.role);
	const passwordHash = await bcrypt.hash(input.password, 10);

	const user = await prisma.user.create({
		data: {
			roleId: role.id,
			name: input.name,
			email: input.email,
			passwordHash,
			cpf: input.cpf,
			phone: input.phone,
			birthDate: input.birthDate,
		},
		include: { role: true },
	});

	return { token: generateToken(user), user: toPublicUser(user) };
}

export async function login(input: LoginInput) {
	const user = await prisma.user.findUnique({
		where: { email: input.email },
		include: { role: true },
	});

	if (!user) throw new UnauthorizedError("E-mail ou senha inválidos");

	const passwordMatches = await bcrypt.compare(
		input.password,
		user.passwordHash,
	);
	if (!passwordMatches)
		throw new UnauthorizedError("E-mail ou senha inválidos");

	return { token: generateToken(user), user: toPublicUser(user) };
}

export async function updateProfile(userId: string, input: UpdateProfileInput) {
	const user = await prisma.user.update({
		where: { id: userId },
		data: {
			name: input.name,
			phone: input.phone,
			profilePictureUrl: input.profilePictureUrl,
		},
		include: { role: true },
	});

	return {
		id: user.id,
		name: user.name,
		email: user.email,
		role: user.role.name,
		phone: user.phone,
		profilePictureUrl: user.profilePictureUrl,
	};
}

export async function createGatekeeper(input: {
	name: string;
	email: string;
	password: string;
	cpf: string;
	phone?: string;
}) {
	const existing = await prisma.user.findFirst({
		where: { OR: [{ email: input.email }, { cpf: input.cpf }] },
	});
	if (existing) {
		throw new ConflictError("Já existe uma conta com este e-mail ou CPF");
	}

	const role = await getRoleByName("GATE");
	const passwordHash = await bcrypt.hash(input.password, 10);

	const user = await prisma.user.create({
		data: {
			roleId: role.id,
			name: input.name,
			email: input.email,
			passwordHash,
			cpf: input.cpf,
			phone: input.phone,
		},
		include: { role: true },
	});

	return toPublicUser(user);
}

export async function getUserById(id: string) {
	const user = await prisma.user.findUnique({
		where: { id },
		include: { role: true },
	});
	if (!user) throw new UnauthorizedError("Usuário não encontrado");
	return toPublicUser(user);
}
