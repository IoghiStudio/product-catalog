import React from 'react';
import './HomePage.scss';

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
        
        <div className="home__banner--image"></div>

        <div className="home__icon-container">
          <div className="home__icon home__icon--right"></div>
        </div>
      </div>
    </div>
  )
}