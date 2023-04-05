import {
  useCallback,
  useState, 
} from 'react';
import './HomePage.scss';
import cn from 'classnames';

enum Way {
  Prev = 'prev',
  Next = 'next'
}

export const HomePage = () => {
  const [bannerIndex, setBannerIndex] = useState<number>(0);

  const handleBannerChange = useCallback(
    (way: Way, index: number) => {
      if (way === Way.Prev) {
        if (index >= 1) {
          setBannerIndex(index - 1);
        } else {
          setBannerIndex(2);
        }
      } else if (way === Way.Next) {
        if (index <= 1) {
          setBannerIndex(index + 1);
        } else {
          setBannerIndex(0);
        }
      }
    },
    []
  );
  
  return (
    <div className='home'>
      <h1 className="home__title">
        Welcome to the Nice Gadgets store!
      </h1>
      
      <div className="home__banner">
        <div 
          className="home__icon-container"
          onClick={() => {
            handleBannerChange(Way.Prev, bannerIndex);
          }}
        >
          <div className="home__icon home__icon--left"></div>
        </div>
        
        <div
          className={cn(
            "home__banner-image",
            {
              "home__banner-image--first": bannerIndex === 0,
              "home__banner-image--second": bannerIndex === 1,
              "home__banner-image--third": bannerIndex === 2,
            }
          )}
        ></div>

        <div 
          className="home__icon-container"
          onClick={() => {
            handleBannerChange(Way.Next, bannerIndex);
          }}
        >
          <div className="home__icon home__icon--right"></div>
        </div>
      </div>

      <div className="home__dots">
        <div
          className={cn(
            "home__dot", {
              "home__dot--active": bannerIndex === 0,
            }
          )}
        ></div>

        <div
          className={cn(
            "home__dot", {
              "home__dot--active": bannerIndex === 1,
            }
          )}
        ></div>

        <div
          className={cn(
            "home__dot", {
              "home__dot--active": bannerIndex === 2,
            }
          )}
        ></div>
      </div>
    </div>
  )
}