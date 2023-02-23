import React from 'react';
import SelectOption from '../../../../select-option';
import { SelectOptionModel } from '../../../../../models/select-option-model';

const Tamano = () => {
  const opcionesTamano = ['A4', '1/2', '1/4'];
  return (
    <div>
      <SelectOption props={ new SelectOptionModel('Tamaño:', '', '', '', 'tamano', opcionesTamano) } />
    </div>
  );
}

export default Tamano;
