import { NuevoPrespuesto } from "./NuevoPrespuesto";
import { ControlPresupuesto } from './ControlPresupuesto';

export const Header = ({
	presupuesto,
	setPresupuesto,
	esPresupuestoValido,
	setEsPresupuestoValido,
}) => {
	return (
		<header>
			<h1>Planificador de gastos</h1>
			{esPresupuestoValido ? 
            (
				<ControlPresupuesto 
                    presupuesto={presupuesto}
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
