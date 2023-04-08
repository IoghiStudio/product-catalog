
import React, { useState, useEffect } from 'react';
import './ProductSlider.scss';
import { Phone } from '../../types/phone';
import { ProductList } from '../ProductList';

type Props = {
  title: string;
  products: Phone[]
}

export const ProductSlider: React.FC<Props> = ({
  title,
  products,
}) => {
  return (
    <div className="slider">
      <div className="slider__top">
        <h2 className="slider__title">
          {title}
        </h2>

        <div className="slider__icons">
          <div className="slider__icon-container">
            <div className="slider__icon slider__icon--left"></div>
          </div>
          
          <div className="slider__icon-container">
            <div className="slider__icon slider__icon--right"></div>
          </div>
        </div>
      </div>

      <ProductList
        products={products}
      />
    </div>
  )
}