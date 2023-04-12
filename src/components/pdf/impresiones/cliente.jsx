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
  const { muestra, impresion, ubicacion_archivo, faz, tipo_papel, tamano_papel, orientacion, anillado, abrochado, corte, observaciones } = pedido;

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
              <View style={estilos.clave}><Text>Impresión:</Text></View>
              <View style={estilos.valor}><Text>{impresion}</Text></View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}><Text>Ubicación archivo:</Text></View>
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
