import React from 'react';
import { Page, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import { Cliente } from './loma/cliente';
import { Local } from './loma/local';

// Create styles
const stylesDocument = StyleSheet.create({
  page: {
    flexDirection: 'column',
    height: '100%',
    fontSize: 10,
    padding: 10
  }
});

// Create Document Component
const Loma = () => (
  <Document>
    <Page size="A4" style={stylesDocument.page}>
      <Cliente />
      <Local />
    </Page>
  </Document>
);

export const LomaPdf = () => (
  <PDFViewer style={{ width: "100%"}}>
    <Loma />
  </PDFViewer>
);