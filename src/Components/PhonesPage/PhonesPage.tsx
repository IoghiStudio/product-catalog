import React, { useState, useEffect, useCallback } from 'react';
import { Phone } from '../../types/phone';
import { ProductList } from '../ProductList';
import './PhonesPage.scss';
import '../../styles/grid.scss';
import { Link } from 'react-router-dom';
import { ReactRoutes } from '../../types/reactRoutes';
import { Loader } from '../Loader';

enum FilterBy {
  All = 'all',
  Alph = 'alph',
  Newest = 'newest',
  Cheapest = 'cheapest'
}

enum PerPage {
  Four = 4,
  Eight = 8,
  Sixteen = 16,
  All = 300
}


export const PhonesPage = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [visiblePhones, setViziblePhones] = useState<Phone[]>([]); 
  const [filterBy, setFilterBy] = useState<FilterBy | string>(FilterBy.Newest);
  const [perPage, setPerPage] = useState<PerPage>(PerPage.Sixteen);

  useEffect(() => {
    fetch('./product-catalog/phones.json')
      .then(resp => resp.json())
      .then(data => setPhones(data))
  }, [])

  useEffect(() => {
    const filterProducts = () => {
      switch(filterBy) {
        case FilterBy.Alph:
          return [...phones].sort((a, b) => a.name.localeCompare(b.name));
  
        case FilterBy.Newest:
          return [...phones].sort((a, b) => b.year - a.year);
  
        case FilterBy.Cheapest:
          return [...phones].sort((a, b) => a.price - b.price);
  
        default:
          return [...phones];
      }
    }

    const sortedPhones = filterProducts();

    setViziblePhones(sortedPhones.slice(0, perPage));
  }, [phones, filterBy, perPage]);

  return (
    <div className='phones'>
      <div className="phones__paths">
        <Link
          className='phones__path-home'
          to={ReactRoutes.Home}
        ></Link>

        <div
          className="phones__icon phones__icon--right-arrow"
        ></div>

        <Link
          className='phones__path-phones'
          to={ReactRoutes.Phones}
        >
          Phones
        </Link>
      </div>

      <h1 className='phones__title'>
        Mobile Phones
      </h1>

      <div className="phones__count">
        {`${phones.length} models`}
      </div>

      <div className="phones__filters">
        <div className="phones__filter phones__filter--sortby">
          <div className="phones__filter--text">
            Sort by
          </div>

          <select
            className='phones__filter--select'
            value={filterBy}
            onChange={(event) => {
              setFilterBy(event.target.value)
            }}
          >
            <option
              className='phones__option'
              value={FilterBy.All}
            >
              All
            </option>

            <option 
              className='phones__option'
              value={FilterBy.Cheapest}
            >
              Price
            </option>

            <option 
              className='phones__option'
              value={FilterBy.Alph}
            >
              Name
            </option>

            <option 
              className='phones__option'
              value={FilterBy.Newest}
            >
              Newest
            </option>
          </select>
        </div>

        <div className="phones__filter phones__filter--perpage">
          <div className="phones__filter--text">
            Per page
          </div>

          <select
            className='phones__filter--select'
            value={perPage}
            onChange={(event) => {
              setPerPage(+event.target.value)
            }}
          >
            <option
              className='phones__option'
              value={PerPage.All}
            >
              All
            </option>

            <option 
              className='phones__option'
              value={PerPage.Four}
            >
              4
            </option>

            <option 
              className='phones__option'
              value={PerPage.Eight}
            >
              8
            </option>

            <option 
              className='phones__option'
              value={PerPage.Sixteen}
            >
              16
            </option>
          </select>
        </div>
      </div>

      {phones.length > 0 ? (
        <ProductList
          products={visiblePhones}
          forSlider={false}
        />
      ) : (
        <Loader/>
      )}
    </div>
  )
}