import { Phone } from '../../types/phone';
import { ProductCard } from '../ProductCard';
import './ProductList.scss';
import '../../styles/grid.scss';
import cn from 'classnames';

type Props = {
  products: Phone[];
  forSlider: boolean;
}

export const ProductList: React.FC<Props> = ({
  products,
  forSlider
}) => {
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
            />
          </div>
        ))}
    </div>
  )
}