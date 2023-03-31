import InicioComp from "../components/comp-pages/inicio-comp";
import ClientesComp from "../components/comp-pages/clientes-comp";
import OrdenesPendientesComp from "../components/comp-pages/ordenes-pendientes-comp";
import AgregarClienteComp from "../components/comp-pages/agregar-cliente-comp";
import NuevaOrdenTbjComp from "../components/comp-pages/nueva-orden-tbj-comp";
import NotFoundComp from "../components/comp-pages/not-found-comp";
import OpcionesAdminComp from "../components/comp-pages/opciones-admin-comp";
import OrdenesClienteComp from "../components/comp-pages/ordenes-cliente-comp";
import EditarClienteComp from "../components/comp-pages/editar-cliente-comp";
import OrdenesEnviadosProvComp from "../components/comp-pages/ordenes-enviados-prov-comp";
import EliminarClienteComp from "../components/comp-pages/eliminar-cliente-comp";

export const Inicio = () => <InicioComp />;
export const Clientes = () => <ClientesComp />;
export const OrdenesPendientes = () => <OrdenesPendientesComp />;
export const AgregarCliente = () => <AgregarClienteComp />;
export const NuevaOrden = () => <NuevaOrdenTbjComp />;
export const NotFound = () => <NotFoundComp />;
export const OpcionesAdmin = () => <OpcionesAdminComp />;
export const OrdenesCliente = () => <OrdenesClienteComp />;
export const EditarCliente = () => <EditarClienteComp />;
export const EnviadosProveedor = () => <OrdenesEnviadosProvComp />;
export const EliminarCliente = () => <EliminarClienteComp />
