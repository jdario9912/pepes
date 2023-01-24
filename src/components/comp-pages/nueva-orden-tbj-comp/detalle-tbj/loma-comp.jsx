import React from 'react';
import InputText from '../../../input-text';
import Orientacion from './loma-comp/orientacion';
import Corte from './loma-comp/corte';
import Ojales from './loma-comp/ojales';
import Troquelado from './loma-comp/troquelado';
import Portabaner from './loma-comp/portabaner';
import SelectOption from '../../../select-option';
import { InputTextModel } from '../../../../models/input-text-model';
import { SelectOptionModel } from '../../../../models/select-option-model';

const LomaComp = () => {
  const
    opcionesMaterial = ['Vinilo Brillo', 'Vinilo Mate', 'Papel', 'Lona Front', 'Transparente', 'Lona Back', 'Micro'], 
    opcionesBolsillo = ['No', 'Arriba', 'Arriba y abajo']
  ;
  return (
    <div>
      <h5>Loma</h5>
      <SelectOption props={ new SelectOptionModel('Material: ', '', '', '', 'material', opcionesMaterial)} />
      <InputText props={ new InputTextModel('Ubicación del archivo:', '', '', 'Ingresa ubicación del archivo', '', 'ubicacion-archivo')} />
      <Orientacion />
      <Corte />
      <SelectOption props={ new SelectOptionModel('Bolsillo: ', '', '', '', 'bolsillo', opcionesBolsillo) } />
      <Ojales />
      <Troquelado />
      <Portabaner />
    </div>
  );
}

export default LomaComp;
