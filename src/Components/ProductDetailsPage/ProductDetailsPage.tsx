import React, { useState, useEffect } from 'react';
import { useMatch } from "react-router-dom";
import './ProductDetailsPage.scss';
import phoneFromServer from '../../client/api/phones/apple-iphone-11-pro-256gb-midnightgreen.json';
import { PhoneDetails } from '../../types/phoneDetails';
import { NotFoundPage } from '../NotFoundPage';


export const ProductDetailsPage = () => {
  const [phone, setPhone] = useState<PhoneDetails | null>(null);
  const [colors, setColors] = useState<string[]>([]);
  const [images, setImages] = useState<string[]>([]);
  // const [phonePath, setPhonePath] = useState([]);
  
  // const match = useMatch('/phones/:phoneId');

  useEffect(() => {
    setPhone(phoneFromServer)
    setColors(phoneFromServer.colorsAvailable)
    setImages(phoneFromServer.images);
    console.log(phoneFromServer.colorsAvailable)
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
              {images.map(image => {
                return (
                  <img
                    key={image}
                    className='details__images--previews--image'
                    src={require(`../../client/api/${image}`)}
                    alt={phone.name}
                  />
                )
              })}
            </div>
          </div>

          <div className="details__pick">
            <div className="details__colors">
              <h3 className='details__colors--title'>
                Available colors
              </h3>

              <div className="details__colors--previews">
                {colors.map(color => {
                  return (
                    <div
                      key={color}
                      className="details__colors--color-container"
                      style={{backgroundColor: color}}
                    >

                    </div>
                  )
                })}
              </div>
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