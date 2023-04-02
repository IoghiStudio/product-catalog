import React from 'react';
import './HomePage.scss';
import cn from 'classnames';

export const HomePage = () => {
  return (
    <div className='home'>
      <h1 className="home__title">
        Welcome to the Nice Gadgets store!
      </h1>
      
      <div className="home__banner">
        <div className="home__icon-container">
          <div className="home__icon home__icon--left"></div>
        </div>
        
        <div
          className={cn(
            "home__banner-image",
            {
              "home__banner-image--first": true,
              // "home__banner-image--second": currentImgIndex === 1,
              // "home__banner-image--third": currentImgIndex === 2,
            }
          )}
        ></div>

        <div className="home__icon-container">
          <div className="home__icon home__icon--right"></div>
        </div>
      </div>

      <div className="home__dots">
        <div className="home__dot home__dot--active"></div>
        <div className="home__dot"></div>
        <div className="home__dot"></div>
      </div>
    </div>
  )
}