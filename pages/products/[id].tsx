import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import Layout from '../../components/wrappers/Layout';
import { Button } from '../../components/ui/button';

import { setCartItem } from '../../redux/features/shopCartSlice';

import { useGetProductDetailQuery } from '../api/productsApi';
import { SizeSelector } from '../../components/sizeSelector';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useGetProductDetailQuery(id);
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
  // TODO MAKE DIFFERENT COMPONENTS -> INFO PRODUCT, SIZES, REVIEWS
  return (
    <Layout>
      {!isLoading && (
        <div className='grid w-full grid-cols-2'>
          <div className='flex flex-row'>
            <div className='relative ml-10 h-[40rem] w-[25rem]'>
              <Image
                src={data.image}
                sizes='50vw'
                alt='Product'
                quality={100}
                fill
              />
            </div>
            <div className='relative ml-10 h-[40rem] w-[25rem]'>
              <Image
                src={data.image}
                sizes='50vw'
                alt='Product'
                quality={100}
                fill
              />
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='mt-10 flex flex-col items-center'>
              <h1 className='text-[0.9rem] font-bold'>
                {data.name.toUpperCase()}
              </h1>
              <h2 className='text-[0.5rem] text-slate-400'>
                {data.description.toUpperCase()}
              </h2>
              <p className='text-[0.6rem] font-bold'>CLP${data.price}</p>
              <SizeSelector />
              <Button
                onClick={setItemToCart}
                className='w-full rounded-full text-xs'
              >
                ADD TO BAG
              </Button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ProductDetail;
