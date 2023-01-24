import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main, Clientes, Ordenes, OrdenesPendientes, AgregarCliente, NuevaOrden, Bienvenida } from '../pages';

const EnrutadorComp = () => {
  return (
    <Routes>
      <Route index element={ <Main /> } />
      <Route path='/bienvenida' element={ <Bienvenida /> } />
      <Route path='/clientes' element={ <Clientes /> } />
      <Route path='/ordenes' element={ <Ordenes /> } />
      <Route path='/ordenes-pendientes' element={ <OrdenesPendientes /> } />
      <Route path='/nuevo-cliente' element={ <AgregarCliente /> } />
      <Route path='/nueva-orden' element={ <NuevaOrden /> } />
    </Routes>
  );
}

export default EnrutadorComp;
