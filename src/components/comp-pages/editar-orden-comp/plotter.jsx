import React, { useEffect, useState } from 'react';
import { urlApi } from '../../../services/url/url-api';
import { useParams } from 'react-router-dom';
import InputText from './comp-generales/input-text';
import InputSelect from './comp-generales/input-select';
import TextArea from './comp-generales/text-area';
import Entregar from './comp-generales/entregar';
import Header from './comp-generales/header';
import Pago from './comp-generales/pago';
import { opcionesPlotter } from '../../../models/opciones-editar-ordenes';
import Color from './plotter/color';

const Plotter = () => {
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
    const color = document.querySelector('[data="color"]').value;
    
    const observaciones = document.querySelector('[data="observaciones"]').value;

    const body = {
      fecha_entrega,
      hora_entrega,
      muestra,

      observaciones
    }

    console.log(body);
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
