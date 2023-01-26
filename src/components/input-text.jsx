import React, { useState, useEffect } from 'react';

const InputText = ({ props }) => {
  const [texto, setTexto] = useState('');
  const [valueInChange, setValueInChange] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const [estilosInput, setEstilosInput] = useState('');
  const [estilosLabel, setEstilosLabel] = useState('');
  const [data, setData] = useState('');
    
  const handleValue = (e) => setValueInChange(e.target.value);

  useEffect(() => {
    props.texto ? setTexto(props.texto) : setTexto('');
    props.value ? setValueInChange(props.value) : setValueInChange('');
    props.placeholder ? setPlaceholder(props.placeholder) : setPlaceholder('');
    props.estilosInput ? setEstilosInput(props.estilosInput) : setEstilosInput('');
    props.estilosLabel ? setEstilosLabel(props.estilosLabel) : setEstilosLabel('');
    props.data ? setData(props.data) : setData('');
  }, []);
  
  return (
    <label className={ estilosLabel }>
      { texto }
      <input 
        type="text" 
        value={ valueInChange } 
        placeholder={ placeholder } 
        onChange={ handleValue } 
        className= { estilosInput.trimEnd() }
        data={ data }
      />
    </label>
  );
}

export default InputText;
