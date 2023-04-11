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
  const [phonesForCurrentPage, setPhonesForCurrentPage] = useState<Phone[]>([]); 
  const [filterBy, setFilterBy] = useState<FilterBy | string>(FilterBy.Newest);
  const [perPage, setPerPage] = useState<PerPage>(PerPage.Sixteen);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetch('./phones.json')
      .then(resp => resp.json())
      .then(data => setPhones(data))
  }, [])

  useEffect(() => {
    setTotalPages(Math.ceil(phones.length / perPage));
    setCurrentPage(1);
  }, [phones, perPage]);

  useEffect(() => {
    const index = perPage * (currentPage - 1);
    const startingFromCurrentPage = visiblePhones.slice(index);

    setPhonesForCurrentPage(startingFromCurrentPage.slice(0, perPage));
  }, [currentPage, perPage, visiblePhones])

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
    setViziblePhones(sortedPhones);
    setCurrentPage(1);
  }, [phones, filterBy]);

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
              products={phonesForCurrentPage}
              forSlider={false}
              cartItems={cartItems}
              favoriteItems={favoriteItems}
              onCartAdd={onCartAdd}
              onFavoriteAdd={onFavoriteAdd}
              onFavoriteRemove={onFavoriteRemove}
            />
          </div>

        <div className="phones__pagination">
          <div className="phones__pagination-icons">
            <div
              className={cn(
                "phones__pagination-icon-container",
                {
                  "phones__pagination-icon-container--disabled": currentPage === 1,
                }
              )}
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage(currentPage - 1);
                }
              }}
            >
              <div className={cn(
                "phones__pagination-icon",
                "phones__pagination-icon--left",
                {
                  "phones__pagination-icon--left--disabled": currentPage === 1,
                }
              )}></div>
            </div>
            
            <div
              className="phones__pagination-icons
              phones__pagination-icons--middle"
            >
              {[...Array(totalPages).keys()].map(index => {
                const pageNumber = index + 1;

                return (
                  <div
                    className={cn(
                      "phones__pagination-page-icon",
                      {
                        "phones__pagination-page-icon--selected": currentPage === pageNumber
                      }
                    )}
                    onClick={() => setCurrentPage(pageNumber)}
                  >
                    {pageNumber}
                  </div>
                )
              })}
            </div>

            <div
              className={cn(
                "phones__pagination-icon-container",
                {
                  "phones__pagination-icon-container--disabled": currentPage === totalPages,
                }
              )}
              onClick={() => {
                if (currentPage < totalPages) {
                  setCurrentPage(currentPage + 1);
                }
              }}
            >
              <div className={cn(
                "phones__pagination-icon",
                "phones__pagination-icon--right",
                {
                  "phones__pagination-icon--right--disabled": currentPage === totalPages,
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