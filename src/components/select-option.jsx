import React, {
  useState,
  useEffect
} from 'react';

const SelectOption = ({ props }) => {
  const [texto, setTexto] = useState('');
  const [estilosLabel, setEstilosLabel] = useState('');
  const [estilosSelect, setEstilosSelect] = useState('');
  const [value, setValue] = useState('');
  const [data, setData] = useState('');

  const handleValue = (e) => setValue(e.target.value);

  useEffect(() => {
    props.texto ? setTexto(props.texto) : setTexto('');
    props.estilosLabel ? setEstilosLabel(props.estilosLabel) : setEstilosLabel('');
    props.estilosSelect ? setEstilosSelect(props.estilosSelect) : setEstilosSelect('');
    props.value ? setValue(props.value) : setValue('');
    props.data ? setData(props.data) : setData('');
  }, []);

  return (
    <label className={ estilosLabel }>
      { texto }
      <select 
        name={ data }
        id={ data }
        value={ value }
        data={ data }
        className={ estilosSelect }
        onChange={ handleValue }
      >
        {
          props.opciones.map(opcion =>
            <option value={ opcion } key={ opcion } className='option'>{ opcion }</option>
          )
        }
      </select>
    </label>
  );
}

export default SelectOption;
