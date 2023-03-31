import React from 'react';
import { useState, useEffect } from 'react';
import { Logo } from '../Logo';
import { Nav } from '../Nav';
import './Header.scss';
// import cn from 'classnames';
import { UtilityIcon } from '../UtilityIcon';

export const Header = React.memo(
  () => {
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
          <Nav />
        ) : (
          <div
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            {!isMenuOpen ? (
              <UtilityIcon
                url='/menu'
                modifier='menu'
              />
            ) : (
              <UtilityIcon
                url='/'
                modifier='close'
              />
            )}
          </div>
        )}
      </header>
    );
  }
);