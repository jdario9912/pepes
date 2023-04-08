import React, { useContext} from 'react';
import THead from './t-head';
import TBody from './t-body';
import { ClientesCompContext } from '../../clientes-comp';

const Tabla = () => {
  const { clientes } = useContext(ClientesCompContext);
  return (
    <table className='mostrar-clientes--table'>
      <THead />
      <TBody clientes={ clientes } />
    </table>  
  );
}

export default Tabla;
