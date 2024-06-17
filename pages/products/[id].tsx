/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaRegHeart, FaRegCopy } from 'react-icons/fa6';
import { IoIosArrowForward } from 'react-icons/io';
import { toast } from 'sonner';

import { useDispatch } from 'react-redux';

import Layout from '../../components/wrappers/Layout';
import { Button } from '../../components/ui/button';
import { setCartItem } from '../../redux/features/shopCartSlice';

import { useGetProductDetailQuery } from '../api/productsApi';
import { SizeSelector } from '../../components/sizeSelector';
import { Separator } from '../../components/ui/separator';
import { Drawer, DrawerType } from '../../components/drawer';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [descriptionDrawerOpen, setDescriptionDrawerOpen] = useState(false);
  const [deliveryDrawerOpen, setDeliveryOpen] = useState(false);
  const [sizesGuideDrawerOpen, setSizesGuideDrawerOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const { data, isLoading } = useGetProductDetailQuery(id);
  const dispatch = useDispatch();
  const setItemToCart = () => {
    const cartItem = {
      product: data.id,
      name: data.name,
      price: data.price,
      image: data.image,
      size: selectedSize,

      // TO DO add stock and quantity
    };
    dispatch(setCartItem(cartItem));
  };
  // TODO MAKE DIFFERENT COMPONENTS -> IMAGES, INFO PRODUCT, SIZES, REVIEWS

  return (
    <Layout>
      {!isLoading && (
        <div className='grid w-full grid-cols-2'>
          <div className='flex flex-row'>
            <div className='relative ml-10 h-[40rem] w-[25rem]'>
              <Image
                src={data.image ? data.image : '/product-image-placeholder.png'}
                sizes='50vw'
                alt='Product'
                quality={100}
                fill
              />
            </div>
            <div className='relative ml-10 h-[40rem] w-[25rem]'>
              <Image
                src={data.image ? data.image : '/product-image-placeholder.png'}
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
              <div className='flex flex-row gap-x-10 py-8'>
                <FaRegHeart className='cursor-pointer' />
                <FaRegCopy
                  className='cursor-pointer'
                  onClick={() => toast('¡Se ha copiado el link del producto!')}
                />
              </div>
              <SizeSelector
                isOpen={sizesGuideDrawerOpen}
                setIsOpen={setSizesGuideDrawerOpen}
                setSize={setSelectedSize}
              />
              <Button
                onClick={setItemToCart}
                className='my-5 w-full rounded-full text-xs'
              >
                ADD TO BAG
              </Button>
              <Separator className='my-2' />
              <div
                className='flex w-full cursor-pointer justify-between px-4 py-3'
                onClick={() => setDescriptionDrawerOpen(!descriptionDrawerOpen)}
              >
                <p className='text-[0.6rem] font-bold text-black'>
                  DESCRIPTION
                </p>
                <IoIosArrowForward />
              </div>
              <div
                className='flex w-full cursor-pointer justify-between px-4 py-3'
                onClick={() => setDeliveryOpen(!deliveryDrawerOpen)}
              >
                <p className='text-[0.6rem] font-bold text-black'>
                  DELIVERY & RETURNS
                </p>
                <IoIosArrowForward />
              </div>
            </div>
          </div>
        </div>
      )}
      <Drawer
        isOpen={descriptionDrawerOpen}
        setIsOpen={setDescriptionDrawerOpen}
        type={DrawerType.ProductDescription}
      />
      <Drawer
        isOpen={deliveryDrawerOpen}
        setIsOpen={setDeliveryOpen}
        type={DrawerType.Delivery}
      />
      <Drawer
        isOpen={sizesGuideDrawerOpen}
        setIsOpen={setSizesGuideDrawerOpen}
        type={DrawerType.Size}
      />
    </Layout>
  );
};

export default ProductDetail;
