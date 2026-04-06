import { Hero } from '@/components/hero';
import { FeaturedCars } from '@/components/featured-cars';
import { PopularBrands } from '@/components/popular-brands';
import CarVisualStories from '@/components/CarVisualStories';
import { visualStories } from '@/data/visualStories';
import { NewsSection } from '@/components/news-section';
import { ServicesSection } from '@/components/services-section';
import { StatsSection } from '@/components/stats-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { ContactPopup } from '@/components/contact-popup';

export default function HomePage() {
  return (
    <div className='overflow-hidden'>
      <Hero />

      <StatsSection />
      {/* <FeaturedCars /> */}
      {/* <PopularBrands /> */}
      <ServicesSection />

      <CarVisualStories stories={visualStories} />
      <TestimonialsSection />
      <NewsSection />
      <ContactPopup />
    </div>
  );
}
