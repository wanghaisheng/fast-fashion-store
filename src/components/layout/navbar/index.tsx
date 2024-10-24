import CartModal from '@/components/cart/modal';
import LogoSquare from '@/components/logo-square';
import { getMenu } from '@/lib/shopify';
import { Menu } from '@/lib/shopify/types';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Search, { SearchSkeleton } from './search';
import Image from 'next/image';
import { MagnifyingGlassCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const { SITE_NAME } = process.env;

export async function Navbar() {
  const menu = await getMenu('main-menu');

  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="block flex-none md:hidden">
        <Suspense fallback={null}>
          <MobileMenu menu={menu} />
        </Suspense>
      </div>
      <div className="flex w-full space-x-5 lg:h-16">
        <div className="flex space-x-1 w-2/3">
          <div className='flex flex-initial items-center justify-center md:w-auto lg:h-12 md:h-8' >
          <Link
            href="/"
            prefetch={true}
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
            <Image src = "/logo.svg" alt = "logo" width={100} height={100} className='md:w-16 md:h-16 lg:h-22 lg:w-28' /> 
            </div>
          </Link>
          </div>
          <div className="flex items-center justify-center">
          {menu.length ? (
            <ul className="hidden gap-5 text-sm md:flex md:items-center">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    prefetch={true}
                    className="text-neutral-700 font-bold underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
          </div>
        </div>
        <div className='flex flex-1 items-center justify-end w-1/3 pl-5' >
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>
        
        <div className="flex justify-end w-auto pr-10">
          <div className="flex space-x-3 items-center justify-center">
          <CartModal />
          </div>
        </div>
      </div>
    </nav>
  );
}
