import React from 'react';
import BtnSubmit from '../btn-submit';
import InputNumber from '../input-number';
import { InputNumberModel } from '../../models/input-number-model';
import { AiOutlineSearch } from "react-icons/ai";
import '../../styles/buscar-ordenes.css';

const BuscarOrdenes = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputCliente = document.querySelector('[data="cliente"]');
    inputCliente.value = '';
  }

  return (
    <form onSubmit={ handleSubmit } className='buscar-ordenes--form'>
      <InputNumber props={ new InputNumberModel(null, 'buscar-ordenes--label-input', 'buscar-ordenes--input', '', 'Buscar nro. de orden', 'buscar-ordenes-numero')} />
      <BtnSubmit texto={ <AiOutlineSearch /> } estilos='buscar-ordenes--btn-submit' />
    </form>
  );
}

export default BuscarOrdenes;