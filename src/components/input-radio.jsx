import React from 'react';

const InputRadio = ({ props }) => {
  const mostrarComponente = () => props.handleComponent(true);
  const ocultarComponente = () => props.handleComponent(false);

  if (props.handleComponent) {
    if (props.value === 'Si') {
      return (
        <label htmlFor={ props.id}>
          { props.value }
          <input type="radio" name={ props.name } id={ props.id } value={ props.value } onClick={ mostrarComponente } />
        </label>
      );  
    }

    if (props.value === 'No'){
      return (
        <label htmlFor={ props.id}>
          { props.value }
          <input type="radio" name={ props.name } id={ props.id } value={ props.value } onClick={ ocultarComponente } />
        </label>
      );
    }
  } else{
    return (
      <label htmlFor={ props.id}>
        { props.value }
        <input type="radio" name={ props.name } id={ props.id } value={ props.value } />
      </label>
    );
  }
  
}

export default InputRadio;
