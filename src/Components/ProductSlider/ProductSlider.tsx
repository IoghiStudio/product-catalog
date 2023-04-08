
import React, { useState, useEffect } from 'react';
import './ProductSlider.scss';
import { Phone } from '../../types/phone';
import { ProductList } from '../ProductList';
import { Way } from '../../types/way';
import cn from 'classnames';

type Props = {
  title: string;
  products: Phone[],
  handleCounter: (way: Way) => void;
  counter: number;
}

export const ProductSlider: React.FC<Props> = ({
  title,
  products,
  handleCounter,
  counter,
}) => {

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
            <div className="slider__icon slider__icon--left"></div>
          </div>
          
          <div
            className={cn(
              "slider__icon-container",
              {
                "slider__icon-container--disabled": counter === 3,
              }
            )}
            onClick={() => handleCounter(Way.Next)}
          >
            <div className="slider__icon slider__icon--right"></div>
          </div>
        </div>
      </div>

      <ProductList
        products={products}
        forSlider={true}
      />
    </div>
  )
}