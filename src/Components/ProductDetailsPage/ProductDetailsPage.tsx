import React, { useState, useEffect } from 'react';
import { useMatch } from "react-router-dom";
import './ProductDetailsPage.scss';
import phoneFromServer from '../../client/api/phones/apple-iphone-11-pro-512gb-midnightgreen.json';
import { PhoneDetails } from '../../types/phoneDetails';


export const ProductDetailsPage = () => {
  const [phone, setPhone] = useState<PhoneDetails | null>(null);
  // const [phonePath, setPhonePath] = useState([]);
  // const match = useMatch('/phones/:phoneId');

  useEffect(() => {
    setPhone(phoneFromServer)
  }, [])

  return (
    <div className='details'>
      <h2 className='details__title'>
        {phone?.name}
      </h2>
    </div>
  )
}