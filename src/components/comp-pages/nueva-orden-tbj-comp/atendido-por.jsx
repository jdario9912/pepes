import React, {
  useContext
} from 'react';
import { AppContext } from '../../app';

const AtendidoPor = () => {
  const { usuario } = useContext(AppContext);
  return (
    <div>
      <p>Atendido por: { usuario }</p>
    </div>
  );
}

export default AtendidoPor;
