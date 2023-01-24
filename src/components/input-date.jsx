import React, {
  useState,
  useEffect
} from 'react';

const InputDate = ({ props }) => {
  const [texto, setTexto] = useState('');
  const [estilosLabel, setEstilosLabel] = useState('');
  const [data, setData] = useState('');
  const [estilosInput, setEstilosInput] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    props.texto ? setTexto(props.texto) : setTexto('');
    props.estilosLabel ? setEstilosLabel(props.estilosLabel) : setEstilosLabel('');
    props.estilosInput ? setEstilosInput(props.estilosInput) : setEstilosInput('');
    props.data ? setData(props.data) : setData('');
  }, []);

  const handleValue = (e) => setValue(e.target.value);

  return (
    <label className={ estilosLabel }>
      { texto }
      <input 
        type="date" 
        name={ data }
        id={ data }
        value={ value }
        className={ estilosInput }
        data={ data }
        onChange={ handleValue }
      />
    </label>
  );
}

export default InputDate;
