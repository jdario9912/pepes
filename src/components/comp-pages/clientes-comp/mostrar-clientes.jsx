import React from 'react';
import TBody from './mostrar-clientes/t-body';
import THead from './mostrar-clientes/t-head';
import { clientes } from '../../../models/clientes';

const MostrarClientes = () => {
  
  return (
    <table>
      <THead />
      <TBody clientes={ clientes } />
    </table>
  );
}

export default MostrarClientes;
