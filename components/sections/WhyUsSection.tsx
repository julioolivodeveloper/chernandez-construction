'use client';
import { Shield, Clock, MessageCircle, Award, Users, Zap } from 'lucide-react';

const reasons = [
  {
    Icon: Shield,
    title: 'Licensed & Insured',
    desc: 'CA General Contractor License #1106454. We carry proper insurance so you\'re protected on every project.',
  },
  {
    Icon: Clock,
    title: 'We Show Up On Time',
    desc: 'Reliable scheduling and consistent communication. We keep projects moving without leaving you in the dark.',
  },
  {
    Icon: MessageCircle,
    title: 'Clear Communication',
    desc: 'Spanish and English spoken. We explain every step so you always know what\'s happening with your project.',
  },
  {
    Icon: Award,
    title: 'Quality Craftsmanship',
    desc: 'Framing, ADUs and additions built to California building code with precision and care.',
  },
  {
    Icon: Users,
    title: 'Honest Pricing',
    desc: 'Transparent estimates with no hidden fees. We quote what we mean and deliver what we quote.',
  },
  {
    Icon: Zap,
    title: 'Fast Turnaround',
    desc: 'We respect your timeline. Efficient scheduling and a dedicated crew keeps your project on track.',
  },
];

export default function WhyUsSection() {
  return (
    <section className="section-pad" style={{ background: '#0b1220' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '64px', alignItems: 'center' }} className="why-grid">

          {/* Left: text */}
          <div>
            <div className="section-chip">
              <Award size={12} />
              Why Choose Us
            </div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', fontWeight: '800', color: '#fff', letterSpacing: '-0.035em', lineHeight: 1.15, marginBottom: '20px' }}>
              A Contractor You Can <span className="text-gradient">Actually Trust</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '28px' }}>
              We know choosing a contractor is a big decision. That's why we focus on honesty, reliability and quality — not just on winning the bid.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              {[
                'Licensed General Contractor — Lic. #1106454',
                'Serving Ceres, Modesto & Central Valley',
                'Free estimates, no pressure',
                'Spanish & English spoken',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(255,183,3,0.15)', border: '1px solid rgba(255,183,3,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffb703' }} />
                  </div>
                  <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)', fontWeight: '500' }}>{item}</span>
                </div>
              ))}
            </div>

            <a href="tel:+12092413765" className="btn-primary">
              Call Us Today
            </a>
          </div>

          {/* Right: reasons grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            {reasons.map(({ Icon, title, desc }) => (
              <div key={title} style={{
                padding: '22px', borderRadius: '18px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                transition: 'all 0.25s ease',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = 'rgba(255,183,3,0.05)';
                  el.style.border = '1px solid rgba(255,183,3,0.2)';
                  el.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = 'rgba(255,255,255,0.03)';
                  el.style.border = '1px solid rgba(255,255,255,0.07)';
                  el.style.transform = 'translateY(0)';
                }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '11px',
                  background: 'rgba(255,183,3,0.1)', border: '1px solid rgba(255,183,3,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#ffb703', marginBottom: '14px',
                }}>
                  <Icon size={18} />
                </div>
                <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#fff', marginBottom: '6px', fontFamily: 'Poppins, sans-serif' }}>{title}</h3>
                <p style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
