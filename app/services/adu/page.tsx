import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, CheckCircle2, Phone, Shield } from 'lucide-react';
import ServiceTimeline from '@/components/services/ServiceTimeline';
import ServiceInlineForm from '@/components/services/ServiceInlineForm';
import LicensedComparison from '@/components/services/LicensedComparison';
import CitiesSection from '@/components/services/CitiesSection';
import AduCalculator from '@/components/services/AduCalculator';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'ADU Construction | C Hernandez Construction – Ceres & Modesto CA',
  description: 'Licensed ADU contractor (Lic. #1106454) in Ceres and Modesto, CA. Detached ADUs, garage conversions and attached ADUs built to California code. Call (209) 241-3765.',
};

const aduTypes = [
  { title: 'Detached ADU', desc: 'A standalone structure on your property — fully separate from the main home. Ideal for rental income or multi-generational living.' },
  { title: 'Attached ADU', desc: 'An addition to the main home with a separate entrance. More cost-effective and faster to permit than a detached unit.' },
  { title: 'Garage Conversion ADU', desc: 'Convert an existing garage into a permitted living space. Often the fastest and most affordable ADU option.' },
  { title: 'Junior ADU (JADU)', desc: 'A unit within the existing home footprint, up to 500 sq ft. Limited construction — good for a bedroom or studio conversion.' },
];

const timelineSteps = [
  { icon: '📋', title: 'Free Consultation', desc: 'We visit your property, review your goals and budget, and answer every question — no cost, no pressure.' },
  { icon: '📐', title: 'Design & Planning', desc: 'We help coordinate plans and site drawings. We work with your designer or can refer you to trusted local drafters.' },
  { icon: '🏛️', title: 'Permit Submission', desc: 'We assist with submitting to your city\'s building department. California AB 2221 has streamlined ADU permits significantly.' },
  { icon: '🏗️', title: 'Foundation & Framing', desc: 'Our licensed crew breaks ground, pours the foundation and frames the structure — the phase we specialize in.' },
  { icon: '⚡', title: 'MEP Rough-In', desc: 'Electrical, plumbing and mechanical rough-in with licensed subcontractors we coordinate directly.' },
  { icon: '🏠', title: 'Finish & Final Inspection', desc: 'Drywall, paint, flooring, trim and fixtures. City final inspection passed and your ADU is ready to occupy or rent.' },
];

const faqs = [
  { q: 'How long does it take to build an ADU?', a: 'From permit approval to completion, an ADU typically takes 4–8 months depending on type and size. We can help estimate your specific timeline during the free consultation.' },
  { q: 'Can an ADU be rented out?', a: 'Yes. ADUs can be rented as long-term rentals under California law. Short-term rental rules vary by city — check with your local municipality.' },
  { q: 'Do you handle ADU permits?', a: 'We assist with permit coordination and work closely with your local building department throughout the process. We\'ve navigated permits in Ceres, Modesto, Turlock, and across Stanislaus County.' },
  { q: 'What cities do you build ADUs in?', a: 'We build ADUs in Ceres, Modesto, Turlock, Salida, Riverbank, Patterson and surrounding Central Valley communities.' },
  { q: 'What is the minimum size for an ADU?', a: 'California law allows ADUs as small as 150 sq ft, but most practical ADUs are 400–1,200 sq ft. Use the estimator above to see costs for your desired size.' },
  { q: 'Do ADUs increase home value?', a: 'Yes — significantly. A permitted ADU typically adds more value than it costs to build, especially in the Central Valley rental market where demand is high.' },
];

export default function AduPage() {
  return (
    <>
      <PageHero
        chip="ADU Specialist"
        Icon={Home}
        title="ADU Construction in Ceres & Modesto"
        phrases={['Detached · Attached · Garage', 'California ADU Law Compliant', 'Rental Income Potential', 'Free Consultation']}
        description="Accessory dwelling units built to California code. Detached, attached, garage conversions — we frame it right, coordinate permits, and build a rental-ready unit."
        ctaLabel="Get an ADU Consultation →"
      />

      {/* ADU Types */}
      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '40px' }}>
            Types of <span className="text-gradient">ADUs We Build</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }} className="two-col">
            {aduTypes.map(({ title, desc }) => (
              <div key={title} style={{ padding: '26px', borderRadius: '18px', background: 'rgba(255,183,3,0.05)', border: '1px solid rgba(255,183,3,0.15)' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#fff', marginBottom: '10px', fontFamily: 'Poppins, sans-serif' }}>{title}</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="section-pad" style={{ background: '#0b1220' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '12px' }}>
            ADU Cost & <span className="text-gradient">ROI Estimator</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '32px' }}>
            Estimate your investment and potential rental income before you commit to anything.
          </p>
          <AduCalculator />
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }} className="two-col">
            <div>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '12px' }}>
                How Our <span className="text-gradient">ADU Process Works</span>
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '36px', lineHeight: 1.7 }}>
                From your first call to the final inspection — here's exactly what to expect when you hire C Hernandez Construction for your ADU.
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

      {/* Inline Quote Form */}
      <section className="section-pad" style={{ background: '#0b1220' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }} className="two-col">
            <div>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
                Get Your Free <span className="text-gradient">ADU Estimate</span>
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px', lineHeight: 1.7 }}>
                Tell us about your project and we'll get back to you the same day with a free, no-obligation estimate.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {['Free site visit & consultation', 'Detailed estimate within 24 hours', 'No pressure, no hidden fees', 'Licensed & insured crew'].map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={16} style={{ color: '#ffb703', flexShrink: 0 }} />
                    <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)' }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: '32px', borderRadius: '20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <ServiceInlineForm service="ADU construction" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '40px' }}>
            ADU <span className="text-gradient">FAQ</span>
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

      {/* Licensed vs Unlicensed */}
      <section className="section-pad" style={{ background: '#0b1220' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '12px', textAlign: 'center' }}>
            Why <span className="text-gradient">Licensed Matters</span> for ADUs
          </h2>
          <p style={{ textAlign: 'center', fontSize: '15px', color: 'rgba(255,255,255,0.5)', maxWidth: '560px', margin: '0 auto 40px' }}>
            An unpermitted ADU cannot be legally rented, financed, or sold. Hire licensed — protect your investment.
          </p>
          <LicensedComparison />
        </div>
      </section>

      {/* Cities */}
      <CitiesSection service="ADU Construction" />

      {/* Final CTA */}
      <section style={{ background: '#080e1d', padding: '64px 0', borderTop: '1px solid rgba(255,183,3,0.1)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '14px' }}>
            Ready to Start Your <span className="text-gradient">ADU?</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '28px' }}>
            Call us or request a free estimate. We're available Mon–Sat 7am–6pm.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Get an ADU Consultation →</Link>
            <a href="tel:+12092413765" className="btn-secondary"><Phone size={16} />(209) 241-3765</a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) { .two-col { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
