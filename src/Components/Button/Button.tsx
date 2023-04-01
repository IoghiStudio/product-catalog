import React, { useState } from 'react';
import './Button.scss';
import cn from 'classnames';
import { Sizes } from '../../types/sizes';

type Props = {
  text: string;
  size: string;
}

export const Button: React.FC<Props> = React.memo(
  ({ text, size }) => {
    return (
      <button 
        className={cn(
          "button",{
            "button--m": size === Sizes.M,
            "button--l": size === Sizes.L,
          }
        )}
      >
        {text}
      </button>
    )
  }
)