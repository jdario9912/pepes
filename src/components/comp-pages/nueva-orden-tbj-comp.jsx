import React, { useEffect, useState } from 'react';
import InfoCliente from './nueva-orden-tbj-comp/info-cliente';
import DatosOrdenTbj from './nueva-orden-tbj-comp/datos-orden-tbj';
import '../../styles/nueva-orden-tbj-comp.css';
import { useParams } from 'react-router-dom';import { urlApi } from '../../services/url/url-api';

const NuevaOrdenTbjComp = () => {
  const { idCliente } = useParams();
  const [clienteS, setClienteS] = useState({});
  
  useEffect(() => {
    fetch(urlApi + `/api/clientes/${idCliente}`)
      .then(res => res.json())
      .then(({ok, cliente}) => {
        if(ok){
          setClienteS(cliente)
        }
      })
  }, []);

  return (
    <div className='nueva-orden-tbj-comp--container'>
      <h2>Nueva Orden</h2>
      <InfoCliente props={ clienteS } />
      <DatosOrdenTbj />
    </div>
  );
}

export default NuevaOrdenTbjComp;
