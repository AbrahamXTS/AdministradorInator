import { Gasto } from "./Gasto";

const ListadoDeGastos = ({ todosLosGastos, setGastoAEditar, eliminarGasto }) => {

	return (
		<div className="listado-gasto contenedor">
			<h3 className="no-gastos">
				{Object.keys(todosLosGastos).length == 0
					? "Aún no has registrado gastos"
					: ""}
			</h3>
			{todosLosGastos.map((elemento) => (
				<Gasto key={elemento.id} datosDelGasto={elemento} setGastoAEditar={setGastoAEditar} eliminarGasto={eliminarGasto}/>
			))}
		</div>
	);
};

export default ListadoDeGastos;
