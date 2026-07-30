import type { Metadata } from 'next';
import Link from 'next/link';
import { Wrench, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Home Remodeling Contractor | C Hernandez Construction – Ceres & Modesto CA',
  description: 'Licensed remodeling contractor (Lic. #1106454) in Ceres and Modesto, CA. Kitchen remodels, bathroom renovations, interior upgrades. Call (209) 241-3765.',
};

const types = [
  { title: 'Kitchen Remodels', desc: 'Full gut and rebuild or partial updates — cabinets, countertops, framing changes, drywall and tile.' },
  { title: 'Bathroom Renovations', desc: 'Tile, vanities, showers, tub surrounds, drywall and plumbing rough-in coordination.' },
  { title: 'Interior Remodels', desc: 'Open concept conversions, load-bearing wall removal with engineered beams, flooring and finishes.' },
  { title: 'Basement & Garage Conversions', desc: 'Convert underutilized spaces into livable areas — all permitted and to code.' },
];

const process = [
  { step: '01', title: 'Free Estimate & Walkthrough', desc: 'We visit, assess the space and provide a written estimate before any work begins.' },
  { step: '02', title: 'Permit Coordination', desc: 'Structural changes and some kitchen/bath work require permits — we help coordinate those.' },
  { step: '03', title: 'Demo & Prep', desc: 'Careful demolition protecting adjacent walls, floors and utilities.' },
  { step: '04', title: 'Framing & Rough Work', desc: 'New walls, headers, blocking and any structural modifications.' },
  { step: '05', title: 'Drywall, Tile & Finish', desc: 'Drywall hang and texture, tile installation, trim and paint to complete the space.' },
];

const faqs = [
  { q: 'Do you handle permits for remodeling?', a: 'Yes. Structural changes and some kitchen/bath work require permits. We coordinate with your local building department.' },
  { q: 'Can you remove a load-bearing wall?', a: 'Yes, with proper engineering. We work with structural engineers when needed and install the correct beam and posts.' },
  { q: 'Do you do kitchen and bathroom remodels?', a: 'Yes — both. We handle framing, drywall, tile, and coordinate with plumbers and electricians as needed.' },
  { q: 'What areas do you serve for remodeling?', a: 'Ceres, Modesto, Turlock, Salida, Riverbank, Patterson and surrounding Central Valley areas.' },
  { q: 'Are you licensed and insured?', a: 'Yes. CA General Contractor License #1106454. We are insured on all projects.' },
];

export default function RemodelingPage() {
  return (
    <>
      <section style={{ paddingTop: '140px', paddingBottom: '80px', background: 'linear-gradient(145deg, #040a16, #0a1428)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '15px', background: 'rgba(255,183,3,0.12)', border: '1px solid rgba(255,183,3,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffb703' }}>
              <Wrench size={26} />
            </div>
            <div className="section-chip" style={{ margin: 0 }}>Remodeling</div>
          </div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: '900', color: '#fff', letterSpacing: '-0.04em', marginBottom: '20px', maxWidth: '720px' }}>
            Home Remodeling in <span className="text-gradient">Ceres & Modesto</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
            Licensed remodeling contractor handling kitchen remodels, bathroom renovations, open concept conversions and interior upgrades across the Central Valley.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '24px' }}>
            <Link href="/contact" className="btn-primary">Request a Remodeling Estimate →</Link>
            <a href="tel:+12092413765" className="btn-secondary"><Phone size={16} />(209) 241-3765</a>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {['CA License #1106454', 'Permits Handled', 'Kitchen & Bath', 'Central Valley'].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <CheckCircle2 size={14} style={{ color: '#ffb703' }} />
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', fontWeight: '600' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '40px' }}>
            Remodeling Services We <span className="text-gradient">Provide</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }} className="two-col">
            {types.map(({ title, desc }) => (
              <div key={title} style={{ padding: '26px', borderRadius: '18px', background: 'rgba(255,183,3,0.05)', border: '1px solid rgba(255,183,3,0.15)' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#fff', marginBottom: '10px', fontFamily: 'Poppins, sans-serif' }}>{title}</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#0b1220' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '40px' }}>
            Our <span className="text-gradient">Process</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {process.map(({ step, title, desc }, i) => (
              <div key={step} style={{ display: 'flex', gap: '24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,183,3,0.12)', border: '2px solid rgba(255,183,3,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: '800', fontSize: '14px', color: '#ffb703', flexShrink: 0 }}>{step}</div>
                  {i < process.length - 1 && <div style={{ width: '2px', height: '40px', background: 'rgba(255,183,3,0.15)' }} />}
                </div>
                <div style={{ paddingBottom: '32px', paddingTop: '10px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#fff', marginBottom: '6px' }}>{title}</h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '40px' }}>
            Remodeling <span className="text-gradient">FAQ</span>
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

      <section style={{ background: '#0b1220', padding: '64px 0', borderTop: '1px solid rgba(255,183,3,0.1)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '14px' }}>
            Ready to <span className="text-gradient">Remodel?</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '28px' }}>CA Lic. #1106454 · Free estimates · Ceres, Modesto & Central Valley</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Request a Remodeling Estimate →</Link>
            <a href="tel:+12092413765" className="btn-secondary"><Phone size={16} />(209) 241-3765</a>
          </div>
          <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <MapPin size={13} style={{ color: '#ffb703' }} />
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>Serving Ceres · Modesto · Turlock · Salida · Riverbank · Patterson</span>
          </div>
        </div>
      </section>

      <style>{'.two-col { } @media (max-width: 640px) { .two-col { grid-template-columns: 1fr !important; } }'}</style>
    </>
  );
}
