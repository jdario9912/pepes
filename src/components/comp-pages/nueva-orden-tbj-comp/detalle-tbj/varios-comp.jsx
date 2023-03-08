import React, { useState, useContext } from 'react';
import TextArea from '../../../text-area';
import { TextAreaModel } from '../../../../models/text-area-model';
import InputDate from '../../../input-date';
import InputTime from '../../../input-time';
import Muestra from '../muestra';
import { InputDateModel } from '../../../../models/input-date-model';
import { InputTimeModel } from '../../../../models/input-time-model';
import DetallePago from '../detalle-pago';
import { NuevaOrdenTbjCompContext } from '../../nueva-orden-tbj-comp';
import { atendido_por, fecha_creacion, nro_orden } from '../../../../services/datos-orden-tbj/datos-orden-tbj';
import { urlApi } from '../../../../services/url/url-api';
import { crearOrden } from '../../../../services/form-nueva-orden/crear-orden';
import { useNavigate } from 'react-router-dom';
import { TbQuestionMark } from "react-icons/tb";

const VarioComp = () => {
  const { clienteS, muestra } = useContext(NuevaOrdenTbjCompContext);
  const navigate = useNavigate();
  const [respuestaServidor, setRespuestaServidor] = useState({registro: false, mensaje: ''});
  const [numeroOrden, setNumeroOrden] = useState(null);

  const handleSubmint = async (e) => {
    e.preventDefault();
    const { id } = clienteS;
    const fecha_entrega = document.querySelector('[data="fecha"]').value;
    const hora_entrega = document.querySelector('[data="hora"]').value;
    const detalle = document.querySelector('[data="detalle"]').value;
    const observaciones = document.querySelector('[data="observaciones"]').value;
    const total = document.querySelector('[data="total"]').value;
    const entrega = document.querySelector('[data="entrega"]').value;
    const abono = document.querySelector('[data="abono"]').value;
    const btnSubmit = document.querySelector('[data="btn-submit"]');

    setNumeroOrden(nro_orden());
    
    const body = {
      id_cliente: id,
      nro_orden: numeroOrden,
      fecha_creacion: fecha_creacion(),
      atendido_por: atendido_por(),
      fecha_entrega,
      hora_entrega,
      muestra,
      detalle,
      observaciones,
      total,
      entrega,
      estado: "pendiente",
      abono
    };

    btnSubmit.setAttribute('disabled', true);

    await crearOrden(urlApi + '/api/varios', body)
      .then(res => res.json())
      .then(({ registro, mensaje, nro_orden }) => {
          btnSubmit.removeAttribute('disabled');
          setRespuestaServidor({registro: registro, mensaje: mensaje});
          if(registro) navigate(`/pdf/varios/${nro_orden}`);
      })
      .catch(e => console.log(e))
    ;
  };

  const handleChange = () => {
    setRespuestaServidor({registro: false, mensaje: ''});
  };

  return (
    <div>
      <div className='icon-nombre-tipo-trabajo--container'>
        <TbQuestionMark className='icon-tipo-trabajo' />
        <h5 className='nombre-tipo-trabajo'>Varios</h5>
      </div>
      <form name='form-varios' onSubmit={ handleSubmint } onChange={ handleChange }>
        <div>
          <span>Entregar el </span>
          <InputDate props={ new InputDateModel('', '', null, '', 'fecha') } />
          <span>, a las </span>
          <InputTime props={ new InputTimeModel('', '', '19:00', '', 'hora')} />
        </div>
        <Muestra />
        <TextArea props={ new TextAreaModel('Detalle: ', '', '', 'Ingresa una descripción', '', 'detalle')} />
        <TextArea props={ new TextAreaModel('Observaciones:', '', '', 'Ingresar detalles de la orden', '', 'observaciones') } />
        <DetallePago />
        <div>
          { !respuestaServidor.registro ? <span>{respuestaServidor.mensaje}</span> : null }
          <button type="submit" data='btn-submit'>Guardar</button>
        </div>
      </form>
    </div>
  );
}

export default VarioComp;
