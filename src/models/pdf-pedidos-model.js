import Bonos from "../components/pdf/bonos";
import Disenos from "../components/pdf/disenos";
import Impresiones from "../components/pdf/impresiones";
import Loma from "../components/pdf/loma";
import Plotter from "../components/pdf/plotter";
import Remeras from "../components/pdf/remeras";
import Sellos from "../components/pdf/sellos";
import Talonarios from "../components/pdf/talonarios";
import Tarjetas from "../components/pdf/tarjetas";
import Varios from "../components/pdf/varios";
import Volantes from "../components/pdf/volantes";

export const pdfPedidos = {
  "loma": <Loma />,
  "impresiones": <Impresiones />,
  "talonarios": <Talonarios />,
  "bonos": <Bonos />,
  "disenos": <Disenos />,
  "plotter": <Plotter />,
  "remeras": <Remeras />,
  "tarjetas": <Tarjetas />,
  "volantes": <Volantes />,
  "sellos": <Sellos />,
  "varios": <Varios />
};