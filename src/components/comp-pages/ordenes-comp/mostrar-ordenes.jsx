import React from 'react';
import TBody from './mostrar-ordenes/t-body';
import THead from './mostrar-ordenes/t-head';
import '../../../styles/mostrar-ordenes.css';
import { ordenes } from '../../../models/ordenes';

const MostrarOrdenes = () => {
  return (
    <div className="mostrar-ordenes--table-container">
      <table className='mostrar-ordenes--table'>
        <THead />
        <TBody ordenes={ ordenes } />
      </table>
    </div>
  );
}

export default MostrarOrdenes;
