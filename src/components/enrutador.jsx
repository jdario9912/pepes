import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main, Clientes, Ordenes, OrdenesPendientes, AgregarCliente, NuevaOrden, Landign } from '../pages';

const EnrutadorComp = () => {
  return (
    <Routes>
      <Route index element={ <Main /> } />
      <Route path='/landing' element={ <Landign /> } />
      <Route path='/clientes' element={ <Clientes /> } />
      <Route path='/ordenes' element={ <Ordenes /> } />
      <Route path='/ordenes-pendientes' element={ <OrdenesPendientes /> } />
      <Route path='/agregar-cliente' element={ <AgregarCliente /> } />
      <Route path='/nueva-orden' element={ <NuevaOrden /> } />
    </Routes>
  );
}

export default EnrutadorComp;
