import React from 'react';
import '../styles/buscador.css';
import { FiSearch } from "react-icons/fi";
import BtnSubmit from './btn-submit';
import InputSearch from './buscador/input-search';
import { useNavigate } from 'react-router-dom';

const Buscador = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const busqueda = document.querySelector('[data-busqueda]');
    const formBusqueda = document.querySelector('[data="form-busqueda"]');
    navigate(`/?busqueda=${busqueda.value}`);
    formBusqueda.reset();
  };

  return (
    <div className='buscador--container'>
      <form method="get" className='buscador--form' onSubmit={ handleSubmit } data='form-busqueda'>
        <InputSearch />
        <BtnSubmit texto={ <FiSearch /> } estilos='buscador--btn' />
      </form>
    </div>
  );
}

export default Buscador;
