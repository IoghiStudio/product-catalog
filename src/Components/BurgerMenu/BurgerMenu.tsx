import { Nav } from '../Nav';
import './BurgerMenu.scss';

type Props = {
  cartCount: number;
  favCount: number;
  handleMenu: () => void;
  isMenuOpen: boolean
}

export const BurgerMenu: React.FC<Props> = ({
  cartCount,
  favCount,
  handleMenu,
  isMenuOpen
}) => {
  return (
    <div className="burgermenu">
      <Nav
        cartCount={cartCount}
        favCount={favCount}
        formenu={true}
        handleMenu={handleMenu}
        isMenuOpen={isMenuOpen}
      />
    </div>
  )
}