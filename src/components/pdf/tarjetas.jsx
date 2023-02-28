import React from 'react';
import { Page, Document, StyleSheet } from '@react-pdf/renderer';
import { estilosDocumento } from './estilos-documento';
import Cliente from './tarjetas/cliente';
import Local from './tarjetas/local';

const stylesDocument = StyleSheet.create(estilosDocumento);

const Tarjetas = () => (
  <Document>
    <Page size="A4" style={stylesDocument.page}>
      <Cliente />
      <Local />
    </Page>
  </Document>
);

export default Tarjetas;