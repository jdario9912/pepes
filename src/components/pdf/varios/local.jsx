import React, {useContext} from 'react';
import { Text, View, StyleSheet, } from '@react-pdf/renderer';
import { HeaderLocal } from '../components/header-footer/local/header';
import { Pago } from '../components/pedido/pago';
import { estilosLocal } from '../estilos-local';
import { PdfContext } from '..';

const estilos = StyleSheet.create(estilosLocal);

const Local = () => {
  const { pedido } = useContext(PdfContext);
  const { muestra, detalle, observaciones} = pedido;

  return(
    <View style={estilos.section}>
      <HeaderLocal />
      <View style={estilos.separarFilas}>
        <View style={estilos.filas}>
          <View style={estilos.fila}>
            <View style={estilos.clave}><Text>Muestra:</Text></View>
            <View style={estilos.valor}><Text>{muestra}</Text></View>
          </View>
          <View style={estilos.fila}>
            <View style={estilos.clave}><Text>Detalle:</Text></View>
            <View style={estilos.valor}><Text>{detalle}</Text></View>
          </View>
        </View>
        <View style={estilos.observaciones}>
          <Text>Observaciones: {observaciones}</Text>
        </View>
      </View>
      <Pago />
    </View>
  )
};

export default Local;