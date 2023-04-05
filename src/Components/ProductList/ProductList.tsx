import { Phone } from '../../types/phone';
import { ProductCard } from '../ProductCard';
import './ProductList.scss';
import '../../styles/grid.scss';

type Props = {
  products: Phone[];
}

export const ProductList: React.FC<Props> = ({
  products,
}) => {
  return (
    <div className='productlist'>
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