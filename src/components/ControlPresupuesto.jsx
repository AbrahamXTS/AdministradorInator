import { useState, useEffect } from "react";
import { darFormatoDeMoneda } from "../helpers/formateadorDeMoneda";

export const ControlPresupuesto = ({ presupuesto, todosLosGastos }) => {
	
	const [disponible, setDisponible] = useState(0);
	const [gastado, setGastado] = useState(0);

	useEffect(() => {
		const totalGastado = todosLosGastos.reduce(
			(total, gasto) => total + gasto.gasto,
			0
		);

		const totalDisponible = presupuesto - totalGastado;

		setDisponible(totalDisponible);
		setGastado(totalGastado);
	}, [todosLosGastos]);

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
					<span>Disponible:</span> {darFormatoDeMoneda(disponible)}
				</p>
				<p>
					<span>Gastado:</span> {darFormatoDeMoneda(gastado)}
				</p>
			</div>
		</div>
	);
};
