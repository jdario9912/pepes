import React, { useContext, useState } from 'react';
import InputText from '../../../input-text';
import InputNumber from '../../../input-number';
import { InputNumberModel } from '../../../../models/input-number-model';
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
import { IoShirtOutline } from "react-icons/io5";
import FechaHora from '../fecha-hora';

const RemerasComp = () => {
  const { clienteS, muestra } = useContext(NuevaOrdenTbjCompContext);
  const navigate = useNavigate();
  const [respuestaServidor, setRespuestaServidor] = useState({registro: false, mensaje: ''});

  const handleSubmint = async (e) => {
    e.preventDefault();
    const { id } = clienteS;
    const fecha_entrega = document.querySelector('[data="fecha"]').value;
    const hora_entrega = document.querySelector('[data="hora"]').value;
    const ubicacion_archivo = document.querySelector('[data="ubicacion-archivo"]').value;
    const talles = document.querySelector('[data="talles"]').value;
    const color = document.querySelector('[data="color"]').value;
    const estampa_pecho = document.querySelector('[data="estampa-pecho"]').value;
    const estampa_espalda = document.querySelector('[data="estampa-espalda"]').value;
    const color_estampa = document.querySelector('[data="color-estampa"]').value;
    const cantidad = document.querySelector('[data="cantidad"]').value;
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
      talles,
      color,
      estampa_pecho,
      estampa_espalda,
      color_estampa,
      cantidad,
      observaciones,
      total,
      entrega,
      estado: "pendiente",
      abono
    }

    btnSubmit.setAttribute('disabled', true);

    await crearOrden(urlApi + '/api/remeras', body)
      .then(res => res.json())
      .then(({ registro, mensaje, nro_orden }) => {
        btnSubmit.removeAttribute('disabled');
        setRespuestaServidor({registro: registro, mensaje: mensaje});
        if(registro) navigate(`/pdf/remeras/${nro_orden}`);
      })
      .catch(e => console.log(e))
    ;
  }
  
  const handleChange = () => {
    setRespuestaServidor({registro: false, mensaje: ''});
  };

  return (
    <div className='animacion'>
      <div className='icon-nombre-tipo-trabajo--container'>
        <IoShirtOutline className='icon-tipo-trabajo' />
        <h5 className='nombre-tipo-trabajo'>Remeras</h5>
      </div>
      <form name='form-remeras' onSubmit={ handleSubmint } onChange={ handleChange } className='form'>
        <div className="flex-row center gap-1">
          <FechaHora />
          <Muestra />
        </div>
        <div className="flex-row center gap-1">
          <div className='flex-column gap-1 flex-end'>
            <InputText props={ new InputTextModel('', '', '', 'Ubicación del archivo', 'input-escribir', 'ubicacion-archivo')} />
            <InputText props={ new InputTextModel('', '', '', 'Talles', 'input-escribir', 'talles')} />
            <InputText props={ new InputTextModel('', '', '', 'Color', 'input-escribir', 'color')} />
            <InputText props={ new InputTextModel('', '', '', 'Estampa pecho', 'input-escribir', 'estampa-pecho')} />
            <InputText props={ new InputTextModel('', '', '', 'Estampa espalda', 'input-escribir', 'estampa-espalda')} />
            <InputText props={ new InputTextModel('', '', '', 'Color de la estampa', 'input-escribir', 'color-estampa')} />
            <InputNumber props={ new InputNumberModel('', '', 'input-escribir', '', 'Cantidad', 'cantidad', null)} />
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
  );
}

export default RemerasComp;
