import React from 'react';
import '../../styles/bienvenida-comp.css';
import FormLoginContainer from './bienvenida-comp/form-login-container';
import ImagenLogoContainer from './bienvenida-comp/imagen-logo-container';

const BienvenidaComp = () => {
  return (
    <div className='bienvenida-comp'>
      <FormLoginContainer />      
      <ImagenLogoContainer />
    </div>
  );
}

export default BienvenidaComp;
