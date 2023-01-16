import React from 'react';

const InputRadio = ({ props }) => {
  return (
    <label htmlFor={ props.id}>
      <input type="radio" name={ props.name } id={ props.id } value={ props.value } />
      { props.value }
    </label>
  );
}

export default InputRadio;
