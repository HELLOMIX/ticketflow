export class AppError extends Error {
	constructor(
		public statusCode: number,
		message: string,
	) {
		super(message);
		this.name = "AppError";
	}
}

export class UnauthorizedError extends AppError {
	constructor(message = "Não autenticado") {
		super(401, message);
	}
}

export class ForbiddenError extends AppError {
	constructor(message = "Sem permissão para este recurso") {
		super(403, message);
	}
}

export class ConflictError extends AppError {
	constructor(message = "Recurso já existe") {
		super(409, message);
	}
}
