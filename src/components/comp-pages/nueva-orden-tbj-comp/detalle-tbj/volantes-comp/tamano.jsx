import React from 'react';
import SelectOption from '../../../../select-option';
import { SelectOptionModel } from '../../../../../models/select-option-model';

const Tamano = () => {
  const opcionesTamano = ['1/4', '1/2', '1/8', 'otro'];
  
  return (
    <div>
      <SelectOption props={ new SelectOptionModel('Tamaño: ', '', 'select', '', 'tamano', opcionesTamano)} />
    </div>
  );
}

export default Tamano;
