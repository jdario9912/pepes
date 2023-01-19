import React, { useEffect, useState } from 'react';
import '../styles/input-password.css';

const InputPassword = (props) => {
  const [placeholder, setPlaceholder] = useState('');

  useEffect(() => {
    props.placeholder ? setPlaceholder(props.placeholder) : setPlaceholder('');
  }, []);
  return (
    <label className='input-password--label'>
      { props.texto }
      <input 
        type="password" 
        name="" 
        id=""
        placeholder={ placeholder }
      />
    </label>
  );
}

export default InputPassword;
