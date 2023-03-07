import React, { useEffect, useState, createContext } from 'react';
import MostrarOrdenesPendientes from '../comp-pages/ordenes-pendientes-comp/mostrar-ordenes-pendientes';
import '../../styles/ordenes-pendientes-comp.css';
import { urlApi } from '../../services/url/url-api';
import { ordenarPorFecha, ordenarPorTipo } from '../../services/ordenar-ordenes-pendientes';
export const OrdenesPendientesCompContext = createContext();

const OrdenesPendientesComp = () => {
  const [ordenesPendientes, setOrdenesPendientes] = useState([]);
  const [reset, setReset] = useState(false);
  const [ordenar, setOrdenar] = useState(true);
  
  useEffect(() => {
    fetch(urlApi + '/api/ordenes-pendientes')
      .then(res => res.json())
      .then(data => setOrdenesPendientes(ordenarPorFecha(data)))
      .catch(e => console.log(e))
  }, []);

  useEffect(() => {
    fetch(urlApi + '/api/ordenes-pendientes')
      .then(res => res.json())
      .then(data => {
        if(ordenar){
          setOrdenesPendientes(ordenarPorFecha(data));
        } else {
          setOrdenesPendientes(ordenarPorTipo(data));
        }
        setReset(false);
      })
      .catch(e => console.log(e))
  }, [reset, ordenar]);
  
  return (
    <OrdenesPendientesCompContext.Provider value={{ setReset, reset, setOrdenar }}>
      <div className='ordenes-pendientes-comp--container modulo'>
        <h2>Ordenes Pendientes</h2>
        {
          ordenesPendientes.length === 0 ?
            <div>No hay ordenes pendientes</div> :
            <MostrarOrdenesPendientes ordenesPendientes={ ordenesPendientes } />
        }
      </div>
    </OrdenesPendientesCompContext.Provider>
  );
}

export default OrdenesPendientesComp;