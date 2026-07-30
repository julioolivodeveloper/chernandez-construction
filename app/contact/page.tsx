import QuoteForm from '@/components/sections/QuoteForm';
import type { Metadata } from 'next';
import { Phone } from 'lucide-react';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Free Estimate | C Hernandez Construction – Ceres & Modesto CA',
  description: 'Request a free, no-obligation estimate from C Hernandez Construction. Framing, ADUs, room additions and general contracting in Ceres, Modesto and the Central Valley.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        chip="Contact"
        iconName="phone"
        title="Get a Free"
        phrases={['Estimate Today', 'Same-Day Response', 'No Obligation Quote', 'Licensed & Insured Crew']}
        description="Tell us about your project and we'll get back to you within 24 hours with a free, no-pressure estimate."
        ctaLabel="Call (209) 241-3765"
        ctaHref="tel:+12092413765"
      />
      <QuoteForm />
    </>
  );
}
