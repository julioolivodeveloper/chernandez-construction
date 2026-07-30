import type { Metadata } from 'next';
import Link from 'next/link';
import { Warehouse, CheckCircle2, Phone, Shield } from 'lucide-react';
import ServiceTimeline from '@/components/services/ServiceTimeline';
import ServiceInlineForm from '@/components/services/ServiceInlineForm';
import LicensedComparison from '@/components/services/LicensedComparison';
import CitiesSection from '@/components/services/CitiesSection';
import CostEstimator from '@/components/services/CostEstimator';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'New Home Construction | C Hernandez Construction – Ceres & Modesto CA',
  description: 'Licensed new construction contractor (Lic. #1106454) in Ceres and Modesto, CA. Custom residential homes built from the ground up in the Central Valley. Call (209) 241-3765.',
};

const constructionTypes = [
  { title: 'Custom Single-Family Homes', desc: 'Build your custom home from the foundation up. We work from your architectural plans and manage framing through interior finish.' },
  { title: 'Spec Home Construction', desc: 'Building residential spec homes? We\'re a reliable framing and construction crew that keeps projects on schedule and within budget.' },
  { title: 'Owner-Builder Projects', desc: 'Have your permit in place? We can work under an owner-builder permit as your licensed framing and construction crew.' },
  { title: 'Infill Lot Construction', desc: 'Build on a vacant infill lot in Ceres, Modesto, or surrounding cities. We know Central Valley building departments and their requirements.' },
  { title: 'Modular & Manufactured Foundations', desc: 'Site preparation, foundation work, and anchor systems for manufactured or modular home placements.' },
  { title: 'Accessory Dwelling Units (ADU)', desc: 'Stand-alone ADU construction from foundation to finish — a complete build on your existing property.' },
];

const timelineSteps = [
  { icon: '📋', title: 'Plans Review & Estimate', desc: 'We review your architectural and structural plans, walk the site, and provide a detailed written estimate for the full construction scope.' },
  { icon: '🏛️', title: 'Permits & Pre-Construction', desc: 'We assist with permit submission, coordinate with your local building department, and finalize the construction schedule before breaking ground.' },
  { icon: '🏗️', title: 'Foundation & Slab', desc: 'Foundation layout, footing excavation and coordination with your concrete contractor for the slab pour and anchor bolts.' },
  { icon: '🔨', title: 'Structural Framing', desc: 'Our core phase — complete wall, floor and roof framing package built to California code and ready for inspection.' },
  { icon: '🔍', title: 'Sheathing & Rough Inspections', desc: 'OSB sheathing, house wrap, window and door openings. We coordinate and pass the framing and rough-in inspections.' },
  { icon: '✅', title: 'Drywall, Trim & Completion', desc: 'Drywall, interior doors, trim, paint and final inspection. We deliver a completed home ready for final occupancy approval.' },
];

const faqs = [
  { q: 'Do you build custom homes from scratch?', a: 'Yes. We handle the complete residential construction package — foundation coordination, framing, drywall, doors, windows and interior finish — working from your approved architectural plans.' },
  { q: 'Do you work with owner-builders?', a: 'Yes. We can work under an owner-builder permit as a licensed construction crew. If you have your permits in place and need a reliable build team, we\'re the right call.' },
  { q: 'What is included in your new construction package?', a: 'Our standard package covers framing, sheathing, roof structure, drywall, interior doors and windows, and interior finish. We scope each project specifically to your plans.' },
  { q: 'How long does it take to build a new home?', a: 'Construction time depends on size and complexity. A typical 1,500–2,500 sq ft single-family home takes 6–12 months from permit to final inspection. We\'ll give you a specific timeline during your estimate.' },
  { q: 'Can you coordinate electrical, plumbing and HVAC?', a: 'Yes. As your general contractor, we work with licensed subs for MEP trades and remain accountable for coordinating their work with our construction schedule.' },
  { q: 'What areas do you serve for new construction?', a: 'Ceres, Modesto, Turlock, Salida, Riverbank, Patterson and surrounding Stanislaus County communities.' },
];

export default function NewConstructionPage() {
  return (
    <>
      <PageHero
        chip="New Construction"
        iconName="warehouse"
        title="New Home Construction in Ceres & Modesto"
        phrases={['Custom Homes · Ground Up', 'From Foundation to Finish', 'Licensed GC #1106454', 'Free Consultation']}
        description="Custom residential construction from the ground up. Licensed General Contractor managing all phases of your new home build."
        ctaLabel="Start Your New Build →"
      />

      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '40px' }}>
            New Construction <span className="text-gradient">We Build</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="three-col">
            {constructionTypes.map(({ title, desc }) => (
              <div key={title} style={{ padding: '26px', borderRadius: '18px', background: 'rgba(255,183,3,0.05)', border: '1px solid rgba(255,183,3,0.15)' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#fff', marginBottom: '10px', fontFamily: 'Poppins, sans-serif' }}>{title}</h3>
                <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#0b1220' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '12px' }}>
            New Construction Cost <span className="text-gradient">Estimator</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '32px' }}>Get a rough idea of new home construction costs in the Central Valley before you call.</p>
          <CostEstimator
            title="New Home Construction Estimator"
            unit="sq ft"
            min={600} max={4000} step={100} defaultVal={1500}
            ranges={[
              { label: 'Basic (standard finishes)', low: 160, high: 220 },
              { label: 'Standard (upgraded finishes)', low: 220, high: 300 },
              { label: 'Premium (high-end finishes)', low: 300, high: 420 },
            ]}
            note="Estimates for Central Valley, CA. Includes framing, drywall, doors, windows and interior finish. Excludes land, permits, MEP trades and site work."
          />
        </div>
      </section>

      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }} className="two-col">
            <div>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '12px' }}>
                Our <span className="text-gradient">Build Process</span>
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '32px', lineHeight: 1.7 }}>
                From plan review to final inspection — a proven process for getting your home built on time and to code.
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

      <section className="section-pad" style={{ background: '#0b1220' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }} className="two-col">
            <div>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
                Get Your Free <span className="text-gradient">Construction Estimate</span>
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px', lineHeight: 1.7 }}>
                Tell us about your project and we'll respond the same day.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {['Free site visit & plan review', 'Detailed estimate within 24 hours', 'Permit coordination included', 'No commitment required'].map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={16} style={{ color: '#ffb703', flexShrink: 0 }} />
                    <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)' }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: '32px', borderRadius: '20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <ServiceInlineForm service="new home construction" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '40px' }}>
            New Construction <span className="text-gradient">FAQ</span>
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

      <section className="section-pad" style={{ background: '#0b1220' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '12px', textAlign: 'center' }}>
            Why <span className="text-gradient">Licensed Matters</span> for New Construction
          </h2>
          <p style={{ textAlign: 'center', fontSize: '15px', color: 'rgba(255,255,255,0.5)', maxWidth: '560px', margin: '0 auto 40px' }}>
            New construction requires multiple inspections and a licensed general contractor. An unlicensed build means failed inspections, liability, and a home you can't legally sell.
          </p>
          <LicensedComparison />
        </div>
      </section>

      <CitiesSection service="New Home Construction" />

      <section style={{ background: '#080e1d', padding: '64px 0', borderTop: '1px solid rgba(255,183,3,0.1)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '14px' }}>
            Ready to <span className="text-gradient">Build?</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '28px' }}>Mon–Sat 7am–6pm · Free estimates · Licensed & insured</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Request a Construction Estimate →</Link>
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
