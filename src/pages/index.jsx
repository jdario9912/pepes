import InicioComp from "../components/comp-pages/inicio-comp";
import ClientesComp from "../components/comp-pages/clientes-comp";
import OrdenesComp from "../components/comp-pages/ordenes-comp";
import OrdenesPendientesComp from "../components/comp-pages/ordenes-pendientes-comp";
import AgregarClienteComp from "../components/comp-pages/agregar-cliente-comp";
import NuevaOrdenTbjComp from "../components/comp-pages/nueva-orden-tbj-comp";
import NotFoundComp from "../components/comp-pages/not-found-comp";
import OpcionesAdminComp from "../components/comp-pages/opciones-admin-comp";

export const Inicio = () => <InicioComp />;
export const Clientes = () => <ClientesComp />;
export const Ordenes = () => <OrdenesComp />;
export const OrdenesPendientes = () => <OrdenesPendientesComp />;
export const AgregarCliente = () => <AgregarClienteComp />;
export const NuevaOrden = () => <NuevaOrdenTbjComp />;
export const NotFound = () => <NotFoundComp />;
export const OpcionesAdmin = () => <OpcionesAdminComp />;
