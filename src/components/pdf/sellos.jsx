import React from "react";
import { Page, Document, StyleSheet } from "@react-pdf/renderer";
import { estilosDocumento } from "./estilos-documento";
import Cliente from "./sellos/cliente";
import Local from "./sellos/local";

const stylesDocument = StyleSheet.create(estilosDocumento);

const Sellos = () => (
  <Document>
    <Page size="A5" style={stylesDocument.page}>
      <Cliente />
    </Page>
    <Page size="A5" style={stylesDocument.page}>
      <Local />
    </Page>
  </Document>
);

export default Sellos;
