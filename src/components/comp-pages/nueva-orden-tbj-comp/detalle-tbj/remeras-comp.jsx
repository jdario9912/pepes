import React, { useContext, useState } from 'react';
import InputText from '../../../input-text';
import InputNumber from '../../../input-number';
import { InputNumberModel } from '../../../../models/input-number-model';
import { InputTextModel } from '../../../../models/input-text-model';
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
      estado: "pendiente"
    }

    btnSubmit.setAttribute('disabled', true);

    await crearOrden(urlApi + '/api/remeras', body)
      .then(res => res.json())
      .then(({ registro, mensaje }) => {
        btnSubmit.removeAttribute('disabled');
        setRespuestaServidor({registro: registro, mensaje: mensaje});
        if(registro) navigate('/');
      })
      .catch(e => console.log(e))
    ;
  }
  
  const handleChange = () => {
    setRespuestaServidor({registro: false, mensaje: ''});
  };

  return (
    <div>
      <h5>Remeras</h5>
      <form name='form-remeras' onSubmit={ handleSubmint } onChange={ handleChange }>
        <InputDate props={ new InputDateModel('Fecha:', '', null, '', 'fecha') } />
        <InputTime props={ new InputTimeModel('Hora:', '', '19:00', '', 'hora')} />
        <Muestra />
        <InputText props={ new InputTextModel('Ubicación del archivo: ', '', '', 'Ingresa ubicación del archivo', '', 'ubicacion-archivo')} />
        <InputText props={ new InputTextModel('Talles: ', '', '', 'Ingresa talles', '', 'talles')} />
        <InputText props={ new InputTextModel('Color: ', '', '', 'Ingresa color', '', 'color')} />
        <InputText props={ new InputTextModel('Estampa pecho: ', '', '', 'Ingresa estampa pecho', '', 'estampa-pecho')} />
        <InputText props={ new InputTextModel('Estampa espalda: ', '', '', 'Ingresa estampa espalda', '', 'estampa-espalda')} />
        <InputText props={ new InputTextModel('Color estampa: ', '', '', 'Ingresa color de la estampa', '', 'color-estampa')} />
        <InputNumber props={ new InputNumberModel('Cantidad: ', '', '', '', 'Ingresa cantidad', 'cantidad', null)} />
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

export default RemerasComp;
