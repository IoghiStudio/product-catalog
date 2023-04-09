import React, { useState, useEffect } from 'react';
import './CartPage.scss';
import { Link } from 'react-router-dom';
import { ReactRoutes } from '../../types/reactRoutes';
import cn from 'classnames';
import { CartItem } from '../CartItem';
import { Phone } from '../../types/phone';
import { Loader } from '../Loader';

export const CartPage = () => {
  const [backButtonHover, setBackButtonHover] = useState(false);
  const [products, setProducts] = useState<Phone[]>([]);

  useEffect(() => {
    fetch('./product-catalog/phones.json')
      .then(response => response.json())
      .then(data => setProducts(data.slice(76, 80)));
  }, [])

  return (
    <div className='cart'>
      <Link
        to={ReactRoutes.Phones}
        className="cart__back"
        onMouseEnter={() => setBackButtonHover(true)}
        onMouseLeave={() => setBackButtonHover(false)}
      >
        <div
          className={cn(
            "cart__icon",
            "cart__icon--left-arrow",
            {
              "cart__icon--left-arrow--hover": backButtonHover
            }
          )}
        ></div>

        <div
          className={cn(
            "cart__back-text",
            {
              "cart__back-text--hover": backButtonHover
            }
          )}
        >
          Back
        </div>
      </Link>

      <h2 className="cart__title">
        Cart
      </h2>

      {products.length > 0 ? (
        products.map(product => (
          <CartItem
            product={product}
          />
        ))
      ) : (
        <Loader />
      )}
    </div>
  )
}