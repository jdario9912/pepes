import React from 'react';
import Enrutador from './enrutador';
import Header from './header';
import '../styles/app.css';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Enrutador />
    </div>
  );
}

export default App;
