import React, { useState, useEffect } from 'react';
import './CartItem.scss';
import cn from 'classnames';
import { Phone } from '../../types/phone';
import { NotFoundPage } from '../NotFoundPage';
import { Link } from 'react-router-dom';

type Props = {
  product: Phone;
  onRemove: (phoneId: string) => void;
}

export const CartItem: React.FC<Props> = ({ product, onRemove }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="cartitem">
      <div className="cartitem__top">
        <div
          className="cartitem__remove"
          onClick={() => onRemove(product.phoneId)}
        ></div>

        <Link
          to={`/phones/${product.phoneId}`}
          className="cartitem__image-container"
        >
          <img
            className="cartitem__image"
            src={require(`../../api/${product.image}`)}
            alt={product.name}
          />
        </Link>

        <div className="cartitem__name">
          {product.name}
          {' '}
          (iMT9G2FS/A)
        </div>
      </div>

      <div className="cartitem__bottom">
        <div className="cartitem__icons">
          <div
            className={cn(
              "cartitem__icon-container",
              {
                "cartitem__icon-container--disabled": quantity === 1,
              }
            )}
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
          >
            <div className={cn(
              "cartitem__icon",
              "cartitem__icon--minus",
              {
                "cartitem__icon--minus--disabled": quantity === 1,
              }
            )}></div>
          </div>
  
          <div className="cartitem__quantity">{quantity}</div>
            
          <div
            className={cn(
              "cartitem__icon-container",
              {
                "cartitem__icon-container--disabled": quantity === 6,
              }
            )}
            onClick={() => {
              if (quantity < 6) {
                setQuantity(quantity + 1);
              }
            }}
          >
            <div className={cn(
              "cartitem__icon",
              "cartitem__icon--plus",
              {
                "cartitem__icon--plus--disabled": quantity === 6,
              }
            )}></div>
          </div>
        </div>
  
        <div className="cartitem__price">
          {`$${product.price}`}
        </div>
      </div>
    </div>
  )
}