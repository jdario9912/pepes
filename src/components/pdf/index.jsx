import React, { useEffect, createContext, useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { urlApi } from '../../services/url/url-api';
import { useParams } from 'react-router-dom';
import { pdfPedidos } from '../../models/pdf-pedidos-model';

export const PdfContext = createContext();

export const Index = () => {
  const { tipoTrabajo, nroOrden } = useParams();
  const [pedido, setPedido] = useState(null);

  useEffect(() => {
    fetch(urlApi + `/api/pedido/${ nroOrden }`)
      .then(res => res.json())
      .then(({ resultados }) => {
        setPedido(resultados);
      })
      .catch(e => console.log(e));
  }, []);

  useEffect(() => {
    setPedido(pedido);
  }, [pedido, tipoTrabajo]);

  return(
    <div className='pdf-container'>
      {
      pedido ? 
        <PDFViewer  DFViewer style={{ width: "100%", height: '100%', borderRadius: 5}}>
          <PdfContext.Provider value={{ pedido }}>
            { tipoTrabajo.length !== '' ? pdfPedidos[tipoTrabajo] : <div>No se especifico el tipo de pedido</div> }
          </PdfContext.Provider>
        </PDFViewer> :
        <span>Cargando documento...</span>
      }
    </div> 
  )
};