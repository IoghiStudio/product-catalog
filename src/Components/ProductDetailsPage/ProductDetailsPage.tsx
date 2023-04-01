import React, { useState, useEffect } from 'react';
import { useMatch } from "react-router-dom";
import './ProductDetailsPage.scss';
import phoneFromServer from '../../client/api/phones/apple-iphone-11-pro-max-512gb-midnightgreen.json'
import { PhoneDetails } from '../../types/phoneDetails';
import { NotFoundPage } from '../NotFoundPage';
import cn from 'classnames';

export const ProductDetailsPage = () => {
  const [phone, setPhone] = useState<PhoneDetails | null>(null);
  const [colorsAvailable, setColorsAvailable] = useState<string[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [capacityAvailable, setCapacityAvailable] = useState<string[]>([]);
  const [currentImage, setCurrentImage] = useState<string>('');
  const [currentCapacity, setCurrentCapacity] = useState<string>('');
  // const [phonePath, setPhonePath] = useState([]);
  
  // const match = useMatch('/phones/:phoneId');

  useEffect(() => {
    setPhone(phoneFromServer)
    setColorsAvailable(phoneFromServer.colorsAvailable)
    setImages(phoneFromServer.images);
    setCurrentImage(phoneFromServer.images[0])
    setCapacityAvailable(phoneFromServer.capacityAvailable)
    setCurrentCapacity(phoneFromServer.capacity)
    
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
              src={require(`../../client/api/${currentImage}`)}
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
                    onClick={() => {
                      setCurrentImage(image)
                    }}
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
                {colorsAvailable.map(color => {
                  return (
                    <div
                      key={color}
                      className="details__colors-color-container"
                    >
                      <div
                        className="details__colors-color"
                        style={{backgroundColor: color}}
                      ></div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="details__separator"></div>

            <div className="details__capacities">
              <h3 className="details__capacities--title">
                Select capacity
              </h3>

              <div className="details__capacities--previews">
                {capacityAvailable.map(capacity => {
                  return (
                    <div
                      className={cn(
                        "details__capacities-capacity",
                        {
                          "details__capacities-capacity--active": capacity === currentCapacity
                        }
                      )}
                      onClick={() => {
                        setCurrentCapacity(capacity)
                      }}
                    >
                      {capacity}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="details__separator"></div>
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