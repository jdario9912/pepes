import React from 'react';
import InputText from '../../../input-text';
import InputNumber from '../../../input-number';
import { InputNumberModel } from '../../../../models/input-number-model';
import { InputTextModel } from '../../../../models/input-text-model';

const RemerasComp = () => {
  return (
    <div>
      <h5>Remeras</h5>
      <InputText props={ new InputTextModel('Ubicación del archivo: ', '', '', 'Ingresa ubicación del archivo', '', 'remeras-ubicacion')} />
      <InputText props={ new InputTextModel('Talles: ', '', '', 'Ingresa talles', '', 'remeras-talles')} />
      <InputText props={ new InputTextModel('Color: ', '', '', 'Ingresa color', '', 'remeras-color')} />
      <InputText props={ new InputTextModel('Estampa pecho: ', '', '', 'Ingresa estampa pecho', '', 'remeras-estampa-pecho')} />
      <InputText props={ new InputTextModel('Estampa espalda: ', '', '', 'Ingresa estampa espalda', '', 'remeras-estampa-espalda')} />
      <InputText props={ new InputTextModel('Color estampa: ', '', '', 'Ingresa color de la estampa', '', 'remeras-color-estampa')} />
      <InputNumber props={ new InputNumberModel('Cantidad: ', '', '', '', 'remeras-cantidad')} />
    </div>
  );
}

export default RemerasComp;
