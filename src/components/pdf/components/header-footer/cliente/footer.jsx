import React from 'react';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { estilosFooter } from './estilos-footer';
import { imagenes } from './imagenes';

const { whatsappLogo } = imagenes;
const estilos = StyleSheet.create(estilosFooter);

export const FooterCliente = () => (
  <View style={estilos.footer}>
    <Text>Horario de Lunes a Viernes de 9:00hs a 13:00hs y de 16:00hs a 19:50hs</Text>
    <Text>Av. Bodereau 2249 - Villa Allende - Tel: (0351)431555</Text>
    <View style={ estilos.contacto }>
      <Image src={ whatsappLogo } style={ estilos.logoWhatsapp} />
      <Text> 351 8179939 (solo mensajes) - pepoquevedo@gmail.com</Text>
    </View>
  </View>
);
