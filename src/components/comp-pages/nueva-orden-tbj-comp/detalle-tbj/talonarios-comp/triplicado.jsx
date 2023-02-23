import React, { useContext } from 'react';
import { TalonariosCompContext } from '../talonarios-comp';

const Triplicado = () => {
  const { setTriplicado, setMostrarColorTriplicado } = useContext(TalonariosCompContext);

  const handleClick = (e) => {
    setTriplicado(e.target.value);
    if(e.target.value === 'Si')
      setMostrarColorTriplicado(true)
    else
      setMostrarColorTriplicado(false)
  };

  return (
    <fieldset>
      <legend>Triplicado:</legend>
      <div>
        <label onClick={ handleClick }>
          Si
          <input type="radio" name="triplicado" value='Si' onClick={ handleClick } />
        </label>
        <label onClick={ handleClick }>
          No
          <input type="radio" name="triplicado" value='No' onClick={ handleClick } />
        </label>
      </div>
    </fieldset>
  );
}

export default Triplicado;
