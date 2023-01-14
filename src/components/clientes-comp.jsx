import React from 'react';

const Clientes = () => {
  return (
    <div>
      <p>Clientes</p>
      <div><button>Nuevo Cliente</button><button>Ver Lista Clientes</button></div>
      <div>
        <label htmlFor="">
          Nombre
          <input type="text" />
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Apellido</th>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Celular</th>
            <th>Mail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>Quevedo</td>
            <td>Pepo</td>
            <td>29938466</td>
            <td>03481</td>
            <td>pepo@gmail</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Clientes;
