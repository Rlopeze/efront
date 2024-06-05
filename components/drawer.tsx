import { deliveryAndReturnTags } from '../utils/delivery-and-return-tags';
import { sizeTags } from '../utils/sizes-tags';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from './ui/sheet';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

export enum DrawerType {
  ProductDescription = 'Description',
  Delivery = 'Delivery & Returns',
  Size = 'Sizes Guide',
}

interface DrawerProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  type: DrawerType;
}
const renderBody = (type: DrawerType) => {
  switch (type) {
    case DrawerType.ProductDescription:
      return (
        <>
          <h4>FOR THE LEISURE LIFE, EVERYDAY, EVERYWEAR</h4>
          <p className='py-2 text-left text-xs'>
            Designed for that leisure life, everywear is your brand new capsule
            of superior essentials you can wear everyday, everywhere. Lifestyle
            and sportswear fashion collide to create the ultimate rest day
            uniform for leisure seekers.
          </p>
          <p className='py-2 text-xs'>
            Our no distraction, sculpted, fully-bonded short, with contoured
            bonded seams to the glutes with a high waist fit. Super wearable,
            clean, effortless style.
          </p>
          <ul className='py-2 text-xs'>
            <li>• Luxurious textiles</li>
            <li>• A classic streetwear look</li>
            <li>• Contouring seam lines maximise glutes and quads</li>
          </ul>
          <ul className='py-2 text-xs'>
            <li>SIZE & FIT</li>
            <li>• Body fit</li>
            <li>• 7&quot; inseam based on a size M</li>
            <li>• Model is 5&apos;9&quot; and wears size XS</li>
            <li>
              • This piece runs slightly small. If you&rsquo;re between sizes,
              we&rsquo;d suggest sizing up
            </li>
          </ul>
          <ul className='py-2 text-xs'>
            <li>MATERIALS & CARE</li>
            <li>• 58% Nylon, 42% Elastane</li>
            <li>
              • Max temp 30C, gentle. Iron cool 120C. Don’t bleach or tumble
              dry.
            </li>
          </ul>
          <p>SKU: B1C3B-ECJB</p>
        </>
      );
    case DrawerType.Delivery:
      return (
        <div>
          {deliveryAndReturnTags.map((item) => (
            <div key={item.title}>
              <h2 className='py-4 text-[0.8rem] font-bold text-gray-700'>
                {item.title}
              </h2>
              <p className='text-[0.7rem]'>• {item.description}</p>
            </div>
          ))}
        </div>
      );
    case DrawerType.Size:
      return (
        <Table>
          <TableHeader className='text-[0.6rem]'>
            <TableRow>
              {sizeTags.header.map((title) => (
                <TableHead
                  key={title}
                  className='self-center text-center font-bold text-black'
                >
                  {title}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className='text-center text-[0.6rem]'>
            {sizeTags.data.map((row) => (
              <TableRow
                key={row.id}
                className={`${row.id % 2 === 0 ? 'bg-gray-50' : ''}`}
              >
                <TableCell className='p-2 font-bold text-black'>
                  {row.size}
                </TableCell>
                <TableCell className='p-2'>{row.waist}</TableCell>
                <TableCell className='p-2'>{row.waist}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      );
    default:
      return null;
  }
};

export function Drawer({ isOpen, setIsOpen, type }: DrawerProps) {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className='min-w-[30rem] px-14'>
        <SheetHeader>
          <SheetTitle className='py-10 uppercase'>{type}</SheetTitle>
        </SheetHeader>
        <SheetDescription className='pr-10'>
          {renderBody(type)}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
