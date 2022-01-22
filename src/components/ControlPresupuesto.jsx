export const ControlPresupuesto = ({ presupuesto }) => {
    
	const darFormatoDeMoneda = (cantidad) => {
		return cantidad.toLocaleString("en-US", {
			style: "currency",
			currency: "USD",
		});
	};

	return (
		<div className="contenedor-presupuesto contenedor sombra dos-columnas">
			<div className="">
				<p>Grafica aquí</p>
			</div>
			<div className="contenido-presupuesto">
				<p>
					<span>Presupuesto:</span> {darFormatoDeMoneda(presupuesto)}
				</p>
				<p>
					<span>Disponible:</span> {darFormatoDeMoneda(0)}
				</p>
				<p>
					<span>Gastado:</span> {darFormatoDeMoneda(0)}
				</p>
			</div>
		</div>
	);
};
