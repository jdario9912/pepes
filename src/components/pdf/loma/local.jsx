import React from 'react';
import { Text, View, StyleSheet, } from '@react-pdf/renderer';

const empleado = localStorage.getItem('usuario-actual');

const stylesLocal = StyleSheet.create({
  section: {
    height: '50%',
  },
  borde: {
    border: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    border: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  atendido: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    border: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  filas: {
    gap: 3,
    flexDirection: 'column',
    width: '100%',
    border: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  fila: {
    flexDirection: 'row',
    padding: 1
  },
  clave: {
    width: '50%',
  },
  valor: {
    width: '50%',
  },
  observaciones: {
    width: '100%',
    border: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  pago: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 5
  },
  importe: {
    fontSize: 15
  },
});

export const Local = () => (
  <View style={stylesLocal.section}>
    <View style={stylesLocal.header}>
      <View tipo nro orden>
        <Text>Solventes</Text>
        <Text>Orden n°: 230213</Text>
      </View>
      <View fecha hora>
        <Text>3/03/2023</Text>
        <Text>19:00hs</Text>
      </View>
    </View>
    <View style={stylesLocal.atendido}>
      <View>
        <Text>Atendido por: {empleado}</Text>
        <Text>Creado: 27/02/2023</Text>
      </View>
      <View cliete>
        <Text>Cliente: McDonals Even Van Persei Haland</Text>
        <Text>Tel: 351-454647</Text>
        <Text>Email: mcdonals@gmail.com</Text>
      </View>
    </View>
    <View>

      <View style={stylesLocal.filas}>
        <View style={stylesLocal.fila}>
          <View style={stylesLocal.clave}><Text>Muestra:</Text></View>
          <View style={stylesLocal.valor}><Text>Si</Text></View>
        </View>
        <View style={stylesLocal.fila}>
          <View style={stylesLocal.clave}><Text>Ubicacion archivo:</Text></View>
          <View style={stylesLocal.valor}><Text>pc3Lorem ipsum dolor sit amet consectetur adipiscing elit interdum neque</Text></View>
        </View>
        <View style={stylesLocal.fila}>
          <View style={stylesLocal.clave}><Text>Material</Text></View>
          <View style={stylesLocal.valor}><Text>Vinilo Brillo</Text></View>
        </View>
        <View style={stylesLocal.fila}>
          <View style={stylesLocal.clave}><Text>Orientacion</Text></View>
          <View style={stylesLocal.valor}><Text>Horizontal</Text></View>
        </View>
        <View style={stylesLocal.fila}>
          <View style={stylesLocal.clave}><Text>Bolsillo</Text></View>
          <View style={stylesLocal.valor}><Text>Si</Text></View>
        </View>
        <View style={stylesLocal.fila}>
          <View style={stylesLocal.clave}><Text>Corte</Text></View>
          <View style={stylesLocal.valor}><Text>No</Text></View>
        </View>
        <View style={stylesLocal.fila}>
          <View style={stylesLocal.clave}><Text>Ojales</Text></View>
          <View style={stylesLocal.valor}><Text>Si</Text></View>
        </View>
        <View style={stylesLocal.fila}>
          <View style={stylesLocal.clave}><Text>Troquelado</Text></View>
          <View style={stylesLocal.valor}><Text>Si</Text></View>
        </View>
        <View style={stylesLocal.fila}>
          <View style={stylesLocal.clave}><Text>Portabaner</Text></View>
          <View style={stylesLocal.valor}><Text>Si</Text></View>
        </View>
      </View>

      <View style={stylesLocal.observaciones}>
        <Text>Observaciones: Lorem ipsum dolor sit amet consectetur adipiscing elit interdum neque vivamus, curabitur viverra nulla phasellus cum pulvinar habitant vitae metus conubia integer, sollicitudin enim platea dictum nam mauris nibh massa elementum. Ante consequat posuere pulvinar scelerisque et ut primis nisi sodales, leo turpis curae tellus laoreet at sem gravida vehicula netus, ligula suspendisse ornare etiam vivamus hendrerit tempus risus.</Text>
      </View>
    </View>
    <View style={stylesLocal.pago}>
      <Text>Total: <Text style={stylesLocal.importe}>$2000</Text></Text>
      <Text>Entrega: <Text style={stylesLocal.importe}>$1500</Text></Text>
      <Text>Saldo: <Text style={stylesLocal.importe}>$500</Text></Text>
    </View>
  </View>
);