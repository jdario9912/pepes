import React from 'react';
import InputText from '../../../input-text';
import Orientacion from './loma-comp/orientacion';
import Material from './loma-comp/material';
import Corte from './loma-comp/corte';
import Bolsillo from './loma-comp/bolsillo';
import Ojales from './loma-comp/ojales';
import Troquelado from './loma-comp/troquelado';
import Portabaner from './loma-comp/portabaner';

const LomaComp = () => {
  return (
    <div>
      <h5>Loma</h5>
      <Material />
      <InputText texto='Ubicación del archivo: ' />
      <Orientacion />
      <Corte />
      <Bolsillo />
      <Ojales />
      <Troquelado />
      <Portabaner />
    </div>
  );
}

export default LomaComp;
