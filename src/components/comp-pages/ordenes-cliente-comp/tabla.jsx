import React, { useContext } from 'react';
import { OrdenesClienteCompContext } from '../ordenes-cliente-comp';
import TBody from './t-body';
import THead from './t-head';

const Tabla = () => {
  const { ordenes } = useContext(OrdenesClienteCompContext);
  return (
    <table className='table-ordenes-cliente'>
      <THead />
      {
        ordenes ?
          <TBody ordenes={ ordenes } /> :
          <tbody><tr><td>cargando ordenes...</td></tr></tbody>
      }
    </table>
  );
}

export default Tabla;
