import { TfiReload } from "react-icons/tfi";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const BtnVerForm = ({ accion, data }) => (
  <button onClick={ accion } data={`ver${data}` } className='t-body--button' >
    <TfiReload className='not-action' />
  </button>
);

export const BtnOcultarForm = ({ accion, data }) => (
  <button onClick={ accion } data={`ocultar${data}`} className='btn-hidden t-body--button'>
    <AiOutlineCloseCircle className='not-action' />
  </button>
);