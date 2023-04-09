import React, { useState, useEffect } from 'react';
import './CartPage.scss';
import { Link } from 'react-router-dom';
import { ReactRoutes } from '../../types/reactRoutes';
import cn from 'classnames';
import { CartItem } from '../CartItem';
import { Phone } from '../../types/phone';
import { Loader } from '../Loader';
import { CartList } from '../CartList';
import { Button } from '../Button';
import { Sizes } from '../../types/sizes';

export const CartPage = () => {
  const [backButtonHover, setBackButtonHover] = useState(false);
  const [products, setProducts] = useState<Phone[]>([]);
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch('./product-catalog/phones.json')
      .then(response => response.json())
      .then(data => setProducts(data.slice(76, 79)));
  }, [])

  useEffect(() => {
    setQuantity(products.length);

    let total = 0;

    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      total += product.price;
    }

    setTotalPrice(total);
  }, [products])

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
        <div className="cart__details">
          <div className="cart__list">
            <CartList products={products}/>
          </div>

          <div className="cart__info">
            <h2 className="cart__price">
              {`$${totalPrice}`}
            </h2>

            <div className="cart__text">
              {`Total for ${quantity} items`}
            </div>

            <div className="cart__divider"></div>

            <Button
              text={'Checkout'}
              size={Sizes.L}
            />
          </div>
        </div>
      ) : (
        <div className="cart__empty">
          Cart is empty, you can add products by pressing add to cart button
        </div>
      )}
    </div>
  )
}