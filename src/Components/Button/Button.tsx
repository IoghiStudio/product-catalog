import React from 'react';
import './Button.scss';

type Props = {
  text: string;
}

export const Button: React.FC<Props> = React.memo(
  ({ text }) => {
    return (
      <button className="button">
        {text}
      </button>
    )
  }
)