import React from 'react';
import InputText from '../../../input-text';
import Orientacion from './loma-comp/orientacion';
import Corte from './loma-comp/corte';
import Ojales from './loma-comp/ojales';
import Troquelado from './loma-comp/troquelado';
import Portabaner from './loma-comp/portabaner';
import SelectOption from '../../../select-option';
import { InputTextModel } from '../../../../models/input-text-model';
import { SelectOptionModel } from '../../../../models/select-option-model';
import InputDate from '../../../input-date';
import InputTime from '../../../input-time';
import Muestra from '../muestra';
import { InputDateModel } from '../../../../models/input-date-model';
import { InputTimeModel } from '../../../../models/input-time-model';
import TextArea from '../../../text-area';
import DetallePago from '../detalle-pago';
import { TextAreaModel } from '../../../../models/text-area-model';
import Material from './loma-comp/material';
import Bolsillo from './loma-comp/bolsillo';

const LomaComp = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <div>
      <h5>Loma</h5>
      <form onSubmit={ handleSubmit }>
        <InputDate props={ new InputDateModel('Fecha:', '', null, '', 'fecha') } />
        <InputTime props={ new InputTimeModel('Hora:', '', '19:00', '', 'hora')} />
        <Muestra />
        <Material />
        <InputText props={ new InputTextModel('Ubicación del archivo:', '', '', 'Ingresa ubicación del archivo', '', 'ubicacion-archivo')} />
        <Orientacion />
        <Corte />
        <Bolsillo />
        <Ojales />
        <Troquelado />
        <Portabaner />
        <TextArea props={ new TextAreaModel('Observaciones:', '', '', 'Ingresar detalles de la orden', '', 'observaciones') } />
        <DetallePago />
        <div>
          <button type="submit">Guardar</button>
        </div>
      </form>
      
    </div>
  );
}

export default LomaComp;
