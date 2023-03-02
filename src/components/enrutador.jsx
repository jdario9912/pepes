import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Inicio, AgregarCliente, NuevaOrden, NotFound, OrdenesPendientes, OpcionesAdmin, Clientes } from '../pages';
import { Index } from './pdf';

const EnrutadorComp = () => {
  const permisos = JSON.parse(localStorage.getItem('permisos'));
  return (
    <Routes>
      <Route path='/' element={ <Inicio /> }>
        <Route path='ordenes-pendientes' element={ <OrdenesPendientes /> } />
        <Route path='nuevo-cliente' element={ <AgregarCliente /> } />
        <Route path='nueva-orden/:idCliente' element={ <NuevaOrden /> } />
        <Route path='editar-orden/:idCliente/:nroOrden' element={ <div>Pagina para editar orden </div> } />
        <Route path='opciones-admin' element={ permisos ? <OpcionesAdmin /> : <Navigate to='/' replace={true} /> } />
        <Route path='clientes' element={ <Clientes />} />
      </Route>
      <Route path='/pdf/:tipoTrabajo/:nroOrden' element={ <Index /> } />
      <Route path='*' element={ <NotFound /> } />
    </Routes>
  );
}

export default EnrutadorComp;
