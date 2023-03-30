import React, { useState, useEffect, useCallback } from 'react';
import phonesFromServer from '../../client/api/phones.json';
import { Phone } from '../../types/phone';
import { ProductList } from '../ProductList';
import './PhonesPage.scss';
import '../../styles/grid.scss';

enum FilterBy {
  All = 'all',
  Alph = 'alph',
  Newest = 'newest',
  Cheapest = 'cheapest'
}


export const PhonesPage = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [visiblePhones, setViziblePhones] = useState<Phone[]>([]); 
  const [filterBy, setFilterBy] = useState<FilterBy>(FilterBy.Cheapest);

  const filterProducts = useCallback((filter: FilterBy, products: Phone[]) => {
    switch(filter) {
      case FilterBy.Alph:
        return [...products].sort((a, b) => a.name.localeCompare(b.name));

      case FilterBy.Newest:
        return [...products].sort((a, b) => b.year - a.year);

      case FilterBy.Cheapest:
        return [...products].sort((a, b) => a.price - b.price);

      default:
        return [...products];
    }
  } , [])

  useEffect(() => {
    setPhones(phonesFromServer);
  }, [])

  useEffect(() => {
    const sortedPhones = filterProducts(filterBy, phones);

    setViziblePhones(sortedPhones);
  }, [phones, filterBy, filterProducts]);

  return (
    <div className='phones'>
      {/* <h1
        className='phones__title
        grid__item--mobile-1-4
        grid__item--tablet-1-8
        grid__item--desktop-1-8'
      >
        Mobile phones
      </h1> */}

      <h1 className='phones__title'>
        Mobile Phones
      </h1>

      <button
        onClick={() => {
          setFilterBy(FilterBy.Alph);
        }}
      >
        Alph
      </button>

      <button
        onClick={() => {
          setFilterBy(FilterBy.All);
        }}
      >
        All
      </button>

      <button
        onClick={() => {
          setFilterBy(FilterBy.Cheapest);
        }}
      >
        Cheap
      </button>

      <ProductList
        products={visiblePhones}
      />
    </div>
  )
}