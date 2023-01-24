import React, { useState, createContext } from 'react';
import SelectOption from '../../../select-option';
import InputNumber from '../../../input-number';
import InputText from '../../../input-text';
import ModeloAnterior from './talonarios-comp/modelo-anterior';
import TieneLogo from './talonarios-comp/tiene-logo';
import Triplicado from './talonarios-comp/triplicado';
import Aviso from './talonarios-comp/aviso';
import { SelectOptionModel } from '../../../../models/select-option-model';
import { InputTextModel } from '../../../../models/input-text-model';
import { InputNumberModel } from '../../../../models/input-number-model';

export const TalonariosCompContext = createContext();

const TalonariosComp = () => {
  const 
    opcionesTipo = ['Factura C', 'Recibo C', 'Remito R', 'Presupuesto X', 'Recibo X', 'Otros'],
    opcionesTamano = ['A4', '1/2', '1/4'],
    opcionesPuntillado = ['Simple', 'Doble', 'Sueltas', 'Emblocado'],
    opcionesColorDuplicadoTriplicado = ['Amarillo', 'Rosa', 'Verde', 'Celeste']
  ;

  const [mostrarColorTriplicado, setMostrarColorTriplicado] = useState(false);
  const [mostrarUbicacionLogo, setMostrarUbicacionLogo] = useState(false);
  return (
    <TalonariosCompContext.Provider value={{ setMostrarColorTriplicado, setMostrarUbicacionLogo }}>
      <div>
        <h5>Talonarios</h5>
        <SelectOption props={ new SelectOptionModel('Tipo:', '', '', '', 'tipo', opcionesTipo) } />
        <InputNumber props={ new InputNumberModel('Cantidad: ', '', '', 4, 'cantidad') } />
        <SelectOption props={ new SelectOptionModel('Tamaño:', '', '', '', 'tamano', opcionesTamano) } />
        <ModeloAnterior />
        <TieneLogo />
        {
          mostrarUbicacionLogo ?
            <InputText props={ new InputTextModel('Ubicación del logo:', '', '', 'Ingresa ubicación del logo', '', 'ubicacion-logo')} /> :
            null
        }
        <InputNumber props={ new InputNumberModel('Número desde:', '', '', '', 'numero-desde') } />
        <SelectOption props={ new SelectOptionModel('Puntillado - Emblocado: ', '', '', '', 'puntillado', opcionesPuntillado)} />
        <SelectOption props={ new SelectOptionModel('Color duplicado:', '', '', '', 'color-duplicado', opcionesColorDuplicadoTriplicado)} />
        <Triplicado />
        {
          mostrarColorTriplicado ?
          <SelectOption props={ new SelectOptionModel('Color triplicado:', '', '', '', 'color-triplicado', opcionesColorDuplicadoTriplicado)} /> :
            null
        }
        <Aviso />
      </div>
    </TalonariosCompContext.Provider>
  );
}

export default TalonariosComp;
