import React, {useContext} from 'react';
import { Text, View, StyleSheet, } from '@react-pdf/renderer';
import { HeaderLocal } from '../components/header-footer/local/header';
import { Pago } from '../components/pedido/pago';
import { estilosLocal } from '../estilos-local';
import { PdfContext } from '..';

const estilos = StyleSheet.create(estilosLocal);

const Local = () => {
  const { pedido } = useContext(PdfContext);
  const { muestra, ubicacion_archivo, talles, color, estampa_pecho, estampa_espalda, color_estampa, cantidad, observaciones} = pedido;

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
            <View style={estilos.clave}><Text>Ubicacion archivo:</Text></View>
            <View style={estilos.valor}><Text>{ubicacion_archivo}</Text></View>
          </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}><Text>Talles:</Text></View>
              <View style={estilos.valor}><Text>{talles}</Text></View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}><Text>Color:</Text></View>
              <View style={estilos.valor}><Text>{color}</Text></View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}><Text>Estampa pecho:</Text></View>
              <View style={estilos.valor}><Text>{estampa_pecho}</Text></View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}><Text>Estampa espalda:</Text></View>
              <View style={estilos.valor}><Text>{estampa_espalda}</Text></View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}><Text>Color estampa:</Text></View>
              <View style={estilos.valor}><Text>{color_estampa}</Text></View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}><Text>Cantidad:</Text></View>
              <View style={estilos.valor}><Text>{cantidad}</Text></View>
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