import React from 'react';
import { InputDateModel } from '../../../models/input-date-model';
import InputDate from '../../input-date';
import InputTime from '../../input-time';
import { InputTimeModel } from '../../../models/input-time-model';

const FechaHora = () => {
  return (
    <div>
      <span>Entregar el </span>
      <InputDate props={ new InputDateModel('', '', null, 'input-date-time', 'fecha') } />
      <span> a las </span>
      <InputTime props={ new InputTimeModel('', '', '19:00', 'input-date-time', 'hora')} />
    </div>
  );
}

export default FechaHora;
