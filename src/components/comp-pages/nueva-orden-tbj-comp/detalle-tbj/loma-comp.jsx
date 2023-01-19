import React from 'react';
import InputText from '../../../input-text';
import Orientacion from './loma-comp/orientacion';
import Material from './loma-comp/material';
import Corte from './loma-comp/corte';
import Ojales from './loma-comp/ojales';
import Troquelado from './loma-comp/troquelado';
import Portabaner from './loma-comp/portabaner';
import SelectOption from '../../../select-option';

const LomaComp = () => {
  const 
    opcionesBolsillo = ['No', 'Arriba', 'Arriba y abajo']
  ;
  return (
    <div>
      <h5>Loma</h5>
      <Material />
      <InputText texto='Ubicación del archivo: ' />
      <Orientacion />
      <Corte />
      <SelectOption texto='Bolsillo: ' opciones={ opcionesBolsillo } />
      <Ojales />
      <Troquelado />
      <Portabaner />
    </div>
  );
}

export default LomaComp;
