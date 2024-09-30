import clsx from 'clsx';
import Image from 'next/image';
import Label from '../label';
import ProductSaleLabel from '../product-sale';

export function GridTileImage({
  isInteractive = true,
  active,
  label,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    amount: string;
    compareAmount?: string;
    currencyCode: string;
    position?: 'bottom' | 'center';
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <div className='flex flex-col w-full h-full space-y-3'>
    <div
      className={clsx(
        'group flex h-full w-full items-center justify-center overflow-hidden   bg-white dark:bg-black',
        {
          relative: label,
          'border-2 border-blue-600': active,
          'border-neutral-200 dark:border-neutral-800': !active
        }
      )}
    >
      {props.src ? (
        <Image
          className={clsx('relative h-full w-full object-cover', {
            'transition duration-300 ease-in-out group-hover:scale-125': isInteractive
          })}
          {...props}
        />
      ) : null}
    </div>
    <div className='flex flex-col items-center justify-center'>
      {label ? (
        <Label
          title={label.title}
          amount={label.amount}
          currencyCode={label.currencyCode}
          compareAmount={label.compareAmount}
          position={label.position}
        />
      ) : null}
      </div>
    </div>
  );
}
