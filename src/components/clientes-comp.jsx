import React from 'react';
import Botones from './clientes-comp/botones';
import FormBuscarClientes from './clientes-comp/form-buscar-clientes';
import TableClientes from './clientes-comp/table-clientes';

const Clientes = () => {
  return (
    <div>
      <p>Clientes</p>
      <Botones />        
      <FormBuscarClientes />
      <TableClientes />
    </div>
  );
}

export default Clientes;
