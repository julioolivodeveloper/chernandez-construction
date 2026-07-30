import type { Metadata } from 'next';
import Link from 'next/link';
import { Camera, Phone } from 'lucide-react';
import WorkGallery from '@/components/WorkGallery';

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
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Get a Free Estimate →</Link>
            <a href="tel:+12092413765" className="btn-secondary"><Phone size={16} />(209) 241-3765</a>
          </div>
        </div>
      </section>

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
