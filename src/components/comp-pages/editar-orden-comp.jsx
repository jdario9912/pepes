import React from 'react';
import {useParams} from 'react-router-dom';
import { editarTiposTrabajo } from '../../models/editar-tipos-trabajo';
import '../../styles/editar-orden-comp.css';

const EditarOrden = () => {
  const { pedido } = useParams();

  return (
    <div>
      { editarTiposTrabajo[pedido] }
    </div>
  );
}

export default EditarOrden;
