import React, { 
  useState,
  useEffect
} from 'react';

const InputTime = ({ props }) => {
  const [texto, setTexto] = useState('');
  const [value, setValue] = useState('19:00');
  const [estilosLabel, setEstilosLabel] = useState('');
  const [estilosInput, setEstilosInput] = useState('');
  const [data, setData] = useState('');

  useEffect(() => {
    props.texto ? setTexto(props.texto) : setTexto('');
    props.estilosInput ? setEstilosInput(props.estilosInput) : setEstilosInput('');
    props.estilosLabel ? setEstilosLabel(props.estilosLabel) : setEstilosLabel('');
    props.data ? setData(props.data) : setData('');
  }, []);

  const handleValue = (e) => setValue(e.target.value);

  return (
    <label className={ estilosLabel }>
      { texto }
      <input 
        type="time" 
        name={ data }
        id={ data } 
        className={ estilosInput }
        value={ value } 
        data={ data }
        onChange={ handleValue } 
      />
      hs
    </label>
  );
}

export default InputTime;
