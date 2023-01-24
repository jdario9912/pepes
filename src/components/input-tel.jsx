import React, {
  useState,
  useEffect
} from 'react';

const InputTel = ({ props }) => {
  const [value, setValue] = useState('');

  const handleValue = (e) => setValue(e.target.value);

  useEffect(() => {
    props.value ? setValue(props.value) : setValue('');
  }, []);

  return (
    <label className={ props.estilosLabel }>
      { props.texto }
      <input 
        type="tel" 
        name={ props.data } 
        id={ props.data } 
        data={ props.data }
        className={ props.estilosInput }
        value={ value }
        onChange={ handleValue }
      />
    </label>
  );
}

export default InputTel;
