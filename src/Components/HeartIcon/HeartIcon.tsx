import React from 'react';
import { Sizes } from '../../types/sizes';
import './HeartIcon.scss';
import cn from 'classnames';

type Props = {
  size: Sizes;
  selected: boolean;
}

export const HeartIcon: React.FC<Props> = ({ size, selected }) => {
  return (
    <div
      className={cn(
        "hearticon",
        {
          "hearticon--m": size === Sizes.M,
          "hearticon--l": size === Sizes.L,
          "hearticon--selected": selected,
        }
      )}
    >
      <div className={cn(
        "hearticon--icon",
        {
          "hearticon--icon--selected": selected,
        }
      )}></div>
    </div>
  );
}