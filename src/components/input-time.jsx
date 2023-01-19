import React, { useState } from 'react';

const InputTime = ({ texto }) => {
  const [value, setValue] = useState('19:00');
  const handleValue = (e) => setValue(e.target.value);

  return (
    <label htmlFor="">
      { texto }
      <input type="time" name="" id="" value={ value } onChange={ handleValue } />
      hs
    </label>
  );
}

export default InputTime;
