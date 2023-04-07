import { Link } from 'react-router-dom'
import { ReactRoutes } from '../../types/reactRoutes';

import {
  useCallback,
  useEffect,
  useState, 
} from 'react';
import './HomePage.scss';
import cn from 'classnames';

enum Way {
  Prev = 'prev',
  Next = 'next'
}

export const HomePage = () => {
  const [bannerIndex, setBannerIndex] = useState<number>(0);
  const [phones, setPhones] = useState([]);

  const handleBannerChange = useCallback(
    (way: Way, index: number) => {
      if (way === Way.Prev) {
        if (index >= 1) {
          setBannerIndex(index - 1);
        } else {
          setBannerIndex(2);
        }
      } else if (way === Way.Next) {
        if (index <= 1) {
          setBannerIndex(index + 1);
        } else {
          setBannerIndex(0);
        }
      }
    },
    []
  );

  useEffect(() => {
    fetch('./product-catalog/phones.json')
      .then(resp => resp.json())
      .then(phones => {
        setPhones(phones)
      })
  }, [])

  useEffect(() => {
    setTimeout(() => {
      handleBannerChange(Way.Next, bannerIndex);
    }, 3000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bannerIndex])
  
  return (
    <div className='home'>
      <h1 className="home__title">
        Welcome to the Nice Gadgets store!
      </h1>
      
      <div className="home__banner">
        <div 
          className="home__icon-container"
          onClick={() => {
            handleBannerChange(Way.Prev, bannerIndex);
          }}
        >
          <div className="home__icon home__icon--left"></div>
        </div>
        
        <div
          className={cn(
            "home__banner-image",
            {
              "home__banner-image--first": bannerIndex === 0,
              "home__banner-image--second": bannerIndex === 1,
              "home__banner-image--third": bannerIndex === 2,
            }
          )}
        ></div>

        <div 
          className="home__icon-container"
          onClick={() => {
            handleBannerChange(Way.Next, bannerIndex);
          }}
        >
          <div className="home__icon home__icon--right"></div>
        </div>
      </div>

      <div className="home__dots">
        {[0, 1, 2].map(index => (
          <div
            className={cn(
              "home__dot", {
                "home__dot--active": bannerIndex === index,
              }
            )}
            onClick={() => setBannerIndex(index)}
          ></div>
        ))}
      </div>

      <div className="home__news">
        <h2 className="home__news-title">
          Brand new models
        </h2>
      </div>

      <div className="home__categories">
        <h2 className="home__categories-title">
          Shop by category
        </h2>

        <div className="home__categories-previews">
          <div className="home__category">
            <Link
              to={ReactRoutes.Phones}
              className="home__category-image home__category-image--phones"
            ></Link>

            <h4 className="home__category-title">
              Mobile phones
            </h4>

            <p className="home__category-text">
              {`${phones.length} models`}
            </p>
          </div>

          <div className="home__category">
            <Link
              to={ReactRoutes.Tablets}
              className="home__category-image home__category-image--tablets"
            ></Link>
            
            <h4 className="home__category-title">
              Tablets
            </h4>

            <p className="home__category-text">
              24 models
            </p>
          </div>

          <div className="home__category">
            <Link
              to={ReactRoutes.Accessories}
              className="home__category-image home__category-image--accessories"
            ></Link>
            
            <h4 className="home__category-title">
              Accessories
            </h4>

            <p className="home__category-text">
              100 models
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}