import React from 'react';
import { DatosClienteModel } from '../../models/datos-cliente-model';
import InfoCliente from './nueva-orden-tbj-comp/info-cliente';
import DatosOrdenTbj from './nueva-orden-tbj-comp/datos-orden-tbj';
import { clientes } from '../../models/clientes';
import '../../styles/nueva-orden-tbj-comp.css';

const NuevaOrdenTbjComp = () => {
  const { id, nombre, telefono, email, observaciones } = clientes[0];

  return (
    <div className='nueva-orden-tbj-comp--container'>
      <h2>Nueva Orden</h2>
      <InfoCliente 
        props={ new DatosClienteModel(id, nombre, telefono, email, observaciones)}
      />
      <DatosOrdenTbj />
    </div>
  );
}

export default NuevaOrdenTbjComp;
