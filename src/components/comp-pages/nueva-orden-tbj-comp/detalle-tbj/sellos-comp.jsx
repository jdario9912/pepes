import React, { useContext, useState } from 'react';
import InputText from '../../../input-text';
import { InputTextModel } from '../../../../models/input-text-model';
import Tipo from './sellos-comp/tipo';
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

const SellosComp = () => {
  const { clienteS, muestra } = useContext(NuevaOrdenTbjCompContext);
  const navigate = useNavigate();
  const [respuestaServidor, setRespuestaServidor] = useState({registro: false, mensaje: ''});

  const handleSubmint = async (e) => {
    e.preventDefault();
    const { id } = clienteS;
    const fecha_entrega = document.querySelector('[data="fecha"]').value;
    const hora_entrega = document.querySelector('[data="hora"]').value;
    const tipo = document.querySelector('[data="tipo"]').value;
    const tamano = document.querySelector('[data="tamano"]').value;
    const texto = document.querySelector('[data="texto"]').value;
    const dibujo = document.querySelector('[data="dibujo"]').value;
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
      tipo,
      tamano,
      texto,
      dibujo,
      observaciones,
      total,
      entrega,
      estado: "pendiente"
    };

    btnSubmit.setAttribute('disabled', true);

    await crearOrden(urlApi + '/api/sellos', body)
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
  };
  
  return (
    <div>
      <h5>Sellos</h5>
      <form name='form-impresiones' onSubmit={ handleSubmint } onChange={ handleChange }>
        <InputDate props={ new InputDateModel('Fecha:', '', null, '', 'fecha') } />
        <InputTime props={ new InputTimeModel('Hora:', '', '19:00', '', 'hora')} />
        <Muestra />
        <Tipo />
        <InputText props={ new InputTextModel('Tamaño: ', '', '', 'Ingresa el tamaño del sello', '', 'tamano')} />
        <InputText props={ new InputTextModel('Texto: ', '', '', 'Ingresa el texto del sello', '', 'texto')} />
        <InputText props={ new InputTextModel('Dibujo: ', '', '', 'Ingresa descripción del dibujo', '', 'dibujo')} />
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

export default SellosComp;
