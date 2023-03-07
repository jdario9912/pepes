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
      <h3>Detalle de pago</h3>
      <div>
        <InputNumber props={ new InputNumberModel('Total: $', '', '', null, '', 'total', setTotal)} />
        <InputNumber props={ new InputNumberModel('Entrega: $', '', '', null, '', 'entrega', setEntrega)} />
        <span>Saldo: { saldo < 0 ? <span className='detalle-pago--alerta'>Los valores ingresados son incorrectos</span> : `$${saldo}` }</span>
      </div>
      <div>
        Abonó
        <select 
          name="abono" 
          data='abono'
        >
          <option value="efectivo">En efectivo</option>
          <option value="debito">Por débito</option>
          <option value="transferencia">Por transferencia</option>
        </select>
      </div>

    </div>
  );
}

export default DetallePago;
