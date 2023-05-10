import React, { useContext } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { estilosPago } from "./estilos-pago";
import { PdfContext } from "../..";

const estilos = StyleSheet.create(estilosPago);

export const Pago = () => {
  const { pedido } = useContext(PdfContext);
  const { total, entrega, abono } = pedido;
  return (
    <View style={estilos.pago}>
      <View style={estilos.cuadricula1}>
        <View style={estilos.cuadricula2}>
          <Text style={estilos.texto}>Total</Text>
        </View>
        <View style={estilos.cuadricula3}>
          <Text style={estilos.importe}>$ {total}</Text>
          <Text>{" "}</Text>
        </View>
      </View>
      <View style={estilos.cuadricula1}>
        <View style={estilos.cuadricula2}>
          <Text style={estilos.texto}>Entrega </Text>
        </View>
        <View style={estilos.cuadricula3}>
          <Text style={estilos.importe}>$ {entrega}</Text>
          <Text>{abono}</Text>
        </View>
      </View>
      <View style={estilos.cuadricula1}>
        <View style={estilos.cuadricula2}>
          <Text style={estilos.texto}>Saldo</Text>
        </View>
        <View style={estilos.cuadricula3}>
          <Text style={estilos.importe}>$ {total - entrega}</Text>
          <Text>{" "}</Text>
        </View>
      </View>
    </View>
  );
};
