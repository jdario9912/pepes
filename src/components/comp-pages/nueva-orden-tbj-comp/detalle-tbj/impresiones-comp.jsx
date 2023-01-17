import React from 'react';
import InputText from '../../../input-text';
import Abrochado from './impresiones-comp/abrochado';
import Anillado from './impresiones-comp/anillado';
import Corte from './impresiones-comp/corte';
import Faz from './impresiones-comp/faz';
import TamanoPapel from './impresiones-comp/tamano-papel';

const ImpresionesComp = () => {
  return (
    <div>
      <h5>Impresiones</h5>
      <InputText texto='Ubicacion del archivo: ' />
      <Faz />
      <InputText texto='Tipo de papel: ' />
      <TamanoPapel />
      <Anillado />
      <Abrochado />
      <Corte />
    </div>
  );
}

export default ImpresionesComp;
