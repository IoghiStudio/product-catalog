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
      
    </div>
  )
}