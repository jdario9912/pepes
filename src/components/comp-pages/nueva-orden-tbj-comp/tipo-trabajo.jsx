import React, { useContext } from 'react';
import { DatosOrdenTbjContext } from './datos-orden-tbj';


const TipoTrabajo = () => {
  const { setTipoTrabajo } = useContext(DatosOrdenTbjContext);

  const handleTipoTrabajo = (e) => {
    setTipoTrabajo(e.target.innerHTML);
  }

  return (
    <div>
      <h4>Tipo de trabajo</h4>
      <div>
        <button onClick={ handleTipoTrabajo }>Impresiones</button>
        <button onClick={ handleTipoTrabajo }>LOMA</button>
        <button onClick={ handleTipoTrabajo }>Talonarios</button>
        <button onClick={ handleTipoTrabajo }>Bonos</button>
        <button onClick={ handleTipoTrabajo }>Diseños</button>
        <button onClick={ handleTipoTrabajo }>Plotter</button>
        <button onClick={ handleTipoTrabajo }>Remeras</button>
        <button onClick={ handleTipoTrabajo }>Tarjetas</button>
        <button onClick={ handleTipoTrabajo }>Volantes</button>
        <button onClick={ handleTipoTrabajo }>Sellos</button>
        <button onClick={ handleTipoTrabajo }>Varios</button>
      </div>
    </div>
  );
}

export default TipoTrabajo;
