import { Nav } from '../Nav';
import './BurgerMenu.scss';

type Props = {
  cartCount: number;
  favCount: number;
}

export const BurgerMenu: React.FC<Props> = ({
  cartCount,
  favCount,
}) => {
  return (
    <div className="burgermenu">
      <Nav
        cartCount={cartCount}
        favCount={favCount}
        formenu={true}
      />
    </div>
  )
}