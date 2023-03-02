import React, { useContext, useState, createContext } from 'react';
import InputText from '../../../input-text';
import Abrochado from './impresiones-comp/abrochado';
import Anillado from './impresiones-comp/anillado';
import Corte from './impresiones-comp/corte';
import Faz from './impresiones-comp/faz';
import Orientacion from './impresiones-comp/orientacion';
import TamanoPapel from './impresiones-comp/tamano-papel';
import { InputTextModel } from '../../../../models/input-text-model';
import InputDate from '../../../input-date';
import InputTime from '../../../input-time';
import Muestra from '../muestra';
import { InputDateModel } from '../../../../models/input-date-model';
import { InputTimeModel } from '../../../../models/input-time-model';
import TextArea from '../../../text-area';
import { TextAreaModel } from '../../../../models/text-area-model';
import DetallePago from '../detalle-pago';
import { NuevaOrdenTbjCompContext } from '../../nueva-orden-tbj-comp';
import { atendido_por, fecha_creacion, nro_orden } from '../../../../services/datos-orden-tbj/datos-orden-tbj';
import { urlApi } from '../../../../services/url/url-api';
import { crearOrden } from '../../../../services/form-nueva-orden/crear-orden';
import { useNavigate } from 'react-router-dom';

export const ImpresionesCompContext = createContext();

const ImpresionesComp = () => {
  const { clienteS, muestra } = useContext(NuevaOrdenTbjCompContext);
  const navigate = useNavigate();
  const [respuestaServidor, setRespuestaServidor] = useState({registro: false, mensaje: ''});
  const [faz, setFaz] = useState('');
  const [orientacion, setOrientacion] = useState('');
  const [anillado, setAnillado] = useState('');
  const [abrochado, setAbrochado] = useState('');
  const [corte, setCorte] = useState('');
  
  const handleSubmint = async (e) => {
    e.preventDefault();
    const { id } = clienteS;
    const fecha_entrega = document.querySelector('[data="fecha"]').value;
    const hora_entrega = document.querySelector('[data="hora"]').value;
    const ubicacion_archivo = document.querySelector('[data="ubicacion-archivo"]').value;
    const tipo_papel = document.querySelector('[data="tipo-papel"]').value;
    const tamano_papel = document.querySelector('[data="tamano-papel"]').value;
    const observaciones = document.querySelector('[data="observaciones"]').value;
    const total = document.querySelector('[data="total"]').value;
    const entrega = document.querySelector('[data="entrega"]').value;
    const btnSubmit = document.querySelector('[data="btn-submit"]');
    
    const body = {
      id_cliente: id,
      nro_orden: nro_orden(),
      fecha_creacion: fecha_creacion(),
      atendido_por: atendido_por(),
      fecha_entrega,
      hora_entrega,
      muestra,
      ubicacion_archivo,
      faz,
      tipo_papel,
      tamano_papel,
      orientacion,
      anillado,
      abrochado,
      corte,
      observaciones,
      total,
      entrega,
      estado: "pendiente"
    };

    btnSubmit.setAttribute('disabled', true);

    await crearOrden(urlApi + '/api/impresiones', body)
      .then(res => res.json())
      .then(({ registro, mensaje, nro_orden }) => {
        btnSubmit.removeAttribute('disabled');
        setRespuestaServidor({registro: registro, mensaje: mensaje});
        if(registro) navigate(`/pdf/impresiones/${nro_orden}`);
      })
      .catch(e => console.log(e))
    ;
  };

  const handleChange = () => {
    setRespuestaServidor({registro: false, mensaje: ''});
  };

  return (
    <ImpresionesCompContext.Provider value={{ setFaz, setOrientacion, setAnillado, setAbrochado, setCorte }}>
      <div>
        <h2>Impresiones</h2>
        <form name='form-impresiones' onSubmit={ handleSubmint } onChange={ handleChange }>
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
        </form>
      </div>
    </ImpresionesCompContext.Provider>
  );
}

export default ImpresionesComp;
