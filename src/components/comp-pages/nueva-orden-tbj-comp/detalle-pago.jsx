import React, {
  useState,
  useEffect
} from 'react';
import InputNumber from '../../input-number';
import { InputNumberModel } from '../../../models/input-number-model';

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
      <InputNumber props={ new InputNumberModel('Total: $', '', '', '', 'total', setTotal)} />
      <InputNumber props={ new InputNumberModel('Entrega: $', '', '', '', 'entrega', setEntrega)} />
      <span>Saldo: ${ saldo }</span>
    </div>
  );
}

export default DetallePago;
