import { Phone } from '../../types/phone';
import { ProductCard } from '../ProductCard';
import './ProductList.scss';
import '../../styles/grid.scss';
import cn from 'classnames';

type Props = {
  products: Phone[];
  forSlider: boolean;
  cartItems: Phone[];
  onAdd: (phoneId: string) => void;
}

export const ProductList: React.FC<Props> = ({
  products,
  forSlider,
  cartItems,
  onAdd
}) => {
  const checkIfAlreadyInCart = (phoneId: string) => {
    return cartItems.some(item => item.phoneId === phoneId);
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
              onAdd={onAdd}
            />
          </div>
        ))}
    </div>
  )
}