import React from 'react';
import SaludoUsuario from '../saludo-usuario';
import ClientesComp from './clientes-comp';
import OrdenesComp from './ordenes-comp';
import OrdenesPendientesComp from './ordenes-pendientes-comp';

const MainComp = () => {
  return (
    <div>
      <SaludoUsuario />
      <ClientesComp />
      <OrdenesComp />
      <OrdenesPendientesComp />
    </div>
  );
}

export default MainComp;
