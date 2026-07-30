import type { Metadata } from 'next';
import Link from 'next/link';
import { DoorOpen, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Doors & Windows Installation | C Hernandez Construction – Ceres & Modesto CA',
  description: 'Licensed door and window installation contractor (Lic. #1106454) in Ceres and Modesto, CA. Interior & exterior installs. Call (209) 241-3765 for a free estimate.',
};

const types = [
  { title: 'Exterior Door Installation', desc: 'Entry doors, French doors, sliding glass doors — properly framed, flashed and weather-sealed.' },
  { title: 'Interior Door Installation', desc: 'Pre-hung and slab doors for bedrooms, bathrooms and closets, including hardware installation.' },
  { title: 'Window Installation', desc: 'New window installs in new construction or replacement windows in existing openings.' },
  { title: 'New Openings', desc: 'Cut new door or window openings in existing walls, including proper header framing and finishing.' },
];

const faqs = [
  { q: 'Do you install both interior and exterior doors?', a: 'Yes. We install exterior entry doors, interior pre-hung doors and sliding or French doors for both new and existing construction.' },
  { q: 'Can you cut a new opening for a door or window?', a: 'Yes. We frame new openings in existing walls, including proper header sizing and structural support.' },
  { q: 'Do you install windows in new ADUs and additions?', a: 'Yes — window installation is part of our ADU and addition packages, or as a standalone service.' },
  { q: 'What areas do you serve?', a: 'Ceres, Modesto, Turlock, Salida, Riverbank, Patterson and surrounding Central Valley areas.' },
  { q: 'Are you licensed for this work?', a: 'Yes. CA General Contractor License #1106454 covers door and window installation.' },
];

export default function DoorsWindowsPage() {
  return (
    <>
      <section style={{ paddingTop: '140px', paddingBottom: '80px', background: 'linear-gradient(145deg, #040a16, #0a1428)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '15px', background: 'rgba(255,183,3,0.12)', border: '1px solid rgba(255,183,3,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffb703' }}>
              <DoorOpen size={26} />
            </div>
            <div className="section-chip" style={{ margin: 0 }}>Doors & Windows</div>
          </div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: '900', color: '#fff', letterSpacing: '-0.04em', marginBottom: '20px', maxWidth: '720px' }}>
            Door & Window Installation in <span className="text-gradient">Ceres & Modesto</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
            Licensed door and window installation for new construction, ADUs, additions and existing homes across the Central Valley. Properly framed, flashed and finished.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '24px' }}>
            <Link href="/contact" className="btn-primary">Request a Free Estimate →</Link>
            <a href="tel:+12092413765" className="btn-secondary"><Phone size={16} />(209) 241-3765</a>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {['CA License #1106454', 'Interior & Exterior', 'New Openings', 'Central Valley'].map(item => (
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
            Installation Services We <span className="text-gradient">Offer</span>
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

      <section style={{ background: '#080e1d', padding: '64px 0', borderTop: '1px solid rgba(255,183,3,0.1)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '14px' }}>
            Need Doors or <span className="text-gradient">Windows Installed?</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '28px' }}>CA Lic. #1106454 · Free estimates · Ceres, Modesto & Central Valley</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Request a Free Estimate →</Link>
            <a href="tel:+12092413765" className="btn-secondary"><Phone size={16} />(209) 241-3765</a>
          </div>
          <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <MapPin size={13} style={{ color: '#ffb703' }} />
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>Serving Ceres · Modesto · Turlock · Salida · Riverbank · Patterson</span>
          </div>
        </div>
      </section>
      <style>{'.two-col {} @media (max-width:640px){.two-col{grid-template-columns:1fr!important}}'}</style>
    </>
  );
}
