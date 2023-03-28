import React from 'react';
import { ProductCard } from '../ProductCard';
import phones from '../../client/api/phones.json';

const phoneFromSever = phones[12];

export const HomePage = () => {
  console.log(phoneFromSever);
  const {
    image,
    name,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
  } = phoneFromSever
  return (
    <div>
      Home Page
      <ProductCard
        image={image}
        name={name}
        fullPrice={fullPrice}
        price={price}
        screen={screen}
        capacity={capacity}
        ram={ram}
      />
    </div>
  )
}