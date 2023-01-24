import React from 'react';
import SelectOption from '../../../../select-option';
import { SelectOptionModel } from '../../../../../models/select-option-model';

const TamanoPapel = () => {
  const opciones = ['A4', 'A5', 'A3', 'Oficio', 'Legal'];
  return (
    <div>
      <SelectOption props={ new SelectOptionModel('Tamaño del papel:', '', '', '', 'tamano-papel', opciones)} />
    </div>
  );
}

export default TamanoPapel;
