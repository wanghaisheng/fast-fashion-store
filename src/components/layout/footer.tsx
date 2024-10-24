import Link from 'next/link';



import { getMenu } from '@/lib/shopify';
import { Suspense } from 'react';
import AboutUsMenu from '@/components/layout/footer/aboutus-menu';
import SupportUsMenu from './footer/support-menu';
import { Sign } from 'crypto';
import SignupAndSave from './footer/signup-and-save';
import ContactUsFooterMenu from './footer/contact-us';
import { Contact } from 'lucide-react';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
  const menu = await getMenu('footer');
  const supportMenu = await getMenu('support-menu');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="text-sm text-black dark:text-neutral-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm md:flex-row md:space-x-20 md:gap-12 md:px-4 min-[1320px]:px-0 dark:border-neutral-700">
        <Suspense
          fallback={
            <div className="flex h-[188px] w-[200px] flex-col gap-2">
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
            </div>
          }
        >
          <AboutUsMenu menu={menu} />
          <SupportUsMenu menu={supportMenu} />
          <SignupAndSave />
          <ContactUsFooterMenu />
        </Suspense>
      </div>
      
    </footer>
  );
}
