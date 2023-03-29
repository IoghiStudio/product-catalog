import React, { useState, useEffect } from 'react';
import phonesFromServer from '../../client/api/phones.json';
import { Phone } from '../../types/phone';
import { ProductList } from '../ProductList';


export const PhonesPage = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  // const [visiblePhones, setViziblePhones] = useState<Phone[]>([]); 

  useEffect(() => {
    setPhones(phonesFromServer);
  }, [])


  return (
    <div className='phones'>
      <div>Mobile phones</div>

      <h1>Phones available: </h1>

      <ProductList
        products={phones}
      />
    </div>
  )
}