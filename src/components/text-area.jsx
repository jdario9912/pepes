import React, {
  useState,
  useEffect
} from 'react';

const TextArea = ({ props }) => {
  const [texto, setTexto] = useState('');
  const [value, setValue] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const [estilosTextArea, setEstilosTextArea] = useState('');
  const [estilosLabel, setEstilosLabel] = useState('');
  const [data, setData] = useState('');

  const handleValue = (e) => setValue(e.target.value);

  useEffect(() => {
    props.texto ? setTexto(props.texto) : setTexto('');
    props.value ? setValue(props.value) : setValue('');
    props.placeholder ? setPlaceholder(props.placeholder) : setPlaceholder('');
    props.estilosInput ? setEstilosTextArea(props.estilosInput) : setEstilosTextArea('');
    props.estilosLabel ? setEstilosLabel(props.estilosLabel) : setEstilosLabel('');
    props.data ? setData(props.data) : setData('');
  }, []);

  return (
    <label className={ estilosLabel} >
      { texto }
      <textarea 
        cols="30" 
        rows="10"
        className={ estilosTextArea }
        value={ value }
        data={ data }
        placeholder={ placeholder }
        onChange= { handleValue }
        maxLength='300'
      ></textarea>
    </label>
  );
}

export default TextArea;
