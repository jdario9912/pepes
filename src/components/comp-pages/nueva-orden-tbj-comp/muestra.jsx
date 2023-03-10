import React, { useContext } from 'react';
import InputRadio from '../../input-radio';
import { NuevaOrdenTbjCompContext } from '../nueva-orden-tbj-comp';
import { opcionesMuestra } from '../../../models/opciones-muestra';

const Muestra = () => {
  const { setMuestra } = useContext(NuevaOrdenTbjCompContext);

  return (
    <InputRadio texto='Muestra' accion={setMuestra} opciones={opcionesMuestra} name='muestra' />
  );
}

export default Muestra;
