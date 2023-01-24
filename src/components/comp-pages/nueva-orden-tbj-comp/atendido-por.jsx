import React, {
  useContext
} from 'react';
import { AppContext } from '../../app';

const AtendidoPor = () => {
  const { usuarioActual } = useContext(AppContext);
  return (
    <div>
      <p>Atendido por: { usuarioActual }</p>
    </div>
  );
}

export default AtendidoPor;
