import React from 'react';
import MostrarOrdenesPendientes from '../comp-pages/ordenes-pendientes-comp/mostrar-ordenes-pendientes';
import '../../styles/ordenes-pendientes-comp.css';

const OrdenesPendientesComp = () => {
  return (
    <div className='ordenes-pendientes-comp--container'>
      <h2>Ordenes Pendientes</h2>
      <MostrarOrdenesPendientes />
    </div>
  );
}

export default OrdenesPendientesComp;
