import IconoCerrarModal from "../img/cerrar.svg";
import { generarIdentificador }  from "../helpers/generarIdentificador"
import { formateadorDeFecha } from '../helpers/formateadorDeFecha';
import { Mensaje } from './Mensaje';
import { useState } from "react";

export const ModalNuevoGasto = ({setModalNuevoGasto, animarModal,setAnimarModal, guardarNuevoGasto}) => {

	const [nombre, setNombre] = useState("");
	const [gasto, setGasto] = useState("");
	const [categoria, setCategoria] = useState("");
	const [mensaje, setMensaje] = useState("");

	const handleCerrarModal = () => {
		setAnimarModal(false);

		setTimeout(() => {
			setModalNuevoGasto(false);
		}, 300);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		
		if([nombre, gasto, categoria].includes("")) {
			setMensaje("Todos los campos son obligatorios");
			setTimeout(() => setMensaje(""), 2000);
		} else {
			const id = generarIdentificador();
			const fecha = formateadorDeFecha();
			const datosDelNuevoGasto = {id, nombre, gasto, categoria, fecha}
			guardarNuevoGasto(datosDelNuevoGasto);
		}
	}

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
				// Si animarModal está igual a true, entonces agregamos las clases
				className={`formulario ${animarModal ? "animar" : "cerrar"}`}
			>
				<legend>Nuevo Gasto</legend>
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
				<input type="submit" value="Añadir gasto" />
			</form>
		</div>
	);
};
