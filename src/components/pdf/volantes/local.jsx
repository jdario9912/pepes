import React, {useContext} from 'react';
import { Text, View, StyleSheet, } from '@react-pdf/renderer';
import { HeaderLocal } from '../components/header-footer/local/header';
import { Pago } from '../components/pedido/pago';
import { estilosLocal } from '../estilos-local';
import { PdfContext } from '..';

const estilos = StyleSheet.create(estilosLocal);

const Local = () => {
  const { pedido } = useContext(PdfContext);
  const { muestra, tipo, cantidad, tamano, impresion, ubicacion_diseno, observaciones} = pedido;

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
            <View style={estilos.clave}><Text>Tipo:</Text></View>
            <View style={estilos.valor}><Text>{tipo}</Text></View>
          </View>
          <View style={estilos.fila}>
            <View style={estilos.clave}><Text>Tamaño:</Text></View>
            <View style={estilos.valor}><Text>{tamano}</Text></View>
          </View>
          <View style={estilos.fila}>
            <View style={estilos.clave}><Text>Cantidad:</Text></View>
            <View style={estilos.valor}><Text>{cantidad}</Text></View>
          </View>
          <View style={estilos.fila}>
            <View style={estilos.clave}><Text>Impreción:</Text></View>
            <View style={estilos.valor}><Text>{impresion}</Text></View>
          </View>
          <View style={estilos.fila}>
            <View style={estilos.clave}><Text>Ubicación diseño:</Text></View>
            <View style={estilos.valor}><Text>{ubicacion_diseno}</Text></View>
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