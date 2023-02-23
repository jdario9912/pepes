import React, { useState, createContext } from 'react';
import InputNumber from '../../../input-number';
import InputText from '../../../input-text';
import ModeloAnterior from './talonarios-comp/modelo-anterior';
import TieneLogo from './talonarios-comp/tiene-logo';
import Triplicado from './talonarios-comp/triplicado';
import Aviso from './talonarios-comp/aviso';
import { InputTextModel } from '../../../../models/input-text-model';
import { InputNumberModel } from '../../../../models/input-number-model';
import Tipo from './talonarios-comp/tipo';
import Tamano from './talonarios-comp/tamano';
import PuntilladoEmblocado from './talonarios-comp/puntillado-emblocado';
import ColorDuplicado from './talonarios-comp/color-duplicado';
import ColorTriplicado from './talonarios-comp/color-triplicado';

export const TalonariosCompContext = createContext();

const TalonariosComp = () => {
  const [mostrarColorTriplicado, setMostrarColorTriplicado] = useState(false);
  const [mostrarUbicacionLogo, setMostrarUbicacionLogo] = useState(false);
  const [modeloAnterior, setModeloAnterior] = useState('');
  const [tieneLogo, setTieneLogo] = useState('');
  const [triplicado, setTriplicado] = useState('');

  return (
    <TalonariosCompContext.Provider value={{ setMostrarColorTriplicado, setMostrarUbicacionLogo, setModeloAnterior, setTieneLogo, setTriplicado }}>
      <div>
        <h5>Talonarios</h5>
        <Tipo />
        <InputNumber props={ new InputNumberModel('Cantidad: ', '', '', 4, 'cantidad') } />
        <Tamano />
        <ModeloAnterior />
        <TieneLogo />
        {
          mostrarUbicacionLogo ?
            <InputText props={ new InputTextModel('Ubicación del logo:', '', '', 'Ingresa ubicación del logo', '', 'ubicacion-logo')} /> :
            null
        }
        <InputNumber props={ new InputNumberModel('Número desde:', '', '', '', 'numero-desde') } />
        <PuntilladoEmblocado />
        <ColorDuplicado />
        <Triplicado />
        {
          mostrarColorTriplicado ?
          <ColorTriplicado /> :
            null
        }
        <Aviso />
      </div>
    </TalonariosCompContext.Provider>
  );
}

export default TalonariosComp;
