import React from 'react';
import { Button } from '../Button';
import { HeartIcon } from '../HeartIcon';
import './ProductCard.scss';
import { Link } from 'react-router-dom';
import { Sizes } from '../../types/sizes';

type Props = {
  phoneId: string;
  image: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  ram: string;
}

export const ProductCard: React.FC<Props> = ({
  phoneId,
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
      <Link
        to={`/phones/${phoneId}`}
        className="productcard__image-container"
      >
        <img
          className="productcard__image"
          src={require(`../../client/api/${image}`)}
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
        <div className="productcard__buttons--button">
          <Button
            text={"Add to cart"}
            size={Sizes.M}
          />
        </div>
        <HeartIcon />
      </div>
    </div>
  )
};
