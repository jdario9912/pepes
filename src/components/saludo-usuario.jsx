import React, { useContext } from 'react';
import { AppContext } from './app';
import '../styles/saludo-usuario.css';
import moment from 'moment';
import 'moment/locale/es';

const SaludoUsuario = () => {
  moment.locale('es');
  const { usuarioActual } = useContext(AppContext);
  return (
    <div className='saludo-usuario'>
      <span>Hola, { usuarioActual }!</span>
      <span>Hoy es <i>{ moment().format('dddd') }</i>, { moment().format('L') }</span>
    </div>
  );
}

export default SaludoUsuario;
