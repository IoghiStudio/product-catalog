import React from 'react';
import { Nav } from '../Nav';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="logo-img"></div>

      <Nav />
    </header>
  )
}