import { TfiReload } from "react-icons/tfi";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const BtnVerForm = ({ accion }) => (
  <button onClick={ accion } >
    <AiOutlineCloseCircle className='not-action' />
  </button>
);

export const BtnOcultarForm = ({ accion }) => (
  <button onClick={ accion } >
    <TfiReload className='not-action' />
  </button>
);