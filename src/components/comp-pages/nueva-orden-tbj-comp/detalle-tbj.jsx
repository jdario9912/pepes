import React, {
  useContext,
} from 'react';
import { tiposTrabajo } from '../../../models/tipos-trabajo-model';
import { NuevaOrdenTbjCompContext } from '../nueva-orden-tbj-comp';

const DetalleTbj = () => {
  const { tipoTrabajo } = useContext(NuevaOrdenTbjCompContext);

  return (
    <div>
      {
        tipoTrabajo.length !== 0 ? tiposTrabajo[tipoTrabajo] : <span>No se eligio tipo de trabajo</span>
      }
    </div>
  );
}

export default DetalleTbj;
