import THead from "./mostrar-enviados-prov/t-head";
import TBody from "./mostrar-enviados-prov/t-body";

const MostrarEnviadosProv = ({enviadosAProveedor}) => {
  return (
    <div className="mostrar-ordenes-pendientes--table-container">
      <table className="mostrar-ordenes-pendientes--table">
        <THead />
        <TBody enviadosAProveedor={enviadosAProveedor} />
      </table>
    </div>
  );
};

export default MostrarEnviadosProv;
