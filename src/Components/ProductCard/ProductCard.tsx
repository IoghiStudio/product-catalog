import React from 'react';
import { Button } from '../Button';
import { HeartIcon } from '../HeartIcon';
import './ProductCard.scss';

type Props = {
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  ram: string;
}

export const ProductCard: React.FC<Props> = ({
  name,
  fullPrice,
  price,
  screen,
  capacity,
  ram,
}) => {
  return (
    <div className="productcard">
      <div className="productcard__image">
        wesfewf
      </div>

      <div className="productcard__title">
        Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
      </div>

      <div className="productcard__prices">
        <div className="productcard__price">$799</div>
        <div className="productcard__fullprice">$899</div>
      </div>

      <div className="productcard__description">
        <div className="productcard__specs">
          <div className="productcard__specs--text">Screen</div>
          <div className="productcard__specs--value">5.7led</div>
        </div>

        <div className="productcard__specs">
          <div className="productcard__specs--text">Capacity</div>
          <div className="productcard__specs--value">64 gb</div>
        </div>

        <div className="productcard__specs">
          <div className="productcard__specs--text">RAM</div>
          <div className="productcard__specs--value">4 gb</div>
        </div>
      </div>

      <div className="productcard__buttons">
        <Button text={"Add to cart"}/>
        <HeartIcon />
      </div>
    </div>
  )
};
