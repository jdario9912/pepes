import React, { useEffect, useState } from 'react';
import { urlApi } from '../../../services/url/url-api';
import { useParams, useNavigate } from 'react-router-dom';
import InputText from './comp-generales/input-text';
import InputSelect from './comp-generales/input-select';
import TextArea from './comp-generales/text-area';
import Entregar from './comp-generales/entregar';
import Header from './comp-generales/header';
import Pago from './comp-generales/pago';
import { opcionesVolantes } from '../../../models/opciones-editar-ordenes';
import { editarOrden } from '../../../services/editar-orden/editar-orden';
import Abono from './comp-generales/abono';

const Volantes = () => {
  const navigate = useNavigate();
  const { nroOrden, nombre, pedido } = useParams();
  const [respuesta, setRespuesta] = useState(false);
  const [dataS, setdataS] = useState({});
  const { siNo, tipo, tamano, cantidad, impresion } = opcionesVolantes;

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
    const tipo = document.querySelector('[data="tipo"]').value;
    const tamano = document.querySelector('[data="tamano"]').value;
    const cantidad = document.querySelector('[data="cantidad"]').value;
    const impresion = document.querySelector('[data="impresion"]').value;
    const ubicacion_diseno = document.querySelector('[data="ubicacion-diseno"]').value;
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
      tipo,
      tamano,
      cantidad,
      impresion,
      ubicacion_diseno,
      observaciones,
      total,
      entrega,
      abono,
      nroOrden
    }

    editarOrden(urlApi + '/api/volantes', body)
      .then(res => res.json())
      .then(({ actualizado }) => {
        btnSubmit.removeAttribute('disabled');
        if(actualizado) navigate(`/pdf/volantes/${nroOrden}`)
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
              <td>Tipo</td>
              <td><InputSelect valor={dataS.tipo} data='tipo' opciones={ tipo } /></td>
            </tr>
            <tr>
              <td>Tamaño</td>
              <td><InputSelect valor={dataS.tamano} data='tamano' opciones={ tamano } /></td>
            </tr>
            <tr>
              <td>Cantidad</td>
              <td><InputSelect valor={ dataS.cantidad} data='cantidad' opciones={ cantidad } /></td>
            </tr>
            <tr>
              <td>Impresión</td>
              <td><InputSelect valor={ dataS.impresion} data='impresion' opciones={ impresion } /></td>
            </tr>
            <tr>
              <td>Ubicación del diseño</td>
              <td><InputText valor={ dataS.ubicacion_diseno} data='ubicacion-diseno' /></td>
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

export default Volantes;
