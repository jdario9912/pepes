import React, { useContext } from 'react';
import { LomaCompContext } from '../loma-comp';

const Portabaner = () => {
  const { setPortabaner } = useContext(LomaCompContext);

  const handleClick = (e) => {
    setPortabaner(e.target.value);
  };
  
  return (
    <fieldset>
      <legend>Portabaner:</legend>
      <div>
        <label onClick={ handleClick }>
          Si
          <input type="radio" name="portabaner" value='Si' onClick={ handleClick } />
        </label>
        <label onClick={ handleClick }>
          No
          <input type="radio" name="portabaner" value='No' onClick={ handleClick } />
        </label>        
      </div>
    </fieldset>
  );
}

export default Portabaner;
