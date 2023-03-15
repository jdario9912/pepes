import Empleados from "../components/comp-pages/opciones-admin-comp/empleados";
import Clientes from "../components/comp-pages/opciones-admin-comp/clientes";
import Ordenes from "../components/comp-pages/opciones-admin-comp/ordenes";
import Historial from "../components/comp-pages/opciones-admin-comp/historial";

export const opcionesPanelAdmin = {
  'empleados': <Empleados />,
  'clientes': <Clientes />,
  'ordenes': <Ordenes />,
  'historial': <Historial />,
  '': <div>Elige una opción</div>
};