import { Button } from './ui/button';
import { Menubar, MenubarMenu } from './ui/menubar';

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export function SizeSelector() {
  return (
    <Menubar className='h-[5rem]'>
      <MenubarMenu>
        {sizes.map((size) => (
          <Button
            id={size}
            variant='ghost'
            className='outline:none rounded-none text-[0.6rem] hover:bg-slate-800 hover:text-white'
          >
            {size}
          </Button>
        ))}
      </MenubarMenu>
    </Menubar>
  );
}
