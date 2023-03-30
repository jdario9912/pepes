import { useContext } from 'react';
import TBody from './mostrar-ordenes-pendientes/t-body';
import THead from './mostrar-ordenes-pendientes/t-head';
import '../../../styles/mostrar-ordenes-pendientes.css';
import { OrdenesPendientesCompContext } from '../ordenes-pendientes-comp';

const MostrarOrdenesPendientes = ({ ordenesPendientes }) => {
  const { setOrdenar } = useContext(OrdenesPendientesCompContext);
  return (
    <div className="mostrar-ordenes-pendientes--table-container">
      <table className='mostrar-ordenes-pendientes--table'>
        <THead accion={ setOrdenar } />
        <TBody ordenesPendientes={ ordenesPendientes } />
      </table>
    </div>
  );
}

export default MostrarOrdenesPendientes;
