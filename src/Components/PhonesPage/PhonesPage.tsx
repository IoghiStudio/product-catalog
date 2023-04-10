import React, { useState, useEffect } from 'react';
import { Phone } from '../../types/phone';
import { ProductList } from '../ProductList';
import './PhonesPage.scss';
import '../../styles/grid.scss';
import { Link } from 'react-router-dom';
import { ReactRoutes } from '../../types/reactRoutes';
import { Loader } from '../Loader';
import { FilterBy } from '../../types/filterBy';
import { PerPage } from '../../types/perPage';
import cn from 'classnames';

type Props = {
  cartItems: Phone[];
  favoriteItems: Phone[];
  onCartAdd: (phoneId: string) => void;
  onFavoriteAdd: (phoneId: string) => void;
  onFavoriteRemove: (phoneId: string) => void;
}


export const PhonesPage: React.FC<Props> = ({
  cartItems,
  favoriteItems,
  onCartAdd,
  onFavoriteAdd,
  onFavoriteRemove
}) => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [visiblePhones, setViziblePhones] = useState<Phone[]>([]); 
  const [filterBy, setFilterBy] = useState<FilterBy | string>(FilterBy.Newest);
  const [perPage, setPerPage] = useState<PerPage>(PerPage.Four);

  const [currentPage, setCurrentPage] = useState(1);

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
          className='phones__path-main'
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
        <>
          <div className="phones__list">
            <ProductList
              products={visiblePhones}
              forSlider={false}
              cartItems={cartItems}
              favoriteItems={favoriteItems}
              onCartAdd={onCartAdd}
              onFavoriteAdd={onFavoriteAdd}
              onFavoriteRemove={onFavoriteRemove}
            />
          </div>

        <div className="phones__pagination">
          <div className="phones__icons">
            <div
              className={cn(
                "phones__icon-container",
                {
                  "phones__icon-container--disabled": currentPage === 1,
                }
              )}
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage(currentPage - 1);
                }
              }}
            >
              <div className={cn(
                "phones__icon",
                "phones__icon--left",
                {
                  "phones__icon--left--disabled": currentPage === 1,
                }
              )}></div>
            </div>
            
            <div
              className={cn(
                "phones__icon-container",
                {
                  "phones__icon-container--disabled": currentPage === 4,
                }
              )}
              onClick={() => {
                if (currentPage < 4) {
                  setCurrentPage(currentPage + 1);
                }
              }}
            >
              <div className={cn(
                "phones__icon",
                "phones__icon--right",
                {
                  "phones__icon--right--disabled": currentPage === 4,
                }
              )}></div>
            </div>
          </div>
        </div>
        </>
      ) : (
        <Loader/>
      )}
    </div>
  )
}