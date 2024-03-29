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
import { opcionesRemeras } from '../../../models/opciones-editar-ordenes';
import { editarOrden } from '../../../services/editar-orden/editar-orden';
import Abono from './comp-generales/abono';

const Remeras = () => {
  const navigate = useNavigate();
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
    const fecha_entrega = document.querySelector('[data="fecha-entrega"]').value;
    const hora_entrega = document.querySelector('[data="hora-entrega"]').value;
    const muestra = document.querySelector('[data="muestra"]').value;
    const ubicacion_archivo = document.querySelector('[data="ubicacion-archivo"]').value;
    const talle = document.querySelector('[data="talles"]').value;
    const color = document.querySelector('[data="color"]').value;
    const estampa_pecho = document.querySelector('[data="estampa-pecho"]').value;
    const estampa_espalda = document.querySelector('[data="estampa-espalda"]').value;
    const color_estampa = document.querySelector('[data="color-estampa"]').value;
    const cantidad = document.querySelector('[data="cantidad"]').value;
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
      talle,
      color,
      estampa_pecho,
      estampa_espalda,
      color_estampa,
      cantidad,
      observaciones,
      total,
      entrega,
      abono,
      nroOrden
    }

    editarOrden(urlApi + '/api/remeras', body)
      .then(res => res.json())
      .then(({ actualizado }) => {
        btnSubmit.removeAttribute('disabled');
        if(actualizado) navigate(`/pdf/remeras/${nroOrden}`)
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
            <table className="editar-orden--table">
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

export default Remeras;
