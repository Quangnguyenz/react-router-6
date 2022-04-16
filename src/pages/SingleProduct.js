import { Link, useParams } from 'react-router-dom'
import products from '../data'
const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId)
  return (
    <section className='section product'>
      <h4>{productId}</h4>
      <Link to="/products"></Link>
    </section>
  );
};

export default SingleProduct;
