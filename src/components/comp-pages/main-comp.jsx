import React from 'react';
import ClientesComp from './clientes-comp';
import OrdenesComp from './ordenes-comp';
import OrdenesPendientesComp from './ordenes-pendientes-comp';

const MainComp = () => {
  return (
    <div>
      <h2>Inicio</h2>
      <ClientesComp />
      <OrdenesComp />
      <OrdenesPendientesComp />
    </div>
  );
}

export default MainComp;
