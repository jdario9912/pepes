import React, { createContext, useState, useContext } from 'react';
import InputText from '../../../input-text';
import Orientacion from './loma-comp/orientacion';
import Corte from './loma-comp/corte';
import Ojales from './loma-comp/ojales';
import Troquelado from './loma-comp/troquelado';
import Portabaner from './loma-comp/portabaner';
import { InputTextModel } from '../../../../models/input-text-model';
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
import { NuevaOrdenTbjCompContext } from '../../nueva-orden-tbj-comp';
import { atendido_por, fecha_creacion, nro_orden } from '../../../../services/datos-orden-tbj/datos-orden-tbj';
import { crearOrden } from '../../../../services/form-nueva-orden/crear-orden';
import { urlApi } from '../../../../services/url/url-api';
import { useNavigate } from 'react-router-dom';

export const LomaCompContext = createContext();

const LomaComp = () => {
  const { clienteS, muestra } = useContext(NuevaOrdenTbjCompContext);
  const navigate = useNavigate();
  const [respuestaServidor, setRespuestaServidor] = useState({registro: false, mensaje: ''});
  const [orientacion, setOrientacion] = useState('');
  const [corte, setCorte] = useState('');
  const [ojales, setOjales] = useState('');
  const [troquelado, setTroquelado] = useState('');
  const [portabaner, setPortabaner] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { id } = clienteS;
    const fecha = document.querySelector('[data="fecha"]').value;
    const hora = document.querySelector('[data="hora"]').value;
    const ubicacionArchivo = document.querySelector('[data="ubicacion-archivo"]').value;
    const material = document.querySelector('[data="material"]').value;
    const bolsillo = document.querySelector('[data="bolsillo"]').value;
    const observaciones = document.querySelector('[data="observaciones"]').value;
    const total = document.querySelector('[data="total"]').value;
    const entrega = document.querySelector('[data="entrega"]').value;
    const btnSubmit = document.querySelector('[data="btn-submit"]');

    const body = {
      id_cliente: id,
      nro_orden : nro_orden(),
      fecha_creacion: fecha_creacion(),
      atendido_por: atendido_por(),
      fecha_entrega: fecha,
      hora,
      muestra,
      ubicacion_archivo: ubicacionArchivo,
      material,
      orientacion,
      bolsillo,
      corte,
      ojales,
      troquelado,
      portabaner,
      observaciones,
      total,
      entrega,
      estado: 'pendiente'
    }
    
    btnSubmit.setAttribute('disabled', true);

    await crearOrden(urlApi + '/api/loma', body)
      .then(res => res.json())
      .then(({ registro, mensaje }) => {
        btnSubmit.removeAttribute('disabled');
        setRespuestaServidor({registro: registro, mensaje: mensaje});
        if(registro) navigate('/');
      })
      .catch(e => console.log(e))
    ;

  };

  const handleChange = () => {
    setRespuestaServidor({registro: false, mensaje: ''});
  }

  return (
    <LomaCompContext.Provider value={{setOrientacion, setCorte, setOjales, setTroquelado, setPortabaner}}>
      <div>
        <h5>Loma</h5>
        <form name='form-loma' onSubmit={ handleSubmit } onChange={ handleChange }>
          <InputDate props={ new InputDateModel('Fecha:', '', null, '', 'fecha') } />
          <InputTime props={ new InputTimeModel('Hora:', '', '19:00', '', 'hora')} />
          <Muestra />
          <InputText props={ new InputTextModel('Ubicación del archivo:', '', '', 'Ingresa ubicación del archivo', '', 'ubicacion-archivo')} />
          <Material />
          <Orientacion />
          <Bolsillo />
          <Corte />
          <Ojales />
          <Troquelado />
          <Portabaner />
          <TextArea props={ new TextAreaModel('Observaciones:', '', '', 'Ingresar detalles de la orden', '', 'observaciones') } />
          <DetallePago />
          <div>
            { !respuestaServidor.registro ? <span>{respuestaServidor.mensaje}</span> : null }
            <button type="submit" data='btn-submit'>Guardar</button>
          </div>
        </form>

      </div>
    </LomaCompContext.Provider>
  );
}

export default LomaComp;
