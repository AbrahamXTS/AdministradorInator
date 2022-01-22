import { useState } from "react";
import { Header } from "./components/Header";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import { ModalNuevoGasto } from "./components/ModalNuevoGasto";

function App() {
	const [presupuesto, setPresupuesto] = useState(0);
	const [esPresupuestoValido, setEsPresupuestoValido] = useState(false);

	const [modalNuevoGasto, setModalNuevoGasto] = useState(false);
	const [animarModal, setAnimarModal] = useState(false);

	const handleNuevoGasto = () => {
		setModalNuevoGasto(true);

		setTimeout(() => {
			setAnimarModal(true);
		}, 300);
	};

	return (
		<>
			<Header
				presupuesto={presupuesto}
				setPresupuesto={setPresupuesto}
				esPresupuestoValido={esPresupuestoValido}
				setEsPresupuestoValido={setEsPresupuestoValido}
			/>

			{esPresupuestoValido && (
				<div className="nuevo-gasto">
					<img
						alt="Nuevo gasto"
						src={IconoNuevoGasto}
						onClick={handleNuevoGasto}
					/>
				</div>
			)}

			{modalNuevoGasto && (
				<ModalNuevoGasto
					setModalNuevoGasto={setModalNuevoGasto}
					animarModal={animarModal}
          setAnimarModal={setAnimarModal}
				/>
			)}
		</>
	);
}

export default App;
