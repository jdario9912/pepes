import React from 'react';
import BuscarClientes from '../comp-pages/clientes-comp/buscar-clientes';
import MostrarClientes from '../comp-pages/clientes-comp/mostrar-clientes';
import '../../styles/clientes-comp.css';
import Button from '../button';

const ClientesComp = () => {
  const verListaClientes = () => console.log('Mostrando lista de clientes');
  return (
    <div className='clientes-comp--container'>
      <h2>Clientes</h2>
      <div className="clientes-comp--lista-buscar-container">
        <Button texto='Ver lista' estilos='clientes-comp--btn-ver-lista' onClick={ verListaClientes } />
        <BuscarClientes />
      </div>
      <MostrarClientes />
    </div>
  );
}

export default ClientesComp;
