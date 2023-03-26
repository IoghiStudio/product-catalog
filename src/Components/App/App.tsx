import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import './App.scss';

export const App = () => {
  return (
    <div id='top' className="App">
      <Header />

      <Footer />
    </div>
  );
}

export default App;
