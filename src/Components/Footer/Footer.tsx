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
      <div className="footer__logo">
        <Logo
          defaultBig={true}
        />
      </div>

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

      <div className="footer__back">
        <p className="footer__back--text">
          back to top
        </p>

        <a
          href='#top'
          className="footer__back--button-container"
        >
          <div className="footer__back--button"></div>
        </a>
      </div>
    </div>
  )
}