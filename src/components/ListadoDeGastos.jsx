import { Gasto } from "./Gasto";

const ListadoDeGastos = ({ todosLosGastos }) => {

	return (
		<div className="listado-gasto contenedor">
			<h3 className="no-gastos">
				{Object.keys(todosLosGastos).length == 0
					? "Aún no has registrado gastos"
					: ""}
			</h3>
			{todosLosGastos.map((elemento) => (
				<Gasto key={elemento.id} datosDelGasto={elemento} />
			))}
		</div>
	);
};

export default ListadoDeGastos;
