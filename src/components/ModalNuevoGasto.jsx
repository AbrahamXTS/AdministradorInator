import IconoCerrarModal from "../img/cerrar.svg";
import { Mensaje } from "./Mensaje";
import { useState, useEffect } from "react";

export const ModalNuevoGasto = ({
	setModalNuevoGasto,
	animarModal,
	setAnimarModal,
	guardarNuevoGasto,
	gastoAEditar,
	setGastoAEditar
}) => {
	const [nombre, setNombre] = useState("");
	const [gasto, setGasto] = useState("");
	const [categoria, setCategoria] = useState("");
	const [mensaje, setMensaje] = useState("");
	const [id, setId] = useState("");
	const [fecha, setFecha] = useState("");

	useEffect(() => {
		if (Object.keys(gastoAEditar).length > 0) {
			// Si existe un gasto que se pretende editar
			setId(gastoAEditar.id)
			setNombre(gastoAEditar.nombre);
			setGasto(gastoAEditar.gasto);
			setCategoria(gastoAEditar.categoria);
			setFecha(gastoAEditar.fecha);
		}
	}, [gastoAEditar]);

	const handleCerrarModal = () => {
		setGastoAEditar({});
		setAnimarModal(false);

		setTimeout(() => {
			setModalNuevoGasto(false);
		}, 300);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if ([nombre, gasto, categoria].includes("")) {
			setMensaje("Todos los campos son obligatorios");
			setTimeout(() => setMensaje(""), 2000);
		} else {
			const datosDelNuevoGasto = { id, nombre, gasto, categoria, fecha };
			guardarNuevoGasto(datosDelNuevoGasto);
		}
	};

	return (
		<div className="modal">
			<div className="cerrar-modal">
				<img
					alt="Cerrar modal"
					src={IconoCerrarModal}
					onClick={handleCerrarModal}
				/>
			</div>
			{mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
			<form
				onSubmit={handleSubmit}
				className={`formulario ${animarModal ? "animar" : "cerrar"}`}
			>
				<legend>{gastoAEditar.nombre ? "Editar gasto" : "Nuevo gasto"}</legend>
				<div className="campo">
					<label htmlFor="Gasto">Nombre del gasto: </label>
					<input
						id="Gasto"
						type="text"
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
						placeholder="Añade el nombre del gasto"
					/>
				</div>
				<div className="campo">
					<label htmlFor="Cantidad">Cantidad: </label>
					<input
						min={0}
						type="number"
						id="Cantidad"
						value={gasto}
						onChange={(e) => setGasto(Number(e.target.value))}
						placeholder="Añade la cantidad del gasto"
					/>
				</div>
				<div className="campo">
					<label htmlFor="Categoria">Categoría del gasto: </label>
					<select
						id="Categoria"
						value={categoria}
						onChange={(e) => setCategoria(e.target.value)}
					>
						<option value="" disabled defaultValue>
							{" "}
							-- Seleccione --{" "}
						</option>
						<option value="Casa">Casa</option>
						<option value="Salud">Salud</option>
						<option value="Ahorro">Ahorro</option>
						<option value="Comida">Comida</option>
						<option value="Generales">Generales</option>
						<option value="Suscripciones">Suscripciones</option>
						<option value="Entretenimiento">Entretenimiento</option>
					</select>
				</div>
				<input
					type="submit"
					value={gastoAEditar.nombre ? "Editar gasto" : "Nuevo gasto"}
				/>
			</form>
		</div>
	);
};
