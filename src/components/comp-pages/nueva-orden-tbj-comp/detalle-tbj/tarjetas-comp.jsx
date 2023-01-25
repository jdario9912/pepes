import React from 'react';
import SelecOption from '../../../select-option';
import OtraTerminacion from './tarjetas-comp/otra-terminacion';
import PuntasRedondas from './tarjetas-comp/puntas-redondas';
import { SelectOptionModel } from '../../../../models/select-option-model';

const TarjetasComp = () => {
  const 
    opcionesTipo = ['Laser 1/0', 'Laser 4/0', 'Laser 4/1', 'Laser 4/4', '1000 4/1', '1000 4/4', 'Opp mate X1', 'Opp mate X2', 'Uv sector X1', 'Uv sector X2'],
    opcionesCantidad = ['100', '200', '1000', '2000'],
    opcionesPapel = ['Ilustración', 'Obra', 'Madera']
  ;
  return (
    <div>
      <h5>Tarjetas</h5>
      <SelecOption props={ new SelectOptionModel('Tipo: ', '', '', '', 'tarjetas-tipo', opcionesTipo)} />
      <SelecOption props={ new SelectOptionModel('Cantidad: ', '', '', '', 'tarjetas-cantidad', opcionesCantidad)} />
      <SelecOption props={ new SelectOptionModel('Papel: ', '', '', '', 'tarjetas-papel', opcionesPapel)} />
      <OtraTerminacion />
      <PuntasRedondas />
    </div>
  );
}

export default TarjetasComp;
