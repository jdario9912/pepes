import React from 'react';
import BtnSubmit from '../../btn-submit';
import InputText from '../../input-text';
import { InputTextModel } from '../../../models/input-text-model';
import '../../../styles/buscar-clientes.css'

const BuscarClientes = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputCliente = document.querySelector('[data="cliente"]');
    console.log('Cliente buscado: ', inputCliente.value);
    inputCliente.value = '';
  }
  return (
    <form onSubmit={ handleSubmit } className='buscar-clientes--form'>
      <InputText props={ new InputTextModel('Buscar cliente:', '', null, 'Ingresá nombre', '', 'cliente')} />
      <BtnSubmit texto='Buscar' estilos='' />
    </form>
  );
}

export default BuscarClientes;
