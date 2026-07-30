import QuoteForm from '@/components/sections/QuoteForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Estimate | C Hernandez Construction – Ceres & Modesto CA',
  description: 'Request a free, no-obligation estimate from C Hernandez Construction. Framing, ADUs, room additions and general contracting in Ceres, Modesto and the Central Valley.',
};

export default function ContactPage() {
  return (
    <>
      <div style={{ paddingTop: '80px', background: '#080e1d' }}>
        <div className="container" style={{ paddingTop: '48px', paddingBottom: '0', textAlign: 'center' }}>
          <div className="section-chip" style={{ margin: '0 auto 20px' }}>Contact</div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', color: '#fff', letterSpacing: '-0.04em', marginBottom: '14px' }}>
            Get a <span className="text-gradient">Free Estimate</span>
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
            Tell us about your project and we'll get back to you within 24 hours with a free, no-pressure estimate.
          </p>
        </div>
      </div>
      <QuoteForm />
    </>
  );
}
