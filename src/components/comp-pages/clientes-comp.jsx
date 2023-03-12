import React, {
  createContext,
  useState
} from 'react';
import MostrarClientes from '../comp-pages/clientes-comp/mostrar-clientes';
import '../../styles/clientes-comp.css';
import { BsPeople } from "react-icons/bs";

export const ClientesCompContext = createContext();

const ClientesComp = () => {
  const [mostrarListaClientes, setMostrarListaClientes] = useState(true);
  const [clientes, setClientes] = useState([]);

  return (
    <ClientesCompContext.Provider value={{ mostrarListaClientes, setMostrarListaClientes, clientes, setClientes }}>
      <div className='clientes-comp--container modulo'>
        <div className='clientes-comp--titulo'>
          <span className='clientes-comp--icon'><BsPeople /></span> 
          Clientes
        </div>
        <MostrarClientes />
      </div>
    </ClientesCompContext.Provider>
  );
}

export default ClientesComp;
