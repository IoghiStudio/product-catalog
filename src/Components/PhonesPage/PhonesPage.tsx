import React, { useState, useEffect } from 'react';
import phonesFromServer from '../../client/api/phones.json';
import { Phone } from '../../types/phone';
import { ProductList } from '../ProductList';
import './PhonesPage.scss';

enum FilterBy {
  All = 'all',
  Alph = 'alph',
  Newest = 'newest',
  Cheapest = 'cheapest'
}


export const PhonesPage = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [visiblePhones, setViziblePhones] = useState<Phone[]>([]); 
  const [filterBy, setFilterBy] = useState<FilterBy>(FilterBy.All);

  useEffect(() => {
    setPhones(phonesFromServer);
  }, [])

  useEffect(() => {
    let sortedPhones: Phone[];

    switch(filterBy) {
      case FilterBy.Alph:
        sortedPhones = [...phones].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case FilterBy.Newest:
        sortedPhones = [...phones].sort((a, b) => b.year - a.year);
        break;
      case FilterBy.Cheapest:
        sortedPhones = [...phones].sort((a, b) => a.price - b.price);
        break;
      default:
        sortedPhones = [...phones];
    }


    setViziblePhones(sortedPhones);
  }, [phones, filterBy])


  return (
    <div className='phones'>
      <h1 className='phones__title'>Mobile phones</h1>

      <ProductList
        products={visiblePhones}
      />
    </div>
  )
}