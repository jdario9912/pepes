import React from 'react';
import SelectOption from '../../../../select-option';
import { SelectOptionModel } from '../../../../../models/select-option-model';

const ColorTriplicado = () => {
  const opcionesColorTriplicado = ['Amarillo', 'Rosa', 'Verde', 'Celeste'];

  return (
    <div>
      <SelectOption props={ new SelectOptionModel('Color triplicado:', '', '', '', 'color-triplicado', opcionesColorTriplicado)} />
    </div>
  );
}

export default ColorTriplicado;
