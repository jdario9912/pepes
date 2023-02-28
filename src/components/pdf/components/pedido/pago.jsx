import React, { useContext } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { estilosPago } from './estilos-pago';
import { PdfContext } from '../..';

const estilos = StyleSheet.create(estilosPago);

export const Pago = () => {
  const { pedido } = useContext(PdfContext);
  const { total, entrega } = pedido;
  return(
    <View style={estilos.pago}>
      <Text>Total: <Text style={estilos.importe}>${total}</Text></Text>
      <Text>Entrega: <Text style={estilos.importe}>${entrega}</Text></Text>
      <Text>Saldo: <Text style={estilos.importe}>${total - entrega}</Text></Text>
    </View>
  )
  };