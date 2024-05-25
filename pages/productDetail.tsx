import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import Layout from '../components/wrappers/Layout';
import { Button } from '../components/ui/button';

import { setCartItem } from '../redux/features/shopCartSlice';

import { useGetProductDetailQuery } from './api/productsApi';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useGetProductDetailQuery(id);
  const dispatch = useDispatch();
  const setItemToCart = () => {
    const cartItem = {
      product: data.id,
      name: data.name,
      price: data.price,
      image: data.image,
      // TO DO add stock and quantity
    };
    dispatch(setCartItem(cartItem));
  };

  return (
    <Layout>
      <div>soy un producto</div>
      {/* add disabled if stock <= 0 in button */}
      <Button onClick={setItemToCart}>Add to cart</Button>
    </Layout>
  );
};

export default ProductDetail;
