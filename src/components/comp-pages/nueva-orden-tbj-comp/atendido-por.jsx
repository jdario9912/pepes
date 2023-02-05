import React, {
  useContext
} from 'react';
import { AppContext } from '../../app';
import '../../../styles/atendido-por.css';

const AtendidoPor = () => {
  const { usuarioActual } = useContext(AppContext);
  return (
    <>
      <p className='atendido-por--p'>Atendido por: <span>{ usuarioActual }</span></p>
    </>
  );
}

export default AtendidoPor;
