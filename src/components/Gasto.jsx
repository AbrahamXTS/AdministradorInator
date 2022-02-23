import {
	LeadingActions,
	SwipeableList,
	SwipeableListItem,
	SwipeAction,
	TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

import IconoAhorro from "../img/icono_ahorro.svg";
import IconoCasa from "../img/icono_casa.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoOcio from "../img/icono_ocio.svg";
import IconoSalud from "../img/icono_salud.svg";
import IconoSuscripciones from "../img/icono_suscripciones.svg";

const diccionarioIconos = {
	Casa: IconoCasa,
	Salud: IconoSalud,
	Ahorro: IconoAhorro,
	Comida: IconoComida,
	Generales: IconoGastos,
	Suscripciones: IconoSuscripciones,
	Entretenimiento: IconoOcio,
};

export const Gasto = ({ datosDelGasto }) => {
	const { nombre, gasto, categoria, fecha } = datosDelGasto;

	const leadingActions = () => {

	}

	const trailingActions = () => {
		
	}

	return (
		<SwipeableList>
			<SwipeableListItem
				leadingActions={leadingActions} // Acciones de izquierda a derecha
				trailingActions={trailingActions} // De derecha a izquierda
			>
				<div className="gasto sombra">
					<div className="contenido-gasto">
						<img src={diccionarioIconos[categoria]} alt={categoria} />
						<div className="descripcion-gasto">
							<p className="categoria">{categoria}</p>
							<p className="nombre-gasto">{nombre}</p>
							<p className="fecha-gasto">
								Agregado el: <span>{fecha}</span>
							</p>
						</div>
					</div>
					<p className="cantidad-gasto">${gasto}</p>
				</div>
			</SwipeableListItem>
		</SwipeableList>
	);
};
