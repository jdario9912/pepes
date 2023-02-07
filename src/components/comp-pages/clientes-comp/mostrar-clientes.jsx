import React, {
  useContext,
  useEffect,
} from 'react';
import TBody from './mostrar-clientes/t-body';
import THead from './mostrar-clientes/t-head';
import '../../../styles/mostrar-clientes.css';
import { ClientesCompContext } from '../clientes-comp';

const MostrarClientes = () => {
  const { setClientes, clientes } = useContext(ClientesCompContext);  

  useEffect(() => {
    fetch('http://localhost:3001/api/clientes')
      .then(res => res.json())
      .then(data => setClientes(data));
  }, []);
  
  if (clientes)
    return (
      <div className="mostrar-clientes--table-container">
        <table className='mostrar-clientes--table'>
          <THead />
          <TBody clientes={ clientes } />
        </table>
      </div>
    );  
  else
    return(<p>Cargando clientes...</p>);
  
}

export default MostrarClientes;
