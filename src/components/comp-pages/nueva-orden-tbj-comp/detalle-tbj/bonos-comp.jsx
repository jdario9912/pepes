import React, { useState, createContext, useContext } from 'react';
import InputNumber from '../../../input-number';
import { InputNumberModel } from '../../../../models/input-number-model';
import { useNavigate } from 'react-router-dom';
import { NuevaOrdenTbjCompContext } from '../../nueva-orden-tbj-comp';
import InputDate from '../../../input-date';
import InputTime from '../../../input-time';
import { InputDateModel } from '../../../../models/input-date-model';
import { InputTimeModel } from '../../../../models/input-time-model';
import Muestra from '../muestra';
import TextArea from '../../../text-area';
import { TextAreaModel } from '../../../../models/text-area-model';
import DetallePago from '../detalle-pago';
import Tipo from './bonos-comp/tipo';
import Tamano from './bonos-comp/tamano';
import Numeradores from './bonos-comp/numeradores';
import Lotes from './bonos-comp/lotes';
import { atendido_por, fecha_creacion, nro_orden } from '../../../../services/datos-orden-tbj/datos-orden-tbj';
import { crearOrden } from '../../../../services/form-nueva-orden/crear-orden';
import { urlApi } from '../../../../services/url/url-api';

export const BonosCompContext = createContext();

const BonosComp = () => {
  const { clienteS, muestra } = useContext(NuevaOrdenTbjCompContext);
  const navigate = useNavigate();
  const [respuestaServidor, setRespuestaServidor] = useState({registro: false, mensaje: ''});
  const [tipo, setTipo] = useState('');

  const handleSubmint = async (e) => {
    e.preventDefault();
    const { id } = clienteS;
    const fecha_entrega = document.querySelector('[data="fecha"]').value;
    const hora_entrega = document.querySelector('[data="hora"]').value;
    const tamano = document.querySelector('[data="tamano"]').value;
    const desde_numero = document.querySelector('[data="desde-numero"]').value;
    const cantidad = document.querySelector('[data="cantidad"]').value;
    const numeradores = document.querySelector('[data="numeradores"]').value;
    const lotes = document.querySelector('[data="lotes"]').value;
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
      desde_numero,
      cantidad,
      numeradores,
      lotes,
      observaciones,
      total,
      entrega,
      estado: 'pendiente'
    };

    btnSubmit.setAttribute('disabled', true);

    await crearOrden(urlApi + '/api/bonos', body)
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
    <BonosCompContext.Provider value={{setTipo}}>
      <div>
        <h5>Bonos</h5>
        <form name='form-bonos' onSubmit={ handleSubmint } onChange={ handleChange }>
          <InputDate props={ new InputDateModel('Fecha:', '', null, '', 'fecha') } />
          <InputTime props={ new InputTimeModel('Hora:', '', '19:00', '', 'hora')} />
          <Muestra />
          <Tipo />
          <Tamano />
          <InputNumber props={ new InputNumberModel('Desde número: ', '', '', '', '', 'desde-numero')} />
          <InputNumber props={ new InputNumberModel('Cantidad: ', '', '', '', '', 'cantidad')} />
          <Numeradores />
          <Lotes />
          <TextArea props={ new TextAreaModel('Observaciones:', '', '', 'Ingresar detalles de la orden', '', 'observaciones') } />
          <DetallePago />
          <div>
            { !respuestaServidor.registro ? <span>{respuestaServidor.mensaje}</span> : null }
            <button type="submit" data='btn-submit'>Guardar</button>
          </div>
        </form>
      </div>
    </BonosCompContext.Provider>
  );
}

export default BonosComp;
