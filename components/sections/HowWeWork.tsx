import Link from 'next/link';
import { PhoneCall, ClipboardCheck, HardHat } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Call or Message Us',
    desc: 'Reach us by phone, WhatsApp, or our online form. Tell us about your project — we respond within 24 hours.',
    Icon: PhoneCall,
    color: '#60a5fa',
    colorDark: '#1d4ed8',
    glow: 'rgba(59,130,246,0.35)',
    gradient: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
    ring: 'rgba(59,130,246,0.2)',
  },
  {
    number: '02',
    title: 'Free On-Site Estimate',
    desc: 'We visit your property at no cost, assess the scope of work, and give you a clear written estimate — no surprises.',
    Icon: ClipboardCheck,
    color: '#fbbf24',
    colorDark: '#b45309',
    glow: 'rgba(255,183,3,0.35)',
    gradient: 'linear-gradient(135deg, #92400e 0%, #f59e0b 100%)',
    ring: 'rgba(255,183,3,0.2)',
  },
  {
    number: '03',
    title: 'We Build It Right',
    desc: 'Our licensed crew handles permits, inspections, and construction from start to finish. You\'re updated at every stage.',
    Icon: HardHat,
    color: '#4ade80',
    colorDark: '#15803d',
    glow: 'rgba(34,197,94,0.35)',
    gradient: 'linear-gradient(135deg, #14532d 0%, #22c55e 100%)',
    ring: 'rgba(34,197,94,0.2)',
  },
];

export default function HowWeWork() {
  return (
    <section className="section-pad" style={{ background: '#040a16' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 16px', borderRadius: '999px', background: 'rgba(255,183,3,0.08)', border: '1px solid rgba(255,183,3,0.25)', fontSize: '11px', fontWeight: '800', color: '#ffb703', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '18px' }}>
            Simple Process
          </div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: '900', color: '#fff', marginBottom: '14px', letterSpacing: '-0.03em' }}>
            How We <span style={{ color: '#ffb703' }}>Work</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            From your first call to the final inspection — here&apos;s exactly what to expect when you work with us.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '48px' }} className="steps-grid">
          {steps.map((step, i) => {
            const { Icon } = step;
            return (
              <div key={i} style={{ position: 'relative', padding: '40px 28px 36px', borderRadius: '24px', background: '#0b1525', border: '1px solid rgba(255,255,255,0.07)', overflow: 'hidden', textAlign: 'center' }}>
                {/* Bg number */}
                <div style={{ position: 'absolute', top: '-10px', right: '12px', fontFamily: 'Poppins, sans-serif', fontSize: '6rem', fontWeight: '900', color: 'rgba(255,255,255,0.03)', lineHeight: 1, userSelect: 'none' }}>
                  {step.number}
                </div>

                {/* Glow pool at top */}
                <div style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', width: '160px', height: '100px', borderRadius: '50%', background: step.glow, filter: 'blur(40px)', pointerEvents: 'none', opacity: 0.6 }} />

                {/* Icon — outer ring + inner circle */}
                <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '28px' }}>
                  {/* Outer ring */}
                  <div style={{ position: 'absolute', width: '104px', height: '104px', borderRadius: '50%', background: step.ring, border: `1px solid ${step.ring}` }} />
                  {/* Inner circle */}
                  <div style={{ position: 'relative', width: '80px', height: '80px', borderRadius: '50%', background: step.gradient, boxShadow: `0 12px 32px ${step.glow}, 0 0 0 1px rgba(255,255,255,0.08)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={36} color="#fff" strokeWidth={1.5} />
                  </div>
                </div>

                <div style={{ fontSize: '11px', fontWeight: '800', color: step.color, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '10px' }}>
                  Step {step.number}
                </div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.15rem', fontWeight: '800', color: '#fff', marginBottom: '12px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Get Your Free Estimate →</Link>
            <a href="https://wa.link/roppnh" target="_blank" rel="noopener" className="btn-whatsapp">WhatsApp Us</a>
          </div>
          <p style={{ marginTop: '16px', fontSize: '13px', color: 'rgba(255,255,255,0.3)' }}>
            No obligation · Same-day response · Lic. #1106454
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) { .steps-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
