import React, {
  createContext,
  useState
} from 'react';
import MostrarOrdenes from '../comp-pages/ordenes-comp/mostrar-ordenes';
import Button from '../button';
import '../../styles/ordenes-comp.css';

export const OrdenesCompContext = createContext();

const OrdenesComp = () => {
  const [mostrarListaOrdenes, setMostrarListaOrdenes] = useState(true);

  const verListaOrdenes = () => setMostrarListaOrdenes(true);

  return (
    <OrdenesCompContext.Provider value={{ mostrarListaOrdenes, setMostrarListaOrdenes }}>
      <div className='ordenes-comp--container'>
        <h2>Ordenes</h2>
        <div className="ordenes-comp--lista-buscar-container">
          <Button texto='Ver lista' estilos='ordenes-comp--btn-ver-lista' onClick={ verListaOrdenes } />
        </div>
        <MostrarOrdenes />
      </div>
    </OrdenesCompContext.Provider>
  );
}

export default OrdenesComp;
