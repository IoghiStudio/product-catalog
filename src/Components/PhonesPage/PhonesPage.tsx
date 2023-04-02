import React, { useState, useEffect, useCallback } from 'react';
import phonesFromServer from '../../client/api/phones.json';
import { Phone } from '../../types/phone';
import { ProductList } from '../ProductList';
import './PhonesPage.scss';
import '../../styles/grid.scss';
import { Link } from 'react-router-dom';

enum FilterBy {
  All = 'all',
  Alph = 'alph',
  Newest = 'newest',
  Cheapest = 'cheapest'
}


export const PhonesPage = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [visiblePhones, setViziblePhones] = useState<Phone[]>([]); 
  const [filterBy, setFilterBy] = useState<FilterBy | string>(FilterBy.Newest);

  const filterProducts = useCallback((filter: FilterBy | string, products: Phone[]) => {
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
      <div className="phones__paths">
        <Link
          className='phones__path-home'
          to='/home'
        ></Link>

        <div
          className="phones__icon phones__icon--right-arrow"
        ></div>

        <Link
          className='phones__path-phones'
          to='/phones'
        >
          Phones
        </Link>
      </div>

      <h1 className='phones__title'>
        Mobile Phones
      </h1>

      <div className="phones__count">
        {`${visiblePhones.length} models`}
      </div>

      <div className="phones__filters">
        <select
          className='phones__sortby'
          value={filterBy}
          onChange={(event) => {
            setFilterBy(event.target.value)
          }}
        >
          <option
            className='phones__option'
            value={FilterBy.All}
            selected
          >
            All
          </option>

          <option 
            className='phones__option'
            value={FilterBy.Cheapest}
          >
            Price
          </option>

          <option 
            className='phones__option'
            value={FilterBy.Alph}
          >
            Name
          </option>

          <option 
            className='phones__option'
            value={FilterBy.Newest}
          >
            Newest
          </option>
        </select>
      </div>

      <ProductList
        products={visiblePhones}
      />
    </div>
  )
}