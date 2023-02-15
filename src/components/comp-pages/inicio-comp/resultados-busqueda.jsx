import React, { useEffect, useState } from 'react';
import { urlApi } from '../../../services/url/url-api';
import { Link } from 'react-router-dom';

const ResultadosBusqueda = ({ dato }) => {
  const [numerico, setNumerico] = useState(false);
  const [clientes, setClientes] = useState([]);
  const [orden, setOrden] = useState({});
  const [alerta, setAlerta] = useState('');

  useEffect(() => {
    fetch(urlApi + `/api/busqueda/${ dato }`)
      .then(res => res.json())
      .then(({ numero, resultados, mensaje }) => {
        if(mensaje !== '' && mensaje) setAlerta(mensaje);
        setNumerico(numero);
        numero ? setOrden(resultados) : setClientes(resultados);
      })
      .catch(e => console.log(e));
  }, []);

  if(alerta !== '')
    return( <p>{alerta}</p>)

  if(numerico){
    const { Orden, Cliente, Creado, Estado, Tipo, Fecha, Hora } = orden;
    return (
      <table>
        <thead className='t-head'>
          <tr className='t-head--tr'>
            <th>Orden</th>
            <th>Cliente</th>
            <th>Creado</th>
            <th>Estado</th>
            <th>Tipo Trabajo</th>
            <th>Fecha Entrega</th>
            <th>Hora Entrega</th>
          </tr>
        </thead>
        <tbody className='t-body'>
          <tr className='t-body--tr'>
            <td>{ Orden }</td>
            <td>{ Cliente }</td>
            <td>{ Creado }</td>
            <td>{ Estado }</td>
            <td>{ Tipo }</td>
            <td>{ Fecha }</td>
            <td>{ Hora }hs</td>
          </tr>
        </tbody>
      </table>
    );
  } else {
    return(
      <table>
        <thead className='t-head'>
          <tr className='t-head--tr'>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Mail</th>
            <th>Observaciones</th>
            <th>Ordenes pend.</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody className='t-body'>
        {
          clientes.map(({ id, nombre, telefono, email, observaciones }) =>
            <tr className='t-body--tr' key={ id }>
              <td>{ nombre }</td>
              <td>{ telefono }</td>
              <td>{ email }</td>
              <td>{ observaciones }</td>
              <td>Falta este dato</td>
              <td>
                <Link to='#'>Ver ordenes</Link>
                <Link to='#'>Editar</Link>
              </td>
            </tr>          
          )
        }
      </tbody>
    </table>
    )
  }
}

export default ResultadosBusqueda;
