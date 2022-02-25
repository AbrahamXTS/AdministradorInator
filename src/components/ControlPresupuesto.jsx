import { useState, useEffect } from "react";
import { darFormatoDeMoneda } from "../helpers/formateadorDeMoneda";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const ControlPresupuesto = ({
	presupuesto,
	setPresupuesto,
	todosLosGastos,
	setTodosLosGastos,
	setEsPresupuestoValido,
}) => {
	const [porcentaje, setPorcentaje] = useState(0);
	const [disponible, setDisponible] = useState(0);
	const [gastado, setGastado] = useState(0);

	useEffect(() => {
		const totalGastado = todosLosGastos.reduce(
			(total, gasto) => total + gasto.gasto,
			0
		);

		const totalDisponible = presupuesto - totalGastado;
		const nuevoPorcentaje = (
			((presupuesto - totalDisponible) / presupuesto) *
			100
		).toFixed(0);

		setDisponible(totalDisponible);
		setGastado(totalGastado);

		setTimeout(() => setPorcentaje(nuevoPorcentaje), 800);
	}, [todosLosGastos]);

	const handleResetApp = () => {
		const resultado = confirm("¿Está seguro que desea borrar los datos?");
		if (resultado) {
			setPresupuesto(0);
			setTodosLosGastos([]);
			setEsPresupuestoValido(false);
		}
	};

	return (
		<div className="contenedor-presupuesto contenedor sombra dos-columnas">
			<div className="">
				<CircularProgressbar
					value={porcentaje}
					styles={
						porcentaje >= 70
							? buildStyles({
									pathColor: "#ee5253",
									textColor: "#ee5253",
							  })
							: buildStyles({ pathColor: "#3B82F6" })
					}
					text={`Gastado: ${porcentaje}%`}
				/>
			</div>
			<div className="contenido-presupuesto">
				<button className="reset-app" type="button" onClick={handleResetApp}>
					Resetear App
				</button>
				<p>
					<span>Presupuesto:</span> {darFormatoDeMoneda(presupuesto)}
				</p>
				<p className={porcentaje >= 70 ? "negativo" : ""}>
					<span>Disponible:</span> {darFormatoDeMoneda(disponible)}
				</p>
				<p>
					<span>Gastado:</span> {darFormatoDeMoneda(gastado)}
				</p>
			</div>
		</div>
	);
};
