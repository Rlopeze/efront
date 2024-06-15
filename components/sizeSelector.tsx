import { useState } from 'react';
import { Button } from './ui/button';
import { Menubar, MenubarMenu } from './ui/menubar';

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export function SizeSelector({
  isOpen,
  setIsOpen,
  setSize,
  productSizes,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSize: React.Dispatch<React.SetStateAction<string>>;
  productSizes: { [key: string]: number };
}) {
  const [selected, setSelected] = useState('');
  // obtain key from  productSizes object
  const productSizesKeys = Object.keys(productSizes);
  const productSizesValues = Object.values(productSizes);
  return (
    <div>
      <div className='flex justify-between px-1 text-[0.6rem] text-gray-500'>
        <p>select size</p>
        <button
          type='button'
          className='cursor-pointer underline'
          onClick={() => setIsOpen(!isOpen)}
        >
          size guide
        </button>
      </div>
      <Menubar className='h-[5rem]'>
        <MenubarMenu>
          {sizes.map((size) => (
            <Button
              id={size}
              disabled={
                !productSizesKeys.includes(size) ||
                productSizesValues[sizes.indexOf(size)] === 0
              }
              variant='ghost'
              className={`${selected === size ? 'bg-slate-800 text-white' : 'text-black'} ${
                !productSizesKeys.includes(size) ||
                productSizesValues[sizes.indexOf(size)] === 0
                  ? 'line-through'
                  : ''
              } outline:none rounded-none text-[0.6rem] hover:bg-slate-800 hover:text-white`}
              onClick={() => {
                setSize(size);
                setSelected(size);
              }}
            >
              {size}
            </Button>
          ))}
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
