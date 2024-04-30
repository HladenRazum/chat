import { cn } from '@/lib/utils';

type Props = {
  isOnline: boolean;
};

export default function OnlineIndicator({ isOnline }: Props) {
  const wrapperClasses = isOnline
    ? 'bg-green-100 border-green-700'
    : 'bg-red-100 border-red-700';
  const dotClasses = isOnline ? 'bg-green-700' : 'bg-red-700';
  const textClasses = isOnline ? 'text-green-700' : 'text-red-700';
  const text = isOnline ? 'You are online' : 'You are offline';

  return (
    <div
      className={cn(
        'flex gap-2 rounded-full items-center max-w-fit px-2 py-1 border',
        wrapperClasses
      )}
    >
      <span className={cn('w-2 h-2 rounded-full', dotClasses)}></span>
      <p className={cn('text-xs', textClasses)}>{text}</p>
    </div>
  );
}
