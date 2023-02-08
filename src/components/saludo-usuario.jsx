import React, { useContext } from 'react';
import { AppContext } from './app';
import '../styles/saludo-usuario.css';
import moment from 'moment';
import 'moment/locale/es';

const SaludoUsuario = () => {
  moment.locale('es');
  const { usuarioActual } = useContext(AppContext);
  return (
    <div className='saludo-usuario--container'>
      <p>Bienvenido! <br /> <strong>{ usuarioActual }</strong></p>
      
    </div>
  );
}

export default SaludoUsuario;
