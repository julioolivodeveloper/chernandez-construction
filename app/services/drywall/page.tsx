import type { Metadata } from 'next';
import Link from 'next/link';
import { PaintBucket, CheckCircle2, Phone, Shield } from 'lucide-react';
import ServiceTimeline from '@/components/services/ServiceTimeline';
import ServiceInlineForm from '@/components/services/ServiceInlineForm';
import LicensedComparison from '@/components/services/LicensedComparison';
import CitiesSection from '@/components/services/CitiesSection';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Drywall & Painting Contractor | C Hernandez Construction – Ceres & Modesto CA',
  description: 'Licensed drywall and painting contractor (Lic. #1106454) in Ceres and Modesto, CA. Hang, tape, texture and interior painting for new construction and remodels. Call (209) 241-3765.',
};

const drywallTypes = [
  { title: 'Drywall Hang & Tape', desc: 'Full hang and tape for new construction, ADUs, additions and remodels. We work efficiently and keep a clean jobsite.' },
  { title: 'Texture Application', desc: 'Smooth, orange peel, knockdown and skip trowel textures — applied uniformly and matched seamlessly to existing walls when patching.' },
  { title: 'Drywall Repair & Patching', desc: 'Patch holes, fix cracks and repair water-damaged sections. Finished and textured to blend with your existing walls.' },
  { title: 'Interior Painting', desc: 'Interior wall and ceiling painting after drywall work — clean lines, proper prep, and a finish that lasts.' },
  { title: 'Garage & Utility Room Drywall', desc: 'Fire-code compliant drywall for garage conversions, utility rooms and spaces requiring Type-X board.' },
  { title: 'Drywall for ADUs & Additions', desc: 'Complete drywall package for ADU and room addition projects, coordinated directly with our framing crew.' },
];

const timelineSteps = [
  { icon: '📋', title: 'Free Estimate & Scope Review', desc: 'We review the project scope — whether it\'s new construction, a remodel, or a repair — and give you a written estimate at no charge.' },
  { icon: '🏗️', title: 'Material Staging', desc: 'We coordinate delivery and staging of drywall sheets sized and typed for your project to minimize waste and damage.' },
  { icon: '🔨', title: 'Hang Phase', desc: 'We hang sheets efficiently, cutting precisely around windows, doors, outlets, and obstacles for a tight fit throughout.' },
  { icon: '🪚', title: 'Tape & Mud', desc: 'Multiple coats of joint compound — tape coat, filler coat, and finish coat — sanded smooth between applications.' },
  { icon: '🎨', title: 'Texture Application', desc: 'We apply your chosen texture — matching existing walls in remodels or applying new texture for new spaces.' },
  { icon: '✅', title: 'Paint & Final Inspection', desc: 'Primer and finish coats applied, final touch-ups completed. Ready for trim installation and occupancy.' },
];

const faqs = [
  { q: 'Do you hang and finish drywall for new construction?', a: 'Yes. We handle full drywall packages for new homes, ADUs, room additions and remodels — from hanging through final finish coat.' },
  { q: 'What textures can you apply?', a: 'We apply smooth, orange peel, knockdown and skip trowel textures. When patching into existing walls, we match the existing texture as closely as possible.' },
  { q: 'Do you paint after drywall?', a: 'Yes. Interior painting is part of our drywall finish package. We prime, apply finish coats, and leave the space ready for trim and flooring.' },
  { q: 'Can you repair water-damaged drywall?', a: 'Yes. We cut out damaged sections, replace with new drywall, tape and finish, then texture to match the surrounding wall.' },
  { q: 'What type of drywall do you use for garages?', a: 'Garage walls adjacent to living space require 5/8-inch Type-X fire-rated drywall per California code. We install the correct board for every location.' },
  { q: 'What areas do you serve?', a: 'Ceres, Modesto, Turlock, Salida, Riverbank, Patterson and surrounding Stanislaus County communities.' },
];

export default function DrywallPage() {
  return (
    <>
      <PageHero
        chip="Drywall & Paint"
        Icon={PaintBucket}
        title="Drywall & Painting in Ceres & Modesto"
        phrases={['Install · Texture · Paint', 'Clean Professional Finish', 'Residential Specialists', 'Free Estimates']}
        description="Drywall installation, texturing, and interior painting for new construction, additions, and remodels across the Central Valley."
        ctaLabel="Get a Drywall Quote →"
      />

      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '40px' }}>
            Drywall Services We <span className="text-gradient">Provide</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="three-col">
            {drywallTypes.map(({ title, desc }) => (
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
                Our <span className="text-gradient">Drywall Process</span>
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '32px', lineHeight: 1.7 }}>
                From material delivery to painted walls — a clean, organized process so your project finishes on schedule.
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
                Get Your Free <span className="text-gradient">Drywall Estimate</span>
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px', lineHeight: 1.7 }}>
                Tell us about your project and we'll respond the same day.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {['Written estimate within 24 hours', 'Licensed & insured crew', 'Texture matching available', 'No commitment required'].map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={16} style={{ color: '#ffb703', flexShrink: 0 }} />
                    <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)' }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: '32px', borderRadius: '20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <ServiceInlineForm service="drywall and painting" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#0b1220' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '40px' }}>
            Drywall <span className="text-gradient">FAQ</span>
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
            Licensed vs <span className="text-gradient">Unlicensed Drywall Work</span>
          </h2>
          <p style={{ textAlign: 'center', fontSize: '15px', color: 'rgba(255,255,255,0.5)', maxWidth: '560px', margin: '0 auto 40px' }}>
            Drywall done improperly means failed inspections, texture mismatches and callbacks. Hire licensed and get it done right once.
          </p>
          <LicensedComparison />
        </div>
      </section>

      <CitiesSection service="Drywall & Painting" />

      <section style={{ background: '#080e1d', padding: '64px 0', borderTop: '1px solid rgba(255,183,3,0.1)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '14px' }}>
            Ready to <span className="text-gradient">Get Started?</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '28px' }}>Mon–Sat 7am–6pm · Free estimates · Licensed & insured</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Request a Drywall Estimate →</Link>
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
