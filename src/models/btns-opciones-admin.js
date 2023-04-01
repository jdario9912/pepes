import { FaPeopleCarry, FaClipboardList } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";

export const btnsOpcionesAdmin = [
  {
    dispatch: 'empleados',
    icon: <FaPeopleCarry className="not-action" />,
    label: 'Empleados'
  },
  {
    dispatch: 'clientes',
    icon: <BsPeopleFill className="not-action" />,
    label: 'Clientes'
  },
  {
    dispatch: 'ordenes',
    icon: <FaClipboardList className="not-action" />,
    label: 'Ordenes'
  },
];