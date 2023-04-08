import React, { useState } from 'react';
import './Accessories.scss';
import { Link } from 'react-router-dom';
import { ReactRoutes } from '../../types/reactRoutes';
import { FilterBy } from '../../types/filterBy';
import { PerPage } from '../../types/perPage';
import { ProductList } from '../ProductList';
import { Loader } from '../Loader';

export const AccessoriesPage = () => {
  const [accessories, setAccessoriess] = useState([]);
  const [visibleAccessoriess, setVizibleAccessoriess] = useState([]); 
  const [filterBy, setFilterBy] = useState<FilterBy | string>(FilterBy.Newest);
  const [perPage, setPerPage] = useState<PerPage>(PerPage.Sixteen);

  return (
    <div className="accessories">
      <div className="accessories__paths">
        <Link
          className='accessories__path-home'
          to={ReactRoutes.Home}
        ></Link>

        <div
          className="accessories__icon accessories__icon--right-arrow"
        ></div>

        <Link
          className='accessories__path-main'
          to={ReactRoutes.Accessories}
        >
          Accessories
        </Link>
      </div>

      <h2 className="accessories__title">
        Accessories
      </h2>

      <div className="accessories__count">
        {`${100} models`}
      </div>

      <div className="accessories__filters">
        <div className="accessories__filter accessories__filter--sortby">
          <div className="accessories__filter--text">
            Sort by
          </div>

          <select
            className='accessories__filter--select'
            value={filterBy}
            onChange={(event) => {
              setFilterBy(event.target.value)
            }}
          >
            <option
              className='accessories__option'
              value={FilterBy.All}
            >
              All
            </option>

            <option 
              className='accessories__option'
              value={FilterBy.Cheapest}
            >
              Price
            </option>

            <option 
              className='accessories__option'
              value={FilterBy.Alph}
            >
              Name
            </option>

            <option 
              className='accessories__option'
              value={FilterBy.Newest}
            >
              Newest
            </option>
          </select>
        </div>

        <div className="accessories__filter accessories__filter--perpage">
          <div className="accessories__filter--text">
            Per page
          </div>

          <select
            className='accessories__filter--select'
            value={perPage}
            onChange={(event) => {
              setPerPage(+event.target.value)
            }}
          >
            <option
              className='accessories__option'
              value={PerPage.All}
            >
              All
            </option>

            <option 
              className='accessories__option'
              value={PerPage.Four}
            >
              4
            </option>

            <option 
              className='accessories__option'
              value={PerPage.Eight}
            >
              8
            </option>

            <option 
              className='accessories__option'
              value={PerPage.Sixteen}
            >
              16
            </option>
          </select>
        </div>
      </div>

      <div className="test">
        <h1 className='test-title'>
          Waiting for me to implement this section....
        </h1>

        <div className="test-text">
          You can check the
            <Link
              className="test-text--phones"
              to={ReactRoutes.Phones}
            >
              PHONES page
            </Link>
          at the moment
        </div>
      </div>

      {accessories.length > 0 ? (
        <ProductList
          products={visibleAccessoriess}
          forSlider={false}
        />
      ) : (
        <Loader/>
      )}
    </div>
  )
}