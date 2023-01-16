import React from 'react';
import { DatosClienteModel } from '../../models/datos-cliente-model';
import DatosCliente from './nueva-orden-tbj-comp/datos-cliente';
import DatosOrdenTbj from './nueva-orden-tbj-comp/datos-orden-tbj';

const NuevaOrdenTbjComp = () => {
  return (
    <div>
      <h2>Nueva Orden</h2>
      <DatosCliente 
        props={ new DatosClienteModel(
          'Joel', 
          '123563768', 
          'joel@groso.com', 
          'Es muy capo'
        )}
      />
      <DatosOrdenTbj />
    </div>
  );
}

export default NuevaOrdenTbjComp;
