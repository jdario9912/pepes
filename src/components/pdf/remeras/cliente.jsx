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
  const { muestra, ubicacion_archivo, talles, color, estampa_pecho, estampa_espalda, ojales, colo_estampa, cantidad, observaciones} = pedido;

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
              <View style={estilos.clave}><Text>Ojales</Text></View>
              <View style={estilos.valor}><Text>{ojales}</Text></View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}><Text>Color estampa:</Text></View>
              <View style={estilos.valor}><Text>{colo_estampa}</Text></View>
            </View>
            <View style={estilos.fila}>
              <View style={estilos.clave}><Text>Cantidad:</Text></View>
              <View style={estilos.valor}><Text>{cantidad}</Text></View>
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