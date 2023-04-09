import React from 'react';
import { Phone } from '../../types/phone';
import { CartItem } from '../CartItem';
import './CartList.scss';

type Props = {
  products: Phone[];
}

export const CartList: React.FC<Props> = ({ products }) => {
  return (
    <div className="cartlist">
      {products.map(product => (
          <div
            key={product.id}
            className='cartlist__item'
          >
            <CartItem
              product={product}
            />
          </div>
        ))}
    </div>
  )
}