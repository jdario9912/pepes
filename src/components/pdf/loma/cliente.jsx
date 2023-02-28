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
  const { muestra, ubicacion_archivo, material, orientacion, bolsillo, corte, ojales, troquelado, portabaner, observaciones} = pedido;

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
              <View style={estilos.clave}><Text>Ubicacion archivo:</Text></View>
              <View style={estilos.valor}><Text>{ubicacion_archivo}</Text></View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}><Text>Material</Text></View>
              <View style={estilos.valor}><Text>{material}</Text></View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}><Text>Orientacion</Text></View>
              <View style={estilos.valor}><Text>{orientacion}</Text></View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}><Text>Bolsillo</Text></View>
              <View style={estilos.valor}><Text>{bolsillo}</Text></View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}><Text>Corte</Text></View>
              <View style={estilos.valor}><Text>{corte}</Text></View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}><Text>Ojales</Text></View>
              <View style={estilos.valor}><Text>{ojales}</Text></View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}><Text>Troquelado</Text></View>
              <View style={estilos.valor}><Text>{troquelado}</Text></View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}><Text>Portabaner</Text></View>
              <View style={estilos.valor}><Text>{portabaner}</Text></View>
            </View>
          </View>
          <View style={estilos.observaciones}>
            <Text><Text style={estilos.subrayado}>Observaciones:</Text>{observaciones}.</Text>
          </View>
        </View>
        <Pago />
      </View>
      <FooterCliente />
    </View>
  )
};

export default Cliente;