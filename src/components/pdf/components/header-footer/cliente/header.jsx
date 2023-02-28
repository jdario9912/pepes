import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { imagenes } from './imagenes';
import { estilosHeader } from './estilos-header';
import { PdfContext } from '../../..';

const { logo } = imagenes;
const empleado = localStorage.getItem('usuario-actual');
const estilos = StyleSheet.create(estilosHeader);

export const HeaderCliente = () => {
  const { pedido } = useContext(PdfContext);
  const { nombre, nro_orden, tipo_trabajo, fecha_entrega, hora_entrega } = pedido;

  return(
    <View style={ estilos.container}>
      <View style={ estilos.header}>
        <Image style={estilos.logo} src={ logo } />
        <View style={estilos.titulo}>
          <View style={estilos.nombre}>
            <Text>Cliente: {nombre}</Text>
          </View>
          <Text>Orden n°: {nro_orden}</Text>
          <Text>Tipo: {tipo_trabajo}</Text>
        </View>
      </View>
      <View style={estilos.entrega}>
        <Text>Atendido por: <Text style={estilos.empleado}>{empleado}</Text></Text>
        <Text>Retirar el {fecha_entrega} a las {hora_entrega}hs</Text>
      </View>
    </View>
  )
};