import React from 'react';
import { Logo } from '../Logo';
import { Nav } from '../Nav';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <Logo />

      <Nav />
    </header>
  )
}