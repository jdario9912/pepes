import React, { useContext } from 'react';
import InputText from '../../../input-text';
import Abrochado from './impresiones-comp/abrochado';
import Anillado from './impresiones-comp/anillado';
import Corte from './impresiones-comp/corte';
import Faz from './impresiones-comp/faz';
import Orientacion from './impresiones-comp/orientacion';
import TamanoPapel from './impresiones-comp/tamano-papel';
import { InputTextModel } from '../../../../models/input-text-model';
import InputDate from '../../../input-date';
import InputTime from '../../../input-time';
import Muestra from '../muestra';
import { InputDateModel } from '../../../../models/input-date-model';
import { InputTimeModel } from '../../../../models/input-time-model';
import TextArea from '../../../text-area';
import { TextAreaModel } from '../../../../models/text-area-model';
import DetallePago from '../detalle-pago';
import EstadoOrdenTbj from '../estado-orden-tbj';
import { NuevaOrdenTbjCompContext } from '../../nueva-orden-tbj-comp';
import { fecha_creacion, formatear_fecha, nro_orden } from '../../../../services/datos-orden-tbj/datos-orden-tbj';

const ImpresionesComp = () => {
  const { clienteS } = useContext(NuevaOrdenTbjCompContext);

  const handleSubmint = (e) => {
    e.preventDefault();
    const { id } = clienteS;
    const fecha = document.querySelector('[data="fecha"]').value;
    
    console.table([
      ['id_cliente', id],
      ['nro_orden', nro_orden()],
      ['fecha_creacion', fecha_creacion()],
      ['atendido_por', localStorage.getItem('usuario-actual')],
      ['fecha_entrega', formatear_fecha(fecha)]
    ]);
  };

  return (
    <form onSubmit={ handleSubmint }>
      <h5>Impresiones</h5>
      {/* ACA TENGO QUE RECUPERAR EL NOMBRE DEL EMPLEADO */}
      <InputDate props={ new InputDateModel('Fecha de entrega:', '', null, '', 'fecha') } />
      <InputTime props={ new InputTimeModel('Hora de entrega:', '', '19:00', '', 'hora')} />
      <Muestra />
      <InputText props={ new InputTextModel('Ubicación del archivo: ', '', '', 'Ingresa ubicación del archivo', '', 'ubicacion-archivo')} />
      <Faz />
      <InputText props={ new InputTextModel('Tipo de papel: ', '', '', 'Ingresa tipo de papel', '', 'tipo-papel')} />
      <TamanoPapel />
      <Orientacion />
      <Anillado />
      <Abrochado />
      <Corte />
      <TextArea props={ new TextAreaModel('Observaciones:', '', '', 'Ingresar detalles de la orden', '', 'observaciones') } />
      <DetallePago />
      <EstadoOrdenTbj />
      <button type="submit">Guardar</button>
    </form>
  );
}

export default ImpresionesComp;
