import React, {
  useContext
} from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import '../styles/hamburguesa.css';
import { AppContext } from './app';

const Hamburguesa = () => {
  const { toogleNav, setToogleNav} = useContext(AppContext);
  
  const handleClick = () => {
    if(!toogleNav)
      setToogleNav(true);
  };
  
  return (
    <div className={
      toogleNav ? 'hamburguesa-container hamburguesa-container-oculta' :
      'hamburguesa-container'
    }>
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
