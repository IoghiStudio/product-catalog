
import React, { useState, useEffect, useCallback } from 'react';
import './ProductSlider.scss';
import { Phone } from '../../types/phone';
import { ProductList } from '../ProductList';
import { Way } from '../../types/way';
import cn from 'classnames';

type Props = {
  title: string;
  products: Phone[],
  cartItems: Phone[],
  onAdd: (phoneId: string) => void;
}

export const ProductSlider: React.FC<Props> = ({
  title,
  products,
  cartItems,
  onAdd
}) => {
  const [visibleProducts, setVisibleProducts] = useState<Phone[]>([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setVisibleProducts([...products].splice(counter, 4))
  }, [counter, products])

  const handleCounter = useCallback((way: Way) => {
    if(way === Way.Prev) {
      if (counter >= 1) {
        setCounter(counter - 1);
      }
    }

    if (way === Way.Next){
      if (counter <= 3) {
        setCounter(counter + 1);
      }
    }
  }, [counter])

  return (
    <div className="slider">
      <div className="slider__top">
        <h2 className="slider__title">
          {title}
        </h2>

        <div className="slider__icons">
          <div
            className={cn(
              "slider__icon-container",
              {
                "slider__icon-container--disabled": counter === 0,
              }
            )}
            onClick={() => handleCounter(Way.Prev)}
          >
            <div className={cn(
              "slider__icon",
              "slider__icon--left",
              {
                "slider__icon--left--disabled": counter === 0,
              }
            )}></div>
          </div>
          
          <div
            className={cn(
              "slider__icon-container",
              {
                "slider__icon-container--disabled": counter === 4,
              }
            )}
            onClick={() => handleCounter(Way.Next)}
          >
            <div className={cn(
              "slider__icon",
              "slider__icon--right",
              {
                "slider__icon--right--disabled": counter === 4,
              }
            )}></div>
          </div>
        </div>
      </div>

      <ProductList
        products={visibleProducts}
        forSlider={true}
        cartItems={cartItems}
        onAdd={onAdd}
      />
    </div>
  )
}