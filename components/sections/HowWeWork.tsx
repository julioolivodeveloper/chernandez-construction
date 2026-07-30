import Link from 'next/link';
import { PhoneCall, ClipboardCheck, HardHat } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Call or Message Us',
    desc: 'Reach us by phone, WhatsApp, or our online form. Tell us about your project — we respond within 24 hours.',
    Icon: PhoneCall,
    color: '#3b82f6',
    glow: 'rgba(59,130,246,0.18)',
    border: 'rgba(59,130,246,0.35)',
  },
  {
    number: '02',
    title: 'Free On-Site Estimate',
    desc: 'We visit your property at no cost, assess the scope of work, and give you a clear written estimate — no surprises.',
    Icon: ClipboardCheck,
    color: '#ffb703',
    glow: 'rgba(255,183,3,0.18)',
    border: 'rgba(255,183,3,0.35)',
  },
  {
    number: '03',
    title: 'We Build It Right',
    desc: 'Our licensed crew handles permits, inspections, and construction from start to finish. You\'re updated at every stage.',
    Icon: HardHat,
    color: '#22c55e',
    glow: 'rgba(34,197,94,0.18)',
    border: 'rgba(34,197,94,0.35)',
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
              <div key={i} style={{ position: 'relative', padding: '36px 28px', borderRadius: '24px', background: '#0b1525', border: '1px solid rgba(255,255,255,0.07)', overflow: 'hidden' }}>
                {/* Bg number */}
                <div style={{ position: 'absolute', top: '-10px', right: '16px', fontFamily: 'Poppins, sans-serif', fontSize: '6rem', fontWeight: '900', color: 'rgba(255,255,255,0.03)', lineHeight: 1, userSelect: 'none' }}>
                  {step.number}
                </div>

                {/* Glow spot behind icon */}
                <div style={{ position: 'absolute', top: '24px', left: '24px', width: '80px', height: '80px', borderRadius: '50%', background: step.glow, filter: 'blur(24px)', pointerEvents: 'none' }} />

                {/* Icon */}
                <div style={{ position: 'relative', width: '64px', height: '64px', borderRadius: '20px', background: `linear-gradient(135deg, ${step.glow} 0%, rgba(0,0,0,0) 100%)`, border: `1px solid ${step.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', boxShadow: `0 8px 24px ${step.glow}` }}>
                  <Icon size={28} color={step.color} strokeWidth={1.6} />
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
