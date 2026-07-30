import HeroSection from '@/components/sections/HeroSection';
import StatsBar from '@/components/sections/StatsBar';
import ServicesSection from '@/components/sections/ServicesSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import PortfolioPreview from '@/components/sections/PortfolioPreview';
import QuoteForm from '@/components/sections/QuoteForm';
import WhyUsSection from '@/components/sections/WhyUsSection';
import ServiceAreaSection from '@/components/sections/ServiceAreaSection';
import VideoCarousel from '@/components/VideoCarousel';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <WhyUsSection />
      <PortfolioPreview />
      <VideoCarousel />
      <ReviewsSection />
      <ServiceAreaSection />
      <QuoteForm />
    </>
  );
}
