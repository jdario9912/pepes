import React from 'react';
import BtnSubmit from '../../btn-submit';
import InputText from '../../input-text';
import { InputTextModel } from '../../../models/input-text-model';
import '../../../styles/buscar-clientes.css';
import { AiOutlineSearch } from "react-icons/ai";

const BuscarClientes = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputCliente = document.querySelector('[data="cliente"]');
    console.log('Cliente buscado: ', inputCliente.value);
    inputCliente.value = '';
  }
  return (
    <form onSubmit={ handleSubmit } className='buscar-clientes--form'>
      <InputText props={ new InputTextModel(null, 'buscar-clientes--label-input', null, 'Buscar cliente', 'buscar-clientes--input', 'cliente')} />
      <BtnSubmit texto={ <AiOutlineSearch /> } estilos='buscar-clientes--btn-submit' />
    </form>
  );
}

export default BuscarClientes;
