import type { Metadata } from 'next';
import Link from 'next/link';
import { Camera, Phone, Star, ExternalLink } from 'lucide-react';
import WorkGallery from '@/components/WorkGallery';
import ReviewsSection from '@/components/sections/ReviewsSection';

export const metadata: Metadata = {
  title: 'Portfolio | C Hernandez Construction – Framing, ADUs & Additions',
  description: 'View real projects from C Hernandez Construction — residential framing, ADU construction, roofing, remodeling and more in Ceres, Modesto and the Central Valley.',
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: '140px', paddingBottom: '64px', background: 'linear-gradient(145deg, #040a16, #0a1428)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', justifyContent: 'center' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(255,183,3,0.12)', border: '1px solid rgba(255,183,3,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffb703' }}>
              <Camera size={24} />
            </div>
            <div className="section-chip" style={{ margin: 0 }}>Our Work</div>
          </div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: '900', color: '#fff', letterSpacing: '-0.04em', marginBottom: '16px' }}>
            Real Projects, <span className="text-gradient">Real Results</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.55)', maxWidth: '560px', margin: '0 auto 32px', lineHeight: 1.75 }}>
            Browse our work — framing, ADUs, roofing, remodeling and more across Ceres, Modesto and the Central Valley.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px' }}>
            <Link href="/contact" className="btn-primary">Get a Free Estimate →</Link>
            <a href="tel:+12092413765" className="btn-secondary"><Phone size={16} />(209) 241-3765</a>
          </div>

          {/* Google reviews badge */}
          <a
            href="https://maps.app.goo.gl/j9AH5qksBDwbx7v29"
            target="_blank"
            rel="noopener"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '12px',
              padding: '12px 22px', borderRadius: '16px',
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
              textDecoration: 'none',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div style={{ display: 'flex', gap: '2px', color: '#ffb703' }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <span style={{ fontSize: '15px', fontWeight: '800', color: '#fff' }}>5.0</span>
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}>· 9 Google reviews</span>
            <ExternalLink size={13} style={{ color: 'rgba(255,255,255,0.3)' }} />
          </a>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsSection />

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
