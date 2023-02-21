import React, { useEffect, useState } from 'react';
import MostrarOrdenesPendientes from '../comp-pages/ordenes-pendientes-comp/mostrar-ordenes-pendientes';
import '../../styles/ordenes-pendientes-comp.css';
import { urlApi } from '../../services/url/url-api';

const OrdenesPendientesComp = () => {
  const [ordenesPendientes, setOrdenesPendientes] = useState([]);
  useEffect(() => {
    fetch(urlApi + '/api/ordenes-pendientes')
      .then(res => res.json())
      .then(data => setOrdenesPendientes(data))
      .catch(e => console.log(e))
  }, []);
  return (
    <div className='ordenes-pendientes-comp--container modulo'>
      <h2>Ordenes Pendientes</h2>
      <MostrarOrdenesPendientes ordenesPendientes={ ordenesPendientes } />
    </div>
  );
}

export default OrdenesPendientesComp;
