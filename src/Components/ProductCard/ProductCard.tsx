import React, { useState } from 'react';
import { Button } from '../Button';
import { HeartIcon } from '../HeartIcon';
import './ProductCard.scss';
import { Link } from 'react-router-dom';
import { Sizes } from '../../types/sizes';
import { Phone } from '../../types/phone';

type Props = {
  product: Phone;
  alreadyInCart: boolean;
  onAdd: (phoneId: string) => void;
}

export const ProductCard: React.FC<Props> = ({
  product,
  alreadyInCart,
  onAdd
}) => {
  const {
    phoneId,
    image,
    name,
    price,
    fullPrice,
    screen,
    capacity,
    ram,
  } = product;

  return (
    <div className="productcard">
      <Link
        to={`/phones/${phoneId}`}
        className="productcard__image-container"
      >
        <img
          className="productcard__image"
          src={require(`../../api/${image}`)}
          alt={name}
        />
      </Link>
      

      <div className="productcard__title">
        {name}
        {' '}
        (iMT9G2FS/A)
      </div>

      <div className="productcard__prices">
        <div className="productcard__price">{`$${price}`}</div>
        <div className="productcard__fullprice">{`$${fullPrice}`}</div>
      </div>

      <div className="productcard__divider"></div>

      <div className="productcard__description">
        <div className="productcard__specs">
          <div className="productcard__specs--text">Screen</div>
          <div className="productcard__specs--value">{screen}</div>
        </div>

        <div className="productcard__specs">
          <div className="productcard__specs--text">Capacity</div>
          <div className="productcard__specs--value">{capacity}</div>
        </div>

        <div className="productcard__specs">
          <div className="productcard__specs--text">RAM</div>
          <div className="productcard__specs--value">{ram}</div>
        </div>
      </div>

      <div className="productcard__buttons">
        <div
          className="productcard__buttons--button"
          onClick={() => {
            if (!alreadyInCart) {
              onAdd(phoneId)
            }
          }}
        >
          <Button
            text={!alreadyInCart ? "Add to cart" : "Added to cart"}
            size={Sizes.M}
            selected={alreadyInCart}
          />
        </div>
        <HeartIcon
          size={Sizes.M}
          selected={false}
        />
      </div>
    </div>
  )
};
