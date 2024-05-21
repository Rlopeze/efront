import { useRouter } from 'next/router';
import Layout from '../components/wrappers/Layout';
import { useGetProductDetailQuery } from './api/productsApi';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useGetProductDetailQuery(id);
  console.log(data);
  return (
    <Layout>
      <div>soy un producto</div>
    </Layout>
  );
};

export default ProductDetail;
