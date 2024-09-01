import CartModal from '@/components/cart/modal';
import LogoSquare from '@/components/logo-square';
import { getMenu } from '@/lib/shopify';
import { Menu } from '@/lib/shopify/types';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Search, { SearchSkeleton } from './search';
import Image from 'next/image';

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
      <div className="flex w-full lg:h-16">
        <div className="flex w-full ">
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
          {menu.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    prefetch={true}
                    className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="flex justify-end">
          <CartModal />
        </div>
      </div>
    </nav>
  );
}
