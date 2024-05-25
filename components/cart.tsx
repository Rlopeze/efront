'use client';

import { useDispatch, useSelector } from 'react-redux';

import { Trash } from 'lucide-react';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from './ui/sheet';

import { cn } from './ui/utils';
import { removeCartItem } from '../redux/features/shopCartSlice';

export function ShopCart({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.shopCart);

  const removeCartItemHandler = (id: string) => {
    dispatch(removeCartItem(id));
  };

  return (
    <div className='grid grid-cols-2 gap-2'>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent
          className={cn(
            'flex h-lvh max-h-lvh w-[100%] flex-col gap-[0] p-0',
            'transition-[width] duration-300 ease-in-out'
          )}
        >
          <SheetHeader className='flex h-[5%] flex-row justify-center px-6'>
            <SheetTitle className='flex items-center gap-x-4 text-xs'>
              Tu Bolsa
            </SheetTitle>
          </SheetHeader>
          {cartItems.length > 0 ? (
            <SheetDescription className='flex h-[50%] flex-col items-center justify-center gap-x-4 gap-y-2 text-black'>
              {cartItems.map((item) => (
                <div className='flex w-full justify-between px-10'>
                  <h1>{item.name}</h1>
                  <Trash onClick={() => removeCartItemHandler(item.product)} />
                </div>
              ))}
              <Button className='text-xs'>Go to checkout</Button>
            </SheetDescription>
          ) : (
            <SheetDescription className='flex h-[80%] flex-col items-center justify-center gap-x-4 gap-y-10'>
              <h2>Tu bolsa se encuentra vacía 😥</h2>
              <div className='flex flex-row items-center justify-center gap-x-4'>
                <Button className='text-xs'>SHOP WOMEN</Button>
                <Button className='text-xs'>VIEW ACCESSORIES</Button>
              </div>
            </SheetDescription>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
