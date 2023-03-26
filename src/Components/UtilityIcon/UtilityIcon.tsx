import React from 'react';
import { NavLink } from 'react-router-dom';
import './UtilityIcon.scss';
import cn from 'classnames';

type Props = {
  url: string;
  modifier: string; 
}

export const UtilityIcon: React.FC<Props> = React.memo(
  ({
    url,
    modifier,
  }) => {
    console.log(window.location)
    return (
      <NavLink
        className={({ isActive }) => cn(
          "utilityicon",
          {
            "utilityicon--active": isActive
          }
        )}
        to={url}
      >
        <div
          className={cn(
            "utilityicon--icon",
            `utilityicon--${modifier}`,
          )}
        ></div>
      </NavLink>
    )
  }
)