import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import { ModalNuevoGasto } from "./components/ModalNuevoGasto";
import ListadoDeGastos from "./components/ListadoDeGastos";
import { generarIdentificador } from "./helpers/generarIdentificador";
import { formateadorDeFecha } from "./helpers/formateadorDeFecha";
import { Filtros } from "./components/Filtros";

function App() {
	const [presupuesto, setPresupuesto] = useState(
		Number(localStorage.getItem("Presupuesto")) ?? 0
	);
	const [todosLosGastos, setTodosLosGastos] = useState(
		localStorage.getItem("Gastos")
			? JSON.parse(localStorage.getItem("Gastos"))
			: []
	);
	const [esPresupuestoValido, setEsPresupuestoValido] = useState(false);
	const [modalNuevoGasto, setModalNuevoGasto] = useState(false);
	const [animarModal, setAnimarModal] = useState(false);
	const [gastoAEditar, setGastoAEditar] = useState({});
	const [filtro, setFiltro] = useState("");
	const [gastosFiltrados, setGastosFiltrados] = useState([]);

	const handleNuevoGasto = () => {
		setModalNuevoGasto(true);
		setGastoAEditar({});

		setTimeout(() => {
			setAnimarModal(true);
		}, 300);
	};

	const guardarNuevoGasto = (datosDelNuevoGasto) => {
		if (datosDelNuevoGasto.id) {
			const gastosActualizados = todosLosGastos.map((gastoDelState) =>
				gastoDelState.id === datosDelNuevoGasto.id
					? datosDelNuevoGasto
					: gastoDelState
			);
			setTodosLosGastos(gastosActualizados);
			setGastoAEditar({});
		} else {
			datosDelNuevoGasto.id = generarIdentificador();
			datosDelNuevoGasto.fecha = formateadorDeFecha();
			setTodosLosGastos([...todosLosGastos, datosDelNuevoGasto]);
		}

		setAnimarModal(false);

		setTimeout(() => {
			setModalNuevoGasto(false);
		}, 300);
	};

	const eliminarGasto = (id) => {
		const gastosActualizados = todosLosGastos.filter(
			(gastoDelState) => gastoDelState.id !== id
		);
		setTodosLosGastos(gastosActualizados);
	};

	useEffect(() => {
		// Si el objeto gasto a editar está presente
		if (Object.keys(gastoAEditar).length > 0) {
			// Llamamos al modal
			setModalNuevoGasto(true);

			setTimeout(() => {
				setAnimarModal(true);
			}, 300);
		}
	}, [gastoAEditar]);

	useEffect(() => {
		localStorage.setItem("Presupuesto", presupuesto ?? 0);
	}, [presupuesto]);

	useEffect(() => {
		if (Number(localStorage.getItem("Presupuesto")) > 0) {
			setEsPresupuestoValido(true);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("Gastos", JSON.stringify(todosLosGastos) ?? []);
	}, [todosLosGastos]);

	useEffect(() => {
		if (filtro) {
			const gastosFiltrados = todosLosGastos.filter(
				(gasto) => gasto.categoria === filtro
			);

			setGastosFiltrados(gastosFiltrados);
		}
	}, [filtro]);

	return (
		<div className={modalNuevoGasto ? "fijar" : ""}>
			<Header
				todosLosGastos={todosLosGastos}
				setTodosLosGastos={setTodosLosGastos}
				presupuesto={presupuesto}
				setPresupuesto={setPresupuesto}
				esPresupuestoValido={esPresupuestoValido}
				setEsPresupuestoValido={setEsPresupuestoValido}
			/>

			{esPresupuestoValido && (
				<>
					<main>
						<Filtros filtro={filtro} setFiltro={setFiltro} />
						<ListadoDeGastos
							todosLosGastos={todosLosGastos}
							setGastoAEditar={setGastoAEditar}
							eliminarGasto={eliminarGasto}
							filtro={filtro}
							gastosFiltrados={gastosFiltrados}
						/>
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
					gastoAEditar={gastoAEditar}
					setGastoAEditar={setGastoAEditar}
				/>
			)}
		</div>
	);
}

export default App;
