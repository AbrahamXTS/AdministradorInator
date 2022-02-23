import { useState } from "react";
import { Header } from "./components/Header";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import { ModalNuevoGasto } from "./components/ModalNuevoGasto";
import ListadoDeGastos from "./components/ListadoDeGastos";

function App() {
	const [presupuesto, setPresupuesto] = useState(0);
	const [esPresupuestoValido, setEsPresupuestoValido] = useState(false);

	const [modalNuevoGasto, setModalNuevoGasto] = useState(false);
	const [animarModal, setAnimarModal] = useState(false);

	const [todosLosGastos, setTodosLosGastos] = useState([]);

	const handleNuevoGasto = () => {
		setModalNuevoGasto(true);

		setTimeout(() => {
			setAnimarModal(true);
		}, 300);
	};

	const guardarNuevoGasto = (datosDelNuevoGasto) => {
		setTodosLosGastos([...todosLosGastos, datosDelNuevoGasto]);

		setAnimarModal(false);

		setTimeout(() => {
			setModalNuevoGasto(false);
		}, 300);
	};

	return (
		<div className={modalNuevoGasto ? "fijar" : ""}>
			<Header
				todosLosGastos={todosLosGastos}
				presupuesto={presupuesto}
				setPresupuesto={setPresupuesto}
				esPresupuestoValido={esPresupuestoValido}
				setEsPresupuestoValido={setEsPresupuestoValido}
				todosLosGastos={todosLosGastos}
			/>

			{esPresupuestoValido && (
				<>
					<main>
						<ListadoDeGastos todosLosGastos={todosLosGastos} />
					</main>
					<div className="nuevo-gasto">
						<img
							alt="Nuevo gasto"
							src={IconoNuevoGasto}
							onClick={handleNuevoGasto}
						/>
					</div>
				</>
			)}

			{modalNuevoGasto && (
				<ModalNuevoGasto
					setModalNuevoGasto={setModalNuevoGasto}
					animarModal={animarModal}
					setAnimarModal={setAnimarModal}
					guardarNuevoGasto={guardarNuevoGasto}
				/>
			)}
		</div>
	);
}

export default App;
