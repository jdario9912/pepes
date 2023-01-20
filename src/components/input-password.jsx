import React, { useEffect, useState } from 'react';
import '../styles/input-password.css';

const InputPassword = (props) => {
  const [placeholder, setPlaceholder] = useState('');
  const classLabel = 'input-password--label';

  useEffect(() => {
    props.placeholder ? setPlaceholder(props.placeholder) : setPlaceholder('');
  }, []);
  return (
    <label className={ classLabel + ' ' + props.estilosLabel }>
      { props.texto }
      <input 
        type="password" 
        name="" 
        id=""
        placeholder={ placeholder }
        className={ props.estilosInput }
        data={ props.data }
      />
    </label>
  );
}

export default InputPassword;
