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
  const { muestra, ubicacion_archivo, tipo, cantidad, papel, terminacion, puntas_redondeadas, observaciones} = pedido;

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
              <View style={estilos.clave}><Text>Ubicación archivo:</Text></View>
              <View style={estilos.valor}><Text>{ubicacion_archivo}</Text></View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}><Text>Tipo:</Text></View>
              <View style={estilos.valor}><Text>{tipo}</Text></View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}><Text>Cantidad:</Text></View>
              <View style={estilos.valor}><Text>{cantidad}</Text></View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}><Text>Papel:</Text></View>
              <View style={estilos.valor}><Text>{papel}</Text></View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}><Text>Terminación:</Text></View>
              <View style={estilos.valor}><Text>{terminacion}</Text></View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}><Text>Puntas redondeadas:</Text></View>
              <View style={estilos.valor}><Text>{puntas_redondeadas}</Text></View>
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