import React, { useEffect, useState } from 'react';
import { urlApi } from '../../../services/url/url-api';
import { useParams, useNavigate } from 'react-router-dom';
import InputText from './comp-generales/input-text';
import InputSelect from './comp-generales/input-select';
import TextArea from './comp-generales/text-area';
import Entregar from './comp-generales/entregar';
import Header from './comp-generales/header';
import Pago from './comp-generales/pago';
import InputNum from './comp-generales/input-num';
import { opcionesTalonarios } from '../../../models/opciones-editar-ordenes';
import { editarOrden } from '../../../services/editar-orden/editar-orden';
import Abono from './comp-generales/abono';
import InputTieneLogo from './talonarios/input-tiene-logo';

const Talonarios = () => {
  const navigate = useNavigate();
  const { nroOrden, nombre, pedido } = useParams();
  const [respuesta, setRespuesta] = useState(false);
  const [dataS, setdataS] = useState({});
  const [tieneLogo, setTieneLogo] = useState(null);
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

  useEffect(() => {
    setTieneLogo(tieneLogo);
    console.log(tieneLogo);
  }, [tieneLogo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fecha_entrega = document.querySelector('[data="fecha-entrega"]').value;
    const hora_entrega = document.querySelector('[data="hora-entrega"]').value;
    const muestra = document.querySelector('[data="muestra"]').value;
    const tipo = document.querySelector('[data="tipo"]').value;
    const cantidad = document.querySelector('[data="cantidad"]').value;
    const tamano = document.querySelector('[data="tamano"]').value;
    const modelo_anterior = document.querySelector('[data="modelo-anterior"]').value;
    const tiene_logo = document.querySelector('[data="tiene-logo"]').value;
    const ubicacionLogo = document.querySelector('[data="ubicacion-logo"]').value;
    const numero_desde = document.querySelector('[data="numero-desde"]').value;
    const puntillado_emblocado = document.querySelector('[data="puntillado-emblocado"]').value;
    const color_duplicado = document.querySelector('[data="color-duplicado"]').value;
    const triplicado = document.querySelector('[data="triplicado"]').value;
    const color_triplicado = document.querySelector('[data="color-triplicado"]').value;
    const observaciones = document.querySelector('[data="observaciones"]').value;
    const total = document.querySelector('[data="total"]').value;
    const entrega = document.querySelector('[data="entrega"]').value;
    const abono = document.querySelector('[data="abono"]').value;
    const btnSubmit = document.querySelector('[data="btn-submit"]');
    const ubicacion_logo = tieneLogo ? ubicacionLogo : '--';

    btnSubmit.setAttribute('disabled', true);

    const body = {
      fecha_entrega,
      hora_entrega,
      muestra,
      tipo,
      cantidad,
      tamano,
      modelo_anterior,
      tiene_logo,
      ubicacion_logo,
      numero_desde,
      puntillado_emblocado,
      color_duplicado,
      triplicado,
      color_triplicado,
      observaciones,
      total,
      entrega,
      abono,
      nroOrden
    }

    editarOrden(urlApi + '/api/talonarios', body)
      .then(res => res.json())
      .then(({ actualizado }) => {
        btnSubmit.removeAttribute('disabled');
        if(actualizado) navigate(`/pdf/talonarios/${nroOrden}`)
      })
      .catch(e => console.log(e))
    ;
  };

  if(respuesta){
    return (
      <div>
        <Header tipo={pedido} numero={ nroOrden } nombre={ nombre } />
        <form className='flex-column form puntas-redondas' onSubmit={ handleSubmit }>
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
                <td><InputTieneLogo valor={dataS.tiene_logo} data='tiene-logo' opciones={ siNo } accion={setTieneLogo} /> </td>
                {/* <td><InputSelect valor={dataS.tiene_logo} data='tiene-logo' opciones={ siNo } /></td> */}
              </tr>
              <tr hidden={ !tieneLogo }>
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
          <div className="flex-column gap-1">

            <TextArea valor={dataS.observaciones} data='observaciones' />
          <Pago total={ dataS.total } entrega={ dataS.entrega } />
          <Abono valor={ dataS.abono } />
          <button type="submit" data='btn-submit' className='btn-submit'>Guardar cambios</button>
          </div>
        </form>
      </div>
    );
  } else
    return <div>recuperando informacion</div>;
}

export default Talonarios;
