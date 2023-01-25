import React from 'react';
import InputText from '../../../input-text';
import TextArea from '../../../text-area';
import { InputTextModel } from '../../../../models/input-text-model';
import { TextAreaModel } from '../../../../models/text-area-model';

const DisenosComp = () => {
  return (
    <div>
      <h5>Diseños</h5>
      <InputText props={ new InputTextModel('Ubicación del archivo: ', '', '', 'Ingresa ubicación del archivo', '', 'disenos-ubicacion-archivo')} />
      <InputText props={ new InputTextModel('Detalles: ', '', '', 'Ingresa detalles del diseño', '', 'disenos-detalles')} />
      <TextArea props={ new TextAreaModel('Descripción: ', '', '', 'Ingresa una descripción del diseño', '', 'diseno-descripcion')} />
    </div>
  );
}

export default DisenosComp;
