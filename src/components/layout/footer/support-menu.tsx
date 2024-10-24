'use client';

import clsx from 'clsx';
import { Menu } from '@/lib/shopify/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Accordion,AccordionItem,AccordionTrigger,AccordionContent } from '@/components/ui/accordion';


export function FooterMenuItem({ item }: { item: Menu }) {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname === item.path);

  useEffect(() => {
    setActive(pathname === item.path);
  }, [pathname, item.path]);

  return (
    <li>
      <Link
        href={item.path}
        className={clsx(
          'block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300',
          {
            'text-black dark:text-neutral-300': active
          }
        )}
      >
        {item.title}
      </Link>
    </li>
  );
}

export default function SupportUsMenu({ menu }: { menu: Menu[] }) {
  if (!menu.length) return null;

  return (
    <nav>
      <div className='block flex-none md:hidden'>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="About Us">
            <AccordionTrigger className="w-full">SUPPORT</AccordionTrigger>
            <AccordionContent className="w-full">
                <ul>  
                  {menu.map((item: Menu) => {
                    return <FooterMenuItem key={item.title} item={item} />;
                  })}
                </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className='hidden md:flex md:items-center'>
        <div className='flex flex-col gap-2 items-start justify-start'>
        <h3 className='text-lg font-bold'>SUPPORT</h3>
      <ul>  
        {menu.map((item: Menu) => {
          return <FooterMenuItem key={item.title} item={item} />;
        })}
      </ul>
      </div>
      </div>
    </nav>
  );
}
