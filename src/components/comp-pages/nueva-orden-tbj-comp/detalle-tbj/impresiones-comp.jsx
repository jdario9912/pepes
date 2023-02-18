import React, { useContext, useState } from 'react';
import InputText from '../../../input-text';
import Abrochado from './impresiones-comp/abrochado';
import Anillado from './impresiones-comp/anillado';
import Corte from './impresiones-comp/corte';
import Faz from './impresiones-comp/faz';
import Orientacion from './impresiones-comp/orientacion';
import TamanoPapel from './impresiones-comp/tamano-papel';
import { InputTextModel } from '../../../../models/input-text-model';
import InputDate from '../../../input-date';
import InputTime from '../../../input-time';
import Muestra from '../muestra';
import { InputDateModel } from '../../../../models/input-date-model';
import { InputTimeModel } from '../../../../models/input-time-model';
import TextArea from '../../../text-area';
import { TextAreaModel } from '../../../../models/text-area-model';
import DetallePago from '../detalle-pago';
import EstadoOrdenTbj from '../estado-orden-tbj';
import { NuevaOrdenTbjCompContext } from '../../nueva-orden-tbj-comp';
import { fecha_creacion, formatear_fecha, nro_orden } from '../../../../services/datos-orden-tbj/datos-orden-tbj';
import { urlApi } from '../../../../services/url/url-api';
import { crearImpresiones } from '../../../../services/form-nueva-orden/impresiones';
import { useNavigate } from 'react-router-dom';

const ImpresionesComp = () => {
  const navigate = useNavigate();
  const { clienteS, muestra, faz, orientacion, anillado, abrochado, corte, estado } = useContext(NuevaOrdenTbjCompContext);
  const [respuestaServidor, setRespuestaServidor] = useState({registro: false, mensaje: ''});
  
  const handleSubmint = async (e) => {
    e.preventDefault();
    const { id } = clienteS;
    const fecha = document.querySelector('[data="fecha"]').value;
    const hora = document.querySelector('[data="hora"]').value;
    const ubicacionArchivo = document.querySelector('[data="ubicacion-archivo"]').value;
    const tipoPapel = document.querySelector('[data="tipo-papel"]').value;
    const tamanoPapel = document.querySelector('[data="tamano-papel"]').value;
    const observaciones = document.querySelector('[data="observaciones"]').value;
    const total = document.querySelector('[data="total"]').value;
    const entrega = document.querySelector('[data="entrega"]').value;
    const btnSubmit = document.querySelector('[data="btn-submit"]');
    
    
    const body = {
      id_cliente: id,
      nro_orden: nro_orden(),
      fecha_creacion: fecha_creacion(),
      atendido_por: localStorage.getItem('usuario-actual'),
      fecha_entrega: formatear_fecha(fecha),
      hora_entrega: hora,
      muestra: muestra,
      ubicacion_archivo: ubicacionArchivo,
      faz: faz,
      tipo_papel: tipoPapel,
      tamano_papel: tamanoPapel,
      orientacion: orientacion,
      anillado: anillado,
      abrochado: abrochado,
      corte: corte,
      observaciones: observaciones,
      total: total,
      entrega: entrega,
      estado: estado
    }

    btnSubmit.setAttribute('disabled', true);

    crearImpresiones(urlApi + '/api/impresiones', body)
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
  }

  return (
    <div>
      <h2>Impresiones</h2>
      <form onSubmit={ handleSubmint } method='POST' name='form-impresiones' onChange={ handleChange }>
        <InputDate props={ new InputDateModel('Fecha:', '', null, '', 'fecha') } />
        <InputTime props={ new InputTimeModel('Hora:', '', '19:00', '', 'hora')} />
        <Muestra />
        <InputText props={ new InputTextModel('Ubicación del archivo: ', '', '', 'Ingresa ubicación del archivo', '', 'ubicacion-archivo')} />
        <Faz />
        <InputText props={ new InputTextModel('Tipo: ', '', '', 'Ingresa tipo de papel', '', 'tipo-papel')} />
        <TamanoPapel />
        <Orientacion />
        <Anillado />
        <Abrochado />
        <Corte />
        <TextArea props={ new TextAreaModel('Observaciones:', '', '', 'Ingresar detalles de la orden', '', 'observaciones') } />
        <DetallePago />
        <EstadoOrdenTbj />
        <div>
          { !respuestaServidor.registro ? <span>{respuestaServidor.mensaje}</span> : null }
          <button type="submit" data='btn-submit'>Guardar</button>
        </div>
      </form>
    </div>
  );
}

export default ImpresionesComp;
