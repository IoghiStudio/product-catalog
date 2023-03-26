import { useState, useEffect } from 'react';
import { Logo } from '../Logo';
import { Nav } from '../Nav';
import './Header.scss';
// import cn from 'classnames';
import { MenuIcon } from '../MenuIcon';

export const Header = () => {
  const [windowWidth, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);
    console.log(windowWidth)

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return (
    <header className="header">
      <Logo />

      {windowWidth >= 640 ? (
        <Nav />
      ) : (
        <MenuIcon />
      )}
    </header>
  )
}