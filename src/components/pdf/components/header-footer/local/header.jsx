import React, { useContext } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { estilosHeader } from './estilos-header';
import { PdfContext } from '../../..';

const empleado = localStorage.getItem('usuario-actual');
const estilos = StyleSheet.create(estilosHeader);

export const HeaderLocal = () => {
  const { pedido } = useContext(PdfContext);
  const { nro_orden, tipo_trabajo, fecha_entrega, hora_entrega, fecha_creacion, nombre, telefono, email } = pedido;
  return(
    <View style={estilos.container}>
      <View style={estilos.header}>
        <View style={estilos.separarFilas}>
          <Text>Pedido:</Text>
          <Text style={estilos.tipo}>{tipo_trabajo}</Text>
          <Text>n°: {nro_orden}</Text>
        </View>
        <View style={estilos.separarFilas}>
          <Text>Entregar:</Text>
          <Text style={estilos.fecha}>{fecha_entrega}</Text>
          <Text>{hora_entrega}hs</Text>
        </View>
      </View>
      <View style={estilos.atendido}>
        <View style={estilos.separarFilas}>
          <Text>Atendido por: <Text style={estilos.empleado}>{empleado}</Text></Text>
          <Text>Creado: {fecha_creacion}</Text>
        </View>
        <View style={estilos.separarFilas}>
          <Text>Cliente: {nombre}</Text>
          <Text>Email: {email}</Text>
          <Text>Tel: {telefono}</Text>
        </View>
      </View>
    </View>
  )
};