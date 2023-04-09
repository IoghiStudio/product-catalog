import React, { useState } from 'react';
import './Tablets.scss';
import { Link } from 'react-router-dom';
import { ReactRoutes } from '../../types/reactRoutes';
import { FilterBy } from '../../types/filterBy';
import { PerPage } from '../../types/perPage';
import { ProductList } from '../ProductList';
import { Loader } from '../Loader';

export const TabletsPage = () => {
  const [tablets, setTablets] = useState([]);
  const [visibleTablets, setVizibleTablets] = useState([]); 
  const [filterBy, setFilterBy] = useState<FilterBy | string>(FilterBy.Newest);
  const [perPage, setPerPage] = useState<PerPage>(PerPage.Sixteen);

  return (
    <div className="tablets">
      <div className="tablets__paths">
        <Link
          className='tablets__path-home'
          to={ReactRoutes.Home}
        ></Link>

        <div
          className="tablets__icon tablets__icon--right-arrow"
        ></div>

        <Link
          className='tablets__path-main'
          to={ReactRoutes.Tablets}
        >
          Tablets
        </Link>
      </div>

      <h2 className="tablets__title">
        Tablets
      </h2>

      <div className="tablets__count">
        {`${24} models`}
      </div>

      <div className="tablets__filters">
        <div className="tablets__filter tablets__filter--sortby">
          <div className="tablets__filter--text">
            Sort by
          </div>

          <select
            className='tablets__filter--select'
            value={filterBy}
            onChange={(event) => {
              setFilterBy(event.target.value)
            }}
          >
            <option
              className='tablets__option'
              value={FilterBy.All}
            >
              All
            </option>

            <option 
              className='tablets__option'
              value={FilterBy.Cheapest}
            >
              Price
            </option>

            <option 
              className='tablets__option'
              value={FilterBy.Alph}
            >
              Name
            </option>

            <option 
              className='tablets__option'
              value={FilterBy.Newest}
            >
              Newest
            </option>
          </select>
        </div>

        <div className="tablets__filter tablets__filter--perpage">
          <div className="tablets__filter--text">
            Per page
          </div>

          <select
            className='tablets__filter--select'
            value={perPage}
            onChange={(event) => {
              setPerPage(+event.target.value)
            }}
          >
            <option
              className='tablets__option'
              value={PerPage.All}
            >
              All
            </option>

            <option 
              className='tablets__option'
              value={PerPage.Four}
            >
              4
            </option>

            <option 
              className='tablets__option'
              value={PerPage.Eight}
            >
              8
            </option>

            <option 
              className='tablets__option'
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

      {tablets.length > 0 ? (
        // <ProductList
        //   products={visibleTablets}
        //   forSlider={false}
        // />
          <>Products</>
      ) : (
        <Loader/>
      )}
    </div>
  )
}