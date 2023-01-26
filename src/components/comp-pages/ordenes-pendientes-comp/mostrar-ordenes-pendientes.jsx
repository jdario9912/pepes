import React from 'react';
import TBody from './mostrar-ordenes-pendientes/t-body';
import THead from './mostrar-ordenes-pendientes/t-head';
import '../../../styles/mostrar-ordenes-pendientes.css'
import { ordenesPendientes } from '../../../models/ordenes-pendientes';

const MostrarOrdenesPendientes = () => {
  return (
    <div className="mostrar-ordenes-pendientes--table-container">
      <table className='mostrar-ordenes-pendientes--table'>
        <THead />
        <TBody ordenesPendientes={ ordenesPendientes } />
      </table>
    </div>
  );
}

export default MostrarOrdenesPendientes;
