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
import { opcionesTalonarios } from '../../../models/opciones-editar-ordenes';

const Talonarios = () => {
  const { nroOrden, nombre, pedido } = useParams();
  const [respuesta, setRespuesta] = useState(false);
  const [dataS, setdataS] = useState({});
  const { siNo, tipo, tamano, puntillado_emblocado, colores } = opcionesTalonarios;

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
              <td><InputNum valor={ dataS.cantidad} data='cantidad' /></td>
            </tr>
            <tr>
              <td>Tamaño</td>
              <td><InputSelect valor={dataS.tamano} data='tamano' opciones={ tamano } /></td>
            </tr>
            <tr>
              <td>Modelo anterior</td>
              <td><InputSelect valor={dataS.modelo_anterior} data='modelo-anterior' opciones={ siNo } /></td>
            </tr>
            <tr>
              <td>Tiene logo</td>
              <td><InputSelect valor={dataS.tiene_logo} data='tiene-logo' opciones={ siNo } /></td>
            </tr>
            <tr>
              <td>Ubicación del logo</td>
              <td><InputText valor={ dataS.ubicacion_logo} data='ubicacion-logo' /></td>
            </tr>
            <tr>
              <td>Número desde</td>
              <td><InputNum valor={ dataS.numero_desde} data='numero-desde' /></td>
            </tr>
            <tr>
              <td>Puntillado-emblocado</td>
              <td><InputSelect valor={dataS.puntillado_emblocado} data='puntillado-emblocado' opciones={ puntillado_emblocado } /></td>
            </tr>
            <tr>
              <td>Color duplicado</td>
              <td><InputSelect valor={dataS.color_duplicado} data='color-duplicado' opciones={ colores } /></td>
            </tr>
            <tr>
              <td>Triplicado</td>
              <td><InputSelect valor={dataS.triplicado} data='triplicado' opciones={ siNo } /></td>
            </tr>
            <tr>
              <td>Color triplicado</td>
              <td><InputSelect valor={dataS.color_triplicado} data='color-triplicado' opciones={ colores } /></td>
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

export default Talonarios;
