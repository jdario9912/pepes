import React from 'react';
import TBody from './table-clientes/t-body';
import THead from './table-clientes/t-head';

const TableClientes = () => {
  return (
    <table>
      <THead />
      <TBody />
    </table>
  );
}

export default TableClientes;
