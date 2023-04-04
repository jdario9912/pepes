import React, { useContext } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { HeaderLocal } from "../components/header-footer/local/header";
import { Pago } from "../components/pedido/pago";
import { estilosLocal } from "../estilos-local";
import { PdfContext } from "..";

const estilos = StyleSheet.create(estilosLocal);

const Local = () => {
  const { pedido } = useContext(PdfContext);
  const {
    muestra,
    ubicacion_archivo,
    tamano,
    color,
    material,
    terminacion,
    observaciones,
  } = pedido;

  return (
    <View style={estilos.section}>
      <HeaderLocal />
      <View style={estilos.body}>
        <View style={estilos.separarFilas}>
          <View style={estilos.filas}>
            <View style={estilos.fila}>
              <View style={estilos.clave}>
                <Text>Muestra:</Text>
              </View>
              <View style={estilos.valor}>
                <Text>{muestra}</Text>
              </View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}>
                <Text>Ubicacion archivo:</Text>
              </View>
              <View style={estilos.valor}>
                <Text>{ubicacion_archivo}</Text>
              </View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}>
                <Text>Tamaño:</Text>
              </View>
              <View style={estilos.valor}>
                <Text>{tamano}</Text>
              </View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}>
                <Text>Color:</Text>
              </View>
              <View style={estilos.valor}>
                <Text>{color}</Text>
              </View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}>
                <Text>Material:</Text>
              </View>
              <View style={estilos.valor}>
                <Text>{material}</Text>
              </View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}>
                <Text>Terminación:</Text>
              </View>
              <View style={estilos.valor}>
                <Text>{terminacion}</Text>
              </View>
            </View>
          </View>
          <View style={estilos.observaciones}>
            <Text>Observaciones: {observaciones}</Text>
          </View>
        </View>
        <Pago />
      </View>
    </View>
  );
};

export default Local;
