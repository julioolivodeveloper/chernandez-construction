import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, MapPin, Phone, Clock, Star, ExternalLink } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ReviewsSection from '@/components/sections/ReviewsSection';
import PortfolioPreview from '@/components/sections/PortfolioPreview';
import VideoCarousel from '@/components/VideoCarousel';
import BuildZoomSection from '@/components/sections/BuildZoomSection';
import WorkGallery from '@/components/WorkGallery';

export const metadata: Metadata = {
  title: 'About Us | C Hernandez Construction – Licensed Contractor Ceres CA',
  description: 'C Hernandez Construction is a licensed general contractor (Lic. #1106454) based in Ceres, CA, specializing in residential framing, ADUs and additions in the Central Valley.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        chip="About Us"
        iconName="shield"
        title="Building the Central Valley —"
        phrases={['One Frame at a Time', 'Licensed Since Day One', 'Trusted in Ceres & Modesto', 'Lic. #1106454']}
        description="C Hernandez Construction is a licensed general contractor specializing in residential framing, ADUs and additions in Ceres, Modesto and surrounding areas of the Central Valley."
        ctaLabel="Start Your Project →"
      />
      <ReviewsSection />

      {/* Business info */}
      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }} className="about-grid">

            <div>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.9rem', fontWeight: '800', color: '#fff', marginBottom: '20px' }}>
                Who We Are
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '16px' }}>
                We are a California-licensed general contractor focused on quality residential construction. Our core specialties are structural framing, ADU construction, and room additions — the kind of work that requires precision and accountability.
              </p>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '24px' }}>
                We serve homeowners and property owners across the Central Valley. We work with proper permits, follow building codes, and communicate clearly throughout every project.
              </p>
              <Link href="/contact" className="btn-primary">
                Start Your Project →
              </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* License */}
              <div style={{ padding: '20px', borderRadius: '16px', background: 'rgba(255,183,3,0.07)', border: '1px solid rgba(255,183,3,0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <Shield size={18} style={{ color: '#ffb703' }} />
                  <span style={{ fontSize: '13px', fontWeight: '800', color: '#ffb703', textTransform: 'uppercase', letterSpacing: '0.1em' }}>License</span>
                </div>
                <div style={{ fontSize: '16px', fontWeight: '800', color: '#fff' }}>CA License #1106454</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginTop: '4px' }}>California General Contractor</div>
              </div>

              <div style={{ padding: '20px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <Phone size={18} style={{ color: '#ffb703' }} />
                  <span style={{ fontSize: '13px', fontWeight: '800', color: '#ffb703', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Phone</span>
                </div>
                <a href="tel:+12092413765" style={{ fontSize: '18px', fontWeight: '800', color: '#fff', textDecoration: 'none' }}>(209) 241-3765</a>
              </div>

              <div style={{ padding: '20px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <MapPin size={18} style={{ color: '#ffb703' }} />
                  <span style={{ fontSize: '13px', fontWeight: '800', color: '#ffb703', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Service Area</span>
                </div>
                <div style={{ fontSize: '15px', fontWeight: '700', color: '#fff' }}>Ceres · Modesto · Turlock</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}>Salida · Riverbank · Patterson & more</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '6px' }}>Service-area business — we come to you</div>
              </div>

              <div style={{ padding: '20px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <Clock size={18} style={{ color: '#ffb703' }} />
                  <span style={{ fontSize: '13px', fontWeight: '800', color: '#ffb703', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Hours</span>
                </div>
                <div style={{ fontSize: '15px', fontWeight: '700', color: '#fff' }}>Monday – Saturday</div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)' }}>7:00 AM – 6:00 PM</div>
              </div>

              <a
                href="https://g.page/r/Cd9A2YrEOL6VEAE/review"
                target="_blank"
                rel="noopener"
                style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  padding: '18px 20px', borderRadius: '16px',
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                  textDecoration: 'none', transition: 'all 0.2s',
                }}
              >
                <div style={{ display: 'flex', gap: '2px', color: '#ffb703' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#fff' }}>5.0 · 9 Reviews on Google</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>Read our reviews →</div>
                </div>
                <ExternalLink size={14} style={{ color: 'rgba(255,255,255,0.25)', marginLeft: 'auto' }} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <PortfolioPreview />

      {/* Video Carousel */}
      <VideoCarousel />

      {/* Photo Gallery */}
      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 16px', borderRadius: '999px', background: 'rgba(255,183,3,0.08)', border: '1px solid rgba(255,183,3,0.25)', fontSize: '11px', fontWeight: '800', color: '#ffb703', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '14px' }}>
              Photo Gallery
            </div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: '900', color: '#fff', letterSpacing: '-0.03em' }}>
              Our <span style={{ color: '#ffb703' }}>Work</span>
            </h2>
          </div>
          <WorkGallery />
        </div>
      </section>

      {/* BuildZoom */}
      <BuildZoomSection />

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
