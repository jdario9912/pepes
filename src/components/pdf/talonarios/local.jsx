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
    tipo,
    cantidad,
    tamano,
    modelo_anterior,
    tiene_logo,
    ubicacion_logo,
    numero_desde,
    puntillado_emblocado,
    color_duplicado,
    triplicado,
    color_triplicado,
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
                <Text>Tipo:</Text>
              </View>
              <View style={estilos.valor}>
                <Text>{tipo}</Text>
              </View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}>
                <Text>Cantidad:</Text>
              </View>
              <View style={estilos.valor}>
                <Text>{cantidad}</Text>
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
                <Text>Modelo anterior:</Text>
              </View>
              <View style={estilos.valor}>
                <Text>{modelo_anterior}</Text>
              </View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}>
                <Text>Tiene logo:</Text>
              </View>
              <View style={estilos.valor}>
                <Text>{tiene_logo}</Text>
              </View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}>
                <Text>Ubicación logo:</Text>
              </View>
              <View style={estilos.valor}>
                <Text>{ubicacion_logo}</Text>
              </View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}>
                <Text>Nro. desde:</Text>
              </View>
              <View style={estilos.valor}>
                <Text>{numero_desde}</Text>
              </View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}>
                <Text>Puntillado-emblocado:</Text>
              </View>
              <View style={estilos.valor}>
                <Text>{puntillado_emblocado}</Text>
              </View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}>
                <Text>Color duplicado:</Text>
              </View>
              <View style={estilos.valor}>
                <Text>{color_duplicado}</Text>
              </View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}>
                <Text>Triplicado:</Text>
              </View>
              <View style={estilos.valor}>
                <Text>{triplicado}</Text>
              </View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}>
                <Text>Color triplicado:</Text>
              </View>
              <View style={estilos.valor}>
                <Text>{color_triplicado}</Text>
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
