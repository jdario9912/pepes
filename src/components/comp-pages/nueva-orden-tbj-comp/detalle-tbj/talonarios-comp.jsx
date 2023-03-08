import React, { useState, createContext, useContext } from 'react';
import InputNumber from '../../../input-number';
import InputText from '../../../input-text';
import ModeloAnterior from './talonarios-comp/modelo-anterior';
import TieneLogo from './talonarios-comp/tiene-logo';
import Triplicado from './talonarios-comp/triplicado';
import Aviso from './talonarios-comp/aviso';
import { InputTextModel } from '../../../../models/input-text-model';
import { InputNumberModel } from '../../../../models/input-number-model';
import Tipo from './talonarios-comp/tipo';
import Tamano from './talonarios-comp/tamano';
import PuntilladoEmblocado from './talonarios-comp/puntillado-emblocado';
import ColorDuplicado from './talonarios-comp/color-duplicado';
import ColorTriplicado from './talonarios-comp/color-triplicado';
import { NuevaOrdenTbjCompContext } from '../../nueva-orden-tbj-comp';
import { useNavigate } from 'react-router-dom';
import { atendido_por, fecha_creacion, nro_orden } from '../../../../services/datos-orden-tbj/datos-orden-tbj';
import DetallePago from '../detalle-pago';
import TextArea from '../../../text-area';
import { TextAreaModel } from '../../../../models/text-area-model';
import InputDate from '../../../input-date';
import { InputDateModel } from '../../../../models/input-date-model';
import InputTime from '../../../input-time';
import { InputTimeModel } from '../../../../models/input-time-model';
import Muestra from '../muestra';
import { crearOrden } from '../../../../services/form-nueva-orden/crear-orden';
import { urlApi } from '../../../../services/url/url-api';
import { TbFileInvoice } from "react-icons/tb";

export const TalonariosCompContext = createContext();

const TalonariosComp = () => {
  const { clienteS, muestra } = useContext(NuevaOrdenTbjCompContext);
  const navigate = useNavigate();
  const [respuestaServidor, setRespuestaServidor] = useState({registro: false, mensaje: ''});
  const [mostrarColorTriplicado, setMostrarColorTriplicado] = useState(false);
  const [mostrarUbicacionLogo, setMostrarUbicacionLogo] = useState(false);
  const [modeloAnterior, setModeloAnterior] = useState('');
  const [tieneLogo, setTieneLogo] = useState('');
  const [triplicado, setTriplicado] = useState('');

  const handleSubmint = async (e) => {
    e.preventDefault();
    const { id } = clienteS;
    const fecha_entrega = document.querySelector('[data="fecha"]').value;
    const hora_entrega = document.querySelector('[data="hora"]').value;
    const tipo = document.querySelector('[data="tipo"]').value;
    const cantidad = document.querySelector('[data="cantidad"]').value;
    const tamano = document.querySelector('[data="tamano"]').value;
    const ubicacion_logo = document.querySelector('[data="ubicacion-logo"]').value;
    const numero_desde = document.querySelector('[data="numero-desde"]').value;
    const puntillado_emblocado = document.querySelector('[data="puntillado"]').value;
    const color_duplicado = document.querySelector('[data="color-duplicado"]').value;
    const color_triplicado = document.querySelector('[data="color-triplicado"]').value;
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
      tamano,
      modelo_anterior: modeloAnterior,
      tiene_logo: tieneLogo,
      ubicacion_logo,
      numero_desde,
      puntillado_emblocado,
      color_duplicado,
      triplicado,
      color_triplicado,
      observaciones,
      total,
      entrega,
      estado: 'pendiente',
      abono
    };

    btnSubmit.setAttribute('disabled', true);

    await crearOrden(urlApi + '/api/talonarios', body)
      .then(res => res.json())
      .then(({ registro, mensaje, nro_orden }) => {
        btnSubmit.removeAttribute('disabled');
        setRespuestaServidor({registro: registro, mensaje: mensaje});
        if(registro) navigate(`/pdf/talonarios/${nro_orden}`);
      })
      .catch(e => console.log(e))
  }

  const handleChange = () => {
    setRespuestaServidor({registro: false, mensaje: ''});
  };

  return (
    <TalonariosCompContext.Provider value={{ setMostrarColorTriplicado, setMostrarUbicacionLogo, setModeloAnterior, setTieneLogo, setTriplicado, mostrarColorTriplicado }}>
      <div>
        <div className='icon-nombre-tipo-trabajo--container'>
          <TbFileInvoice className='icon-tipo-trabajo' />
          <h5 className='nombre-tipo-trabajo'>Talonarios</h5>
        </div>
        <form name='form-talonarios' onSubmit={ handleSubmint } onChange={ handleChange }>
          <div>
            <span>Entregar el </span>
            <InputDate props={ new InputDateModel('', '', null, '', 'fecha') } />
            <span>, a las </span>
            <InputTime props={ new InputTimeModel('', '', '19:00', '', 'hora')} />
          </div>
          <Muestra />
          <Tipo />
          <InputNumber props={ new InputNumberModel('Cantidad: ', '', '', '', 'cantidad', 'cantidad') } />
          <Tamano />
          <ModeloAnterior />
          <TieneLogo />
          <div hidden={ !mostrarUbicacionLogo }>
            <InputText props={ new InputTextModel('Ubicación del logo:', '', '', 'Ingresa ubicación del logo', '', 'ubicacion-logo')} />
          </div>
          <InputNumber props={ new InputNumberModel('Número desde:', '', '', '', '', 'numero-desde') } />
          <PuntilladoEmblocado />
          <ColorDuplicado />
          <Triplicado />
          <ColorTriplicado />
          <TextArea props={ new TextAreaModel('Observaciones:', '', '', 'Ingresar detalles de la orden', '', 'observaciones') } />
          <DetallePago />
          <Aviso />
          <div>
          { !respuestaServidor.registro ? <span>{respuestaServidor.mensaje}</span> : null }
            <button type="submit" data='btn-submit'>Guardar</button>
          </div>
        </form>
      </div>
    </TalonariosCompContext.Provider>
  );
}

export default TalonariosComp;
