import React, { useContext } from 'react';
import { LomaCompContext } from '../loma-comp';

const Corte = () => {
  const { setCorte } = useContext(LomaCompContext);

  const handleClick = (e) => {
    setCorte(e.target.value);
  };

  return (
    <fieldset>
      <legend>Corte:</legend>
      <div>
      <label onClick={ handleClick }>
          Si
          <input type="radio" name="corte" value='Si' onClick={ handleClick } />
        </label>
        <label onClick={ handleClick }>
          No
          <input type="radio" name="corte" value='No' onClick={ handleClick } />
        </label>
      </div>
    </fieldset>
  );
}

export default Corte;
