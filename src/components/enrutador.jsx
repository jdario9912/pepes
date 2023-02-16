import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Inicio, AgregarCliente, NuevaOrden, NotFound, OrdenesPendientes, OpcionesAdmin, Clientes, Ordenes } from '../pages';

const EnrutadorComp = () => {
  const permisos = JSON.parse(localStorage.getItem('permisos'));
  return (
    <Routes>
      <Route path='/' element={ <Inicio /> }>
        <Route path='ordenes-pendientes' element={ <OrdenesPendientes /> } />
        <Route path='nuevo-cliente' element={ <AgregarCliente /> } />
        <Route path='nueva-orden/:idCliente' element={ <NuevaOrden /> } />
        <Route path='opciones-admin' element={ permisos ? <OpcionesAdmin /> : <Navigate to='/' replace={true} /> } />
        <Route path='clientes' element={ <Clientes />} />
        <Route path='ordenes' element={ <Ordenes /> } />
      </Route>
      <Route path='*' element={ <NotFound /> } />
    </Routes>
  );
}

export default EnrutadorComp;
