import React, { useEffect, useState } from 'react';
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
import { urlApi } from '../../../services/url/url-api';
import { useParams } from 'react-router-dom';

const Impresiones = () => {
  const { nroOrden } = useParams();
  const [dataS, setDataS] = useState(null);
  
  useEffect(() => {
    fetch(urlApi + `/api/impresiones/${nroOrden}`)
      .then(res => res.json())
      .then(({ busqueda, data, mensaje }) => {
        if(busqueda){
          setDataS(data);
          console.log(mensaje);
        }
      })
      .catch(e => console.log(e))
    ;
  }, []);

  // useEffect(() => {
  //   console.log(dataS.muestra);
  // }, [dataS]);
  // const handleChange, handleSubmint, respuestaServidor;

  return (
    <div>
      <h2>Impresiones</h2>
      <fieldset className='input-radio--fieldset' data="muestra">
        <legend className='input-radio--legend'>Muestra:</legend>
        <div className='input-radio--inputs-container'>
          <label onClick={ 'handleClick' }>
            Si
            <input type="radio" name="muestra" id="muestra-si" value='Si' onClick={ 'handleClick' } />  
          </label>        
          <label onClick={ 'handleClick' }>
            No
            <input type="radio" name="muestra" id="muestra-no" value='No' onClick={ 'handleClick' } />
          </label>        
        </div>
      </fieldset>
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
