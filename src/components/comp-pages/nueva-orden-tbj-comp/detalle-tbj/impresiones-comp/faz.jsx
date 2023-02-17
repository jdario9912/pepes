import React, { useContext} from 'react';
import { NuevaOrdenTbjCompContext } from '../../../nueva-orden-tbj-comp';
const Faz = () => {
  const { setFaz } = useContext(NuevaOrdenTbjCompContext);
  
  const handleClick = (e) => {
  setFaz(e.target.value);
  };
   
  return (
    <fieldset>
      <legend>Faz:</legend>
      <div>
        <label onClick={ handleClick }>
          Simple
          <input type="radio" name="faz" value='Simple' onClick={ handleClick } />  
        </label>        
        <label onClick={ handleClick }>
          Doble
          <input type="radio" name="faz" value='Doble' onClick={ handleClick } />
        </label>
      </div>
    </fieldset>
  );
}

export default Faz;
