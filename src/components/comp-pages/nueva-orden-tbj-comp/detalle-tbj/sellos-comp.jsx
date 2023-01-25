import React from 'react';
import SelecOption from '../../../select-option';
import InputText from '../../../input-text';
import { InputTextModel } from '../../../../models/input-text-model';
import { SelectOptionModel } from '../../../../models/select-option-model';

const SellosComp = () => {
  const 
    opcionesTipo = ['Madera', 'Automático', 'Pocket', 'Otro']
  ;
  return (
    <div>
      <h5>Sellos</h5>
      <SelecOption props={ new SelectOptionModel('Tipo: ', '', '', '', 'sellos-tipo', opcionesTipo)} />
      <InputText props={ new InputTextModel('Tamaño: ', '', '', 'Ingresa el tamaño del sello', '', 'sellos-tamano')} />
      <InputText props={ new InputTextModel('Texto: ', '', '', 'Ingresa el texto del sello', '', 'sellos-texto')} />
      <InputText props={ new InputTextModel('Dibujo: ', '', '', 'Ingresa descripción del dibujo', '', 'sellos-dibujo')} />
    </div>
  );
}

export default SellosComp;
