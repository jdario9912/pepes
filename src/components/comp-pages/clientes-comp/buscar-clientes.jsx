import React from 'react';
import BtnSubmit from '../../btn-submit';
import InputText from '../../input-text';
import { InputTextModel } from '../../../models/input-text-model';

const BuscarClientes = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputCliente = document.querySelector('[data="cliente"]');
    console.log(
      inputCliente,
    );
  }
  return (
    <form onSubmit={ handleSubmit }>
      <InputText props={ new InputTextModel('Nombre:', '', null, 'Nombre del cliente', '', 'cliente')} />
      <BtnSubmit texto='Buscar' estilos='' />
    </form>
  );
}

export default BuscarClientes;
