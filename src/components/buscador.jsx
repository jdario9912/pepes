import React from 'react';
import '../styles/buscador.css';
import { FiSearch } from "react-icons/fi";
import BtnSubmit from './btn-submit';
import InputSearch from './buscador/input-search';
import { useNavigate } from 'react-router-dom';

const Buscador = () => {
  const navigate = useNavigate();
  
  const handleSubmit = () => {
    const busqueda = document.querySelector('[data-busqueda]');
    navigate(`/?busqueda=${busqueda.value}`);
  }

  return (
    <div className='buscador--container'>
      <form action="" method="get" className='buscador--form' onSubmit={ handleSubmit }>
        <InputSearch />
        <BtnSubmit texto={ <FiSearch /> } estilos='buscador--btn' />
      </form>
    </div>
  );
}

export default Buscador;
