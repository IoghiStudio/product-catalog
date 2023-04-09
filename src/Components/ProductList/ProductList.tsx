import { Phone } from '../../types/phone';
import { ProductCard } from '../ProductCard';
import './ProductList.scss';
import '../../styles/grid.scss';
import cn from 'classnames';

type Props = {
  products: Phone[];
  forSlider: boolean;
  cartItems: Phone[];
  favoriteItems: Phone[];
  onCartAdd: (phoneId: string) => void;
  onFavoriteAdd: (phoneId: string) => void;
  onFavoriteRemove: (phoneId: string) => void;
}

export const ProductList: React.FC<Props> = ({
  products,
  forSlider,
  cartItems,
  favoriteItems,
  onCartAdd,
  onFavoriteAdd,
  onFavoriteRemove,
}) => {
  const checkIfAlreadyInCart = (phoneId: string) => {
    return cartItems.some(item => item.phoneId === phoneId);
  }

  const checkIfAlreadyInFavorites = (phoneId: string) => {
    return favoriteItems.some(item => item.phoneId === phoneId);
  }

  return (
    <div 
      className={cn(
        'productlist',
        {
          'productlist--slider': forSlider,
        }
      )}
    >
      {products.map(product => (
          <div
            className="productlist__item"
            key={product.id}
          >
            <ProductCard
              product={product}
              alreadyInCart={checkIfAlreadyInCart(product.phoneId)}
              alreadyInFavorites={checkIfAlreadyInFavorites(product.phoneId)}
              onCartAdd={onCartAdd}
              onFavoriteAdd={onFavoriteAdd}
              onFavoriteRemove={onFavoriteRemove}
            />
          </div>
        ))}
    </div>
  )
}