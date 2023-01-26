import React, {
  useContext,
} from 'react';
import TBody from './mostrar-clientes/t-body';
import THead from './mostrar-clientes/t-head';
import { clientes } from '../../../models/clientes';
import '../../../styles/mostrar-clientes.css';
import { ClientesCompContext } from '../clientes-comp';

const MostrarClientes = () => {
  const { mostrarListaClientes } = useContext(ClientesCompContext);
  
  return (
    <div className="mostrar-clientes--table-container">
      <table className='mostrar-clientes--table'>
        <THead />
        {
          mostrarListaClientes ? 
            <TBody clientes={ clientes } /> : 
            <tbody><tr><td>Mostrar cliente buscado</td></tr></tbody>
        }
      </table>
    </div>
  );
}

export default MostrarClientes;
