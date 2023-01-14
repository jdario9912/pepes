import React from 'react';

const InputText = ({ texto }) => {
  return (
    <label>
      { texto }
      <input type="text" />
    </label>
  );
}

export default InputText;
