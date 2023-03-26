import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import './App.scss';

export const App = () => {
  return (
    <div id='top' className="App">
      <Header />
      <menu className='menu'></menu>
      <Footer />
    </div>
  );
}

export default App;
