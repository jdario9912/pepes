import React from 'react';
import FormLogin from './form-login';
import '../../../styles/form-login-container.css';
import ImagenLogoContainer from './imagen-logo-container';

const FormLoginContainer = () => {
  return (
    <div className='bienvenida-form-container'>
      <ImagenLogoContainer />
      <h2 className='h2'>Bienvenid@.</h2>
      <FormLogin />
    </div>
  );
}

export default FormLoginContainer;
