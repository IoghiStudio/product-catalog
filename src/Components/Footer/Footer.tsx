import React from 'react';
import { Logo } from '../Logo';
import './Footer.scss';

const footerLinks = [
  {
    url: '/',
    name: 'Github'
  },
  {
    url: '/',
    name: 'Contacts'
  },
  {
    url: '/',
    name: 'Rights'
  },
]

export const Footer = () => {
  return (
    <div className='footer'>
      <Logo
        defaultBig={true}
      />

      <ul className='footer__list'>
        {footerLinks.map(link => {
          const { url, name} = link;

          return (
            <li className='footer__item'>
              <a
                href={url}
                className='footer__link'
              >
                {name}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}