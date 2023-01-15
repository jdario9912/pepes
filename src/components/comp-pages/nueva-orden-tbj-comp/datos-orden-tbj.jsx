import React from 'react';
import InputDate from '../../input-date';
import InputTime from '../../input-time';
import SelectOption from '../../select-option';

const DatosOrdenTbj = () => {
  const empleados = ['Pepo', 'Maru', 'Viejo', 'Loli', 'Tomy', 'Vane', 'Joel'];

  return (
    <div>
      <h3>Datos de la Orden</h3>
      <SelectOption texto='Atendido por: ' opciones={ empleados } />
      <InputDate texto='Fecha de entrega: ' />
      <InputTime texto='Hora de entrega: ' />
    </div>
  );
}

export default DatosOrdenTbj;
