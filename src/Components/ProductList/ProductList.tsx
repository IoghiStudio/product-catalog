import { Phone } from '../../types/phone';
import { ProductCard } from '../ProductCard';
import './ProductList.scss';

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
          image,
          name,
          fullPrice,
          price,
          screen,
          capacity,
          ram,
        } = product;

        return (
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
        )
      })}
    </div>
  )
}