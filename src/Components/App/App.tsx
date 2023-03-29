import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Routes, Route, Navigate} from 'react-router-dom';
import './App.scss';
import { HomePage } from '../HomePage';
import { PhonesPage } from '../PhonesPage';
import { TabletsPage } from '../TabletsPage';
import { AccessoriesPage } from '../AccessoriesPage';
import { CartPage } from '../CartPage';
import { FavoritesPage } from '../FavoritesPage';
import { NotFoundPage } from '../NotFoundPage';

export const App = () => {
  return (
    <div id='top' className="app">
      <Header />

      <main className='app__main'>
        <Routes>
          <Route
            element={<HomePage />}
            path="/"
          />

          <Route
            path="/home"
            element={
              <Navigate to="/" replace/>
            }
          />

          <Route
            path="/phones"
            element={
              <PhonesPage />
            }
          />

          <Route
            path="/tablets"
            element={
              <TabletsPage />
            }
          />

          <Route
            path="/accessories"
            element={
              <AccessoriesPage />
            }
          />

          <Route
            path="/favorites"
            element={
              <FavoritesPage />
            }
          />

          <Route
            path="/cart"
            element={
              <CartPage />
            }
          />

          <Route
            element={<NotFoundPage />}
            path='*'
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
