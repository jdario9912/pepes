import React, { useState, createContext, useContext } from 'react';
import InputNumber from '../../../input-number';
import { InputNumberModel } from '../../../../models/input-number-model';
import { useNavigate } from 'react-router-dom';
import { NuevaOrdenTbjCompContext } from '../../nueva-orden-tbj-comp';
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
import { RiCoupon3Line } from "react-icons/ri";
import FechaHora from '../fecha-hora';

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
    const abono = document.querySelector('[data="abono"]').value;
    const btnSubmit = document.querySelector('[data="btn-submit"]');

    console.log('submiting');
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
      estado: 'pendiente',
      abono
    };

    btnSubmit.setAttribute('disabled', true);

    await crearOrden(urlApi + '/api/bonos', body)
      .then(res => res.json())
      .then(({ registro, mensaje, nro_orden }) => {
        btnSubmit.removeAttribute('disabled');
        setRespuestaServidor({registro: registro, mensaje: mensaje });
        if(registro) navigate(`/pdf/bonos/${nro_orden}`);
      })
      .catch(e => console.log(e))
    ;
  };

  const handleChange = () => {
    setRespuestaServidor({registro: false, mensaje: ''});
  };

  return (
    <BonosCompContext.Provider value={{setTipo}}>
      <div className='animacion'>
        <div className='icon-nombre-tipo-trabajo--container'>
          <RiCoupon3Line className='icon-tipo-trabajo' />
          <h5 className='nombre-tipo-trabajo'>Bonos</h5>
        </div>
        <form name='form-bonos' onSubmit={ handleSubmint } onChange={ handleChange } className='form'>
          <div className="flex-row center gap-1">
            <FechaHora />
            <Muestra />
          </div>
          <div className="flex-row center gap-1">
            <div className='flex-column gap-1 flex-end'>
              <Tipo />
              <InputNumber props={ new InputNumberModel('', '', 'input-escribir', '', 'Desde número', 'desde-numero')} />
              <InputNumber props={ new InputNumberModel('', '', 'input-escribir', '', 'Cantidad', 'cantidad')} />
              <Tamano />
              <Numeradores />
              <Lotes />
            </div>
            <TextArea props={ new TextAreaModel('', '', '', 'Observaciones', 'input-escribir text-area', 'observaciones') } />
            <div className="flex-column gap-1 flex-start strech">
              <DetallePago />
              <div>
                { !respuestaServidor.registro ? <span>{respuestaServidor.mensaje}</span> : null }
                <button onClick={() => console.log('estoy enviando')} type="submit" data='btn-submit' className='btn-submit'>Guardar</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </BonosCompContext.Provider>
  );
}

export default BonosComp;
