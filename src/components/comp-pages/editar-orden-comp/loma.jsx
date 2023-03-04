import React, { useEffect, useState } from 'react';
import { urlApi } from '../../../services/url/url-api';
import { useParams } from 'react-router-dom';
import InputText from './comp-generales/input-text';
import InputSelect from './comp-generales/input-select';
import TextArea from './comp-generales/text-area';
import Entregar from './comp-generales/entregar';
import Header from './comp-generales/header';
import Pago from './comp-generales/pago';
import { opcionesLoma } from '../../../models/opciones-editar-ordenes';

const Loma = () => {
  const { nroOrden, nombre, pedido } = useParams();
  const [respuesta, setRespuesta] = useState(false);
  const [dataS, setdataS] = useState({});
  const { siNo, bolsillo, material, orientacion } = opcionesLoma;

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
              <td>Material</td>
              <td><InputSelect valor={dataS.material} data='material' opciones={ material } /></td>
            </tr>
            <tr>
              <td>Orientación</td>
              <td><InputSelect valor={dataS.orientacion} data='orientacion' opciones={ orientacion } /></td>
            </tr>
            <tr>
              <td>Bolsillo</td>
              <td><InputSelect valor={dataS.bolsillo} data='bolsillo' opciones={ bolsillo } /></td>
            </tr>
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
            </tr>
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

export default Loma;
