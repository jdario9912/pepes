import React from 'react';
import BuscarClientes from '../comp-pages/clientes-comp/buscar-clientes';
import MostrarClientes from '../comp-pages/clientes-comp/mostrar-clientes';

const ClientesComp = () => {
  return (
    <div>
      <h2>Clientes</h2>
      <BuscarClientes />
      <MostrarClientes />
    </div>
  );
}

export default ClientesComp;
