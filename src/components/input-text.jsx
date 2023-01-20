import React, { useState, useEffect } from 'react';
import '../styles/input-text.css';

const InputText = (props) => {
  const [valueInChange, setValueInChange] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const handleValue = (e) => setValueInChange(e.target.value);
  const classLabel = 'input-text--label';

  useEffect(() => {
    props.value ? setValueInChange(props.value) : setValueInChange('');
    props.placeholder ? setPlaceholder(props.placeholder) : setPlaceholder('');
  }, []);
  
  return (
    <label className={ classLabel + ' ' + props.estilosLabel}>
      { props.texto }
      <input 
        type="text" 
        value={ valueInChange } 
        placeholder={ placeholder } 
        onChange={ handleValue } 
        className= { props.estilosInput }
        data={ props.data }
      />
    </label>
  );
}

export default InputText;
