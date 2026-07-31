import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ReviewsSection from '@/components/sections/ReviewsSection';
import QuoteCalculator from '@/components/QuoteCalculator';
import ContactFormSection from '@/components/sections/ContactFormSection';
import PortfolioPreview from '@/components/sections/PortfolioPreview';

export const metadata: Metadata = {
  title: 'Free Estimate | C Hernandez Construction – Ceres & Modesto CA',
  description: 'Request a free, no-obligation estimate from C Hernandez Construction. Framing, ADUs, room additions and general contracting in Ceres, Modesto and the Central Valley.',
  alternates: { canonical: 'https://www.chernandezconstructionchg.com/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        chip="Contact"
        iconName="phone"
        title="Get a Free"
        phrases={['Estimate Today', 'Same-Day Response', 'No Obligation Quote', 'Licensed & Insured Crew']}
        description="Use the estimator below to get a rough project cost, then request your free official quote."
        ctaLabel="Call (209) 241-3765"
        ctaHref="tel:+12092413765"
      />
      <ReviewsSection />
      <QuoteCalculator />
      <ContactFormSection />
      <PortfolioPreview />
    </>
  );
}
