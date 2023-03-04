import React, { useEffect, useState } from 'react';
import { urlApi } from '../../../services/url/url-api';
import { useParams } from 'react-router-dom';
import InputText from './comp-generales/input-text';
import InputSelect from './comp-generales/input-select';
import TextArea from './comp-generales/text-area';
import Entregar from './comp-generales/entregar';
import Header from './comp-generales/header';
import { opcionesBonos } from '../../../models/opciones-editar-ordenes';

const Bonos = () => {
  const { nroOrden, nombre, pedido } = useParams();
  const [respuesta, setRespuesta] = useState(false);
  const [dataS, setdataS] = useState({});
  const { siNo, tipo, tamano, numeradores, lotes } = opcionesBonos;

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
              <td><td><InputSelect valor={dataS.tipo} data='tipo' opciones={ tipo } /></td></td>
            </tr>
            <tr>
              <td>Tamaño</td>
              <td><InputSelect valor={dataS.tamano} data='tamano' opciones={ tamano } /></td>
            </tr>
            <tr>
              <td>Desde número</td>
              <td><InputText valor={ dataS.desde_numero} data='desde-numero' /></td>
            </tr>
            <tr>
              <td>Cantidad</td>
              <td><InputText valor={ dataS.cantidad} data='cantidad' /></td>
            </tr>
            <tr>
              <td>Numeradores</td>
              <td><InputSelect valor={dataS.numeradores} data='numeradores' opciones={ numeradores } /></td>
            </tr>
            <tr>
              <td>En lotes de</td>
              <td><InputSelect valor={dataS.lotes} data='lotes' opciones={ lotes } /></td>
            </tr>
            
          </table>
          <TextArea valor={dataS.observaciones} data='observaciones' />
          <button type="submit">Guardar cambios</button>
        </form>
      </div>
    );
  } else
    return <div>recuperando informacion</div>;
}

export default Bonos;
