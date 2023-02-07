import React from 'react';
import Tipo from './volantes-comp/tipo';
import SelecOption from '../../../select-option';
import Impresion from './volantes-comp/impresion';
import InputText from '../../../input-text';
import { InputTextModel } from '../../../../models/input-text-model';
import { SelectOptionModel } from '../../../../models/select-option-model';

const VolantesComp = () => {
  const
    opcionesTamano = ['1/4', '1/2', '1/8', 'otro'],
    opcionesCantidad = ['250', '500', '1000', '2000', '5000']
  ;
  return (
    <div>
      <h5>Volantes</h5>
      <Tipo />
      <SelecOption props={ new SelectOptionModel('Tamaño: ', '', '', '', 'volantes-tamano', opcionesTamano)} />
      <SelecOption props={ new SelectOptionModel('Cantidad: ', '', '', '', 'volantes-cantidad', opcionesCantidad)} />
      <Impresion />
      <InputText props={ new InputTextModel('Ubicación del diseño: ', '', '', 'Ingresa ubicación del diseño', '', 'volantes-ubicacion')} />
    </div>
  );
}

export default VolantesComp;
