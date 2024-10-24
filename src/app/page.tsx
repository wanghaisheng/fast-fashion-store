import BannerPage from '@/components/banner/banner-page';
import { Carousel } from '@/components/carousel';
import { FeaturedProductsForCollection } from '@/components/featured-products';
import { ThreeItemGrid } from '@/components/grid/three-items';
import Footer from '@/components/layout/footer';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <div className='flex flex-col space-y-10'>
      <BannerPage />
      <FeaturedProductsForCollection collection='necklaces' path='necklaces'/>
      <FeaturedProductsForCollection collection='earrings' path="ear-rings" />
      <FeaturedProductsForCollection collection='rings' path="rings" />
      <Footer />
    </div>
  );
}
