import React, { useContext } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { HeaderCliente } from '../components/header-footer/cliente/header';
import { FooterCliente } from '../components/header-footer/cliente/footer';
import { Pago } from '../components/pedido/pago';
import { estilosCliente } from '../estilos-cliente';
import { PdfContext } from '..';

const estilos = StyleSheet.create(estilosCliente);

const Cliente = () => {
  const { pedido } = useContext(PdfContext);
  const { muestra, tipo, tamano, desde_numero, cantidad, numeradores, lotes, observaciones } = pedido;

  return (
    <View style={estilos.section}>
      <HeaderCliente />
      <View style={estilos.pedido}>
        <View style={estilos.items}>
          <View style={estilos.filas}>
            <View style={estilos.fila}>
              <View style={estilos.clave}><Text>Muestra:</Text></View>
              <View style={estilos.valor}><Text>{muestra}</Text></View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}><Text>Tipo:</Text></View>
              <View style={estilos.valor}><Text>{tipo}</Text></View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}><Text>Tamaño:</Text></View>
              <View style={estilos.valor}><Text>{tamano}</Text></View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}><Text>Desde número:</Text></View>
              <View style={estilos.valor}><Text>{desde_numero}</Text></View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}><Text>Cantidad:</Text></View>
              <View style={estilos.valor}><Text>{cantidad}</Text></View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}><Text>Numeradores:</Text></View>
              <View style={estilos.valor}><Text>{numeradores}</Text></View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}><Text>En lotes de:</Text></View>
              <View style={estilos.valor}><Text>{lotes}</Text></View>
            </View>
          </View>
          <View style={estilos.observaciones}>
            <Text>Observaciones: {observaciones}.</Text>
          </View>
        </View>
        <Pago />
      </View>
      <FooterCliente />
    </View>
  );
}

export default Cliente;
