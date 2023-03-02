import React from 'react';
import {useParams} from 'react-router-dom';
import { editarTiposTrabajo } from '../../models/editar-tipos-trabajo';

const EditarOrden = () => {
  const { tipo, idCliente, nroOrden } = useParams();

  return (
    <div>
      Editar orden numero {nroOrden} de tipo {tipo} para cliente {idCliente}
      { editarTiposTrabajo[tipo] }
    </div>
  );
}

export default EditarOrden;
