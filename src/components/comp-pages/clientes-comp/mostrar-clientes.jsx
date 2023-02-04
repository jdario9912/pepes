import React, {
  useContext,
  useEffect,
  useState
} from 'react';
import TBody from './mostrar-clientes/t-body';
import THead from './mostrar-clientes/t-head';
// import { clientes } from '../../../models/clientes';
import '../../../styles/mostrar-clientes.css';
import { ClientesCompContext } from '../clientes-comp';

const MostrarClientes = () => {
  const { mostrarListaClientes } = useContext(ClientesCompContext);
  const [clientes, setClientes] = useState(null);

  // useEffect(() => {
  //   fetch('http://localhost:3001/api/clientes')
  //     .then(res => res.json())
  //     .then(data => setClientes(data))
  // }, []);
  
  if (clientes) {
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
  } else {
    return(<p>Cargando clientes...</p>);
  }
  
}

export default MostrarClientes;
