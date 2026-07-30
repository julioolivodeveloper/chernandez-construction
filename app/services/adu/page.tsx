import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, CheckCircle2, Phone, MapPin } from 'lucide-react';

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

const faqs = [
  { q: 'How long does it take to build an ADU?', a: 'From permit approval to completion, an ADU typically takes 4–8 months depending on type and size. We can help estimate your specific timeline.' },
  { q: 'Can an ADU be rented out?', a: 'Yes. ADUs can be rented as long-term rentals under California law. Short-term rental rules vary by city — check with your local municipality.' },
  { q: 'Do you handle ADU permits?', a: 'We assist with permit coordination and work with your local building department throughout the process.' },
  { q: 'What cities do you build ADUs in?', a: 'We build ADUs in Ceres, Modesto, Turlock, Salida, Riverbank, Patterson and surrounding Central Valley communities.' },
  { q: 'What is the minimum size for an ADU?', a: 'California law allows ADUs as small as 150 sq ft, but most practical ADUs are 400–1,200 sq ft.' },
];

export default function AduPage() {
  return (
    <>
      <section style={{ paddingTop: '140px', paddingBottom: '80px', background: 'linear-gradient(145deg, #040a16, #0a1428)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '15px', background: 'rgba(255,183,3,0.12)', border: '1px solid rgba(255,183,3,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffb703' }}>
              <Home size={26} />
            </div>
            <div className="section-chip" style={{ margin: 0 }}>ADU Specialist</div>
          </div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: '900', color: '#fff', letterSpacing: '-0.04em', marginBottom: '20px', maxWidth: '700px' }}>
            ADU Construction in <span className="text-gradient">Ceres & Modesto</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
            Accessory dwelling units built to California code. Detached, attached, garage conversions — we frame it right and coordinate the permits.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Get an ADU Consultation →</Link>
            <a href="tel:+12092413765" className="btn-secondary"><Phone size={16} />(209) 241-3765</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '24px' }}>
            <CheckCircle2 size={15} style={{ color: '#ffb703' }} />
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>CA License #1106454 · ADU Specialist · Free Estimates</span>
          </div>
        </div>
      </section>

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

      <section className="section-pad" style={{ background: '#0b1220' }}>
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

      <section style={{ background: '#080e1d', padding: '64px 0', borderTop: '1px solid rgba(255,183,3,0.1)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '14px' }}>
            Start Your <span className="text-gradient">ADU Project</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '28px' }}>
            Call us or request a free estimate to get started.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Get an ADU Consultation →</Link>
            <a href="tel:+12092413765" className="btn-secondary"><Phone size={16} />(209) 241-3765</a>
          </div>
          <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <MapPin size={13} style={{ color: '#ffb703' }} />
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>Serving Ceres · Modesto · Turlock · Central Valley</span>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
