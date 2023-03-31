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
      {products.map(product => {
        const {
          id,
          phoneId,
          image,
          name,
          fullPrice,
          price,
          screen,
          capacity,
          ram,
        } = product;

        return (
          <div
            className="productlist__item"
            key={id}
          >
            <ProductCard
              phoneId={phoneId}
              image={image}
              name={name}
              fullPrice={fullPrice}
              price={price}
              screen={screen}
              capacity={capacity}
              ram={ram}
            />
          </div>
        )
      })}
    </div>
  )
}