import React from "react";
import { Page, Document, StyleSheet } from "@react-pdf/renderer";
import Cliente from "./loma/cliente";
import Local from "./loma/local";
import { estilosDocumento } from "./estilos-documento";

const stylesDocument = StyleSheet.create(estilosDocumento);

const Loma = () => (
  <Document>
    <Page size="A5" style={stylesDocument.page}>
      <Cliente />
    </Page>
    <Page size="A5" style={stylesDocument.page}>
      <Local />
    </Page>
  </Document>
);

export default Loma;
