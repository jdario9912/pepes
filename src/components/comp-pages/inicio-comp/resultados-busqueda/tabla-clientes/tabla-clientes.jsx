import TBody from './t-body';
import THead from './t-head';
import '../../../../../styles/tabla-clientes-busqueda.css';

const TablaClientes = () => {
  return (
    <div className="tabla-clientes--busqueda-container modulo">
      <table>
        <THead />
        <TBody />
      </table>
    </div>
  );
}

export default TablaClientes;
