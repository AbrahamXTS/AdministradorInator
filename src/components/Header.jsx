import { NuevoPrespuesto } from "./NuevoPrespuesto";
import { ControlPresupuesto } from './ControlPresupuesto';

export const Header = ({
	presupuesto,
	setPresupuesto,
	esPresupuestoValido,
	setEsPresupuestoValido,
	todosLosGastos
}) => {
	return (
		<header>
			<h1>Planificador de gastos</h1>
			{esPresupuestoValido ? 
            (
				<ControlPresupuesto 
                    presupuesto={presupuesto}
					todosLosGastos={todosLosGastos}
                />
			) : (
				<NuevoPrespuesto
					presupuesto={presupuesto}
					setPresupuesto={setPresupuesto}
					setEsPresupuestoValido={setEsPresupuestoValido}
				/>
			    )
            }
		</header>
	);
};
