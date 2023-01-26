import React, { useEffect, useState } from 'react';

const InputPassword = ({ props }) => {
  const [texto, setTexto] = useState('');
  const [estilosLabel, setEstilosLabel] = useState('');
  const [estilosInput, setEstilosInput] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const [data, setData] = useState('');

  useEffect(() => {
    props.texto ? setTexto(props.texto) : setTexto('');
    props.estilosLabel ? setEstilosLabel(props.estilosLabel) : setEstilosLabel('');
    props.estilosInput ? setEstilosInput(props.estilosInput) : setEstilosInput('');
    props.placeholder ? setPlaceholder(props.placeholder) : setPlaceholder('');
    props.data ? setData(props.data) : setData('');
  }, []);
  return (
    <label className={ estilosLabel }>
      { texto }
      <input 
        type="password" 
        name={ data } 
        id={ data }
        placeholder={ placeholder }
        className={ estilosInput }
        data={ data }
      />
    </label>
  );
}

export default InputPassword;
