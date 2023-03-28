import React from 'react';
import { Button } from '../Button';
import { HeartIcon } from '../HeartIcon';
import './ProductCard.scss';

type Props = {
  image: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  ram: string;
}

export const ProductCard: React.FC<Props> = ({
  image,
  name,
  fullPrice,
  price,
  screen,
  capacity,
  ram,
}) => {

  return (
    <div className="productcard">
      <img
        className="productcard__image"

        //COMMENT LEFT FOR DEVELOPMENT REFREENCE
        // src={require('../../client/api/img/phones/apple-iphone-11/green/00.jpg')}

        src={require(`../../client/api/${image}`)}
        alt={name}
      />
      

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
        <div className="productcard__buttons--button">
          <Button text={"Add to cart"}/>
        </div>
        <HeartIcon />
      </div>
    </div>
  )
};
