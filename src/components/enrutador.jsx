import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  Inicio,
  AgregarCliente,
  NuevaOrden,
  NotFound,
  OrdenesPendientes,
  OpcionesAdmin,
  Clientes,
  OrdenesCliente,
  EditarCliente,
  EnviadosProveedor,
  EliminarCliente
} from "../pages";
import EditarOrden from "./comp-pages/editar-orden-comp";
import { Index } from "./pdf";

const EnrutadorComp = () => {
  const permisos = JSON.parse(localStorage.getItem("permisos"));
  
  return (
    <Routes>
      <Route path="/" element={<Inicio />}>
        <Route path="ordenes-pendientes" element={<OrdenesPendientes />} />
        <Route path="enviados-proveedor" element={<EnviadosProveedor />} />
        <Route path="nuevo-cliente" element={<AgregarCliente />} />
        <Route path="nueva-orden/:idCliente" element={<NuevaOrden />} />
        <Route
          path="editar-orden/:pedido/:idCliente/:nombre/:nroOrden"
          element={<EditarOrden />}
        />
        <Route
          path="opciones-admin"
          element={
            permisos ? <OpcionesAdmin /> : <Navigate to="/" replace={true} />
          }
        />
        <Route path="clientes" element={<Clientes />} />
        <Route
          path="ordenes-cliente/:id/:nombre"
          element={<OrdenesCliente />}
        />
        <Route path="editar-cliente/:id" element={<EditarCliente />} />
        <Route path="eliminar-cliente/:id/:nombre" element={<EliminarCliente />} />
      </Route>
      <Route path="/pdf/:tipoTrabajo/:nroOrden" element={<Index />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default EnrutadorComp;
