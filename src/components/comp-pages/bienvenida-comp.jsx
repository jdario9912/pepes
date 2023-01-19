import React from 'react';
import ImagenLogo from '../imagen-logo';
import '../../styles/bienvenida-comp.css';
import FormLoginContainer from './bienvenida-comp/form-login-container';

const BienvenidaComp = () => {
  return (
    <div className='bienvenida-comp'>
      <FormLoginContainer />      
      <div>
        <ImagenLogo />
      </div>
    </div>
  );
}

export default BienvenidaComp;
