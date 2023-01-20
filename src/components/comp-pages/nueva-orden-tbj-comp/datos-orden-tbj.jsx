import React, { useState, createContext } from 'react';
import InputDate from '../../input-date';
import InputTime from '../../input-time';
import TextArea from '../../text-area';
import AtendidoPor from './atendido-por';
import DetallePago from './detalle-pago';
import DetalleTbj from './detalle-tbj';
import EstadoOrdenTbj from './estado-orden-tbj';
import ImprimirOrden from './imprimir-orden';
import Muestra from './muestra';
import TipoTrabajo from './tipo-trabajo';

export const DatosOrdenTbjContext = createContext();

const DatosOrdenTbj = () => {
  const [tipoTrabajo, setTipoTrabajo] = useState('');

  return (
    <DatosOrdenTbjContext.Provider value={{ tipoTrabajo, setTipoTrabajo }}>
      <div>
        <h3>Datos de la Orden</h3>
        <AtendidoPor />
        <InputDate texto='Fecha de entrega: ' />
        <InputTime texto='Hora de entrega: ' />
        <Muestra />
        <TipoTrabajo />
        <DetalleTbj tipoTrabajo={ tipoTrabajo } />
        <TextArea texto='Observaciones: ' />
        <DetallePago />
        <EstadoOrdenTbj />
        <ImprimirOrden />
      </div>
    </DatosOrdenTbjContext.Provider>
  );
}

export default DatosOrdenTbj;
