import React, { useEffect, useState } from 'react';
import { urlApi } from '../../../services/url/url-api';
import { useParams } from 'react-router-dom';
import InputSelect from './comp-generales/input-select';
import TextArea from './comp-generales/text-area';
import Entregar from './comp-generales/entregar';
import Header from './comp-generales/header';
import Pago from './comp-generales/pago';
import { opcionesTarjetas } from '../../../models/opciones-editar-ordenes';

const Tarjetas = () => {
  const { nroOrden, nombre, pedido } = useParams();
  const [respuesta, setRespuesta] = useState(false);
  const [dataS, setdataS] = useState({});
  const { siNo, tipo, cantidad, papel, otra_terminacion } = opcionesTarjetas;

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
              <td>Tipo</td>
              <td><InputSelect valor={dataS.tipo} data='tipo' opciones={ tipo } /></td>
            </tr>
            <tr>
              <td>Cantidad</td>
              <td><InputSelect valor={dataS.cantidad} data='cantidad' opciones={ cantidad } /></td>
            </tr>
            <tr>
              <td>Papel</td>
              <td><InputSelect valor={dataS.papel} data='papel' opciones={ papel } /></td>
            </tr>
            <tr>
              <td>Otra terminación</td>
              <td><InputSelect valor={dataS.otra_terminacion} data='otra-terminacion' opciones={ otra_terminacion } /></td>
            </tr>
            <tr>
              <td>Puntas redondeadas</td>
              <td><InputSelect valor={dataS.puntas_redondeadas} data='puntas-redondeadas' opciones={ siNo } /></td>
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

export default Tarjetas;
