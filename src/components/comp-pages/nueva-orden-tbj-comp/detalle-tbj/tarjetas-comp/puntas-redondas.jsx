import React, { useContext } from 'react';
import { TarjetasCompContext } from '../tarjetas-comp';

const PuntasRedondas = () => {
  const { setPuntas_redondeadas } = useContext(TarjetasCompContext);

  const handleClick = (e) => {
    setPuntas_redondeadas(e.target.value);
  };

  return (
    <fieldset>
      <legend>Puntas redondeadas:</legend>
      <div>
        <label onClick={ handleClick }>
          Si
          <input type="radio" name="puntas-redondeadas" value="Si" onClick={ handleClick } />
        </label>
        <label onClick={ handleClick }>
          No
          <input type="radio" name="puntas-redondeadas" value="No" onClick={ handleClick } />
        </label>
      </div>
    </fieldset>
  );
}

export default PuntasRedondas;
