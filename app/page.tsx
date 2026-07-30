import HeroSection from '@/components/sections/HeroSection';
import StatsBar from '@/components/sections/StatsBar';
import StatsCounter from '@/components/sections/StatsCounter';
import ServicesSection from '@/components/sections/ServicesSection';
import HowWeWork from '@/components/sections/HowWeWork';
import ReviewsSection from '@/components/sections/ReviewsSection';
import PortfolioPreview from '@/components/sections/PortfolioPreview';
import QuoteForm from '@/components/sections/QuoteForm';
import WhyUsSection from '@/components/sections/WhyUsSection';
import ServiceAreaSection from '@/components/sections/ServiceAreaSection';
import VideoCarousel from '@/components/VideoCarousel';
import BuildZoomSection from '@/components/sections/BuildZoomSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsCounter />
      <ServicesSection />
      <HowWeWork />
      <WhyUsSection />
      <PortfolioPreview />
      <VideoCarousel />
      <ReviewsSection />
      <ServiceAreaSection />
      <BuildZoomSection />
      <QuoteForm />
    </>
  );
}
