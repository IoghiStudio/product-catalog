import React from 'react';
import { Logo } from '../Logo';
import './Footer.scss';

const footerLinks = [
  {
    id: 1,
    url: 'https://github.com/IoghiStudio/product-catalog',
    name: 'Github'
  },
  {
    id: 2,
    url: '/',
    name: 'Contacts'
  },
  {
    id: 3,
    url: '/',
    name: 'Rights'
  },
]

export const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__logo">
        <Logo
          defaultBig={true}
        />
      </div>

      <ul className='footer__list'>
        {footerLinks.map(link => {
          const { id, url, name} = link;

          return (
            <li key={id} className='footer__item'>
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

      <div className="footer__back">
        <p className="footer__back--text">
          back to top
        </p>

        <div
          // onClick={}
          className="footer__back--button-container"
        >
          <div className="footer__back--button"></div>
        </div>
      </div>
    </div>
  )
}