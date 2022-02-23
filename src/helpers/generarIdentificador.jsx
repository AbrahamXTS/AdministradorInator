export const generarIdentificador = () => {
	const p1 = Math.random().toString(36).substring(2);

	const p2 = Date.now().toString(36);

	return p1 + p2;
};
