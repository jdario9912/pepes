import React from 'react';

const DatosCliente = ({ props }) => {
  return (
    <div>
      <h3>Datos del cliente</h3>
      <p>Nombre: { props.nombre }</p>
      <p>Teléfono: { props.telefono }</p>
      <p>e-mail: { props.email }</p>
      <p>Observaciones: { props.observaciones }</p>
    </div>
  );
}

export default DatosCliente;
