export const darFormatoDeMoneda = (cantidad) => {
	return cantidad.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
	});
};
