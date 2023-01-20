import React, { useState, createContext } from 'react';
import Enrutador from './enrutador';
import Header from './header';
import '../styles/app.css';
import BienvenidaComp from './comp-pages/bienvenida-comp';

export const AppContext = createContext();

const App = () => {
  const [usuarioLogeado, setUsuarioLogeado] = useState(true);
  if (usuarioLogeado) {
    return (
      <AppContext.Provider value={{ setUsuarioLogeado }}>
        <div className='app'>
          <Header />
          <Enrutador />
        </div>
      </AppContext.Provider>
    );  
  } else {
    return(
      <BienvenidaComp />
    )
  }
}

export default App;
