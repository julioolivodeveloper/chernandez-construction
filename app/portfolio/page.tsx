import type { Metadata } from 'next';
import Link from 'next/link';
import { Camera, Phone } from 'lucide-react';
import WorkGallery from '@/components/WorkGallery';
import ReviewsSection from '@/components/sections/ReviewsSection';
import PageHero from '@/components/PageHero';
import VideoCarousel from '@/components/VideoCarousel';

export const metadata: Metadata = {
  title: 'Portfolio | C Hernandez Construction – Framing, ADUs & Additions',
  description: 'View real projects from C Hernandez Construction — residential framing, ADU construction, roofing, remodeling and more in Ceres, Modesto and the Central Valley.',
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        chip="Our Work"
        iconName="camera"
        title="Real Projects,"
        phrases={['Real Results', 'Framing · ADUs · Roofing', 'Ceres · Modesto · Central Valley', 'Licensed Contractor CA']}
        description="Browse our work — framing, ADUs, roofing, remodeling and more across Ceres, Modesto and the Central Valley."
        ctaLabel="Get a Free Estimate →"
      />

      {/* Reviews */}
      <ReviewsSection />

      {/* BuildZoom */}
      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '999px', background: 'rgba(234,88,12,0.1)', border: '1px solid rgba(234,88,12,0.3)', fontSize: '11px', fontWeight: '800', color: '#f97316', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '20px' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Verified on BuildZoom
          </div>

          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: '900', color: '#fff', marginBottom: '14px', letterSpacing: '-0.03em' }}>
            Licensed & <span style={{ color: '#f97316' }}>Verified Contractor</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', maxWidth: '520px', margin: '0 auto 40px', lineHeight: 1.7 }}>
            C Hernandez Construction is independently verified by BuildZoom — a trusted platform that checks contractor license, insurance and track record before listing.
          </p>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '28px' }} className="bz-grid">
            <div style={{ padding: '28px 20px', borderRadius: '18px', background: 'rgba(249,115,22,0.06)', border: '1px solid rgba(249,115,22,0.2)' }}>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '3rem', fontWeight: '900', color: '#f97316', lineHeight: 1, marginBottom: '10px' }}>95</div>
              <div style={{ fontSize: '11px', fontWeight: '800', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>BuildZoom Score</div>
            </div>
            <div style={{ padding: '28px 20px', borderRadius: '18px', background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)' }}>
              <div style={{ fontSize: '2.8rem', color: '#22c55e', lineHeight: 1, marginBottom: '10px' }}>✓</div>
              <div style={{ fontSize: '11px', fontWeight: '800', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>License Verified</div>
            </div>
            <div style={{ padding: '28px 20px', borderRadius: '18px', background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)' }}>
              <div style={{ fontSize: '2.8rem', color: '#22c55e', lineHeight: 1, marginBottom: '10px' }}>✓</div>
              <div style={{ fontSize: '11px', fontWeight: '800', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Insurance Confirmed</div>
            </div>
          </div>

          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '28px' }}>
            <div style={{ background: '#ea580c', padding: '16px 24px', fontWeight: '900', fontSize: '18px', color: '#fff', letterSpacing: '-0.02em' }}>
              BuildZoom
            </div>
            <div style={{ background: 'rgba(255,255,255,0.04)', padding: '16px 24px', textAlign: 'left' }}>
              <div style={{ fontSize: '10px', fontWeight: '700', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Lic. #1106454 · Ceres, CA</div>
              <div style={{ fontSize: '15px', fontWeight: '800', color: '#fff', marginTop: '2px' }}>C Hernandez Construction</div>
            </div>
          </div>

          <div>
            <a
              href="https://www.buildzoom.com/contractor/c-hernandez-construction-ca"
              target="_blank"
              rel="noopener"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '14px 32px', borderRadius: '999px',
                background: '#ea580c', color: '#fff',
                fontSize: '15px', fontWeight: '800', textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(234,88,12,0.35)',
                transition: 'all 0.2s',
              }}
            >
              View our profile on BuildZoom →
            </a>
          </div>
        </div>
      </section>

      {/* Videos */}
      <VideoCarousel />

      {/* Gallery */}
      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container">
          <WorkGallery />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0b1220', padding: '64px 0', borderTop: '1px solid rgba(255,183,3,0.1)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '14px' }}>
            Want Results Like These?
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '28px' }}>
            Call or message us for a free, no-obligation estimate on your project.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Request a Free Estimate →</Link>
            <a href="https://wa.link/roppnh" target="_blank" rel="noopener" className="btn-whatsapp">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
