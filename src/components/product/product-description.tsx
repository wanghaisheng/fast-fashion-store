import { AddToCart } from "@/components/cart/add-to-cart";
import Price from "@/components/price";
import Prose from "@/components/prose";
import { Product } from "@/lib/shopify/types";
import { VariantSelector } from "./variant-selector";

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{product.title}</h1>
        <div className="flex flex-row items-center space-x-3">
          <div className="rounded-full bg-blue-600 p-2 text-sm text-white">
            <Price
              amount={product.priceRange.minVariantPrice.amount}
              currencyCode={product.priceRange.maxVariantPrice.currencyCode}
            />
          </div>
          {product.compareAtPriceRange &&
          product.compareAtPriceRange.maxVariantPrice.amount >
            product.priceRange.maxVariantPrice.amount ? (
            <div className="flex flex-row items-center space-x-2">
              <div className="text-sm text-neutral-600 dark:text-neutral-400 line-through">
                <Price
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
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={product.descriptionHtml}
        />
      ) : null}
      <AddToCart product={product} />
    </>
  );
}
