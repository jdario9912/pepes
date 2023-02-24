import React from 'react';
import SelectOption from '../../../../select-option';
import { SelectOptionModel } from '../../../../../models/select-option-model';

const Tamano = () => {
  const opcionesTamano = ['1/3', '1/4', '1/6', '1/8'];
  
  return (
    <div>
      <SelectOption props={ new SelectOptionModel('Tamaño: ', '', '', '', 'tamano', opcionesTamano)} />
    </div>
  );
}

export default Tamano;
