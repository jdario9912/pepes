import React from "react";
import { Page, Document, StyleSheet } from "@react-pdf/renderer";
import { estilosDocumento } from "./estilos-documento";
import Cliente from "./bonos/cliente";
import Local from "./bonos/local";

const stylesDocument = StyleSheet.create(estilosDocumento);

const Bonos = () => (
  <Document>
    <Page size="A5" style={stylesDocument.page}>
      <Cliente />
    </Page>
    <Page size="A5" style={stylesDocument.page}>
      <Local />
    </Page>
  </Document>
);

export default Bonos;
