import React from 'react';
import Botones from '../comp-pages/clientes-comp/botones';
import BuscarClientes from '../comp-pages/clientes-comp/buscar-clientes';
import MostrarClientes from '../comp-pages/clientes-comp/mostrar-clientes';

const Clientes = () => {
  return (
    <div>
      <h2>Clientes</h2>
      <Botones />        
      <BuscarClientes />
      <MostrarClientes />
    </div>
  );
}

export default Clientes;
