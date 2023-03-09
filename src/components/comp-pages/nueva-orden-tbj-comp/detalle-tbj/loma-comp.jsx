import React, { createContext, useState, useContext } from 'react';
import InputText from '../../../input-text';
import { InputTextModel } from '../../../../models/input-text-model';
import Muestra from '../muestra';
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
import { GiTestTubes } from "react-icons/gi";
import FechaHora from '../fecha-hora';
import InputRadio from '../../../input-radio';
import { opcionesCorte, opcionesOrientacion, opcionesOjales, opcionesTroquelado, opcionesPortabaner } from '../../../../models/opciones-loma';

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
    const fecha_entrega = document.querySelector('[data="fecha"]').value;
    const hora_entrega = document.querySelector('[data="hora"]').value;
    const ubicacionArchivo = document.querySelector('[data="ubicacion-archivo"]').value;
    const material = document.querySelector('[data="material"]').value;
    const bolsillo = document.querySelector('[data="bolsillo"]').value;
    const observaciones = document.querySelector('[data="observaciones"]').value;
    const total = document.querySelector('[data="total"]').value;
    const entrega = document.querySelector('[data="entrega"]').value;
    const abono = document.querySelector('[data="abono"]').value;
    const btnSubmit = document.querySelector('[data="btn-submit"]');

    const body = {
      id_cliente: id,
      nro_orden : nro_orden(),
      fecha_creacion: fecha_creacion(),
      atendido_por: atendido_por(),
      fecha_entrega,
      hora_entrega,
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
      estado: 'pendiente',
      abono
    }
    
    btnSubmit.setAttribute('disabled', true);

    await crearOrden(urlApi + '/api/loma', body)
      .then(res => res.json())
      .then(({ registro, mensaje, nro_orden }) => {
        btnSubmit.removeAttribute('disabled');
        setRespuestaServidor({registro: registro, mensaje: mensaje});
        if(registro) navigate(`/pdf/loma/${nro_orden}`);
      })
      .catch(e => console.log(e))
    ;

  };

  const handleChange = () => {
    setRespuestaServidor({registro: false, mensaje: ''});
  }

  return (
    <LomaCompContext.Provider value={{setOrientacion, setCorte, setOjales, setTroquelado, setPortabaner}}>
      <div className='animacion'>
        <div className='icon-nombre-tipo-trabajo--container'>
          <GiTestTubes className='icon-tipo-trabajo' />
          <h5 className='nombre-tipo-trabajo'>Loma</h5>
        </div>
        <form name='form-loma' onSubmit={ handleSubmit } onChange={ handleChange } className='form'>
          <div className="flex-row center gap-1">
            <FechaHora />
            <Muestra />
          </div>
          <div className="flex-row center gap-1">
            <div className='flex-column gap-1 flex-end'>
              <InputText props={ new InputTextModel('', '', '', 'Ubicación del archivo', 'input-escribir', 'ubicacion-archivo')} />
              <Material />
              <Bolsillo />
              <InputRadio texto='Orientación' accion={setOrientacion} name='orientacion' opciones={opcionesOrientacion} />
              <InputRadio texto='Troquelado' accion={setTroquelado} opciones={opcionesTroquelado} name='troquelado' />
              <InputRadio texto='Portabaner' accion={setPortabaner} opciones={opcionesPortabaner} name='portabaner' />
              <InputRadio texto='Corte' accion={setCorte} opciones={opcionesCorte} name='corte' />
              <InputRadio texto='Ojales' accion={setOjales} opciones={opcionesOjales} name='ojales' />
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
    </LomaCompContext.Provider>
  );
}

export default LomaComp;
