import { AddToCart } from "@/components/cart/add-to-cart";
import Price from "@/components/price";
import Prose from "@/components/prose";
import { Product } from "@/lib/shopify/types";
import { VariantSelector } from "./variant-selector";
import clsx from 'clsx';

export function ProductDescription({ product }: { product: Product }) {
  const amount = product.priceRange.minVariantPrice.amount;
  const compareAmount =  product.compareAtPriceRange?.maxVariantPrice.amount;
  const discounted = compareAmount && compareAmount !== amount && parseInt(compareAmount) > 0;
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h3 className="mb-3 text-2xl font-medium text-wrap">{product.title}</h3>
        <div className="flex flex-row items-center space-x-3">
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            <Price
              className= {clsx('flex-none text-xl text-neutral-600 dark:text-neutral-400',{
                'text-red-800': discounted
              })}
              amount={product.priceRange.minVariantPrice.amount}
              currencyCode={product.priceRange.maxVariantPrice.currencyCode}
            />
          </div>
          {product.compareAtPriceRange &&
          product.compareAtPriceRange.maxVariantPrice.amount >
            product.priceRange.maxVariantPrice.amount ? (
            <div className="flex flex-row items-center space-x-2">
              <div className="">
                <Price
                  className="text-sm text-neutral-600 dark:text-neutral-400 line-through"
                  amount={product.compareAtPriceRange.maxVariantPrice.amount}
                  currencyCode={
                    product.compareAtPriceRange.maxVariantPrice.currencyCode
                  }
                />
              </div>
            </div>
          ) : // Display Percentage Discount

          null}
        </div>
      </div>
      <VariantSelector options={product.options} variants={product.variants} />
      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm  leading-tight dark:text-white/[60%]"
          html={product.descriptionHtml}
        />
      ) : null}
      <AddToCart product={product} />
    </>
  );
}
