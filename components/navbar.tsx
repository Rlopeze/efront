/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';
import { BsBag, IoPersonOutline, AiOutlineHeart } from '../utils/icons';
import { cn } from './ui/utils';
import SearchBar from './searchBar';
import { accesoriesTags, menTags, womenTags } from '../utils/navigation-tags';

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn('block select-none rounded-md py-1', className)}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        <p className='text-sm text-gray-500 hover:text-black'>{children}</p>
      </a>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = 'ListItem';

const NavigationMenuColumn = ({
  column,
}: {
  column: { title: string; items: { href: string; description: string }[] }[];
}) => (
  <div>
    {column.map((component, componentIndex) => (
      <div key={componentIndex} className='mb-6'>
        <h2 className='font-semibold'>{component.title}</h2>
        {component.items.map((item, itemIndex) => (
          <ListItem key={itemIndex} href={item.href}>
            {item.description}
          </ListItem>
        ))}
      </div>
    ))}
  </div>
);
const renderNavigationItems = (tags: any) => (
  <ul className='flex-cols flex h-[35rem] w-dvw gap-x-20'>
    {tags.map((column: any, columnIndex: number) => (
      <NavigationMenuColumn key={columnIndex} column={column} />
    ))}
  </ul>
);

const NavigationMenuItemWithContent = ({
  triggerText,
  contentItems,
}: {
  triggerText: string;
  contentItems: any;
}) => (
  <NavigationMenuItem>
    <NavigationMenuTrigger>{triggerText}</NavigationMenuTrigger>
    <NavigationMenuContent>
      {renderNavigationItems(contentItems)}
    </NavigationMenuContent>
  </NavigationMenuItem>
);

const Navbar = () => {
  const [input, setInput] = useState('');

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className='flex w-[10rem] justify-end'>
          <Link href='/'>
            <Image src='/Logo.jpeg' alt='Logo' width={100} height={100} />
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList className='w-[40rem] justify-end'>
        <NavigationMenuItemWithContent
          triggerText='Women'
          contentItems={womenTags}
        />
        <NavigationMenuItemWithContent
          triggerText='Mens'
          contentItems={menTags}
        />
        <NavigationMenuItemWithContent
          triggerText='Accessories'
          contentItems={accesoriesTags}
        />
      </NavigationMenuList>
      <NavigationMenuList className='mr-[5rem] gap-x-6'>
        <NavigationMenuItem>
          <SearchBar input={input} setInput={setInput} />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <AiOutlineHeart size={20} />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <IoPersonOutline size={20} />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <BsBag size={20} className='cursor-pointer' />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
