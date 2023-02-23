import React, { useContext } from 'react';
import { LomaCompContext } from '../loma-comp';

const Troquelado = () => {
  const { setTroquelado } = useContext(LomaCompContext);

  const handleClick = (e) => {
    setTroquelado(e.target.value);
  };

  return (
    <fieldset>
      <legend>Troquelado:</legend>
      <div>
        <label onClick={ handleClick }>
          Si
          <input type="radio" name="troquelado" value='Si' onClick={ handleClick } />
        </label>
        <label onClick={ handleClick }>
          No
          <input type="radio" name="troquelado" value='No' onClick={ handleClick } />
        </label>      
      </div>
    </fieldset>
  );
}

export default Troquelado;
