import React from 'react';
import { useState, useEffect } from 'react';
import { Logo } from '../Logo';
import { Nav } from '../Nav';
import './Header.scss';
import cn from 'classnames';

type Props = {
  cartCount: number;
  favCount: number;
  handleMenu: () => void;
  isMenuOpen: boolean;
}

export const Header: React.FC<Props> = React.memo(
  ({
    cartCount,
    favCount,
    handleMenu,
    isMenuOpen,
  }) => {
    const [windowWidth, setWindowSize] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleWindowResize = () => {
        setWindowSize(window.innerWidth);
      };
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    });
  
    return (
      <header className="header">
        <Logo
          defaultBig={false}
        />
  
        {windowWidth >= 640 ? (
          <Nav
            cartCount={cartCount}
            favCount={favCount}
          />
        ) : (
          <div
            className='header__icon'
            onClick={handleMenu}
          >
            <div
              className={cn(
                "header__icon--icon",
                {
                  "header__icon--menu": !isMenuOpen,
                  "header__icon--close": isMenuOpen,
                }
              )}
            ></div>
          </div>
        )}


      </header>
    );
  }
);