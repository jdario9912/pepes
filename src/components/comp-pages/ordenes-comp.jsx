import React, {
  createContext,
} from 'react';
import MostrarOrdenes from '../comp-pages/ordenes-comp/mostrar-ordenes';
import '../../styles/ordenes-comp.css';

export const OrdenesCompContext = createContext();

const OrdenesComp = () => {
  return (
    <OrdenesCompContext.Provider>
      <div className='ordenes-comp--container'>
        <h2>Ordenes</h2>
        <MostrarOrdenes />
      </div>
    </OrdenesCompContext.Provider>
  );
}

export default OrdenesComp;
