import React from 'react';
import TBody from './t-body';
import THead from './t-head';
import '../../../../../styles/tabla-orden-busqueda.css';

const TablaOrden = () => {
  return (
    <div className="tabla-orden--busqueda-container modulo">
      <table>
        <THead />
        <TBody />
      </table>
    </div>
  );
}

export default TablaOrden;
