import React from 'react';
import InputText from '../../../input-text';
import Abrochado from './impresiones-comp/abrochado';
import Anillado from './impresiones-comp/anillado';
import Corte from './impresiones-comp/corte';
import Faz from './impresiones-comp/faz';
import Orientacion from './impresiones-comp/orientacion';
import TamanoPapel from './impresiones-comp/tamano-papel';
import { InputTextModel } from '../../../../models/input-text-model';

const ImpresionesComp = () => {
  return (
    <div>
      <h5>Impresiones</h5>
      <InputText props={ new InputTextModel('Ubicación del archivo: ', '', '', 'Ingresa ubicación del archivo', '', 'ubicacion-archivo')} />
      <Faz />
      <InputText props={ new InputTextModel('Tipo de papel: ', '', '', 'Ingresa tipo de papel', '', 'tipo-papel')} />
      <TamanoPapel />
      <Orientacion />
      <Anillado />
      <Abrochado />
      <Corte />
    </div>
  );
}

export default ImpresionesComp;
