import React from 'react';
import { Logo } from '../Logo';
import './Footer.scss';

export const Footer = () => {
  return (
    <div className='footer'>
      <Logo
        defaultBig={true}
      />

      <ul className='footer__list'>

      </ul>
    </div>
  )
}