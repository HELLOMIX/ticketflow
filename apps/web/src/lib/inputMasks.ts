export function onlyDigits(value: string) {
	return value.replace(/\D/g, "");
}

export function formatCPF(value: string) {
	const digits = onlyDigits(value).slice(0, 11);
	return digits
		.replace(/(\d{3})(\d)/, "$1.$2")
		.replace(/(\d{3})(\d)/, "$1.$2")
		.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

export function formatPhone(value: string) {
	const digits = onlyDigits(value).slice(0, 11);
	if (digits.length <= 10) {
		return digits
			.replace(/(\d{2})(\d)/, "($1) $2")
			.replace(/(\d{4})(\d)/, "$1-$2");
	}
	return digits
		.replace(/(\d{2})(\d)/, "($1) $2")
		.replace(/(\d{5})(\d)/, "$1-$2");
}

export function formatCardNumber(value: string) {
	const digits = onlyDigits(value).slice(0, 16);
	return digits.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
}

export function formatCardExpiry(value: string) {
	const digits = onlyDigits(value).slice(0, 4);
	if (digits.length <= 2) return digits;
	return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

export function formatCVV(value: string) {
	return onlyDigits(value).slice(0, 4);
}

export function formatAccessCode(value: string) {
	return value.toUpperCase().replace(/\s/g, "").slice(0, 20);
}
