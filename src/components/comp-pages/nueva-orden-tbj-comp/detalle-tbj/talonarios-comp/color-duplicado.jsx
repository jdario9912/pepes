import React from 'react';
import SelectOption from '../../../../select-option';
import { SelectOptionModel } from '../../../../../models/select-option-model';

const ColorDuplicado = () => {
  const opcionesColorDuplicado = ['Amarillo', 'Rosa', 'Verde', 'Celeste', 'Solo original'];

  return (
    <div>
      <SelectOption props={ new SelectOptionModel('Color duplicado:', '', '', '', 'color-duplicado', opcionesColorDuplicado)} />
    </div>
  );
}

export default ColorDuplicado;
