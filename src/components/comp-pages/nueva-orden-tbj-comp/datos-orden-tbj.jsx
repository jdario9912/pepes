import React from 'react';
import InputDate from '../../input-date';
import InputTime from '../../input-time';
import SelectOption from '../../select-option';
import TextArea from '../../text-area';
import DetallePago from './detalle-pago';
import DetalleTbj from './detalle-tbj';
import EstadoOrdenTbj from './estado-orden-tbj';
import ImprimirOrden from './imprimir-orden';
import Muestra from './muestra';
import TipoTrabajo from './tipo-trabajo';

const DatosOrdenTbj = () => {
  const empleados = ['Pepo', 'Maru', 'Viejo', 'Loli', 'Tomy', 'Vane', 'Joel'];

  return (
    <div>
      <h3>Datos de la Orden</h3>
      <SelectOption texto='Atendido por: ' opciones={ empleados } />
      <InputDate texto='Fecha de entrega: ' />
      <InputTime texto='Hora de entrega: ' />
      <Muestra />
      <TipoTrabajo />
      <DetalleTbj />
      <TextArea texto='Observaciones: ' />
      <DetallePago />
      <EstadoOrdenTbj />
      <ImprimirOrden />
    </div>
  );
}

export default DatosOrdenTbj;
