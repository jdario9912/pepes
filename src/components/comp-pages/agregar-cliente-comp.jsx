import React from 'react';
import DatosCliente from './agregar-clientes-comp/datos-cliente';
import '../../styles/agregar-cliente-comp.css';
import { AiOutlineUserAdd } from "react-icons/ai";

const AgregarClienteComp = () => {
  return (
    <div className='agregar-cliente-comp--container modulo'>
      <h2><span className='agregar-cliente-comp--icon'><AiOutlineUserAdd /></span>Nuevo Cliente</h2>
      <DatosCliente />
    </div>
  );
}

export default AgregarClienteComp;
