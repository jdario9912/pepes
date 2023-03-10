import React, {
  useState,
  useEffect
} from 'react';
import InputNumber from '../../input-number';
import { InputNumberModel } from '../../../models/input-number-model';
import '../../../styles/detalle-pago.css'
import { AiFillWarning } from "react-icons/ai";

const DetallePago = () => {
  const 
    [total, setTotal] = useState(0),
    [entrega, setEntrega] = useState(0),
    [saldo, setSaldo] = useState(0)
  ;
  const alerta = 'detalle-pago--alerta';
  const sinSaldo = 'detallo-pago--sin-saldo';
  const deuda = 'detalle-pago--saldo-deuda';
  const ocultarSelectAbono = 'hidden';
  const verSelectAbono = 'flex-column g-1 select-container desplegar';

  useEffect(() => {
    setSaldo(total - entrega);
  }, [total, entrega]);

  return (
    <div className='detalle-pago--container'>
      <h3 className='detalle-pago--titulo'>Importe</h3>
      <div className='flex-column gap-1'>
        <InputNumber props={ new InputNumberModel('', '', 'input-escribir', null, 'Total', 'total', setTotal)} />
        <InputNumber props={ new InputNumberModel('', '', 'input-escribir', null, 'Entrega', 'entrega', setEntrega)} />
      </div>
      <div className={entrega > 0 ? verSelectAbono : ocultarSelectAbono}>
        Abonó:
        <select 
          name="abono" 
          data='abono'
          className='select'
        >
          <option className='option' value="efectivo">En efectivo</option>
          <option className='option' value="debito">Con débito</option>
          <option className='option' value="transferencia">Por transferencia</option>
        </select>
      </div>
      <div className='detalle-pago--saldo'>
        { 
          saldo < 0 ? 
            <span className={alerta}><AiFillWarning /> revisar valores!</span> : 
            <span className={ saldo === 0 ? sinSaldo : deuda }>Saldo: ${saldo}</span>
        }
      </div>
    </div>
  );
}

export default DetallePago;
