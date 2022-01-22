import { useState } from "react";
import { Mensaje } from "./Mensaje";

export const NuevoPrespuesto = ({
	presupuesto,
	setPresupuesto,
	setEsPresupuestoValido,
}) => {
	const [mensaje, setMensaje] = useState("");

	const handlePresupuesto = (event) => {
		event.preventDefault();

		// Si no es un número:
		if (presupuesto <= 0) {
			setMensaje("No es un presupuesto valido");
			return;
		}

		// Eliminamos el error (En caso de que haya pasado la validación):
		setMensaje("");
		setEsPresupuestoValido(true);
	};

	return (
		<div className="contenedor-presupuesto contenedor sombra">
			<form action="" className="formulario" onSubmit={handlePresupuesto}>
				<div className="campo">
					<label htmlFor="">Definir Presupuesto</label>
					<input
						type="number"
						value={presupuesto}
						className="nuevo-presupuesto"
						placeholder="Añade tu prespuesto"
						onChange={(e) => setPresupuesto(Number(e.target.value))}
					/>
				</div>
				<input type="submit" value="Añadir" />
				{mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
			</form>
		</div>
	);
};
