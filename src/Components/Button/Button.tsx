import React from 'react';
import './Button.scss';
import cn from 'classnames';
import { Sizes } from '../../types/sizes';

type Props = {
  text: string;
  size: Sizes;
  selected: boolean;
}

export const Button: React.FC<Props> = React.memo(
  ({ text, size, selected }) => {
    return (
      <button 
        className={cn(
          "button", 
          {
            "button--m": size === Sizes.M,
            "button--l": size === Sizes.L,
            "button--selected": selected
          }
        )}
      >
        {text}
      </button>
    )
  }
)