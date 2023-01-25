import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import '../styles/hamburguesa.css';

const Hamburguesa = () => {
  const handleClick = (e) => {
    console.log(e.target);
  }
  
  return (
    <button 
      className='hamburguesa--btn'
      onClick={ handleClick }
    >
      <AiOutlineMenu className='hamburguesa--icon' />
    </button>
  );
}

export default Hamburguesa;
