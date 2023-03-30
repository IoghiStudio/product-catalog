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
    <ul className='productlist'>
      {products.map(product => {
        const {
          id,
          image,
          name,
          fullPrice,
          price,
          screen,
          capacity,
          ram,
        } = product;

        return (
          <li className="productlist__item">
            <ProductCard
              key={id}
              image={image}
              name={name}
              fullPrice={fullPrice}
              price={price}
              screen={screen}
              capacity={capacity}
              ram={ram}
            />
          </li>
        )
      })}
    </ul>
  )
}