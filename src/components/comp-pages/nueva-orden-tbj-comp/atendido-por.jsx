import React, {
  useContext
} from 'react';
import { AppContext } from '../../app';
import '../../../styles/atendido-por.css';

const AtendidoPor = () => {
  const { usuarioActual } = useContext(AppContext);
  return (
    <div>
      <p className='atendido-por--p'>Atendido por: { usuarioActual }</p>
    </div>
  );
}

export default AtendidoPor;
