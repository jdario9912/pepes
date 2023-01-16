import React from 'react';
import InputDate from '../../input-date';
import InputTime from '../../input-time';
import SelectOption from '../../select-option';
import DetallePago from './detalle-pago';
import EstadoOrdenTbj from './estado-orden-tbj';
import ImprimirOrden from './imprimir-orden';
import TipoTrabajo from './tipo-trabajo';

const DatosOrdenTbj = () => {
  const empleados = ['Pepo', 'Maru', 'Viejo', 'Loli', 'Tomy', 'Vane', 'Joel'];

  return (
    <div>
      <h3>Datos de la Orden</h3>
      <SelectOption texto='Atendido por: ' opciones={ empleados } />
      <InputDate texto='Fecha de entrega: ' />
      <InputTime texto='Hora de entrega: ' />
      {/* ACA VA LA OPCION DE MUESTRA SI O NO */}
      <TipoTrabajo />
      {/* ACA SE MUESTRAN LAS OPCIONES SEGUN EL TIPO DE TRABAJO */}
      <DetallePago />
      <EstadoOrdenTbj />
      <ImprimirOrden />
    </div>
  );
}

export default DatosOrdenTbj;
