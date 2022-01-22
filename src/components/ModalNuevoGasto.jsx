import IconoCerrarModal from "../img/cerrar.svg";

export const ModalNuevoGasto = ({
	setModalNuevoGasto,
	animarModal,
	setAnimarModal,
}) => {
	const handleCerrarModal = () => {
		setAnimarModal(false);

		setTimeout(() => {
			setModalNuevoGasto(false);
		}, 300);
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
			// Si animarModal está igual a true, entonces agregamos las clases
			<form
				action=""
				className={`formulario ${animarModal ? "animar" : "cerrar"}`}
			>
				<legend>Nuevo Gasto</legend>
				<div className="campo">
					<label htmlFor="Gasto">Nombre del gasto: </label>
					<input
						required
						id="Gasto"
						type="text"
						placeholder="Añade el nombre del gasto"
					/>
				</div>
				<div className="campo">
					<label htmlFor="Cantidad">Cantidad: </label>
					<input
						required
						type="number"
						id="Cantidad"
						placeholder="Añade la cantidad del gasto"
					/>
				</div>
				<div className="campo">
					<label htmlFor="Categoria">Categoría del gasto: </label>
					<select id="Categoria" required>
						<option value="" disabled selected>
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
