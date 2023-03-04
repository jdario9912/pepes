import React, { useState, useEffect } from 'react';

const Pago = ({ total, entrega }) => {
  const inputTotal = document.querySelector('[data="total"');
  const inputEntrega = document.querySelector('[data="entrega"');
  const [totalPago, setTotalPago] = useState(0);
  const [entregaPago, setEntregaPago] = useState(0);
  const [saldo, setSaldo] = useState(totalPago - entregaPago);

  useEffect(() => {
    setTotalPago(parseInt(total));
    setEntregaPago(parseInt(entrega));
    setSaldo(totalPago - entregaPago);
  }, []);

  useEffect(() => {
    setSaldo(totalPago - entregaPago)
  }, [totalPago, entregaPago]);
  
  const handleChangeTotal = (e) => {
    setTotalPago(e.target.value);
    inputTotal.classList.add('cambio');
    inputTotal.classList.remove('original');
  };

  const handleChangeEntrega = (e) => {
    setEntregaPago(e.target.value);
    inputEntrega.classList.add('cambio');
    inputEntrega.classList.remove('original');
  }

  return (
    <div className='flex-row'>
      Total 
      <input 
        type="number" 
        data='total' 
        value={ totalPago } 
        className='original'
        onChange={ handleChangeTotal } 
      />

      Entrega
      <input 
        type="number" 
        data='entrega' 
        value={ entregaPago } 
        className='original'
        onChange={ handleChangeEntrega} 
      />

      Saldo: 
      { saldo }
    </div>
  );
}

export default Pago;
