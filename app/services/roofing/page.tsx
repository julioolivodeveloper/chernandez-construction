import type { Metadata } from 'next';
import Link from 'next/link';
import { Grid3X3, CheckCircle2, Phone, Shield } from 'lucide-react';
import ServiceTimeline from '@/components/services/ServiceTimeline';
import ServiceInlineForm from '@/components/services/ServiceInlineForm';
import LicensedComparison from '@/components/services/LicensedComparison';
import CitiesSection from '@/components/services/CitiesSection';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Roof Shingles Installation & Repair | C Hernandez Construction – Ceres & Modesto CA',
  description: 'Licensed roofing contractor (Lic. #1106454) in Ceres and Modesto, CA. Shingle installation, full re-roofs and roof repairs for residential properties. Call (209) 241-3765.',
};

const roofingTypes = [
  { title: 'Full Re-Roof', desc: 'Complete tear-off of old shingles, new underlayment and fresh dimensional shingle installation. The most common roofing project we handle.' },
  { title: 'New Shingle Installation', desc: 'Shingle installation on new construction, ADUs, or room additions — matched to existing rooflines and properly flashed.' },
  { title: 'Roof Decking Replacement', desc: 'Replace damaged or rotted roof decking before laying new shingles. We identify and replace problem areas before they become leaks.' },
  { title: 'Roof Repairs', desc: 'Patch damaged shingle sections, repair flashing around chimneys and vents, and stop leaks before they damage your interior.' },
  { title: 'Roof Framing for Additions', desc: 'New roof structures for room additions and ADUs that tie into your existing roofline seamlessly.' },
  { title: 'Fascia & Soffit Work', desc: 'Repair or replace rotted fascia and soffit boards as part of a complete roofing project.' },
];

const timelineSteps = [
  { icon: '📋', title: 'Free Roof Inspection & Quote', desc: 'We inspect your roof, assess the condition of the decking and flashing, and give you a written estimate at no charge.' },
  { icon: '🏛️', title: 'Permit Coordination', desc: 'Most re-roofs in California require a permit. We coordinate that with your building department before any work begins.' },
  { icon: '🔨', title: 'Tear-Off & Decking Check', desc: 'We remove old roofing material, inspect the decking for rot or damage, and replace any compromised sections.' },
  { icon: '🏗️', title: 'Underlayment & Shingles', desc: 'We install new synthetic underlayment, then dimensional shingles — starting at the eaves and working up to the ridge.' },
  { icon: '🔍', title: 'Flashing & Ventilation', desc: 'We properly flash all valleys, hips, chimneys and vents to prevent future leaks. Ridge vents are installed for proper attic ventilation.' },
  { icon: '✅', title: 'Final Inspection & Cleanup', desc: 'We pass the city roofing inspection, do a full property cleanup — including magnet sweep for nails — and walk you through the completed work.' },
];

const faqs = [
  { q: 'What type of shingles do you install?', a: 'We primarily install dimensional (architectural) asphalt shingles, which are the standard for residential roofing in California. We can discuss other options during your free estimate.' },
  { q: 'How long does a re-roof take?', a: 'Most residential re-roofs in the Central Valley are completed in 1–2 days depending on roof size, pitch, and complexity.' },
  { q: 'Do I need a permit for a re-roof?', a: 'In most California cities — including Ceres and Modesto — a re-roof does require a permit. We coordinate that as part of our service.' },
  { q: 'How do I know if my roof needs to be fully replaced or just repaired?', a: 'If your shingles are curling, granules are washing into your gutters, or you have multiple active leaks, a full re-roof is usually more cost-effective than continued patching. We assess this honestly during the free inspection.' },
  { q: 'Can you match shingles for a repair?', a: 'We do our best to match existing shingle color and style for repairs. An exact match depends on the age and manufacturer of your existing shingles.' },
  { q: 'What areas do you serve for roofing?', a: 'Ceres, Modesto, Turlock, Salida, Riverbank, Patterson and surrounding Stanislaus County communities.' },
];

export default function RoofingPage() {
  return (
    <>
      <PageHero
        chip="Roofing"
        Icon={Grid3X3}
        title="Roof Shingles in Ceres & Modesto"
        phrases={['Installation & Replacement', 'All Shingle Types', 'Licensed & Insured', 'Free Estimates']}
        description="Professional roof shingle installation and replacement for residential properties across the Central Valley."
        ctaLabel="Get a Roofing Estimate →"
      />

      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '40px' }}>
            Roofing Services We <span className="text-gradient">Offer</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="three-col">
            {roofingTypes.map(({ title, desc }) => (
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
                Our <span className="text-gradient">Roofing Process</span>
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '32px', lineHeight: 1.7 }}>
                From free inspection to final cleanup — here's how a roofing project runs when you hire us.
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
                Get Your Free <span className="text-gradient">Roofing Estimate</span>
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px', lineHeight: 1.7 }}>
                Tell us about your roof and we'll get back to you the same day.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {['Free roof inspection included', 'Written estimate within 24 hours', 'Licensed & insured crew', 'Permit coordination included'].map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={16} style={{ color: '#ffb703', flexShrink: 0 }} />
                    <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)' }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: '32px', borderRadius: '20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <ServiceInlineForm service="roofing" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#0b1220' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '40px' }}>
            Roofing <span className="text-gradient">FAQ</span>
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
            Licensed vs <span className="text-gradient">Unlicensed Roofing</span>
          </h2>
          <p style={{ textAlign: 'center', fontSize: '15px', color: 'rgba(255,255,255,0.5)', maxWidth: '560px', margin: '0 auto 40px' }}>
            An unpermitted or improperly installed roof can void your homeowner's insurance and fail when you sell. Always verify the license.
          </p>
          <LicensedComparison />
        </div>
      </section>

      <CitiesSection service="Roofing" />

      <section style={{ background: '#080e1d', padding: '64px 0', borderTop: '1px solid rgba(255,183,3,0.1)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '14px' }}>
            Need a <span className="text-gradient">New Roof?</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '28px' }}>Mon–Sat 7am–6pm · Free estimates · Licensed & insured</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Request a Roofing Estimate →</Link>
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
