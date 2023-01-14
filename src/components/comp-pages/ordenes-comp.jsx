import React from 'react';
import Botones from '../comp-pages/ordenes-comp/botones';
import BuscarOrdenes from '../comp-pages/ordenes-comp/buscar-ordenes';
import MostrarOrdenes from '../comp-pages/ordenes-comp/mostrar-ordenes';

const OrdenesComp = () => {
  return (
    <div>
      <h2>Ordenes</h2>
      <Botones />
      <BuscarOrdenes />
      <MostrarOrdenes />
    </div>
  );
}

export default OrdenesComp;
