import MainComp from "../components/comp-pages/main-comp";
import ClientesComp from "../components/comp-pages/clientes-comp";
import OrdenesComp from "../components/comp-pages/ordenes-comp";
import OrdenesPendientesComp from "../components/comp-pages/ordenes-pendientes-comp";
import AgregarClienteComp from "../components/comp-pages/agregar-cliente-comp";
import NuevaOrdenTbjComp from "../components/comp-pages/nueva-orden-tbj-comp";
import BienvenidaComp from "../components/comp-pages/bienvenida-comp";

export const Main = () => <MainComp />;
export const Clientes = () => <ClientesComp />;
export const Ordenes = () => <OrdenesComp />;
export const OrdenesPendientes = () => <OrdenesPendientesComp />;
export const AgregarCliente = () => <AgregarClienteComp />;
export const NuevaOrden = () => <NuevaOrdenTbjComp />;
export const Bienvenida = () => <BienvenidaComp />;