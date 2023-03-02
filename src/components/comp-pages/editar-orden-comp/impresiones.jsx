import React from 'react';
import InputDate from '../../input-date';
import { InputDateModel } from '../../../models/input-date-model';
import InputTime from '../../input-time';
import { InputTimeModel } from '../../../models/input-time-model';
import Muestra from '../nueva-orden-tbj-comp/muestra';
import InputText from '../../input-text';
import { InputTextModel } from '../../../models/input-text-model';
import Faz from '../nueva-orden-tbj-comp/detalle-tbj/impresiones-comp/faz';
import TamanoPapel from '../nueva-orden-tbj-comp/detalle-tbj/impresiones-comp/tamano-papel';
import Orientacion from '../nueva-orden-tbj-comp/detalle-tbj/impresiones-comp/orientacion';
import Anillado from '../nueva-orden-tbj-comp/detalle-tbj/impresiones-comp/anillado';
import Abrochado from '../nueva-orden-tbj-comp/detalle-tbj/impresiones-comp/abrochado';
import Corte from '../nueva-orden-tbj-comp/detalle-tbj/impresiones-comp/corte';
import TextArea from '../../text-area';
import { TextAreaModel } from '../../../models/text-area-model';
import DetallePago from '../nueva-orden-tbj-comp/detalle-pago';

const Impresiones = () => {
  // const handleChange, handleSubmint, respuestaServidor;

  return (
    <div>
      <h2>Impresiones</h2>
      {/* <form name='form-impresiones' onSubmit={ 'handleSubmint' } onChange={ handleChange }>
        <div>
          <span>Entregar el </span>
          <InputDate props={ new InputDateModel('', '', null, '', 'fecha') } />
          <span>, a las </span>
          <InputTime props={ new InputTimeModel('', '', '19:00', '', 'hora')} />
        </div>
        <Muestra />
        <InputText props={ new InputTextModel('Ubicación del archivo: ', '', '', 'Ingresa ubicación del archivo', '', 'ubicacion-archivo')} />
        <Faz />
        <InputText props={ new InputTextModel('Tipo: ', '', '', 'Ingresa tipo de papel', '', 'tipo-papel')} />
        <TamanoPapel />
        <Orientacion />
        <Anillado />
        <Abrochado />
        <Corte />
        <TextArea props={ new TextAreaModel('Observaciones:', '', '', 'Ingresar detalles de la orden', '', 'observaciones') } />
        <DetallePago />
        <div>
          { !respuestaServidor.registro ? <span>{respuestaServidor.mensaje}</span> : null }
          <button type="submit" data='btn-submit'>Guardar</button>
        </div>
      </form> */}
    </div>
  );
}

export default Impresiones;
