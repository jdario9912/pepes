import React, {useEffect, useState, createContext} from 'react';
import InfoCliente from './nueva-orden-tbj-comp/info-cliente';
import '../../styles/nueva-orden-tbj-comp.css';
import {useParams} from 'react-router-dom';
import {urlApi} from '../../services/url/url-api';
import TipoTrabajo from './nueva-orden-tbj-comp/tipo-trabajo';
import DetalleTbj from './nueva-orden-tbj-comp/detalle-tbj';
export const NuevaOrdenTbjCompContext = createContext ();

const NuevaOrdenTbjComp = () => {
  const {idCliente} = useParams();
  const [clienteS, setClienteS] = useState ({});
  const [tipoTrabajo, setTipoTrabajo] = useState ('');
  const [verBotonesTipoTrabajo, setVerBotonesTipoTrabajo] = useState (true);

  const reelegirTrabajo = () => {
    setVerBotonesTipoTrabajo (true);
    setTipoTrabajo ('');
  };

  useEffect (() => {
    fetch (urlApi + `/api/clientes/${idCliente}`)
      .then (res => res.json ())
      .then (({ok, cliente}) => {
        if (ok) {
          setClienteS (cliente);
        }
      });
  }, []);

  return (
    <NuevaOrdenTbjCompContext.Provider
      value={{setTipoTrabajo, tipoTrabajo, setVerBotonesTipoTrabajo, clienteS}}
    >
      <div className="nueva-orden-tbj-comp--container">
        <InfoCliente props={clienteS} />
        {verBotonesTipoTrabajo ? <TipoTrabajo accion={setTipoTrabajo} /> : null}
        {!verBotonesTipoTrabajo
          ? <button onClick={reelegirTrabajo}>Reelegir trabajo</button>
          : null}
        <DetalleTbj />
      </div>
    </NuevaOrdenTbjCompContext.Provider>
  );
};

export default NuevaOrdenTbjComp;
