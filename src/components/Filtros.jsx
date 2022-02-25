import { useEffect, useState } from "react";

import React from "react";

export const Filtros = ({ filtro, setFiltro }) => {
	return (
		<div class="filtros sombra contenedor">
			<form>
				<div className="campo">
					<label htmlFor="">Filtrar gastos: </label>
					<select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
						<option value="" defaultValue>
							-- Todas las categorias --
						</option>
						<option value="Casa">Casa</option>
						<option value="Salud">Salud</option>
						<option value="Ahorro">Ahorro</option>
						<option value="Comida">Comida</option>
						<option value="Generales">Generales</option>
						<option value="Suscripciones">Suscripciones</option>
						<option value="Entretenimiento">Entretenimiento</option>
					</select>
				</div>
			</form>
		</div>
	);
};
