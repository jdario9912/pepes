import React, { useContext} from 'react';
import { MostrarClientesContext } from '../mostrar-clientes';
import THead from './t-head';
import TBody from './t-body';

const Tabla = () => {
  const { clientes } = useContext(MostrarClientesContext);
  return (
    <table className='mostrar-clientes--table'>
      <THead />
      <TBody clientes={ clientes } />
    </table>  
  );
}

export default Tabla;
