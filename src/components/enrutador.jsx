import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Inicio, AgregarCliente, NuevaOrden, NotFound, OrdenesPendientes, GestionarEmpleados } from '../pages';

const EnrutadorComp = () => {
  return (
    <Routes>
      <Route path='/' element={ <Inicio /> }>
        <Route path='ordenes-pendientes' element={ <OrdenesPendientes /> } />
        <Route path='nuevo-cliente' element={ <AgregarCliente /> } />
        <Route path='nueva-orden' element={ <NuevaOrden /> } />
        <Route path='gestionar-empleados' element={ <GestionarEmpleados /> } />
      </Route>
      <Route path='*' element={ <NotFound /> } />
    </Routes>
  );
}

export default EnrutadorComp;
