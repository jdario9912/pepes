import React from 'react';
import { Page, Document, StyleSheet } from '@react-pdf/renderer';
import Cliente from './loma/cliente';
import Local from './loma/local';
import { estilosDocumento } from './estilos-documento';

const stylesDocument = StyleSheet.create(estilosDocumento);

const Loma = () => (
  <Document>
    <Page size="A4" style={stylesDocument.page}>
      <Cliente />
      <Local />
    </Page>
  </Document>
);

export default Loma;