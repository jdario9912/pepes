import React, { useState, createContext } from 'react';
import SelectOption from '../../../select-option';
import InputNumber from '../../../input-number';
import InputText from '../../../input-text';
import ModeloAnterior from './talonarios-comp/modelo-anterior';
import TieneLogo from './talonarios-comp/tiene-logo';
import Triplicado from './talonarios-comp/triplicado';
import Aviso from './talonarios-comp/aviso';

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
        <SelectOption texto='Tipo: ' opciones={ opcionesTipo } />
        <InputNumber texto='Cantidad: ' />
        <SelectOption texto='Tamaño' opciones={ opcionesTamano } />
        <ModeloAnterior />
        <TieneLogo />
        {
          mostrarUbicacionLogo ?
            <InputText texto='Ubicacion logo: ' /> :
            null
        }
        <InputNumber texto='Numero desde: ' />
        <SelectOption texto='Puntillado - Emblocado: ' opciones={ opcionesPuntillado } />
        <SelectOption texto='Color duplicado: ' opciones={ opcionesColorDuplicadoTriplicado } />
        <Triplicado />
        {
          mostrarColorTriplicado ?
            <SelectOption texto='Color triplicado: ' opciones={ opcionesColorDuplicadoTriplicado } /> :
            null
        }
        <Aviso />
      </div>
    </TalonariosCompContext.Provider>
  );
}

export default TalonariosComp;
