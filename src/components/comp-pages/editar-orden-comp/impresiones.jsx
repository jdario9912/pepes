import React, { useEffect, useState } from 'react';
import { urlApi } from '../../../services/url/url-api';
import { useParams, useNavigate } from 'react-router-dom';
import InputText from './comp-generales/input-text';
import InputSelect from './comp-generales/input-select';
import TextArea from './comp-generales/text-area';
import Entregar from './comp-generales/entregar';
import Header from './comp-generales/header';
import Pago from './comp-generales/pago';
import { opcionesImpresiones } from '../../../models/opciones-editar-ordenes';
import { editarOrden } from '../../../services/editar-orden/editar-orden';
import Abono from './comp-generales/abono';

const Impresiones = () => {  
  const navigate = useNavigate();
  const { nroOrden, nombre, pedido } = useParams();
  const [respuesta, setRespuesta] = useState(false);
  const [dataS, setdataS] = useState({});
  const { siNo, faz, tamano_papel, orientacion } = opcionesImpresiones;

  useEffect(() => {
    fetch(urlApi + `/api/${pedido}/${nroOrden}`)
      .then(res => res.json())
      .then(({ busqueda, data }) => {
        setRespuesta(busqueda);
        setdataS(data);
      })
      .catch(e => console.log(e))
    ;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fecha_entrega = document.querySelector('[data="fecha-entrega"]').value;
    const hora_entrega = document.querySelector('[data="hora-entrega"]').value;
    const muestra = document.querySelector('[data="muestra"]').value;
    const ubicacion_archivo = document.querySelector('[data="ubicacion-archivo"]').value;
    const faz = document.querySelector('[data="faz"]').value;
    const tipo_papel = document.querySelector('[data="tipo-papel"]').value;
    const tamano_papel = document.querySelector('[data="tamano-papel"]').value;
    const orientacion = document.querySelector('[data="orientacion"]').value;
    const anillado = document.querySelector('[data="anillado"]').value;
    const abrochado = document.querySelector('[data="abrochado"]').value;
    const corte = document.querySelector('[data="corte"]').value;
    const observaciones = document.querySelector('[data="observaciones"]').value;
    const total = document.querySelector('[data="total"]').value;
    const entrega = document.querySelector('[data="entrega"]').value;
    const abono = document.querySelector('[data="abono"]').value;
    const btnSubmit = document.querySelector('[data="btn-submit"]');

    btnSubmit.setAttribute('disabled', true);

    const body = {
      fecha_entrega,
      hora_entrega,
      muestra,
      ubicacion_archivo,
      faz,
      tipo_papel,
      tamano_papel,
      orientacion,
      anillado,
      abrochado,
      corte,
      observaciones,
      total,
      entrega,
      abono,
      nroOrden
    }

    editarOrden(urlApi + '/api/impresiones', body)
      .then(res => res.json())
      .then(({ actualizado }) => {
        btnSubmit.removeAttribute('disabled');
        if(actualizado) navigate(`/pdf/impresiones/${nroOrden}`)
      })
      .catch(e => console.log(e))
    ;
  };

  if(respuesta){
    return (
      <div>
        <Header tipo={pedido} numero={ nroOrden } nombre={ nombre } />
        <form className='flex-column' onSubmit={ handleSubmit }>
          <Entregar fecha={ dataS.fecha_entrega } hora={ dataS.hora_entrega } />
          <table>
            <tr>
              <td>Muestra</td>
              <td><InputSelect valor={dataS.muestra} data='muestra' opciones={ siNo } /></td>
            </tr>
            <tr>
              <td>Ubicación del archivo</td>
              <td><InputText valor={ dataS.ubicacion_archivo} data='ubicacion-archivo' /></td>
            </tr>
            <tr>
              <td>Faz</td>
              <td><InputSelect valor={dataS.faz} data='faz' opciones={ faz } /></td>
            </tr>
            <tr>
              <td>Tipo</td>
              <td><InputText valor={ dataS.tipo_papel} data='tipo-papel' /></td>
            </tr>
            <tr>
              <td>Tamaño</td>
              <td><InputSelect valor={dataS.tamano_papel} data='tamano-papel' opciones={ tamano_papel } /></td>
            </tr>
            <tr>
              <td>Orientación</td>
              <td><InputSelect valor={dataS.orientacion} data='orientacion' opciones={ orientacion } /></td>
            </tr>
            <tr>
              <td>Anillado</td>
              <td><InputSelect valor={dataS.anillado} data='anillado' opciones={ siNo } /></td>
            </tr>
            <tr>
              <td>Abrochado</td>
              <td><InputSelect valor={dataS.abrochado} data='abrochado' opciones={ siNo } /></td>
            </tr>
            <tr>
              <td>Corte</td>
              <td><InputSelect valor={dataS.corte} data='corte' opciones={ siNo } /></td>
            </tr>
          </table>
          <TextArea valor={dataS.observaciones} data='observaciones' />
          <Pago total={ dataS.total } entrega={ dataS.entrega } />
          <Abono valor={ dataS.abono } />
          <button type="submit" data='btn-submit'>Guardar cambios</button>
        </form>
      </div>
    );
  } else
    return <div>recuperando informacion</div>;
}

export default Impresiones;
