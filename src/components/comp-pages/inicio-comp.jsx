import React from 'react';
import '../../styles/inicio-comp.css';
import { Outlet, useLocation } from 'react-router-dom';
import ResultadosBusqueda from './inicio-comp/resultados-busqueda';

const InicioComp = () => {
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const busqueda = query.get('busqueda');

  return (
    <div className='inicio-comp--container'>
      {
        busqueda ? <ResultadosBusqueda dato={ busqueda } /> : null
      }
      <Outlet />
    </div>
  );
}

export default InicioComp;
