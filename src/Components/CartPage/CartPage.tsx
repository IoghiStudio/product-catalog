import React, { useState } from 'react';
import './CartPage.scss';
import { Link } from 'react-router-dom';
import { ReactRoutes } from '../../types/reactRoutes';
import cn from 'classnames';
import { CartItem } from '../CartItem';

export const CartPage = () => {
  const [backButtonHover, setBackButtonHover] = useState(false);

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

      <CartItem />
    </div>
  )
}