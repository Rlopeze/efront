import { cn } from './ui/utils';

interface IHorizontalDividerProps {
  className?: string;
}
// TODO use shadcn component
function HorizontalDivider({ className = '' }: IHorizontalDividerProps) {
  return <div className={cn('h-[1px] w-full border-b', className)} />;
}

export default HorizontalDivider;
