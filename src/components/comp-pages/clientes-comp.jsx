import React, {
  createContext,
  useState
} from 'react';
import MostrarClientes from '../comp-pages/clientes-comp/mostrar-clientes';
import '../../styles/clientes-comp.css';
import Button from '../button';

export const ClientesCompContext = createContext();

const ClientesComp = () => {
  const [mostrarListaClientes, setMostrarListaClientes] = useState(true);
  const [clientes, setClientes] = useState([]);

  const verListaClientes = () => setMostrarListaClientes(true);

  return (
    <ClientesCompContext.Provider value={{ mostrarListaClientes, setMostrarListaClientes, clientes, setClientes }}>
      <div className='clientes-comp--container'>
        <h2>Clientes</h2>
        <div className="clientes-comp--lista-buscar-container">
          <Button texto='Ver lista' estilos='clientes-comp--btn-ver-lista' onClick={ verListaClientes } />
        </div>
        <MostrarClientes />
      </div>
    </ClientesCompContext.Provider>
  );
}

export default ClientesComp;
