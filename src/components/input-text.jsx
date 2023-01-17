import React, { useState, useEffect } from 'react';

const InputText = ({ texto, value }) => {
  const [valueInChange, setValueInChange] = useState('');
  const handleValue = (e) => setValueInChange(e.target.value);

  useEffect(() => {
    value ? setValueInChange(value) : setValueInChange('No se ingreso ningun valor');
  }, []);
  
  return (
    <label>
      { texto }
      <input type="text" value={ valueInChange } onChange={ handleValue } />
    </label>
  );
}

export default InputText;
