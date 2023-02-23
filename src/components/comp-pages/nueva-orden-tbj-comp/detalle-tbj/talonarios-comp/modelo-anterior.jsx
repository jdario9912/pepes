import React, { useContext } from 'react';
import { TalonariosCompContext } from '../talonarios-comp';

const ModeloAnterior = () => {
  const { setModeloAnterior } = useContext(TalonariosCompContext);

  const handleClick = (e) => {
    setModeloAnterior(e.target.value);
  }

  return (
    <fieldset>
      <legend>Modelo anterior:</legend>
      <div>
        <label onClick={ handleClick }>
          Si
          <input type="radio" name="modelo-anterior" value='Si' onClick={ handleClick } />
        </label>
        <label onClick={ handleClick }>
          No
          <input type="radio" name="modelo-anterior" value='No' onClick={ handleClick } />
        </label>
      </div>
    </fieldset>
  );
}

export default ModeloAnterior;
