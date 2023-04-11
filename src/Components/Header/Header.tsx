import React from 'react';
import { useState, useEffect } from 'react';
import { Logo } from '../Logo';
import { Nav } from '../Nav';
import './Header.scss';
import { UtilityIcon } from '../UtilityIcon';

type Props = {
  cartCount: number;
  favCount: number;
}

export const Header: React.FC<Props> = React.memo(
  ({ cartCount, favCount }) => {
    const [windowWidth, setWindowSize] = useState(window.innerWidth);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  
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
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            {!isMenuOpen ? (
              <UtilityIcon
                url='/'
                modifier='menu'
                quantity={0}
              />
            ) : (
              <UtilityIcon
                url='/'
                modifier='close'
                quantity={0}
              />
            )}
          </div>
        )}
      </header>
    );
  }
);