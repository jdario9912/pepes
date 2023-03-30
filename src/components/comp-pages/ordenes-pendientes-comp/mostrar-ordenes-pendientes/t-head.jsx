import '../../../../styles/t-head.css';
import { TbArrowsSort } from "react-icons/tb";

const THead = ({ accion }) => {
  return (
    <thead className='t-head'>
      <tr className='t-head--tr'>
        <th>Nro.</th>
        <th>
          <button onClick={ () => accion(false) } className='t-head--button'>
            <TbArrowsSort />
            Tipo
          </button>
        </th>
        <th>Cliente</th>
        <th>
          <button onClick={ () => accion(true) } className='t-head--button'>
            <TbArrowsSort />
            Entregar
          </button>
        </th>
        <th>Creado</th>
        <th>Acciones</th>
      </tr>
    </thead>
  );
}

export default THead;
