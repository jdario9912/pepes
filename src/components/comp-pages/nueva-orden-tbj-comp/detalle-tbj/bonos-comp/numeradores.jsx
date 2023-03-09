import React from 'react';
import SelectOption from '../../../../select-option';
import { SelectOptionModel } from '../../../../../models/select-option-model';

const Numeradores = () => {
  const opcionesNumeradores = ['1', '2', '3'];
  
  return (
    <div>
      <SelectOption props={ new SelectOptionModel('Numeradores: ', '', 'select', '', 'numeradores', opcionesNumeradores)} />
    </div>
  );
}

export default Numeradores;
