import React, { useState, createContext, useContext } from 'react';
import OtraTerminacion from './tarjetas-comp/otra-terminacion';
import PuntasRedondas from './tarjetas-comp/puntas-redondas';
import Tipo from './tarjetas-comp/tipo';
import Cantidad from './tarjetas-comp/cantidad';
import Papel from './tarjetas-comp/papel';
import Muestra from '../muestra';
import TextArea from '../../../text-area';
import { TextAreaModel } from '../../../../models/text-area-model';
import DetallePago from '../detalle-pago';
import { NuevaOrdenTbjCompContext } from '../../nueva-orden-tbj-comp';
import { atendido_por, fecha_creacion, nro_orden } from '../../../../services/datos-orden-tbj/datos-orden-tbj';
import { urlApi } from '../../../../services/url/url-api';
import { crearOrden } from '../../../../services/form-nueva-orden/crear-orden';
import { useNavigate } from 'react-router-dom';
import { AiOutlineIdcard } from "react-icons/ai";
import FechaHora from '../fecha-hora';

export const TarjetasCompContext = createContext();

const TarjetasComp = () => {
  const { clienteS, muestra } = useContext(NuevaOrdenTbjCompContext);
  const navigate = useNavigate();
  const [respuestaServidor, setRespuestaServidor] = useState({registro: false, mensaje: ''});
  const [terminacion, setTerminacion] = useState('');
  const [puntas_redondeadas, setPuntas_redondeadas] = useState('');

  const handleSubmint = async (e) => {
    e.preventDefault();
    const { id } = clienteS;
    const fecha_entrega = document.querySelector('[data="fecha"]').value;
    const hora_entrega = document.querySelector('[data="hora"]').value;
    const tipo = document.querySelector('[data="tipo"]').value;
    const cantidad = document.querySelector('[data="cantidad"]').value;
    const papel = document.querySelector('[data="papel"]').value;
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
      tipo,
      cantidad,
      papel,
      terminacion,
      puntas_redondeadas,
      observaciones,
      total,
      entrega,
      estado: "pendiente",
      abono
    };

    btnSubmit.setAttribute('disabled', true);

    await crearOrden(urlApi + '/api/tarjetas', body)
      .then(res => res.json())
      .then(({ registro, mensaje, nro_orden }) => {
        btnSubmit.removeAttribute('disabled');
        setRespuestaServidor({registro: registro, mensaje: mensaje});
        if(registro) navigate(`/pdf/tarjetas/${nro_orden}`);
      })
      .catch(e => console.log(e))
    ;
  };

  const handleChange = () => {
    setRespuestaServidor({registro: false, mensaje: ''});
  };

  return (
    <TarjetasCompContext.Provider value={{ setTerminacion, setPuntas_redondeadas }}>
    <div>
      <div className='icon-nombre-tipo-trabajo--container'>
          <AiOutlineIdcard className='icon-tipo-trabajo' />
          <h5 className='nombre-tipo-trabajo'>Tarjetas</h5>
        </div>
      <form name='form-tarjetas' onSubmit={ handleSubmint } onChange={ handleChange }>
        <FechaHora />
        <Muestra />
        <Tipo />
        <Cantidad />
        <Papel />
        <OtraTerminacion />
        <PuntasRedondas />
        <TextArea props={ new TextAreaModel('Observaciones:', '', '', 'Ingresar detalles de la orden', '', 'observaciones') } />
        <DetallePago />
        <div>
          { !respuestaServidor.registro ? <span>{respuestaServidor.mensaje}</span> : null }
          <button type="submit" data='btn-submit'>Guardar</button>
        </div>
      </form>
    </div>
    </TarjetasCompContext.Provider>
  );
}

export default TarjetasComp;
