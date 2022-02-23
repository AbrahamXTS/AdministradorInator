export const formateadorDeFecha = () => {
	const fechaConfig = { year: "numeric", month: "long", day: "2-digit" };
	const fecha = new Date().toLocaleDateString("es-ES", fechaConfig);

	return fecha;
};
