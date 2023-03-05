import React, { useEffect, useState } from 'react';
import { urlApi } from '../../../services/url/url-api';
import { useParams } from 'react-router-dom';
import InputText from './comp-generales/input-text';
import InputSelect from './comp-generales/input-select';
import TextArea from './comp-generales/text-area';
import Entregar from './comp-generales/entregar';
import Header from './comp-generales/header';
import Pago from './comp-generales/pago';
import InputNum from './comp-generales/input-num';
import { opcionesVolantes } from '../../../models/opciones-editar-ordenes';

const Volantes = () => {
  const { nroOrden, nombre, pedido } = useParams();
  const [respuesta, setRespuesta] = useState(false);
  const [dataS, setdataS] = useState({});
  const { siNo } = opcionesRemeras;

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
              <td>Talles</td>
              <td><InputText valor={ dataS.talles} data='talles' /></td>
            </tr>
            <tr>
              <td>Color</td>
              <td><InputText valor={ dataS.color} data='color' /></td>
            </tr>
            <tr>
              <td>Estampa pecho</td>
              <td><InputText valor={ dataS.estampa_pecho} data='estampa-pecho' /></td>
            </tr>
            <tr>
              <td>Estampa espalda</td>
              <td><InputText valor={ dataS.estampa_espalda} data='estampa-espalda' /></td>
            </tr>
            <tr>
              <td>Color</td>
              <td><InputText valor={ dataS.color_estampa} data='color-estampa' /></td>
            </tr>
            <tr>
              <td>Cantidad</td>
              <td><InputNum valor={ dataS.cantidad} data='cantidad' /></td>
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

export default Volantes;
