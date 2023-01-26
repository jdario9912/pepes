import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Inicio, AgregarCliente, NuevaOrden, Bienvenida } from '../pages';

const EnrutadorComp = () => {
  return (
    <Routes>
      <Route index element={ <Inicio /> } />
      <Route path='/bienvenida' element={ <Bienvenida /> } />
      <Route path='/nuevo-cliente' element={ <AgregarCliente /> } />
      <Route path='/nueva-orden' element={ <NuevaOrden /> } />
      <Route path='/*' element={ <h1>No existe esa pagina</h1> } />
    </Routes>
  );
}

export default EnrutadorComp;
