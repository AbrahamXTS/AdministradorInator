import { Gasto } from "./Gasto";

const ListadoDeGastos = ({
	todosLosGastos,
	setGastoAEditar,
	eliminarGasto,
	filtro,
	gastosFiltrados,
}) => {
	return (
		<div className="listado-gasto contenedor">
			{filtro ? (
				<>
					<h2 className="no-gastos">
						{Object.keys(gastosFiltrados).length == 0
							? "Sin gastos registrados"
							: ""}
					</h2>
					{gastosFiltrados.map((elemento) => (
						<Gasto
							key={elemento.id}
							datosDelGasto={elemento}
							setGastoAEditar={setGastoAEditar}
							eliminarGasto={eliminarGasto}
						/>
					))}
				</>
			) : (
				<>
					{todosLosGastos.map((elemento) => (
						<Gasto
							key={elemento.id}
							datosDelGasto={elemento}
							setGastoAEditar={setGastoAEditar}
							eliminarGasto={eliminarGasto}
						/>
					))}
				</>
			)}
		</div>
	);
};

export default ListadoDeGastos;
