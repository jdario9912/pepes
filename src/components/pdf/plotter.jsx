import React from 'react';
import { Page, Document, StyleSheet } from '@react-pdf/renderer';
import { estilosDocumento } from './estilos-documento';
import Cliente from './plotter/cliente';
import Local from './plotter/local';

const stylesDocument = StyleSheet.create(estilosDocumento);

const Plotter = () => (
  <Document>
    <Page size="A4" style={stylesDocument.page}>
      <Cliente />
      <Local />
    </Page>
  </Document>
);

export default Plotter;