import React, { useContext } from 'react';
import { DatosOrdenTbjContext } from './datos-orden-tbj';
import { Impresiones, Loma } from './detalle-tbj/index';

const DetalleTbj = () => {
  const { tipoTrabajo } = useContext(DatosOrdenTbjContext);
  
  // En este objeto voy guardando los componentes de cada tipo de trabajo
  // Posteriormente voy a buscar dentro del objeto el tipo de trabajo que venga de DatosOrdenTbjContext
  const tiposTrabajo = {
    "Impresiones": <Impresiones />,
    "LOMA": <Loma />
  }
  
  // Muestro el tipo de trabajo elegido y el objeto con los tipos de trabajo
  console.log(
    tipoTrabajo,
    tiposTrabajo
  );

  return (
    <div>
      <h4>Detalle de Trabajo</h4>
      <Impresiones />
      <Loma />
    </div>
  );
}

export default DetalleTbj;
