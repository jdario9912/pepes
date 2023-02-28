import React, {useContext} from 'react';
import { Text, View, StyleSheet, } from '@react-pdf/renderer';
import { HeaderLocal } from '../components/header-footer/local/header';
import { Pago } from '../components/pedido/pago';
import { estilosLocal } from '../estilos-local';
import { PdfContext } from '..';

const estilos = StyleSheet.create(estilosLocal);

const Local = () => {
  const { pedido } = useContext(PdfContext);
  const { muestra, ubicacion_archivo, faz, tipo_papel, tamano_papel, orientacion, anillado, abrochado, corte, observaciones } = pedido;

  return (
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
              <View style={estilos.clave}><Text>Faz:</Text></View>
              <View style={estilos.valor}><Text>{faz}</Text></View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}><Text>Tipo papel:</Text></View>
              <View style={estilos.valor}><Text>{tipo_papel}</Text></View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}><Text>Tamaño:</Text></View>
              <View style={estilos.valor}><Text>{tamano_papel}</Text></View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}><Text>Orientación:</Text></View>
              <View style={estilos.valor}><Text>{orientacion}</Text></View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}><Text>Anillado:</Text></View>
              <View style={estilos.valor}><Text>{anillado}</Text></View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}><Text>Abrochado:</Text></View>
              <View style={estilos.valor}><Text>{abrochado}</Text></View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}><Text>Corte:</Text></View>
              <View style={estilos.valor}><Text>{corte}</Text></View>
            </View>
        </View>
  
        <View style={estilos.observaciones}>
          <Text>Observaciones: {observaciones}</Text>
        </View>
      </View>
      <Pago />
    </View>
  );
}

export default Local;
