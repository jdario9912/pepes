import { MdPendingActions } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FiTruck } from "react-icons/fi";

export const nav = [
  {
    icon: <MdPendingActions />,
    to: '/ordenes-pendientes',
    label: 'Pendientes'
  },
  {
    icon: <FiTruck />,
    to: '/enviados-proveedor',
    label: 'Enviados proveedor'
  },
  {
    icon: <BsPeople />,
    to: '/clientes',
    label: 'Clientes'
  },
  {
    icon: <AiOutlineUserAdd />,
    to: '/nuevo-cliente',
    label: 'Nuevo cliente'
  }
]