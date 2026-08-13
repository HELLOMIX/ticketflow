import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
	PORT: z.coerce.number().default(4000),
	DATABASE_URL: z.string().min(1, "file:./dev.db"),
	JWT_SECRET: z
		.string()
		.min(16, "JWT_SECRET precisa ter pelo menos 16 caracteres"),
	TMDB_BEARER_TOKEN: z.string().min(1, "SUA CHAVE API TMDB"),
	QR_SIGNING_SECRET: z
		.string()
		.min(16, "QR_SIGNING_SECRET precisa ter pelo menos 16 caracteres"),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
	console.error(
		"❌ Variáveis de ambiente inválidas:",
		parsed.error.flatten().fieldErrors,
	);
	process.exit(1);
}

export const env = parsed.data;
