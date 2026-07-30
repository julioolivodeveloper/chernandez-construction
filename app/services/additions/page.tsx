import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Room Additions | C Hernandez Construction – Ceres & Modesto CA',
  description: 'Licensed room addition contractor (Lic. #1106454) in Ceres and Modesto, CA. Bedroom additions, family room extensions, second stories. Call (209) 241-3765 for a free estimate.',
};

export default function AdditionsPage() {
  return (
    <>
      <section style={{ paddingTop: '140px', paddingBottom: '80px', background: 'linear-gradient(145deg, #040a16, #0a1428)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '15px', background: 'rgba(255,183,3,0.12)', border: '1px solid rgba(255,183,3,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffb703' }}>
              <Building2 size={26} />
            </div>
            <div className="section-chip" style={{ margin: 0 }}>Popular Service</div>
          </div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: '900', color: '#fff', letterSpacing: '-0.04em', marginBottom: '20px', maxWidth: '700px' }}>
            Room Additions in <span className="text-gradient">Ceres & Modesto</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '580px', marginBottom: '32px' }}>
            Expand your home with a properly permitted, well-framed room addition. We specialize in residential additions that integrate seamlessly with your existing structure.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Request an Addition Estimate →</Link>
            <a href="tel:+12092413765" className="btn-secondary"><Phone size={16} />(209) 241-3765</a>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }} className="two-col">
            <div>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '20px' }}>
                Addition Types We <span className="text-gradient">Specialize In</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Bedroom additions & master suites',
                  'Family room & living room extensions',
                  'Kitchen bump-outs',
                  'Second-story additions',
                  'Sunroom & enclosed patio additions',
                  'Multi-room additions',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ffb703', flexShrink: 0 }} />
                    <span style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { title: 'Permit-Ready', desc: 'All additions are built with proper permits. We help coordinate with your local building department.' },
                { title: 'Structural Integrity', desc: 'We frame to California building code, including proper load-bearing walls, headers and foundations.' },
                { title: 'Seamless Integration', desc: 'We match existing rooflines, siding and framing profiles so the addition looks like it was always there.' },
                { title: 'Clear Estimates', desc: 'Written estimates before work begins. No surprises.' },
              ].map(({ title, desc }) => (
                <div key={title} style={{ padding: '18px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#ffb703', marginBottom: '6px' }}>{title}</div>
                  <div style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#0b1220', padding: '64px 0', borderTop: '1px solid rgba(255,183,3,0.1)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2.2rem', fontWeight: '800', color: '#fff', marginBottom: '14px' }}>
            Ready to <span className="text-gradient">Add Space?</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '28px' }}>
            CA Lic. #1106454 · Free estimates · Ceres, Modesto & Central Valley
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Request an Addition Estimate →</Link>
            <a href="tel:+12092413765" className="btn-secondary"><Phone size={16} />(209) 241-3765</a>
          </div>
          <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <MapPin size={13} style={{ color: '#ffb703' }} />
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>Serving Ceres · Modesto · Turlock · Central Valley</span>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) { .two-col { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
