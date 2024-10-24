import { getCollectionProducts } from "@/lib/shopify";
import type { Product } from "@/lib/shopify/types";
import Link from "next/link";
import { GridTileImage } from "./grid/tile";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";


export  async function FeaturedProductsForCollection({
    collection,
    path
}: {
    collection: string;
    path: string;
}) {
    const featuedItems = await getCollectionProducts({
        collection: `hidden-${collection}-featured-items`,
    });

    if(featuedItems.length === 0) return null;

    const collectionName = collection.charAt(0).toUpperCase() + collection.slice(1);

    return (
        <div className="flex flex-col w-full p-5 space-y-10">
            <h3 className="col-span-6 text-4xl font-bold text-center justify-center">{collectionName}</h3>
            <div className={cn("grid md:grid-cols-4 sm:grid-cols-2 gap-4",{
                
            })}>
                {featuedItems.map((item, index) => (
                    <FeaturedProductItem
                        key={item.id}
                        item={item}
                        size='half'
                        priority={index === 0}
                    />
                ))}
            </div>
            <div className="flex flex-1 w-full item-center justify-center">
                <Link href={`/search/${path}`}>
                    <Button variant={"default"} className="bg-gradient-to-r from-purple-800 to-pink-600 hover:from-pink-500 hover:to-purple-800">View All</Button>
                </Link>
            </div>
        </div>
    );
}

function FeaturedProductItem({
    item,
    size,
    priority
  }: {
    item: Product;
    size: 'full' | 'half';
    priority?: boolean;
  }) {
    return (
      <div
        className={size === 'full' ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1 md:row-span-1'}
      >
        <Link
          className="relative block aspect-square h-full w-full"
          href={`/product/${item.handle}`}
          prefetch={true}
        >
          <GridTileImage
            src={item.featuredImage.url}
            fill
            sizes={
              size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'
            }
            priority={priority}
            alt={item.title}
            label={{
              position: size === 'full' ? 'center' : 'bottom',
              title: item.title as string,
              amount: item.priceRange.maxVariantPrice.amount,
              currencyCode: item.priceRange.maxVariantPrice.currencyCode
            }}
          />
        </Link>
      </div>
    );
  }
  
