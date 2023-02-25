import React, { useContext } from 'react';
import { VolantesCompContext } from '../volantes-comp';

const Impresion = () => {
  const { setImpresion } = useContext(VolantesCompContext);

  const handleClick = (e) => {
    setImpresion(e.target.value);
  };

  return (
    <fieldset>
      <legend>Impresion:</legend>
      <div>
        <label onClick={ handleClick }>
          Frente
          <input type="radio" name="impresion" value="Frente" onClick={ handleClick } />
        </label>
        <label onClick={ handleClick }>
          Frente y dorso
          <input type="radio" name="impresion" value="Frente y dorso" onClick={ handleClick } />
        </label>
      </div>
    </fieldset>
  );
}

export default Impresion;
