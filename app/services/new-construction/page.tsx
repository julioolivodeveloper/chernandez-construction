import type { Metadata } from 'next';
import Link from 'next/link';
import { Warehouse, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'New Home Construction | C Hernandez Construction – Ceres & Modesto CA',
  description: 'Licensed new construction contractor (Lic. #1106454) in Ceres and Modesto, CA. Custom residential homes built from the ground up in the Central Valley. Call (209) 241-3765.',
};

const process = [
  { step: '01', title: 'Plans & Permits', desc: 'We work from your architectural plans and coordinate permit applications with your local building department.' },
  { step: '02', title: 'Foundation & Slab', desc: 'Foundation framing, slab prep and coordination with concrete contractor.' },
  { step: '03', title: 'Structural Framing', desc: 'Full wall, floor and roof framing package — our core specialty for residential construction.' },
  { step: '04', title: 'Sheathing & Wrap', desc: 'OSB sheathing, house wrap and window/door rough openings ready for inspection.' },
  { step: '05', title: 'Rough Inspections', desc: 'Frame inspection coordination with your local building department before close-in.' },
  { step: '06', title: 'Close-In & Finish', desc: 'Drywall, trim, doors, windows and interior finish to completion.' },
];

const faqs = [
  { q: 'Do you build custom homes from scratch?', a: 'Yes. We handle the framing and construction package for custom residential homes, working from your architectural plans.' },
  { q: 'Do you work with owner-builders?', a: 'Yes. We work with owner-builders who have their permits in place and need a licensed framing and construction crew.' },
  { q: 'What is included in your new construction package?', a: 'Typically: framing, sheathing, roof, drywall, interior doors and windows. We can scope specific packages per project.' },
  { q: 'What areas do you serve for new construction?', a: 'Ceres, Modesto, Turlock, Salida, Riverbank, Patterson and surrounding Central Valley communities.' },
  { q: 'Are you licensed for new home construction?', a: 'Yes. CA General Contractor License #1106454. We are properly licensed and insured for residential new construction.' },
];

export default function NewConstructionPage() {
  return (
    <>
      <section style={{ paddingTop: '140px', paddingBottom: '80px', background: 'linear-gradient(145deg, #040a16, #0a1428)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '15px', background: 'rgba(255,183,3,0.12)', border: '1px solid rgba(255,183,3,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffb703' }}>
              <Warehouse size={26} />
            </div>
            <div className="section-chip" style={{ margin: 0 }}>New Construction</div>
          </div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: '900', color: '#fff', letterSpacing: '-0.04em', marginBottom: '20px', maxWidth: '720px' }}>
            New Home Construction in <span className="text-gradient">Ceres & Modesto</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
            Licensed general contractor building custom residential homes from the ground up in the Central Valley. Framing is our foundation — your plans become reality.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '24px' }}>
            <Link href="/contact" className="btn-primary">Request a Construction Estimate →</Link>
            <a href="tel:+12092413765" className="btn-secondary"><Phone size={16} />(209) 241-3765</a>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {['CA License #1106454', 'Custom Homes', 'Permit Coordination', 'Central Valley'].map(item => (
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
            Our <span className="text-gradient">Construction Process</span>
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

      <section className="section-pad" style={{ background: '#0b1220' }}>
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

      <section style={{ background: '#080e1d', padding: '64px 0', borderTop: '1px solid rgba(255,183,3,0.1)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '14px' }}>
            Ready to <span className="text-gradient">Build?</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '28px' }}>CA Lic. #1106454 · Free estimates · Ceres, Modesto & Central Valley</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Request a Construction Estimate →</Link>
            <a href="tel:+12092413765" className="btn-secondary"><Phone size={16} />(209) 241-3765</a>
          </div>
          <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <MapPin size={13} style={{ color: '#ffb703' }} />
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>Serving Ceres · Modesto · Turlock · Salida · Riverbank · Patterson</span>
          </div>
        </div>
      </section>
    </>
  );
}
