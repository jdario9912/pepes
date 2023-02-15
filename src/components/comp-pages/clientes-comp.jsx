import React, {
  createContext,
  useState
} from 'react';
import MostrarClientes from '../comp-pages/clientes-comp/mostrar-clientes';
import '../../styles/clientes-comp.css';

export const ClientesCompContext = createContext();

const ClientesComp = () => {
  const [mostrarListaClientes, setMostrarListaClientes] = useState(true);
  const [clientes, setClientes] = useState([]);

  return (
    <ClientesCompContext.Provider value={{ mostrarListaClientes, setMostrarListaClientes, clientes, setClientes }}>
      <div className='clientes-comp--container'>
        <h2>Clientes</h2>
        <MostrarClientes />
      </div>
    </ClientesCompContext.Provider>
  );
}

export default ClientesComp;
