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
import { ProductDetailsPage } from '../ProductDetailsPage';
import { ReactRoutes } from '../../types/reactRoutes';

export const App = () => {
  console.log('app rendered');

  return (
    <div id='top' className="app">
      <Header />

      <main className='app__main'>
        <Routes>
          <Route
            element={<HomePage />}
            path={ReactRoutes.Home}
          />

          <Route
            path="/home"
            element={
              <Navigate to={ReactRoutes.Home} replace/>
            }
          />

          <Route path={ReactRoutes.Phones}>
            <Route index element={<PhonesPage />}/>

            <Route
              path=":phoneId"
              element={
                <ProductDetailsPage />
              }
            />
          </Route>

          <Route
            path={ReactRoutes.Tablets}
            element={
              <TabletsPage />
            }
          />

          <Route
            path={ReactRoutes.Accessories}
            element={
              <AccessoriesPage />
            }
          />

          <Route
            path={ReactRoutes.Favorites}
            element={
              <FavoritesPage />
            }
          />

          <Route
            path={ReactRoutes.Favorites}
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
