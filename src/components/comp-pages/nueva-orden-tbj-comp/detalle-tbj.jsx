import React, { useContext } from 'react';
import { DatosOrdenTbjContext } from './datos-orden-tbj';
import {tiposTrabajo} from '../../../models/tipos-trabajo-model';

const DetalleTbj = () => {
  const { tipoTrabajo } = useContext(DatosOrdenTbjContext);

  return (
    <div>
      <h4>Detalle de Trabajo</h4>
      {
        tipoTrabajo ? tiposTrabajo[tipoTrabajo] : <span>No se eligio tipo de trabajo</span>
      }
    </div>
  );
}

export default DetalleTbj;
