import React, {
  useContext,
} from 'react';
import { tiposTrabajo } from '../../../models/tipos-trabajo-model';
import { NuevaOrdenTbjCompContext } from '../nueva-orden-tbj-comp';
import '../../../styles/detalle-tbj.css';

const DetalleTbj = () => {
  const { tipoTrabajo } = useContext(NuevaOrdenTbjCompContext);

  return (
    <div className='detalle-tbj--container modulo'>
      {
        tipoTrabajo.length !== 0 ? tiposTrabajo[tipoTrabajo] : <span>Elige el tipo de trabajo...</span>
      }
    </div>
  );
}

export default DetalleTbj;
