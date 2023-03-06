import React, { useEffect, useState } from 'react';
import { urlApi } from '../../../services/url/url-api';
import { useParams, useNavigate } from 'react-router-dom';
import InputText from './comp-generales/input-text';
import InputSelect from './comp-generales/input-select';
import TextArea from './comp-generales/text-area';
import Entregar from './comp-generales/entregar';
import Header from './comp-generales/header';
import Pago from './comp-generales/pago';
import { opcionesPlotter } from '../../../models/opciones-editar-ordenes';
import Color from './plotter/color';
import { editarOrden } from '../../../services/editar-orden/editar-orden';

const Plotter = () => {
  const navigate = useNavigate();
  const { nroOrden, nombre, pedido } = useParams();
  const [respuesta, setRespuesta] = useState(false);
  const [dataS, setdataS] = useState({});
  const { siNo, material, terminacion } = opcionesPlotter;

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
    const tamano = document.querySelector('[data="tamano"]').value;
    const color = document.querySelector('[data="color"]').value;
    const material = document.querySelector('[data="material"]').value;
    const terminacion = document.querySelector('[data="terminacion"]').value;
    const observaciones = document.querySelector('[data="observaciones"]').value;
    const total = document.querySelector('[data="total"]').value;
    const entrega = document.querySelector('[data="entrega"]').value;
    const btnSubmit = document.querySelector('[data="btn-submit"]');

    btnSubmit.setAttribute('disabled', true);

    const body = {
      fecha_entrega,
      hora_entrega,
      muestra,
      ubicacion_archivo,
      tamano,
      color,
      material,
      terminacion,
      observaciones,
      total,
      entrega,
      nroOrden
    }

    editarOrden(urlApi + '/api/plotter', body)
      .then(res => res.json())
      .then(({ actualizado }) => {
        btnSubmit.removeAttribute('disabled');
        if(actualizado) navigate(`/pdf/plotter/${nroOrden}`)
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
              <td>Tamaño</td>
              <td><InputText valor={ dataS.tamano} data='tamano' /></td>
            </tr>
            <tr>
              <td>Color</td>
              <td><Color valor={ dataS.color } /></td>
            </tr>
            <tr>
              <td>Material</td>
              <td><InputSelect valor={dataS.material} data='material' opciones={ material } /></td>
            </tr>
            <tr>
              <td>Terminación</td>
              <td><InputSelect valor={dataS.terminacion} data='terminacion' opciones={ terminacion } /></td>
            </tr>
            {/* 
            
            <tr>
              <td>Corte</td>
              <td><InputSelect valor={dataS.corte} data='corte' opciones={ siNo } /></td>
            </tr>
            <tr>
              <td>Ojales</td>
              <td><InputSelect valor={dataS.ojales} data='ojales' opciones={ siNo } /></td>
            </tr>
            <tr>
              <td>Troquelado</td>
              <td><InputSelect valor={dataS.troquelado} data='troquelado' opciones={ siNo } /></td>
            </tr>
            <tr>
              <td>Portabaner</td>
              <td><InputSelect valor={dataS.portabaner} data='portabaner' opciones={ siNo } /></td>
            </tr> */}
          </table>
          <TextArea valor={dataS.observaciones} data='observaciones' />
          <Pago total={ dataS.total } entrega={ dataS.entrega } />
          <button type="submit">Guardar cambios</button>
        </form>
      </div>
    );
  } else
    return <div>recuperando informacion</div>;
}

export default Plotter;
