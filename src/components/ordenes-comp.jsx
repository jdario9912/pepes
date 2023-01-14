import React from 'react';
import Botones from './ordenes-comp/botones';
import BuscarOrdenes from './ordenes-comp/buscar-ordenes';
import MostrarOrdenes from './ordenes-comp/mostrar-ordenes';

const OrdenesComp = () => {
  return (
    <div>
      <p>Ordenes</p>
      <Botones />
      <BuscarOrdenes />
      <MostrarOrdenes />
    </div>
  );
}

export default OrdenesComp;
