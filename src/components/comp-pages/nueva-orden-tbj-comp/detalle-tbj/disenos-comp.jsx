import React, { useContext, useState } from 'react';
import InputText from '../../../input-text';
import TextArea from '../../../text-area';
import { InputTextModel } from '../../../../models/input-text-model';
import { TextAreaModel } from '../../../../models/text-area-model';
import { NuevaOrdenTbjCompContext } from '../../nueva-orden-tbj-comp';
import { useNavigate } from 'react-router-dom';
import { atendido_por, fecha_creacion, nro_orden } from '../../../../services/datos-orden-tbj/datos-orden-tbj';
import Muestra from '../muestra';
import DetallePago from '../detalle-pago';
import { crearOrden } from '../../../../services/form-nueva-orden/crear-orden';
import { urlApi } from '../../../../services/url/url-api';
import { HiOutlineLightBulb } from "react-icons/hi";
import FechaHora from '../fecha-hora';

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
    const abono = document.querySelector('[data="abono"]').value;
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
      estado: "pendiente",
      abono
    };

    btnSubmit.setAttribute('disabled', true);

    await crearOrden(urlApi + '/api/disenos', body)
      .then(res => res.json())
      .then(({ registro, mensaje, nro_orden }) => {
        btnSubmit.removeAttribute('disabled');
        setRespuestaServidor({registro: registro, mensaje: mensaje});
        if(registro) navigate(`/pdf/diseños/${nro_orden}`);
      })
      .catch(e => console.log(e))
    ;
  }

  const handleChange = () => {
    setRespuestaServidor({registro: false, mensaje: ''});
  };

  return (
    <div>
      <div className='icon-nombre-tipo-trabajo--container'>
        <HiOutlineLightBulb className='icon-tipo-trabajo' />
        <h5 className='nombre-tipo-trabajo'>Diseños</h5>
      </div>
      <form name='form-disenos' onSubmit={ handleSubmint } onChange={ handleChange }>
        <FechaHora />
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
