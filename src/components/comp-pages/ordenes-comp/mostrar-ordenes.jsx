import React, { useContext } from 'react';
import TBody from './mostrar-ordenes/t-body';
import THead from './mostrar-ordenes/t-head';
import { OrdenesCompContext } from '../ordenes-comp';

const MostrarOrdenes = () => {
  const { mostrarListaOrdenes } = useContext(OrdenesCompContext);
  return (
    <table>
      <THead />
      {
        mostrarListaOrdenes ? 
          <TBody /> :
          <tbody><tr><td>Mostrar orden buscada</td></tr></tbody>
      }
    </table>
  );
}

export default MostrarOrdenes;
