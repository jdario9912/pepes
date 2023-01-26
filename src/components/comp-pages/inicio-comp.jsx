import React from 'react';
import ClientesComp from './clientes-comp';
import OrdenesComp from './ordenes-comp';
import OrdenesPendientesComp from './ordenes-pendientes-comp';
import '../../styles/inicio-comp.css';

const InicioComp = () => {
  return (
    <div className='inicio-comp--container'>
      <ClientesComp />
      <OrdenesComp />
      <OrdenesPendientesComp />
    </div>
  );
}

export default InicioComp;
