import React, {
  useState,
  useEffect
} from 'react';

const InputTel = ({ props }) => {
  const [texto, setTexto] = useState('');
  const [estilosLabel, setEstilosLabel] = useState('');
  const [estilosInput, setEstilosInput] = useState('');
  const [value, setValue] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const [data, setData] = useState('');

  const handleValue = (e) => setValue(e.target.value);

  useEffect(() => {
    props.texto ? setTexto(props.texto) : setTexto('');
    props.estilosLabel ? setEstilosLabel(props.estilosLabel) : setEstilosLabel('');
    props.estilosInput ? setEstilosInput(props.estilosInput) : setEstilosInput('');
    props.value ? setValue(props.value) : setValue('');
    props.placeholder ? setPlaceholder(props.placeholder) : setPlaceholder('');
    props.data ? setData(props.data) : setData('');
  }, []);

  return (
    <label className={ estilosLabel }>
      { texto }
      <input 
        type="tel" 
        name={ data } 
        id={ data } 
        data={ data }
        className={ estilosInput }
        value={ value }
        onChange={ handleValue }
        placeholder={ placeholder }
      />
    </label>
  );
}

export default InputTel;
