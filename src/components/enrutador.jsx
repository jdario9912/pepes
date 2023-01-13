import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main, Clientes, Ordenes } from '../pages';

const EnrutadorComp = () => {
  return (
    <Routes>
      <Route index element={ <Main /> } />
      <Route path='/clientes' element={ <Clientes /> } />
      <Route path='/ordenes' element={ <Ordenes /> } />
    </Routes>
  );
}

export default EnrutadorComp;
