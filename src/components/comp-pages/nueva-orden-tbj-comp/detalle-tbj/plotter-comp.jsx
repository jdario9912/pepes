import React from 'react';
import InputText from '../../../input-text';
import Color from './plotter-comp/color';
import Material from './plotter-comp/material';
import Terminacion from './plotter-comp/terminacion';
import { InputTextModel } from '../../../../models/input-text-model';

const PlotterComp = () => {
  return (
    <div>
      <h5>Plotter</h5>
      <InputText props={ new InputTextModel('Ubicación del archivo: ', '', '', 'Ingresa la ubicación del archivo', '', 'plotter-ubicacion')} />
      <InputText props={ new InputTextModel('Tamaño: ', '', '', 'Ingresa el tamaño del plotter', '', 'plotter-tamano')} />
      <Color />
      <Material />
      <Terminacion />
    </div>
  );
}

export default PlotterComp;
