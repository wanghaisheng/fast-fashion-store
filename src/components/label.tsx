import clsx from 'clsx';
import Price from './price';

const Label = ({
  title,
  amount,
  compareAmount,
  currencyCode,
  position = 'bottom'
}: {
  title: string;
  amount: string;
  compareAmount?: string;
  currencyCode: string;
  position?: 'bottom' | 'center';
}) => {

  const discounted = compareAmount && compareAmount !== amount && parseInt(compareAmount) > 0;
  return (
    
      <div className="flex flex-col space-y-2 items-center  bg-white/70 p-2 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
        <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">{title}</h3>
        <div className='flex flex-row items-center space-x-2'>
        <Price
          className= {clsx('flex-none text-sm text-neutral-600 dark:text-neutral-400',{
            'text-red-800': discounted
          })}
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
        {compareAmount && compareAmount !== amount &&  parseInt(compareAmount) > 0 ? (
          <div className="flex flex-row items-center space-x-2">
            <div className="text-sm text-neutral-600 dark:text-neutral-400 line-through">
              <Price
                amount={compareAmount}
                currencyCode={currencyCode}
                currencyCodeClassName="hidden @[275px]/label:inline"
              />
            </div>
          </div>
        ) : null}
        </div>
      </div>
    
  );
};

export default Label;
