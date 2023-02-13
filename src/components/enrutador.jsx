import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Inicio, AgregarCliente, NuevaOrden, NotFound, OrdenesPendientes, GestionarEmpleados, Clientes } from '../pages';

const EnrutadorComp = () => {
  return (
    <Routes>
      <Route path='/' element={ <Inicio /> }>
        <Route path='ordenes-pendientes' element={ <OrdenesPendientes /> } />
        <Route path='nuevo-cliente' element={ <AgregarCliente /> } />
        <Route path='nueva-orden' element={ <NuevaOrden /> } />
        <Route path='nueva-orden/:idCliente' element={ <NuevaOrden /> } />
        <Route path='gestionar-empleados' element={ <GestionarEmpleados /> } />
        <Route path='clientes' element={ <Clientes />} />
      </Route>
      <Route path='*' element={ <NotFound /> } />
    </Routes>
  );
}

export default EnrutadorComp;
