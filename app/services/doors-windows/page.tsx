import type { Metadata } from 'next';
import Link from 'next/link';
import { DoorOpen, CheckCircle2, Phone, Shield } from 'lucide-react';
import ServiceTimeline from '@/components/services/ServiceTimeline';
import ServiceInlineForm from '@/components/services/ServiceInlineForm';
import LicensedComparison from '@/components/services/LicensedComparison';
import CitiesSection from '@/components/services/CitiesSection';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Doors & Windows Installation | C Hernandez Construction – Ceres & Modesto CA',
  description: 'Licensed door and window installation contractor (Lic. #1106454) in Ceres and Modesto, CA. Interior, exterior, new openings and replacement installs. Call (209) 241-3765.',
};

const installTypes = [
  { title: 'Exterior Door Installation', desc: 'Entry doors, French doors, sliding glass doors — properly framed, flashed, weather-sealed and hung level for smooth operation.' },
  { title: 'Interior Door Installation', desc: 'Pre-hung and slab doors for bedrooms, bathrooms and closets, including hardware installation and proper shimming.' },
  { title: 'Window Installation', desc: 'New window installs in new construction and replacement windows in existing openings, with correct flashing and sealing.' },
  { title: 'New Door & Window Openings', desc: 'Cut new openings in existing walls with proper header sizing, jack studs and trimmer studs — structural work done right.' },
  { title: 'Sliding & Patio Doors', desc: 'Sliding glass and multi-panel patio doors installed with correct framing, sill pans and weatherproofing for the Central Valley climate.' },
  { title: 'Doors & Windows for ADUs', desc: 'All door and window installation as part of our ADU and room addition packages, or as a standalone service.' },
];

const timelineSteps = [
  { icon: '📋', title: 'Free Estimate & Measurement', desc: 'We measure existing or planned openings, review your door and window selections, and provide a detailed written estimate.' },
  { icon: '📐', title: 'Header & Opening Sizing', desc: 'For new openings, we calculate correct header sizes based on span and load — code-compliant structural work before the unit goes in.' },
  { icon: '🏗️', title: 'Rough Opening Preparation', desc: 'We frame or modify the rough opening to the exact dimensions needed for your door or window unit, with proper shimming allowance.' },
  { icon: '🔨', title: 'Unit Installation', desc: 'We install the door or window unit plumb, level and square — shimmed, fastened and tested for operation before moving on.' },
  { icon: '💧', title: 'Flashing & Weatherproofing', desc: 'We flash all exterior windows and doors with self-adhering membrane and foam sealing to prevent water infiltration.' },
  { icon: '✅', title: 'Trim & Final Touches', desc: 'Interior casing and exterior trim installed, hardware set, and operation verified. We leave a clean, finished result.' },
];

const faqs = [
  { q: 'Do you install both interior and exterior doors?', a: 'Yes. We install exterior entry doors, interior pre-hung doors, and sliding or French patio doors — for both new construction and existing homes.' },
  { q: 'Can you cut a new opening for a door or window?', a: 'Yes. We frame new openings in existing walls, including correctly sized headers, jack studs and trimmer studs per California building code.' },
  { q: 'Do you install windows in ADUs and room additions?', a: 'Yes — window and door installation is part of our standard ADU and addition package, and also available as a standalone service.' },
  { q: 'Do new window and door openings require permits?', a: 'New structural openings in exterior or load-bearing walls typically require a permit. We can help coordinate that with your local building department.' },
  { q: 'Can you install replacement windows without changing the opening size?', a: 'Yes. Replacement window installs in existing openings usually don\'t require a permit and can often be done in a day.' },
  { q: 'What areas do you serve?', a: 'Ceres, Modesto, Turlock, Salida, Riverbank, Patterson and surrounding Stanislaus County communities.' },
];

export default function DoorsWindowsPage() {
  return (
    <>
      <PageHero
        chip="Doors & Windows"
        iconName="dooropen"
        title="Doors & Windows in Ceres & Modesto"
        phrases={['Interior & Exterior', 'Energy Efficient Options', 'Licensed Installation', 'Free Estimates']}
        description="Professional door and window installation for residential properties. New construction, replacements, and upgrades."
        ctaLabel="Get a Doors & Windows Quote →"
      />

      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '40px' }}>
            Installation Services We <span className="text-gradient">Offer</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="three-col">
            {installTypes.map(({ title, desc }) => (
              <div key={title} style={{ padding: '26px', borderRadius: '18px', background: 'rgba(255,183,3,0.05)', border: '1px solid rgba(255,183,3,0.15)' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#fff', marginBottom: '10px', fontFamily: 'Poppins, sans-serif' }}>{title}</h3>
                <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#0b1220' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }} className="two-col">
            <div>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '12px' }}>
                Our <span className="text-gradient">Installation Process</span>
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '32px', lineHeight: 1.7 }}>
                From measurement to finished trim — a precise installation process so your doors and windows operate correctly for years.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 18px', borderRadius: '12px', background: 'rgba(255,183,3,0.07)', border: '1px solid rgba(255,183,3,0.2)' }}>
                <Shield size={16} style={{ color: '#ffb703', flexShrink: 0 }} />
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', fontWeight: '600' }}>Licensed General Contractor · Lic. #1106454 · Fully Insured</span>
              </div>
            </div>
            <ServiceTimeline steps={timelineSteps} />
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }} className="two-col">
            <div>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
                Get Your Free <span className="text-gradient">Installation Estimate</span>
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px', lineHeight: 1.7 }}>
                Tell us what you need and we'll respond the same day.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {['Written estimate within 24 hours', 'Licensed & insured crew', 'New openings framed correctly', 'No commitment required'].map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={16} style={{ color: '#ffb703', flexShrink: 0 }} />
                    <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)' }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: '32px', borderRadius: '20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <ServiceInlineForm service="door and window installation" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#0b1220' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '40px' }}>
            Doors & Windows <span className="text-gradient">FAQ</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map(({ q, a }) => (
              <div key={q} style={{ padding: '22px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>{q}</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '12px', textAlign: 'center' }}>
            Licensed vs <span className="text-gradient">Unlicensed Installation</span>
          </h2>
          <p style={{ textAlign: 'center', fontSize: '15px', color: 'rgba(255,255,255,0.5)', maxWidth: '560px', margin: '0 auto 40px' }}>
            Improperly installed doors and windows leak, stick, and fail inspection. Get it done right with a licensed contractor.
          </p>
          <LicensedComparison />
        </div>
      </section>

      <CitiesSection service="Doors & Windows Installation" />

      <section style={{ background: '#080e1d', padding: '64px 0', borderTop: '1px solid rgba(255,183,3,0.1)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '14px' }}>
            Need Doors or <span className="text-gradient">Windows Installed?</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '28px' }}>Mon–Sat 7am–6pm · Free estimates · Licensed & insured</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Request a Free Estimate →</Link>
            <a href="tel:+12092413765" className="btn-secondary"><Phone size={16} />(209) 241-3765</a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) { .three-col { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 640px) { .two-col, .three-col { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
