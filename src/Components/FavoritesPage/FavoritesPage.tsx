import React from 'react'
import './FavoritesPage.scss';
import { Link } from 'react-router-dom';
import { ReactRoutes } from '../../types/reactRoutes';

export const FavoritesPage = () => {
  return (
    <div className="favorites">
      <div className="favorites__paths">
        <Link
          className='favorites__path-home'
          to={ReactRoutes.Home}
        ></Link>

        <div
          className="favorites__icon favorites__icon--right-arrow"
        ></div>

        <Link
          className='favorites__path-main'
          to={ReactRoutes.Favorites}
        >
          Favorites
        </Link>
      </div>

      <h1 className='favorites__title'>
        Favorites
      </h1>

      <div className="favorites__count">
        {`${0} items`}
      </div>

    </div>
  )
}