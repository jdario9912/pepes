import React from 'react';
import SelecOption from '../../../select-option';
import InputNumber from '../../../input-number';
import { InputNumberModel } from '../../../../models/input-number-model';
import { SelectOptionModel } from '../../../../models/select-option-model';

const BonosComp = () => {
  const 
    opcionesTipo = ['Obra', 'Ilustración'],
    opcionesTamano = ['1/3', '1/4', '1/6', '1/8'],
    opcionesNumeradores = ['1', '2', '3'],
    opcionesLotes = ['10', '25', '50', '100']
  ;

  return (
    <div>
      <h5>Bonos</h5>
      <SelecOption props={ new SelectOptionModel('Tipo: ', '', '', '', 'bonos-tipo', opcionesTipo)} />
      <SelecOption props={ new SelectOptionModel('Tamaño: ', '', '', '', 'bonos-tamano', opcionesTamano)} />
      <InputNumber props={ new InputNumberModel('Desde número: ', '', '', '', 'desde-numero')} />
      <InputNumber props={ new InputNumberModel('Cantidad: ', '', '', '', 'cantidad')} />
      <SelecOption props={ new SelectOptionModel('Numeradores: ', '', '', '', 'bonos-numeradores', opcionesNumeradores)} />
      <SelecOption props={ new SelectOptionModel('En lotes de: ', '', '', '', 'bonos-lotes', opcionesLotes)} />
    </div>
  );
}

export default BonosComp;
