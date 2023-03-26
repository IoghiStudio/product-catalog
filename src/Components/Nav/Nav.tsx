import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import './Nav.scss';
import { UtilityIcon } from '../UtilityIcon';

const paths = [
  {
    url: '/',
    name: 'Home',
  },
  {
    url: '/phones',
    name: 'Phones',
  },
  {
    url: '/tablets',
    name: 'Tablets',
  },
  {
    url: '/accessories',
    name: 'Accessories',
  },
]

export const Nav = () => {
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        {paths.map(path => {
          const { url, name } = path;

          return (
            <li className="nav__item">
              <NavLink
                className={({ isActive }) => cn(
                  "nav__link",
                  {
                    "nav__link--active": isActive
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
          url='/favorites'
          modifier='fav'
        />

        <UtilityIcon
          url='/cart'
          modifier='cart'
        />
      </div>
    </nav>
  )
}