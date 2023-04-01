import React from 'react';
import { Sizes } from '../../types/sizes';
import './HeartIcon.scss';
import cn from 'classnames';

type Props = {
  size: Sizes;
}

export const HeartIcon: React.FC<Props> = ({ size }) => {
  return (
    <div
      className={cn(
        "hearticon",
        {
          "hearticon--m": size === Sizes.M,
          "hearticon--l": size === Sizes.L
        }
      )}
    >
      <div className="hearticon--icon"></div>
    </div>
  );
}