import React from 'react';
import FormLogin from './form-login';
import '../../../styles/form-login-container.css';

const FormLoginContainer = () => {
  return (
    <div className='bienvenida-form-container'>
      <h2 className='h2'>login</h2>
      <FormLogin />
    </div>
  );
}

export default FormLoginContainer;
