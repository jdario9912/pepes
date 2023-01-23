import React, { useContext } from 'react';
import { AppContext } from './app';
import '../styles/saludo-usuario.css';
import moment from 'moment';
import 'moment/locale/es';

const SaludoUsuario = () => {
  moment.locale('es');
  const { usuario } = useContext(AppContext);
  return (
    <div className='saludo-usuario'>
      <span>Hola, { usuario }!</span>
      <span>Hoy es { moment().format('dddd') }, { moment().format('L') }</span>
    </div>
  );
}

export default SaludoUsuario;
