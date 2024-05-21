/* eslint-disable jsx-a11y/label-has-associated-control */
import Layout from '../components/wrappers/Layout';
import { ScrollArea } from '../components/ui/scroll-area';
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from '../components/ui/accordion';
import { Checkbox } from '../components/ui/checkbox';

const AccordionItemContent = ({ title }: { title: string }) => (
  <AccordionItem value={title.toLowerCase()}>
    <AccordionTrigger>{title}</AccordionTrigger>
    <AccordionContent>
      <div className='items-top flex space-x-2'>
        <Checkbox id={title.toLowerCase()} />
        <div className='grid gap-1.5 leading-none'>
          <label
            htmlFor={title.toLowerCase()}
            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            Low to High
          </label>
        </div>
      </div>
    </AccordionContent>
  </AccordionItem>
);

const Product = () => {
  const accordionItems = [
    'SORT BY',
    'PRODUCT TYPE',
    'SIZE',
    'FEATURES',
    'FIT',
    'ACTIVITY',
    'COLLECTION',
    'COLOR',
    'PATTERN',
    'DISCOUNT',
    'PRICE',
  ];

  return (
    <Layout>
      <ScrollArea className='ml-[2%] h-[35rem] w-56 rounded-md border border-none'>
        <div className='p-4'>
          <Accordion type='single' collapsible>
            {accordionItems.map((item) => (
              <AccordionItemContent key={item} title={item} />
            ))}
          </Accordion>
        </div>
      </ScrollArea>
    </Layout>
  );
};

export default Product;
