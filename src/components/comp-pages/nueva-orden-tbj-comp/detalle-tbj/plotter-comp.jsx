import React, { useContext, useState, createContext } from 'react';
import InputText from '../../../input-text';
import Color from './plotter-comp/color';
import Material from './plotter-comp/material';
import Terminacion from './plotter-comp/terminacion';
import { InputTextModel } from '../../../../models/input-text-model';
import { useNavigate } from 'react-router-dom';
import { NuevaOrdenTbjCompContext } from '../../nueva-orden-tbj-comp';
import { atendido_por, fecha_creacion, nro_orden } from '../../../../services/datos-orden-tbj/datos-orden-tbj';
import { crearOrden } from '../../../../services/form-nueva-orden/crear-orden';
import { urlApi } from '../../../../services/url/url-api';
import InputDate from '../../../input-date';
import InputTime from '../../../input-time';
import Muestra from '../muestra';
import { InputDateModel } from '../../../../models/input-date-model';
import { InputTimeModel } from '../../../../models/input-time-model';
import TextArea from '../../../text-area';
import { TextAreaModel } from '../../../../models/text-area-model';
import DetallePago from '../detalle-pago';
import { BsPrinter } from "react-icons/bs";

export const PlotterCompContext = createContext();

const PlotterComp = () => {
  const { clienteS, muestra } = useContext(NuevaOrdenTbjCompContext);
  const navigate = useNavigate();
  const [respuestaServidor, setRespuestaServidor] = useState({registro: false, mensaje: ''});
  const [material, setMaterial] = useState('');
  const [terminacion, setTerminacion] = useState('');
  const [color, setColor] = useState('');

  const handleSubmint = async (e) => {
    e.preventDefault();
    const { id } = clienteS;
    const fecha_entrega = document.querySelector('[data="fecha"]').value;
    const hora_entrega = document.querySelector('[data="hora"]').value;
    const ubicacion_archivo = document.querySelector('[data="ubicacion-archivo"]').value;
    const tamano = document.querySelector('[data="tamano"]').value;
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
      tamano,
      color,
      material,
      terminacion,
      observaciones,
      total,
      entrega,
      estado: "pendiente",
      abono
    };

    btnSubmit.setAttribute('disabled', true);

    await crearOrden(urlApi + '/api/plotter', body)
      .then(res => res.json())
      .then(({ registro, mensaje, nro_orden }) => {
        btnSubmit.removeAttribute('disabled');
        setRespuestaServidor({registro: registro, mensaje: mensaje});
        if(registro) navigate(`/pdf/plotter/${nro_orden}`);
      })
      .catch(e => console.log(e))
    ;
  };

  const handleChange = () => {
    setRespuestaServidor({registro: false, mensaje: ''});
  };

  return (
    <PlotterCompContext.Provider value={{ setMaterial, setTerminacion, setColor, color }}>
      <div>
        <div className='icon-nombre-tipo-trabajo--container'>
          <BsPrinter className='icon-tipo-trabajo' />
          <h5 className='nombre-tipo-trabajo'>Plotter</h5>
        </div>
        <form name='form-plotter' onSubmit={ handleSubmint } onChange={ handleChange }>
          <div>
            <span>Entregar el </span>
            <InputDate props={ new InputDateModel('', '', null, '', 'fecha') } />
            <span>, a las </span>
            <InputTime props={ new InputTimeModel('', '', '19:00', '', 'hora')} />
          </div>
          <Muestra />
          <InputText props={ new InputTextModel('Ubicación del archivo: ', '', '', 'Ingresa la ubicación del archivo', '', 'ubicacion-archivo')} />
          <InputText props={ new InputTextModel('Tamaño: ', '', '', 'Ingresa el tamaño del plotter', '', 'tamano')} />
          <Color />
          <Material />
          <Terminacion />
          <TextArea props={ new TextAreaModel('Observaciones:', '', '', 'Ingresar detalles de la orden', '', 'observaciones') } />
          <DetallePago />
          <div>
            { !respuestaServidor.registro ? <span>{respuestaServidor.mensaje}</span> : null }
            <button type="submit" data='btn-submit'>Guardar</button>
          </div>
        </form>
      </div>
    </PlotterCompContext.Provider>
  );
}

export default PlotterComp;
