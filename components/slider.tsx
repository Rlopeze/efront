/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Card, CardContent, CardFooter } from './ui/card';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

export function CarouselPlugin({ products }: { products: any }) {
  return (
    <Carousel className='w-[100%]'>
      <CarouselContent className='overflow-x-auto'>
        {products.map((product: any, index: any) => (
          <Link
            href={{
              pathname: '/productDetail',
              query: {
                id: product.id,
              },
            }}
            key={index}
          >
            <CarouselItem key={index} className='basis-1/4'>
              <Card className='cursor-pointer rounded-none border-none'>
                <CardContent className='flex min-h-[30rem] px-0'>
                  <Image
                    src={product.image}
                    alt='product'
                    height={150}
                    width={1000}
                  />
                </CardContent>
                <CardFooter className='my-0 flex flex-col items-start justify-start px-0 pt-0.5'>
                  <p className='text-xs'>{product.description}</p>
                  <p className='text-[0.7rem] text-slate-500'>{product.name}</p>
                  <p className='text-[0.7rem] font-bold'>{product.price}</p>
                </CardFooter>
              </Card>
            </CarouselItem>
          </Link>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export function CarouselLoader() {
  return (
    <Carousel className='w-[100%]'>
      <CarouselContent className='overflow-x-auto'>
        {Array.from({ length: 5 }, (_, index) => (
          <CarouselItem key={index} className='basis-1/4'>
            <Card className='rounded-none border-none'>
              <CardContent className='flex min-h-[30rem] animate-pulse bg-slate-50 px-0 ' />
              <CardFooter className='my-0 flex flex-col items-start justify-start px-0 pt-0.5'>
                <div className='grid grid-cols-3 gap-2'>
                  <div className='col-span-10 h-2 rounded bg-slate-100' />
                  <div className='col-span-8 h-2 rounded bg-slate-100 ' />
                  <div className='col-span-6 h-2 rounded bg-slate-100 ' />
                </div>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
