import React, { 
  useState, 
  createContext,
  useEffect
} from 'react';
import Enrutador from './enrutador';
import Header from './header';
import '../styles/app.css';
import BienvenidaComp from './comp-pages/bienvenida-comp';

export const AppContext = createContext();

const App = () => {
  const [usuarioLogeado, setUsuarioLogeado] = useState(false);
  const [usuarioActual, setUsuarioActual] = useState('');

  useEffect(() => {
    setUsuarioLogeado(JSON.parse(localStorage.getItem('usuario-logeado')));
    setUsuarioActual(localStorage.getItem('usuario-actual'));
  }, []);

  if (usuarioLogeado) {
    return (
      <AppContext.Provider value={{ setUsuarioLogeado, usuarioActual, setUsuarioActual }}>
        <div className='app'>
          <Header />
          <Enrutador />
        </div>
      </AppContext.Provider>
    );  
  } else {
    return(
      <AppContext.Provider value={{ setUsuarioLogeado, setUsuarioActual }}>
        <BienvenidaComp />
      </AppContext.Provider>
    )
  }
}

export default App;
