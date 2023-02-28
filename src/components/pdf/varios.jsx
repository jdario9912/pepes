import React from 'react';
import { Page, Document, StyleSheet } from '@react-pdf/renderer';
import { estilosDocumento } from './estilos-documento';
import Cliente from './varios/cliente';
import Local from './varios/local';

const stylesDocument = StyleSheet.create(estilosDocumento);

const Varios = () => (
  <Document>
    <Page size="A4" style={stylesDocument.page}>
      <Cliente />
      <Local />
    </Page>
  </Document>
);

export default Varios;