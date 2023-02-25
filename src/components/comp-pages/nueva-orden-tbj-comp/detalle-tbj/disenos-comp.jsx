import React, { useContext, useState } from 'react';
import InputText from '../../../input-text';
import TextArea from '../../../text-area';
import { InputTextModel } from '../../../../models/input-text-model';
import { TextAreaModel } from '../../../../models/text-area-model';
import { NuevaOrdenTbjCompContext } from '../../nueva-orden-tbj-comp';
import { useNavigate } from 'react-router-dom';
import { atendido_por, fecha_creacion, nro_orden } from '../../../../services/datos-orden-tbj/datos-orden-tbj';
import InputDate from '../../../input-date';
import InputTime from '../../../input-time';
import Muestra from '../muestra';
import { InputDateModel } from '../../../../models/input-date-model';
import { InputTimeModel } from '../../../../models/input-time-model';
import DetallePago from '../detalle-pago';
import { crearOrden } from '../../../../services/form-nueva-orden/crear-orden';
import { urlApi } from '../../../../services/url/url-api';

const DisenosComp = () => {
  const { clienteS, muestra } = useContext(NuevaOrdenTbjCompContext);
  const navigate = useNavigate();
  const [respuestaServidor, setRespuestaServidor] = useState({registro: false, mensaje: ''});

  const handleSubmint = async (e) => {
    e.preventDefault();
    const { id } = clienteS;
    const fecha_entrega = document.querySelector('[data="fecha"]').value;
    const hora_entrega = document.querySelector('[data="hora"]').value;
    const ubicacion_archivo = document.querySelector('[data="ubicacion-archivo"]').value;
    const detalles = document.querySelector('[data="detalles"]').value;
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
      detalles,
      observaciones,
      total,
      entrega,
      estado: "pendiente"
    };

    btnSubmit.setAttribute('disabled', true);

    await crearOrden(urlApi + '/api/disenos', body)
      .then(res => res.json())
      .then(({ registro, mensaje }) => {
        btnSubmit.removeAttribute('disabled');
        setRespuestaServidor({registro: registro, mensaje: mensaje});
        if(registro) navigate('/');
      })
      .catch(e => console.log(e))
    ;
  }

  const handleChange = () => {
    setRespuestaServidor({registro: false, mensaje: ''});
  };

  return (
    <div>
      <h5>Diseños</h5>
      <form name='form-disenos' onSubmit={ handleSubmint } onChange={ handleChange }>
        <InputDate props={ new InputDateModel('Fecha:', '', null, '', 'fecha') } />
        <InputTime props={ new InputTimeModel('Hora:', '', '19:00', '', 'hora')} />
        <Muestra />
        <InputText props={ new InputTextModel('Ubicación del archivo: ', '', '', 'Ingresa ubicación del archivo', '', 'ubicacion-archivo')} />
        <InputText props={ new InputTextModel('Detalles: ', '', '', 'Ingresa detalles del diseño', '', 'detalles')} />
        <TextArea props={ new TextAreaModel('Observaciones: ', '', '', 'Ingresa una descripción del diseño', '', 'observaciones')} />
        <DetallePago />
          <div>
            { !respuestaServidor.registro ? <span>{respuestaServidor.mensaje}</span> : null }
            <button type="submit" data='btn-submit'>Guardar</button>
          </div>
      </form>
    </div>
  );
}

export default DisenosComp;
