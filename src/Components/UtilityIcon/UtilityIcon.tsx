import React from 'react';
import { NavLink } from 'react-router-dom';
import './UtilityIcon.scss';
import cn from 'classnames';

type Props = {
  url: string;
  modifier: string;
  quantity?: number;
  formenu?: boolean
}

export const UtilityIcon: React.FC<Props> = React.memo(
  ({
    url,
    modifier,
    quantity = 0,
    formenu = false
  }) => {
    return (
      <NavLink
        className={({ isActive }) => cn(
          "utilityicon",
          {
            "utilityicon--formenu": formenu,
            "utilityicon--active": isActive,
            "utilityicon--quantity": quantity > 0,
          }
        )}
        to={url}
      >
        <div
          className={cn(
            "utilityicon--icon",
            `utilityicon--${modifier}`,
            {
              "utilityicon--icon--formenu": formenu,
              "utilityicon--icon--quantity": quantity > 0,
            }
          )}
        ></div>

        {quantity > 0 && (
          <div className="utilityicon__quantity">
            {quantity}
          </div>
        )}
      </NavLink>
    )
  }
)