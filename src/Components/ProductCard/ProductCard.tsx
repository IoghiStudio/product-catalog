import React from 'react';
import './ProductCard.scss';

type Props = {
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  ram: string;
}

// export const ProductCard: React.FC<Props> = ({
//   name,
//   fullPrice,
//   price,
//   screen,
//   capacity,
//   ram,
// }) => {
//   return (
//     <div className="productcard">

//     </div>
//   )
// }

export const ProductCard = () => {
  return (
    <div className="productcard">
      <div className="productcard__image"></div>

      <div className="productcard__title"></div>

      <div className="productcard__prices">
        <div className="productcard__fullprice"></div>
        <div className="productcard__price"></div>
      </div>

      <div className="productcard__description">
        <div className="productcard__details">
          <div className="productcard__details--text">Screen</div>
          <div className="productcard__details--value"></div>
        </div>

        <div className="productcard__details">
          <div className="productcard__details--text">Capacity</div>
          <div className="productcard__details--value"></div>
        </div>

        <div className="productcard__details">
          <div className="productcard__details--text">RAM</div>
          <div className="productcard__details--value"></div>
        </div>
      </div>

      
    </div>
  )
}