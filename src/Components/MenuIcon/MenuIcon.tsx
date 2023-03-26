import { NavLink } from 'react-router-dom';
import './MenuIcon.scss';
import cn from 'classnames';

export const MenuIcon = () => {
  return (
    <NavLink
      to='/menu'
      className={({ isActive }) => cn(
        "MenuIcon",
        {
          "test": false
        }
      )}
    ></NavLink>
  )
}