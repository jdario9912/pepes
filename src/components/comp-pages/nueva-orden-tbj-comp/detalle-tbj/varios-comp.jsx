import React from 'react';
import TextArea from '../../../text-area';
import { TextAreaModel } from '../../../../models/text-area-model';

const VarioComp = () => {
  return (
    <div>
      <h5>Varios</h5>
      <TextArea props={ new TextAreaModel('Descripción: ', '', '', 'Ingresa una descripción', '', 'varios-descripcion')} />
    </div>
  );
}

export default VarioComp;
