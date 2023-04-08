import React, { useState } from 'react';
import './CartItem.scss';
import cn from 'classnames';

type Props = {

}

export const CartItem: React.FC<Props> = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="cartitem">
      <div className="cartitem__icons">
        <div
          className={cn(
            "cartitem__icon-container",
            {
              "cartitem__icon-container--disabled": count === 0,
            }
          )}
          onClick={() => setCount(count - 1)}
        >
          <div className={cn(
            "cartitem__icon",
            "cartitem__icon--minus",
            {
              "cartitem__icon--minus--disabled": count === 0,
            }
          )}></div>
        </div>

        <div className="cartitem__count">{count}</div>
          
        <div
          className={cn(
            "cartitem__icon-container",
            {
              "cartitem__icon-container--disabled": count === 4,
            }
          )}
          onClick={() => setCount(count + 1)}
        >
          <div className={cn(
            "cartitem__icon",
            "cartitem__icon--plus",
            {
              "cartitem__icon--plus--disabled": count === 4,
            }
          )}></div>
        </div>
      </div>

      <div className="cartitem__price">
        {`$${999}`}
      </div>
    </div>
  )
}