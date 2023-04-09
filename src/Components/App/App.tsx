import React, { useState, useEffect } from 'react';
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
import { Phone } from '../../types/phone';

export const App = () => {
  const [cartItems, setCartItems] = useState<Phone[]>([]);
  const [favoriteItems, seFavoriteItems] = useState<Phone[]>([]);

  useEffect(() => {
    
  }, [])

  const removeFromCart = (phoneId: string) => {
    const items = cartItems.filter(item => item.phoneId !== phoneId);
    setCartItems(items);
  }

  const addToCart = (phoneId: string) => {
    // on real api, should fetch by ID , not getting all the phones like here
    fetch('./product-catalog/phones.json')
      .then(resp => resp.json())
      .then((data: Phone[]) => {
        const foundItem = data.find(item => item.phoneId === phoneId);

        if (foundItem) {
          setCartItems((state) => [...state, foundItem])
        }
      })
  }

  return (
    <div id='top' className="app">
      <Header />

      <main className='app__main'>
        <Routes>
          <Route
            element={<HomePage cartItems={cartItems} onAdd={addToCart}/>}
            path={ReactRoutes.Home}
          />

          <Route
            path="/home"
            element={
              <Navigate to={ReactRoutes.Home} replace/>
            }
          />

          <Route path={ReactRoutes.Phones}>
            <Route
              index
              element={
                <PhonesPage 
                  cartItems={cartItems} 
                  onAdd={addToCart}
                /> 
              }
            />

            <Route
              path=":phoneId"
              element={
                <ProductDetailsPage
                  onAdd={addToCart}
                  cartItems={cartItems}
                />
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
            path={ReactRoutes.Cart}
            element={
              <CartPage
                products={cartItems}
                onRemove={removeFromCart}
              />
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
