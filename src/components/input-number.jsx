import React,{
  useState,
  useEffect,
} from 'react';

const InputNumber = ({ props }) => {
  const [texto, setTexto] = useState('');
  const [value, setValue] = useState('');
  const [estilosInput, setEstilosInput] = useState('');
  const [estilosLabel, setEstilosLabel] = useState('');
  const [data, setData] = useState('');

  const handleValue = (e) => {
    setValue(e.target.value);
    if(props.accion)
      props.accion(e.target.value);
  };

  useEffect(() => {
    props.texto ? setTexto(props.texto) : setTexto('');
    props.value ? setValue(props.value) : setValue('');
    props.estilosLabel ? setEstilosLabel(props.estilosLabel) : setEstilosLabel('');
    props.estilosInput ? setEstilosInput(props.estilosInput) : setEstilosInput('');
    props.data ? setData(props.data) : setData('');
  }, []);

  return (
    <label className={ estilosLabel }>
      { texto }
      <input 
        type="number" 
        name={ data } 
        id={ data } 
        min='0' 
        value={ value }
        className={ estilosInput }
        onChange={ handleValue }
        data={ data }
      />
    </label>
  );
}

export default InputNumber;
