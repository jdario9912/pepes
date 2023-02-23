import React, { useContext } from 'react';
import SelectOption from '../../../../select-option';
import { SelectOptionModel } from '../../../../../models/select-option-model';
import { TalonariosCompContext } from '../talonarios-comp';

const ColorTriplicado = () => {
  const { mostrarColorTriplicado } = useContext(TalonariosCompContext);
  const opcionesColorTriplicado = ['Amarillo', 'Rosa', 'Verde', 'Celeste'];

  return (
    <div hidden={ !mostrarColorTriplicado }>
      <SelectOption props={ new SelectOptionModel('Color triplicado:', '', '', '', 'color-triplicado', opcionesColorTriplicado)} />
    </div>
  );
}

export default ColorTriplicado;
