import React from 'react';
import Botones from './clientes-comp/botones';
import BuscarClientes from './clientes-comp/buscar-clientes';
import MostrarClientes from './clientes-comp/mostrar-clientes';

const Clientes = () => {
  return (
    <div>
      <p>Clientes</p>
      <Botones />        
      <BuscarClientes />
      <MostrarClientes />
    </div>
  );
}

export default Clientes;
