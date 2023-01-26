import React, { useContext } from 'react';
import TBody from './mostrar-ordenes/t-body';
import THead from './mostrar-ordenes/t-head';
import { OrdenesCompContext } from '../ordenes-comp';
import '../../../styles/mostrar-ordenes.css';

const MostrarOrdenes = () => {
  const { mostrarListaOrdenes } = useContext(OrdenesCompContext);
  return (
    <div className="mostrar-ordenes--table-container">
      <table className='mostrar-ordenes--table'>
        <THead />
        {
          mostrarListaOrdenes ? 
            <TBody /> :
            <tbody><tr><td>Mostrar orden buscada</td></tr></tbody>
        }
      </table>
    </div>
  );
}

export default MostrarOrdenes;
