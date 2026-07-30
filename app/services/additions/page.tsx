import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, CheckCircle2, Phone, Shield } from 'lucide-react';
import ServiceTimeline from '@/components/services/ServiceTimeline';
import ServiceInlineForm from '@/components/services/ServiceInlineForm';
import LicensedComparison from '@/components/services/LicensedComparison';
import CitiesSection from '@/components/services/CitiesSection';
import CostEstimator from '@/components/services/CostEstimator';

export const metadata: Metadata = {
  title: 'Room Addition Contractor | C Hernandez Construction – Ceres & Modesto CA',
  description: 'Licensed room addition contractor (Lic. #1106454) in Ceres, Modesto & Central Valley. Bedroom additions, family rooms, second stories — permitted and built to code. Call (209) 241-3765.',
};

const additionTypes = [
  { title: 'Bedroom Additions', desc: 'Add a master suite or extra bedroom to your home. We frame, drywall, and finish the space to match your existing interior.' },
  { title: 'Family Room Extensions', desc: 'Expand your living space with a family room addition. We handle everything from the foundation tie-in to the finished ceiling.' },
  { title: 'Second-Story Additions', desc: 'Double your living area by going up. We assess your existing structure, add proper support, and frame the second floor correctly.' },
  { title: 'Kitchen Bump-Outs', desc: 'A smaller addition that pushes out one or two walls to give your kitchen more floor space without a full addition.' },
  { title: 'Sunroom & Patio Enclosures', desc: 'Convert an open patio or add a new sunroom with proper framing, insulation and window installations.' },
  { title: 'Multi-Room Additions', desc: 'Larger additions that add two or more rooms at once — master suite plus office, or great room plus mudroom.' },
];

const timelineSteps = [
  { icon: '📋', title: 'Free Estimate & Site Visit', desc: 'We visit your property, review your plans or vision, and provide a detailed written estimate at no charge.' },
  { icon: '📐', title: 'Plan Review & Engineering', desc: 'We review architectural plans and coordinate with a structural engineer when required for load-bearing changes.' },
  { icon: '🏛️', title: 'Permit Coordination', desc: 'We assist with permit submission to your city\'s building department. Room additions in California always require permits.' },
  { icon: '🏗️', title: 'Foundation & Framing', desc: 'We pour footings or tie into the existing foundation, then frame walls, floor and roof to match your home seamlessly.' },
  { icon: '🔨', title: 'Rough-In & Inspections', desc: 'We coordinate with electricians and plumbers, then schedule and pass rough framing inspection before close-in.' },
  { icon: '✅', title: 'Drywall, Trim & Finish', desc: 'Drywall hang, texture, trim, paint and final inspection — your addition is ready to furnish and enjoy.' },
];

const faqs = [
  { q: 'How much does a room addition cost in the Central Valley?', a: 'Most room additions in Ceres, Modesto and Turlock range from $100–$250 per square foot depending on complexity. Use the estimator above for a rough ballpark, or call us for a free on-site quote.' },
  { q: 'Do you pull permits for room additions?', a: 'Yes — always. Room additions require building permits in every California city. We help coordinate with your local building department and our work is inspection-ready.' },
  { q: 'How long does a room addition take to build?', a: 'A typical single-room addition takes 4–10 weeks from permit approval to completion. Second stories or larger additions can take 3–5 months.' },
  { q: 'Can you match the existing exterior of my home?', a: 'Yes. We take care to match your existing roofline, siding, and exterior trim so the addition looks like part of the original house.' },
  { q: 'Do you handle the foundation work for the addition?', a: 'Yes. We coordinate foundation and footing work, either doing it directly or working with a concrete sub we trust.' },
  { q: 'What areas do you serve for room additions?', a: 'We build additions in Ceres, Modesto, Turlock, Salida, Riverbank, Patterson and surrounding Stanislaus County.' },
];

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
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
            Expand your home with a properly permitted, well-framed room addition. Bedroom suites, family rooms, second stories — built to California code and integrated seamlessly with your existing structure.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Request an Addition Estimate →</Link>
            <a href="tel:+12092413765" className="btn-secondary"><Phone size={16} />(209) 241-3765</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '24px' }}>
            <CheckCircle2 size={15} style={{ color: '#ffb703' }} />
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>CA License #1106454 · Room Addition Specialist · Free Estimates</span>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '40px' }}>
            Addition Types We <span className="text-gradient">Specialize In</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="three-col">
            {additionTypes.map(({ title, desc }) => (
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
            Room Addition Cost <span className="text-gradient">Estimator</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '32px' }}>Get a rough idea of what your addition might cost before you call.</p>
          <CostEstimator
            title="Room Addition Cost Estimator"
            unit="sq ft"
            min={100} max={2000} step={50} defaultVal={400}
            ranges={[
              { label: 'Basic (single room, simple roof)', low: 95, high: 140 },
              { label: 'Standard (suite or multi-room)', low: 140, high: 200 },
              { label: 'Premium (second story / complex)', low: 200, high: 280 },
            ]}
            note="Estimates for Central Valley, CA. Includes framing, drywall and interior finish. Excludes site-specific conditions, permits, and MEP trades."
          />
        </div>
      </section>

      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }} className="two-col">
            <div>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '12px' }}>
                Our <span className="text-gradient">Addition Process</span>
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '32px', lineHeight: 1.7 }}>
                From your first call to the final walk-through — a clear process so you know exactly what to expect.
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
                Get Your Free <span className="text-gradient">Addition Estimate</span>
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px', lineHeight: 1.7 }}>
                Tell us about your project and we'll respond the same day.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {['Written estimate within 24 hours', 'Licensed & insured crew', 'Permit coordination included', 'No commitment required'].map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={16} style={{ color: '#ffb703', flexShrink: 0 }} />
                    <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)' }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: '32px', borderRadius: '20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <ServiceInlineForm service="room addition" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '40px' }}>
            Room Addition <span className="text-gradient">FAQ</span>
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
            Why a <span className="text-gradient">Licensed Contractor</span> Matters for Additions
          </h2>
          <p style={{ textAlign: 'center', fontSize: '15px', color: 'rgba(255,255,255,0.5)', maxWidth: '560px', margin: '0 auto 40px' }}>
            Unpermitted additions must be disclosed — and can be ordered demolished — when you sell. Hire licensed from day one.
          </p>
          <LicensedComparison />
        </div>
      </section>

      <CitiesSection service="Room Additions" />

      <section style={{ background: '#080e1d', padding: '64px 0', borderTop: '1px solid rgba(255,183,3,0.1)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '14px' }}>
            Ready to <span className="text-gradient">Add Space?</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '28px' }}>Mon–Sat 7am–6pm · Free estimates · Licensed & insured</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Request an Addition Estimate →</Link>
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
