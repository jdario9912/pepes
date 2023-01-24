import React,{
  useState,
  useEffect
} from 'react';

const InputMail = ({ props }) => {
  const [texto, setTexto] = useState('');
  const [estilosLabel, setEstilosLabel] = useState('');
  const [estilosInput, setEstilosInput] = useState('');
  const [value, setValue] = useState('');
  const [data, setData] = useState('');
  const [placeholder, setPlaceholder] = useState('');

  const handleValue =  (e) => setValue(e.target.value);

  useEffect(() => {
    props.texto ? setTexto(props.texto) : setTexto('');
    props.estilosLabel ? setEstilosLabel(props.estilosLabel) : setEstilosLabel('');
    props.estilosInput ? setEstilosInput(props.estilosInput) : setEstilosInput('');
    props.value ? setValue(props.value) : setValue('');
    props.data ? setData(props.data) : setData('');
    props.placeholder ? setPlaceholder(props.placeholder) : setPlaceholder('');
  }, []);

  return (
    <label className={ estilosLabel }>
      { texto }
      <input 
        type="email" 
        name={ data } 
        id={ data} 
        className={ estilosInput }
        value={ value }
        placeholder={ placeholder }
        data={ data }
        onChange={ handleValue }
      />
    </label>
  );
}

export default InputMail;
