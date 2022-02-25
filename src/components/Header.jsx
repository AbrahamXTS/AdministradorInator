import { NuevoPrespuesto } from "./NuevoPrespuesto";
import { ControlPresupuesto } from "./ControlPresupuesto";

export const Header = ({
	presupuesto,
	setPresupuesto,
	esPresupuestoValido,
	setEsPresupuestoValido,
	todosLosGastos,
	setTodosLosGastos,
}) => {
	return (
		<header>
			<h1>Planificador de gastos</h1>
			{esPresupuestoValido ? (
				<ControlPresupuesto
					presupuesto={presupuesto}
					setPresupuesto={setPresupuesto}
					todosLosGastos={todosLosGastos}
					setTodosLosGastos={setTodosLosGastos}
					setEsPresupuestoValido={setEsPresupuestoValido}
				/>
			) : (
				<NuevoPrespuesto
					presupuesto={presupuesto}
					setPresupuesto={setPresupuesto}
					setEsPresupuestoValido={setEsPresupuestoValido}
				/>
			)}
		</header>
	);
};
