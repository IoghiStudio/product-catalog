import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import './Nav.scss';
import { UtilityIcon } from '../UtilityIcon';
import { ReactRoutes } from '../../types/reactRoutes';

const paths = [
  {
    id: 1,
    url: ReactRoutes.Home,
    name: 'Home',
  },
  {
    id: 2,
    url: ReactRoutes.Phones,
    name: 'Phones',
  },
  {
    id: 3,
    url: ReactRoutes.Tablets,
    name: 'Tablets',
  },
  {
    id: 4,
    url: ReactRoutes.Accessories,
    name: 'Accessories',
  },
];

type Props = {
  cartCount: number;
  favCount: number;
  formenu?: boolean;
  isMenuOpen?: boolean
  handleMenu?: () => void;
}

export const Nav: React.FC<Props> = React.memo(
  ({ 
    cartCount,
    favCount,
    formenu = false,
    isMenuOpen = false,
    handleMenu = () => {}
  }) => {
    return (
      <nav
        className={cn(
          'nav',
          {
            'nav--formenu': formenu,
          }
        )}
      >
        <ul
          className={cn(
            'nav__list',
            {
              'nav__list--formenu': formenu,
            }
          )}
        >
          {paths.map(path => {
            const { id, url, name } = path;
  
            return (
              <li
                key={id}
                className="nav__item"
                onClick={() => {
                  if (isMenuOpen) {
                    handleMenu();
                  }
                }}
              >
                <NavLink
                  className={({ isActive }) => cn(
                    "nav__link",
                    {
                      "nav__link--active": isActive,
                      "nav__link--active--formenu": isActive && formenu
                    }
                  )}
                  to={`${url}`}
                >
                  {name}
                </NavLink>
              </li>
            )
          })}
        </ul>
  
        <div className="nav__icons">
          <UtilityIcon
            url={ReactRoutes.Favorites}
            modifier='fav'
            quantity={favCount}
            formenu={formenu}
          />
  
          <UtilityIcon
            url={ReactRoutes.Cart}
            modifier='cart'
            quantity={cartCount}
            formenu={formenu}
          />
        </div>
      </nav>
    )
  }
)