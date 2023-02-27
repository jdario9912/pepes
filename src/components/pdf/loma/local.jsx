import React from 'react';
import { Text, View, StyleSheet, } from '@react-pdf/renderer';

const stylesLocal = StyleSheet.create({
  section: {
    borderColor: '#FF0090',
    borderWidth: 1,
    height: '50%',
  }
});

export const Local = () => (
  <View style={stylesLocal.section}>
    <View tipo y fecha>
      <View tipo nro orden></View>
      <View fecha hora></View>
    </View>
    <View atendido por cliente>
      <View empleado></View>
      <View cliete></View>
    </View>
    <View detalles></View>
    <View observaciones></View>
    <View detalle pago></View>
  </View>
);