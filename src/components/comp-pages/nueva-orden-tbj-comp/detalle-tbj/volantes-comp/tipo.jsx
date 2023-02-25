import React, { useContext } from 'react';
import { VolantesCompContext } from '../volantes-comp';

const Tipo = () => {
  const { setTipo } = useContext(VolantesCompContext);

  const handleClick = (e) => {
    setTipo(e.target.value);
  };

  return (
    <fieldset>
      <legend>Tipo:</legend>
      <div>
        <label onClick={ handleClick }>
          Color
          <input type="radio" name="tipo" value="Color" onClick={ handleClick } />
        </label>
        <label onClick={ handleClick }>
          Escala de grises
          <input type="radio" name="tipo" value="Escala de grises" onClick={ handleClick } />
        </label>
      </div>
    </fieldset>
  );
}

export default Tipo;
