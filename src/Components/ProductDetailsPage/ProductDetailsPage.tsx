import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import './ProductDetailsPage.scss';
import { PhoneDetails } from '../../types/phoneDetails';
import { NotFoundPage } from '../NotFoundPage';
import cn from 'classnames';
import { Button } from '../Button';
import { HeartIcon } from '../HeartIcon';
import { Sizes } from '../../types/sizes';

export const ProductDetailsPage = () => {
  const [phone, setPhone] = useState<PhoneDetails | null>(null);
  const [colorsAvailable, setColorsAvailable] = useState<string[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [capacityAvailable, setCapacityAvailable] = useState<string[]>([]);
  const [currentImage, setCurrentImage] = useState<string>('');
  const [currentCapacity, setCurrentCapacity] = useState<string>('');
  const { phoneId } = useParams();

  // const [phonePath, setPhonePath] = useState([]);
  // const match = useMatch('/phones/:phoneId');

  useEffect(() => {
    fetch(`./phones/${phoneId}.json`)
    .then(resp => resp.json())
    .then(data => {
      setPhone(data)
      setColorsAvailable(data.colorsAvailable)
      setImages(data.images);
      setCurrentImage(data.images[0])
      setCapacityAvailable(data.capacityAvailable)
      setCurrentCapacity(data.capacity)
    })
      
  }, [])

  console.log(currentImage)

  if (phone) {
    return (
      <div className='details'>
        <div className="details__paths">
          <Link
            className='details__path-home'
            to='/home'
          ></Link>

          <div
            className="details__icon details__icon--right-arrow"
          ></div>

          <Link
            className='details__path-phones'
            to='/phones'
          >
            Phones
          </Link>

          <div
            className="details__icon details__icon--right-arrow"
          ></div>

          <div className="details__path-name">
            {phone.name}
          </div>
        </div>

        <Link
          to='/phones'
          className="details__back"
        >
          <div
            className="details__icon details__icon--left-arrow"
          ></div>
          <div className="details__back--text"> Back </div>
        </Link>

        <h2 className='details__title'>
          {phone.name}
        </h2>
  
        <div className="details__top">
          <div className="details__images">
            <img
              className="details__images-image"
              src={require(`../../api/${currentImage}`)}
              alt={phone.name}
            />

            <div className="details__previews">
              {images.map(image => {
                return (
                  <img
                    key={image}
                    className={cn(
                      'details__previews-image',
                      {
                        'details__previews-image--active': image === currentImage,
                      }
                    )}
                    src={require(`../../api/${image}`)}
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

            <div className="details__divider"></div>

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

            <div className="details__divider"></div>

            <div className="details__prices">
              <div className="details__price">{`$${phone.priceDiscount}`}</div>
              <div className="details__fullprice">{`$${phone.priceRegular}`}</div>
            </div>

            <div className="details__buttons">
              <div className="details__buttons--button">
                <Button
                  text={"Add to cart"}
                  size={Sizes.L}
                />
              </div>
              <HeartIcon
                size={Sizes.L}
              />
            </div>

            <div className="details__description">
              <div className="details__specs">
                <div className="details__specs--text">Screen</div>
                <div className="details__specs--value">{phone.screen}</div>
              </div>

              <div className="details__specs">
                <div className="details__specs--text">Resolution</div>
                <div className="details__specs--value">{phone.resolution}</div>
              </div>

              <div className="details__specs">
                <div className="details__specs--text">Processor</div>
                <div className="details__specs--value">{phone.processor}</div>
              </div>

              <div className="details__specs">
                <div className="details__specs--text">RAM</div>
                <div className="details__specs--value">{phone.ram}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="details__info">
          <div className="details__about">
            <h3 className='details__about--title'>
              About
            </h3>

            <div className="details__divider"></div>

            {phone.description.map(desc => (
              <React.Fragment>
                <h4  
                  className="details__about--subtitle"
                >
                  {desc.title}
                </h4>

                <div className="details__about--text">
                  {desc.text}
                </div>
              </React.Fragment>
            ))}
          </div>

          <div className="details__techspecs">
            <h3 className='details__techspecs--title'>
              Tech specs
            </h3>

            <div className="details__divider"></div>

            <div className="details__description">
              <div className="details__specs">
                <div className="details__specs--text">Screen</div>
                <div className="details__specs--value">{phone.screen}</div>
              </div>

              <div className="details__specs">
                  <div className="details__specs--text">Resolution</div>
                  <div className="details__specs--value">{phone.resolution}</div>
              </div>

              <div className="details__specs">
                <div className="details__specs--text">Processor</div>
                <div className="details__specs--value">{phone.processor}</div>
              </div>

              <div className="details__specs">
                <div className="details__specs--text">RAM</div>
                <div className="details__specs--value">{phone.ram}</div>
              </div>

              <div className="details__specs">
                <div className="details__specs--text">Built in memory</div>
                <div className="details__specs--value">{phone.capacity}</div>
              </div>

              <div className="details__specs">
                <div className="details__specs--text">Camera</div>
                <div className="details__specs--value">{phone.camera}</div>
              </div>

              <div className="details__specs">
                <div className="details__specs--text">Zoom</div>
                <div className="details__specs--value">{phone.zoom}</div>
              </div>

              <div className="details__specs">
                <div className="details__specs--text">Cell</div>
                <div className="details__specs--value">{phone.cell.join(', ')}</div>
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