import React from 'react';

const SelectOption = ({ texto, opciones }) => {
  return (
    <label htmlFor="">
      { texto }
      <select name="" id="">
        {
          opciones.map(opcion =>
            <option value={ opcion }>{ opcion }</option>
          )
        }
      </select>
    </label>
  );
}

export default SelectOption;
