import React from 'react';
import DatosCliente from './agregar-clientes-comp/datos-cliente';
import '../../styles/agregar-cliente-comp.css'

const AgregarClienteComp = () => {
  return (
    <div className='agregar-cliente-comp--container'>
      <h2>Nuevo Cliente</h2>
      <DatosCliente />
    </div>
  );
}

export default AgregarClienteComp;
