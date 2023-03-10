import React, { useContext, useState, createContext } from 'react';
import InputText from '../../../input-text';
import { InputTextModel } from '../../../../models/input-text-model';
import Muestra from '../muestra';
import TextArea from '../../../text-area';
import { TextAreaModel } from '../../../../models/text-area-model';
import DetallePago from '../detalle-pago';
import { NuevaOrdenTbjCompContext } from '../../nueva-orden-tbj-comp';
import { atendido_por, fecha_creacion, nro_orden } from '../../../../services/datos-orden-tbj/datos-orden-tbj';
import { urlApi } from '../../../../services/url/url-api';
import { crearOrden } from '../../../../services/form-nueva-orden/crear-orden';
import { useNavigate } from 'react-router-dom';
import Tamano from './volantes-comp/tamano';
import Cantidad from './volantes-comp/cantidad';
import { GiPapers } from "react-icons/gi";
import FechaHora from '../fecha-hora';
import { opcionesImpresion, opcionesTipo } from '../../../../models/opciones-volantes';
import InputRadio from '../../../input-radio';

export const VolantesCompContext = createContext();

const VolantesComp = () => {
  const { clienteS, muestra } = useContext(NuevaOrdenTbjCompContext);
  const navigate = useNavigate();
  const [respuestaServidor, setRespuestaServidor] = useState({registro: false, mensaje: ''});
  const [tipo, setTipo] = useState('');
  const [impresion, setImpresion] = useState('');

  const handleSubmint = async (e) => {
    e.preventDefault();
    const { id } = clienteS;
    const fecha_entrega = document.querySelector('[data="fecha"]').value;
    const hora_entrega = document.querySelector('[data="hora"]').value;
    const tamano = document.querySelector('[data="tamano"]').value;
    const cantidad = document.querySelector('[data="cantidad"]').value;
    const ubicacion_diseno = document.querySelector('[data="ubicacion"]').value;
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
      tamano,
      cantidad,
      impresion,
      ubicacion_diseno,
      observaciones,
      total,
      entrega,
      estado: "pendiente",
      abono
    };

    btnSubmit.setAttribute('disabled', true);

    await crearOrden(urlApi + '/api/volantes', body)
      .then(res => res.json())
      .then(({ registro, mensaje, nro_orden }) => {
        btnSubmit.removeAttribute('disabled');
        setRespuestaServidor({registro: registro, mensaje: mensaje});
        if(registro) navigate(`/pdf/volantes/${nro_orden}`);
      })
      .catch(e => console.log(e))
    ;
  };

  const handleChange = () => {
    setRespuestaServidor({registro: false, mensaje: ''});
  };

  return (
    <VolantesCompContext.Provider value={{ setTipo, setImpresion }}>
      <div className='animacion'>
        <div className='icon-nombre-tipo-trabajo--container'>
          <GiPapers className='icon-tipo-trabajo' />
          <h5 className='nombre-tipo-trabajo'>Volantes</h5>
        </div>
        <form name='form-volantes' onSubmit={ handleSubmint } onChange={ handleChange } className='form'>
          <div className="flex-row center gap-1">
            <FechaHora />
            <Muestra />
          </div>
          <div className="flex-row center gap-1">
            <div className='flex-column gap-1 flex-end'>
              <InputRadio texto='Tipo' accion={setTipo} opciones={opcionesTipo} name='tipo' />
              <InputRadio texto='Impresión' accion={setImpresion} opciones={opcionesImpresion} name='impresion' />
              <InputText props={ new InputTextModel('', '', '', 'Ubicación del diseño', 'input-escribir', 'ubicacion')} />
              <Cantidad />
              <Tamano />
            </div>
            <TextArea props={ new TextAreaModel('', '', '', 'Observaciones', 'input-escribir text-area', 'observaciones') } />
            <div className="flex-column gap-1 flex-start strech">
              <DetallePago />
              <div>
                { !respuestaServidor.registro ? <span>{respuestaServidor.mensaje}</span> : null }
                <button type="submit" data='btn-submit' className='btn-submit'>Guardar</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </VolantesCompContext.Provider>
  );
}

export default VolantesComp;
