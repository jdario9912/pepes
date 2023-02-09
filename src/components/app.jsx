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
  const [toogleNav, setToogleNav] = useState(false);

  useEffect(() => {
    setUsuarioLogeado(JSON.parse(localStorage.getItem('usuario-logeado')));
  }, []);

  const handleClick = () => {
    if(toogleNav)
      setToogleNav(false);
  }

  if (usuarioLogeado) {
    return (
      <AppContext.Provider value={{ 
        setUsuarioLogeado, 
        setToogleNav,
        toogleNav,
      }}>
        <div className='app' onClick={ handleClick }>
          <Header />
          <Enrutador />
        </div>
      </AppContext.Provider>
    );  
  } else {
    return(
      <AppContext.Provider value={{ setUsuarioLogeado }}>
        <BienvenidaComp />
      </AppContext.Provider>
    )
  }
}

export default App;
