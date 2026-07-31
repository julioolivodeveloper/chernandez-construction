import type { Metadata } from 'next';
import Link from 'next/link';
import { Layers, CheckCircle2, Phone, Shield } from 'lucide-react';
import ServiceTimeline from '@/components/services/ServiceTimeline';
import ServiceInlineForm from '@/components/services/ServiceInlineForm';
import LicensedComparison from '@/components/services/LicensedComparison';
import CitiesSection from '@/components/services/CitiesSection';
import CostEstimator from '@/components/services/CostEstimator';
import PageHero from '@/components/PageHero';
import ReviewsSection from '@/components/sections/ReviewsSection';
import PortfolioPreview from '@/components/sections/PortfolioPreview';

export const metadata: Metadata = {
  title: 'Structural Framing Contractor | C Hernandez Construction – Ceres & Modesto CA',
  description: 'Licensed framing contractor (Lic. #1106454) in Ceres, Modesto & Central Valley. Residential framing for new homes, additions, and ADUs. Call (209) 241-3765.',
};

const framingTypes = [
  { title: 'New Home Framing', desc: 'Complete structural framing for new residential construction — floor systems, exterior walls, roof framing and everything in between.' },
  { title: 'Room Addition Framing', desc: 'Expand your home with a properly framed addition. We tie the new structure into your existing framing to meet code and last for decades.' },
  { title: 'ADU Framing', desc: 'Standalone ADU structures from foundation to roof. We\'ve framed dozens of ADUs across Ceres, Modesto, and the surrounding Valley.' },
  { title: 'Second Story Addition', desc: 'Adding a second floor requires precise framing and structural engineering. We work with your engineer to frame it right the first time.' },
  { title: 'Garage Conversion Framing', desc: 'Converting a garage to living space means new walls, proper ceiling height, and window/door openings. We handle it all.' },
  { title: 'Exterior Wall Framing', desc: 'Stand-alone wall framing for new exterior walls, load-bearing modifications, or shear wall installation.' },
];

const timelineSteps = [
  { icon: '📋', title: 'Free Consultation & Quote', desc: 'We review your plans or visit the site to assess scope and give you a detailed, written estimate — at no charge.' },
  { icon: '📐', title: 'Plan Review', desc: 'We review the architectural and structural plans to identify any framing challenges before we start.' },
  { icon: '🏗️', title: 'Site Prep & Layout', desc: 'We mark the layout precisely, set up safety measures and verify the foundation or subfloor is ready for framing.' },
  { icon: '🔨', title: 'Structural Framing', desc: 'Our crew frames walls, floors and roof systems efficiently and correctly. Licensed, insured, and inspection-ready.' },
  { icon: '🔍', title: 'Framing Inspection', desc: 'We coordinate and pass the city\'s framing inspection. No shortcuts — every beam, bolt and block is to code.' },
  { icon: '✅', title: 'Handoff', desc: 'Once inspection is passed, your project is ready for the next trades. We\'re available for any questions after completion.' },
];

const faqs = [
  { q: 'How much does residential framing cost?', a: 'Framing costs vary by project scope, size, and complexity. Use the estimator above for a ballpark, or call us for a free detailed quote.' },
  { q: 'Do you pull framing permits?', a: 'Yes. All our framing work is permitted and inspected. Unpermitted framing creates problems when you sell or refinance.' },
  { q: 'How long does framing take?', a: 'A typical room addition frames in 1–2 weeks. A full new home takes 2–5 weeks depending on size and complexity.' },
  { q: 'What areas do you serve?', a: 'We frame in Ceres, Modesto, Turlock, Salida, Riverbank, Patterson and surrounding Stanislaus County communities.' },
  { q: 'Can you work with my general contractor?', a: 'Yes. We work as a subcontractor for GCs and directly for homeowners. We\'re flexible and communicate clearly with all parties.' },
  { q: 'Do you do commercial framing?', a: 'We specialize in residential framing. For commercial projects, reach out and we\'ll discuss whether it fits our scope.' },
];

export default function FramingPage() {
  return (
    <>
      <PageHero
        chip="Core Specialty"
        iconName="layers"
        title="Structural Framing in Ceres & Modesto"
        phrases={['Walls · Roof · Additions', 'Built to California Code', 'Free Estimates Available', 'Licensed Crew #1106454']}
        description="Residential framing for new homes, ADUs and room additions — built to California code, permitted, and inspection-ready."
        ctaLabel="Request a Framing Estimate →"
      />
      <ReviewsSection />
      <PortfolioPreview />

      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '40px' }}>
            Framing Services <span className="text-gradient">We Provide</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="three-col">
            {framingTypes.map(({ title, desc }) => (
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
            Framing Cost <span className="text-gradient">Estimator</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '32px' }}>Get a rough idea of what your framing project might cost before you call.</p>
          <CostEstimator
            title="Residential Framing Estimator"
            unit="sq ft"
            min={200} max={3000} step={100} defaultVal={800}
            ranges={[
              { label: 'Basic (walls only)', low: 8, high: 14 },
              { label: 'Standard (walls + roof)', low: 14, high: 22 },
              { label: 'Complex (multi-story)', low: 22, high: 35 },
            ]}
            note="Framing labor estimates for Central Valley, CA. Does not include materials, permits, or other trades."
          />
        </div>
      </section>

      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }} className="two-col">
            <div>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '12px' }}>
                Our <span className="text-gradient">Framing Process</span>
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '32px', lineHeight: 1.7 }}>
                A clear, predictable process from first call to framing inspection passed.
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
                Get Your Free <span className="text-gradient">Framing Estimate</span>
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px', lineHeight: 1.7 }}>
                Tell us about your project. We'll respond the same day.
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
              <ServiceInlineForm service="structural framing" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '40px' }}>
            Framing <span className="text-gradient">FAQ</span>
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
            Licensed vs <span className="text-gradient">Unlicensed Framing</span>
          </h2>
          <p style={{ textAlign: 'center', fontSize: '15px', color: 'rgba(255,255,255,0.5)', maxWidth: '560px', margin: '0 auto 40px' }}>
            Framing is the skeleton of your home. Unpermitted framing can fail inspection and cost far more to fix.
          </p>
          <LicensedComparison />
        </div>
      </section>

      <CitiesSection service="Structural Framing" />

      <section style={{ background: '#080e1d', padding: '64px 0', borderTop: '1px solid rgba(255,183,3,0.1)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '14px' }}>
            Ready to Frame Your <span className="text-gradient">Project?</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '28px' }}>Mon–Sat 7am–6pm · Free estimates · Licensed & insured</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Request a Framing Estimate →</Link>
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
