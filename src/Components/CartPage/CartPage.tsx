import React, { useState, useEffect } from 'react';
import './CartPage.scss';
import { Link } from 'react-router-dom';
import { ReactRoutes } from '../../types/reactRoutes';
import cn from 'classnames';
import { CartItem } from '../CartItem';
import { Phone } from '../../types/phone';
import { CartList } from '../CartList';
import { Sizes } from '../../types/sizes';
import { Button } from '../Button';
import { Loader } from '../Loader';

type Props = {
  clearCart: () => void;
  products: Phone[];
  onRemove: (phoneId: string) => void;
}

export const CartPage: React.FC<Props> = ({
  products,
  onRemove,
  clearCart 
}) => {
  const [backButtonHover, setBackButtonHover] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(products.length);
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkoutActive, setCheckoutActive] = useState(false);


  useEffect(() => {
    setTotalQuantity(products.length);

    let total = 0;

    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      console.log(product, product.price)
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
            <CartList
              products={products}
              onRemove={onRemove}
            />
          </div>

          <div className="cart__info">
            <h2 className="cart__price">
              {`$${totalPrice}`}
            </h2>

            <div className="cart__text">
              {`Total for ${totalQuantity} items`}
            </div>

            <div className="cart__divider"></div>

            <div
              className="cart__checkout"
              onClick={() => {
                setCheckoutActive(true);
              }}
            >
              <Button
                text={'Checkout'}
                size={Sizes.L}
                selected={false}
              />
            </div>

            {checkoutActive && (
              <div className="cart__modal">
                <div className="cart__modal-text">
                  Checkout is not implemented yet. Do you wan't to clear the Cart?
                </div>

                <div className="cart__modal-buttons">
                  <div
                    className="cart__modal-confirm"
                    onClick={clearCart}
                  >
                    <Button
                      text='Confirm'
                      size={Sizes.M}
                      selected={true}
                    />
                  </div>

                  <div
                    className="cart__modal-cancel"
                    onClick={() => {
                      setCheckoutActive(false)
                    }}
                  >
                    <Button
                      text='Cancel'
                      size={Sizes.M}
                      selected={false}
                    />
                  </div>
                </div>

                <Loader />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="cart__empty">
          Your cart is empty, you can add products by pressing add to cart button
        </div>
      )}
    </div>
  )
}