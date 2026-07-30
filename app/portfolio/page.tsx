import type { Metadata } from 'next';
import Link from 'next/link';
import WorkGallery from '@/components/WorkGallery';
import ReviewsSection from '@/components/sections/ReviewsSection';
import PageHero from '@/components/PageHero';
import VideoCarousel from '@/components/VideoCarousel';
import PortfolioPreview from '@/components/sections/PortfolioPreview';
import BuildZoomSection from '@/components/sections/BuildZoomSection';

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

      <BuildZoomSection />

      {/* Videos */}
      <VideoCarousel />

      {/* Recent Projects */}
      <PortfolioPreview />

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
