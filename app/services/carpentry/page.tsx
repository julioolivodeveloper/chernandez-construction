import type { Metadata } from 'next';
import Link from 'next/link';
import { Hammer, CheckCircle2, Phone, Shield } from 'lucide-react';
import ServiceTimeline from '@/components/services/ServiceTimeline';
import ServiceInlineForm from '@/components/services/ServiceInlineForm';
import LicensedComparison from '@/components/services/LicensedComparison';
import CitiesSection from '@/components/services/CitiesSection';
import PageHero from '@/components/PageHero';
import ReviewsSection from '@/components/sections/ReviewsSection';
import PortfolioPreview from '@/components/sections/PortfolioPreview';

export const metadata: Metadata = {
  title: 'Carpentry & Trim Work | C Hernandez Construction – Ceres & Modesto CA',
  description: 'Licensed carpentry and trim contractor (Lic. #1106454) in Ceres and Modesto, CA. Baseboards, crown molding, built-ins and finish carpentry. Call (209) 241-3765.',
};

const carpentryTypes = [
  { title: 'Baseboards & Door Casing', desc: 'Installation of baseboard trim and door casing for a clean, polished finish in new construction, ADUs and remodels.' },
  { title: 'Crown Molding', desc: 'Crown molding installation in living rooms, bedrooms and entryways — properly coped corners and tight miters throughout.' },
  { title: 'Window Casing & Stools', desc: 'Interior window trim including casing, apron and stool for a fully finished window in every room.' },
  { title: 'Built-In Shelving & Niches', desc: 'Custom built-in shelving, media niches, and storage built-ins framed and finished to suit the space.' },
  { title: 'Wainscoting & Chair Rail', desc: 'Wainscoting panels, chair rail and decorative wall trim to add character to dining rooms, hallways and entryways.' },
  { title: 'Finish Carpentry for ADUs & Additions', desc: 'Full interior trim package as part of our ADU and room addition builds — baseboards to crown, all in one coordinated scope.' },
];

const timelineSteps = [
  { icon: '📋', title: 'Free Estimate & Walkthrough', desc: 'We review the rooms, discuss profile preferences, and provide a detailed written estimate covering all trim and carpentry work.' },
  { icon: '📐', title: 'Profile Selection & Material Order', desc: 'We confirm trim profiles that match or complement your existing millwork and order materials before the scheduled start date.' },
  { icon: '🪚', title: 'Cutting & Preparation', desc: 'All trim is cut to length, mitered and coped on-site. We set up carefully and work cleanly in finished spaces.' },
  { icon: '🔨', title: 'Installation', desc: 'Trim is installed tight to walls and ceilings, nailed and set properly. Corners are coped or mitered to close tight with no gaps.' },
  { icon: '🎨', title: 'Caulk, Fill & Touch-Up', desc: 'All nail holes filled, joints caulked, and any touch-up painting done to leave a finish-ready result.' },
  { icon: '✅', title: 'Final Walkthrough', desc: 'We walk every room with you, address any items, and leave the space clean and ready for occupancy.' },
];

const faqs = [
  { q: 'Do you install baseboards and crown molding?', a: 'Yes. We install baseboards, door casing, window casing, crown molding and other interior trim for new construction and remodels across the Central Valley.' },
  { q: 'Do you include trim work in your ADU and addition packages?', a: 'Yes. Finish carpentry — baseboards, door casing and window trim — is part of our standard ADU and room addition scope.' },
  { q: 'Can you match existing trim profiles in a remodel?', a: 'In most cases yes, depending on profile availability at local suppliers. We do our best to source a close match and can caulk and paint to minimize visible transitions.' },
  { q: 'Do you do built-in shelving and media walls?', a: 'Yes. We build and install built-in shelving, entertainment niches, and custom built-ins as standalone projects or as part of a larger remodel.' },
  { q: 'How long does finish carpentry take?', a: 'A full trim package for a 1,500 sq ft home typically takes 3–5 days. Smaller repairs or single-room trim projects can often be done in 1–2 days.' },
  { q: 'What areas do you serve for carpentry?', a: 'Ceres, Modesto, Turlock, Salida, Riverbank, Patterson and surrounding Stanislaus County areas.' },
];

export default function CarpentryPage() {
  return (
    <>
      <PageHero
        chip="Carpentry & Trim"
        iconName="hammer"
        title="Carpentry & Trim in Ceres & Modesto"
        phrases={['Baseboards · Crown Molding', 'Custom Woodwork', 'Clean Finish Every Time', 'Free Estimates']}
        description="Professional carpentry and trim work for new construction, additions, and remodels. Baseboards, crown molding, doors, and custom woodwork."
        ctaLabel="Get a Carpentry Quote →"
      />
      <ReviewsSection />

      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '40px' }}>
            Carpentry Services We <span className="text-gradient">Provide</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="three-col">
            {carpentryTypes.map(({ title, desc }) => (
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
                Our <span className="text-gradient">Carpentry Process</span>
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '32px', lineHeight: 1.7 }}>
                Finish carpentry is the last thing you see in a room. We take it seriously — from the first miter to the final caulk line.
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
                Get Your Free <span className="text-gradient">Carpentry Estimate</span>
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px', lineHeight: 1.7 }}>
                Tell us about your trim or carpentry project and we'll respond the same day.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {['Written estimate within 24 hours', 'Licensed & insured crew', 'Profile matching available', 'No commitment required'].map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={16} style={{ color: '#ffb703', flexShrink: 0 }} />
                    <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)' }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: '32px', borderRadius: '20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <ServiceInlineForm service="carpentry and trim" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#0b1220' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '40px' }}>
            Carpentry <span className="text-gradient">FAQ</span>
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
            Licensed vs <span className="text-gradient">Unlicensed Carpentry</span>
          </h2>
          <p style={{ textAlign: 'center', fontSize: '15px', color: 'rgba(255,255,255,0.5)', maxWidth: '560px', margin: '0 auto 40px' }}>
            Poor finish carpentry is the first thing people notice. Hire licensed — your trim should look as good in 10 years as it does on day one.
          </p>
          <LicensedComparison />
        </div>
      </section>

      <CitiesSection service="Carpentry & Trim" />

      <PortfolioPreview />

      <section style={{ background: '#080e1d', padding: '64px 0', borderTop: '1px solid rgba(255,183,3,0.1)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '14px' }}>
            Need <span className="text-gradient">Trim Work Done?</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '28px' }}>Mon–Sat 7am–6pm · Free estimates · Licensed & insured</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Request a Carpentry Estimate →</Link>
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
