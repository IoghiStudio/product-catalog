import React, { useState, useEffect } from 'react';
import { useMatch } from "react-router-dom";
import './ProductDetailsPage.scss';
import phoneFromServer from '../../client/api/phones/apple-iphone-11-pro-512gb-midnightgreen.json';
import { PhoneDetails } from '../../types/phoneDetails';
import { NotFoundPage } from '../NotFoundPage';


export const ProductDetailsPage = () => {
  const [phone, setPhone] = useState<PhoneDetails | null>(null);
  // const [phonePath, setPhonePath] = useState([]);
  
  // const match = useMatch('/phones/:phoneId');

  useEffect(() => {
    setPhone(phoneFromServer)
  }, [])

  if (phone) {
    return (
      <div className='details'>
        <h2 className='details__title'>
          {phone.name}
        </h2>
  
        <div className="details__top">
          <div className="details__images">
            <img
                className="details__images--image"
                src={require(`../../client/api/${phone.images[0]}`)}
                alt={phone.name}
              />

            <div className="details__images--previews">
              
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <NotFoundPage />
    )
  }
}