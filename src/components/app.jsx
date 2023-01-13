import React from 'react';
import Enrutador from './enrutador';
import Header from './header';
import Footer from './footer';
import '../styles/app.css';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Enrutador />
      <Footer />
    </div>
  );
}

export default App;
