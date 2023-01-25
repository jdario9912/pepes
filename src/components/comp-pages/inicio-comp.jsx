import React from 'react';
import ClientesComp from './clientes-comp';
import OrdenesComp from './ordenes-comp';
import OrdenesPendientesComp from './ordenes-pendientes-comp';

const InicioComp = () => {
  return (
    <div>
      <ClientesComp />
      <OrdenesComp />
      <OrdenesPendientesComp />
    </div>
  );
}

export default InicioComp;
