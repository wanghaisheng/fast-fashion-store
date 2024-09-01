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
  return (
    <div
      className={clsx('absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label', {
        'lg:px-20 lg:pb-[35%]': position === 'center'
      })}
    >
      <div className="flex space-x-1 items-center rounded-full border bg-white/70 p-2 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
        <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">{title}</h3>
        <Price
          className="flex-none rounded-full bg-blue-600 p-2 text-white"
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
