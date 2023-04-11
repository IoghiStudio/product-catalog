import React, { useState, useEffect, useCallback } from 'react';
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
import { BurgerMenu } from '../BurgerMenu';

export const App = () => {
  const [cartItems, setCartItems] = useState<Phone[]>([]);
  const [favoriteItems, setFavoriteItems] = useState<Phone[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenu = useCallback(() => {
    setIsMenuOpen((state => !state));
  }, [])

  const clearCart = () => {
    setCartItems([]);
  }

  const removeFromCart = (phoneId: string) => {
    const items = cartItems.filter(item => item.phoneId !== phoneId);
    setCartItems(items);
  }

  const removeFromFavorites = (phoneId: string) => {
    const items = favoriteItems.filter(item => item.phoneId !== phoneId);
    setFavoriteItems(items);
    console.log('remove')
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

  const addToFavorites = (phoneId: string) => {
    // on real api, should fetch by ID , not getting all the phones like here
    fetch('./product-catalog/phones.json')
      .then(resp => resp.json())
      .then((data: Phone[]) => {
        const foundItem = data.find(item => item.phoneId === phoneId);

        if (foundItem) {
          setFavoriteItems((state) => [...state, foundItem])
          console.log('added')
        }
      })
  }

  return (
    <div id='top' className="app">
      <Header
        cartCount={cartItems.length}
        favCount={favoriteItems.length}
        handleMenu={handleMenu}
        isMenuOpen={isMenuOpen}
      />

      <main className='app__main'>
        {isMenuOpen ? (
          <BurgerMenu />
        ) : (
          <Routes>
            <Route
              element={
                <HomePage
                  cartItems={cartItems}
                  favoriteItems={favoriteItems}
                  onCartAdd={addToCart}
                  onFavoriteAdd={addToFavorites}
                  onFavoriteRemove={removeFromFavorites}
                />
              }
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
                    favoriteItems={favoriteItems}
                    onCartAdd={addToCart}
                    onFavoriteAdd={addToFavorites}
                    onFavoriteRemove={removeFromFavorites}
                  /> 
                }
              />

              <Route
                path=":phoneId"
                element={
                  <ProductDetailsPage
                    cartItems={cartItems}
                    favoriteItems={favoriteItems}
                    onCartAdd={addToCart}
                    onFavoriteAdd={addToFavorites}
                    onFavoriteRemove={removeFromFavorites}
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
                <FavoritesPage
                  favoriteItems={favoriteItems}
                  cartItems={cartItems}
                  onCartAdd={addToCart}
                  onFavoriteAdd={addToFavorites}
                  onFavoriteRemove={removeFromFavorites}
                />
              }
            />

            <Route
              path={ReactRoutes.Cart}
              element={
                <CartPage
                  clearCart={clearCart}
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
        )}
      </main>

      {!isMenuOpen && (
        <Footer />
      )}
    </div>
  );
}

export default App;
