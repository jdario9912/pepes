import React, {
  useState,
  useEffect
} from 'react';
import InputNumber from '../../input-number';
import { InputNumberModel } from '../../../models/input-number-model';
import '../../../styles/detalle-pago.css'

const DetallePago = () => {
  const 
    [total, setTotal] = useState(0),
    [entrega, setEntrega] = useState(0),
    [saldo, setSaldo] = useState(0)
  ;

  useEffect(() => {
    setSaldo(total - entrega)
  }, [total, entrega]);

  return (
    <div>
      {/* <h3>Detalle de pago</h3> */}
      <div className='flex-column gap-1'>
        <InputNumber props={ new InputNumberModel('', '', 'input-escribir', null, 'Total', 'total', setTotal)} />
        <InputNumber props={ new InputNumberModel('', '', 'input-escribir', null, 'Entrega', 'entrega', setEntrega)} />
        <span>Saldo: { saldo < 0 ? <span className='detalle-pago--alerta'>Los valores ingresados son incorrectos</span> : `$${saldo}` }</span>
      </div>
      <div className='flex-column g-1 select-container'>
        Abonó:
        <select 
          name="abono" 
          data='abono'
          className='select'
        >
          <option className='option' value="efectivo">En efectivo</option>
          <option className='option' value="debito">Por débito</option>
          <option className='option' value="transferencia">Por transferencia</option>
        </select>
      </div>

    </div>
  );
}

export default DetallePago;
