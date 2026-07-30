import type { Metadata } from 'next';
import Link from 'next/link';
import { Layers, CheckCircle2, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Structural Framing Contractor | C Hernandez Construction – Ceres & Modesto CA',
  description: 'Licensed structural framing contractor (Lic. #1106454) in Ceres and Modesto, CA. Residential framing for new homes, room additions and ADUs. Call (209) 241-3765 for a free estimate.',
};

const process = [
  { step: '01', title: 'Free On-Site Estimate', desc: 'We visit your property, review plans or drawings, and provide a detailed written estimate at no cost.' },
  { step: '02', title: 'Permit Coordination', desc: 'We assist with pulling permits through your local building department before any framing begins.' },
  { step: '03', title: 'Material & Crew Scheduling', desc: 'Lumber is ordered and delivered; crew is scheduled to minimize delays and maximize efficiency.' },
  { step: '04', title: 'Framing Execution', desc: 'Wall systems, floor joists, roof framing, sheathing and blocking — all built to California building code.' },
  { step: '05', title: 'Inspection & Completion', desc: 'We coordinate the framing inspection and remain available for any corrections or sign-off.' },
];

const faqs = [
  { q: 'Do you pull permits for framing projects?', a: 'Yes, we assist with permit coordination for all framing work. Proper permits protect you as the homeowner.' },
  { q: 'Do you do framing for ADUs?', a: 'Absolutely — ADU framing is one of our specialties. We frame detached units, garage conversions and attached ADUs.' },
  { q: 'What areas do you serve for framing?', a: 'We serve Ceres, Modesto, Turlock, Salida, Riverbank, Patterson and surrounding Central Valley areas.' },
  { q: 'How long does residential framing take?', a: 'A standard single-story addition takes 3–5 days for framing. A full custom home can take 2–4 weeks depending on size and complexity.' },
  { q: 'Are you licensed and insured?', a: 'Yes. CA General Contractor License #1106454. We carry liability insurance on all projects.' },
];

export default function FramingPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: '140px', paddingBottom: '80px', background: 'linear-gradient(145deg, #040a16, #0a1428)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '15px', background: 'rgba(255,183,3,0.12)', border: '1px solid rgba(255,183,3,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffb703' }}>
              <Layers size={26} />
            </div>
            <div className="section-chip" style={{ margin: 0 }}>Core Specialty</div>
          </div>

          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: '900', color: '#fff', letterSpacing: '-0.04em', marginBottom: '20px', maxWidth: '700px' }}>
            Residential <span className="text-gradient">Structural Framing</span> in Ceres & Modesto
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
            Licensed framing contractor specializing in walls, roof systems, room additions, ADUs and new construction across the Central Valley.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Request a Framing Estimate →</Link>
            <a href="tel:+12092413765" className="btn-secondary"><Phone size={16} />(209) 241-3765</a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '24px' }}>
            <CheckCircle2 size={15} style={{ color: '#ffb703' }} />
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>CA License #1106454 · Licensed & Insured · Serving Ceres, Modesto & Central Valley</span>
          </div>
        </div>
      </section>

      {/* What we frame */}
      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '40px' }}>
            Types of <span className="text-gradient">Framing We Do</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="three-col">
            {[
              { title: 'Room Additions', desc: 'Framing for bedroom, living room, or multi-room additions that tie into existing structure.' },
              { title: 'ADU Framing', desc: 'Detached ADUs, garage conversions and attached ADUs built to California ADU regulations.' },
              { title: 'New Home Construction', desc: 'Full framing packages for custom residential homes from sill plate to ridge board.' },
              { title: 'Roof Framing', desc: 'Hip roofs, gable roofs, complex valley intersections and rafter systems.' },
              { title: 'Wall Systems', desc: 'Interior and exterior wall framing, including load-bearing walls and header systems.' },
              { title: 'Floor Framing', desc: 'Floor joist systems, subfloor installation and raised foundation framing.' },
            ].map(({ title, desc }) => (
              <div key={title} style={{ padding: '22px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#fff', marginBottom: '8px', fontFamily: 'Poppins, sans-serif' }}>{title}</h3>
                <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad" style={{ background: '#0b1220' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '40px' }}>
            Our <span className="text-gradient">Process</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {process.map(({ step, title, desc }, i) => (
              <div key={step} style={{ display: 'flex', gap: '24px', paddingBottom: i < process.length - 1 ? '0' : '0' }}>
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

      {/* FAQ */}
      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '40px' }}>
            Frequently Asked <span className="text-gradient">Questions</span>
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

      {/* CTA */}
      <section style={{ background: '#0b1220', padding: '64px 0', borderTop: '1px solid rgba(255,183,3,0.1)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '14px' }}>
            Ready to Start Your <span className="text-gradient">Framing Project?</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '28px', lineHeight: 1.7 }}>
            Call or request a free estimate. We serve Ceres, Modesto and the Central Valley.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Request a Framing Estimate →</Link>
            <a href="tel:+12092413765" className="btn-secondary"><Phone size={16} />(209) 241-3765</a>
          </div>
          <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <MapPin size={13} style={{ color: '#ffb703' }} />
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>Serving Ceres · Modesto · Turlock · Salida · Riverbank · Patterson</span>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .three-col { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .three-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
