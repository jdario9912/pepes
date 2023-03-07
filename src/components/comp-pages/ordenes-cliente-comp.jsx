import React, { useEffect, createContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { urlApi } from '../../services/url/url-api';
import Tabla from './ordenes-cliente-comp/tabla';
import '../../styles/ordenes-cliente-comp.css'

export const OrdenesClienteCompContext = createContext();

const OrdenesClienteComp = () => {
  const { id, nombre } = useParams();
  const [ordenes, setOrdenes] = useState(null);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    fetch(urlApi + `/api/ordenes-cliente/${id}`)
      .then(res => res.json())
      .then(data => {
        setOrdenes(data);
      })
      .catch(e => console.log(e))
    ;
  }, []);

  useEffect(() => {
    setOrdenes(ordenes);
    fetch(urlApi + `/api/ordenes-cliente/${id}`)
      .then(res => res.json())
      .then(data => {
        setOrdenes(data);
      })
      .catch(e => console.log(e))
    ;
  }, [ordenes, reset]);

  // useEffect(() => {
  //   fetch(urlApi + `/api/ordenes-cliente/${id}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setOrdenes(data);
  //     })
  //     .catch(e => console.log(e))
  //   ;
  // }, [reset]);

  return (
    <OrdenesClienteCompContext.Provider value={{ ordenes, reset, setReset }}>
      {
        <div className='modulo ordenes-cliente-comp--container'>
          Pedidos de { nombre }
          <Tabla />
        </div>
      }
    </OrdenesClienteCompContext.Provider>
  );
}

export default OrdenesClienteComp;
