import React, {
  useContext
} from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import '../styles/hamburguesa.css';
import { HeaderContext } from './header';

const Hamburguesa = () => {
  const { toogleNav, setToogleNav} = useContext(HeaderContext);
  
  const handleClick = () => {
    setToogleNav(!toogleNav);
  }
  
  return (
    <div className='hamburguesa-container'>
      <button 
        className='hamburguesa--btn'
        onClick={ handleClick }
      >
        <AiOutlineMenu className='hamburguesa--icon' />
      </button>
    </div>
  );
}

export default Hamburguesa;
