import { NavLink } from 'react-router-dom';
import './MenuIcon.scss';
import cn from 'classnames';

export const MenuIcon = () => {
  return (
    <div className="menuicon">
      <NavLink
        to='/menu'
        className={({ isActive }) => cn(
          "menuicon--icon",
          {
            "test": false
          }
        )}
      ></NavLink>
    </div>
  )
}