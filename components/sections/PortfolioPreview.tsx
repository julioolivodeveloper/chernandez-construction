'use client';
import Link from 'next/link';
import { Camera, MapPin, ArrowRight, ImageOff } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'ADU Framing',
    location: 'Modesto, CA',
    category: 'ADU Construction',
    desc: 'Complete structural framing for a 600 sq ft accessory dwelling unit. Foundation to roof plate.',
    badge: 'ADU',
    color: 'rgba(255,183,3,0.12)',
    borderColor: 'rgba(255,183,3,0.25)',
  },
  {
    id: 2,
    title: 'Custom Home Framing',
    location: 'Ceres, CA',
    category: 'Structural Framing',
    desc: 'Full residential framing package for a 2,200 sq ft custom home in the Central Valley.',
    badge: 'Framing',
    color: 'rgba(59,130,246,0.1)',
    borderColor: 'rgba(59,130,246,0.2)',
  },
  {
    id: 3,
    title: 'Room Addition',
    location: 'Turlock, CA',
    category: 'Room Addition',
    desc: '400 sq ft addition including framing, drywall and roofline integration with existing structure.',
    badge: 'Addition',
    color: 'rgba(34,197,94,0.1)',
    borderColor: 'rgba(34,197,94,0.2)',
  },
  {
    id: 4,
    title: 'ADU – Detached Unit',
    location: 'Ceres, CA',
    category: 'ADU Construction',
    desc: 'Detached ADU built from ground up. Permits handled, framing, roofing and interior finish.',
    badge: 'ADU',
    color: 'rgba(255,183,3,0.12)',
    borderColor: 'rgba(255,183,3,0.25)',
  },
  {
    id: 5,
    title: 'Kitchen Remodel',
    location: 'Modesto, CA',
    category: 'Remodeling',
    desc: 'Full kitchen gut and rebuild — framing, drywall, cabinetry and tile work.',
    badge: 'Remodel',
    color: 'rgba(168,85,247,0.1)',
    borderColor: 'rgba(168,85,247,0.2)',
  },
  {
    id: 6,
    title: 'Roof Shingle Installation',
    location: 'Salida, CA',
    category: 'Roofing',
    desc: 'Complete shingle tear-off and re-roof on a 1,800 sq ft residential property.',
    badge: 'Roofing',
    color: 'rgba(239,68,68,0.1)',
    borderColor: 'rgba(239,68,68,0.2)',
  },
];

export default function PortfolioPreview() {
  return (
    <section className="section-pad" style={{ background: 'linear-gradient(180deg, #0b1220 0%, #080e1d 100%)' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '20px', marginBottom: '48px', flexWrap: 'wrap' }}>
          <div>
            <div className="section-chip">
              <Camera size={12} />
              Our Work
            </div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', fontWeight: '800', color: '#fff', letterSpacing: '-0.035em', marginBottom: '10px' }}>
              Recent <span className="text-gradient">Projects</span>
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', maxWidth: '460px', lineHeight: 1.65 }}>
              Real projects from our crew — framing, ADUs, additions and more across the Central Valley.
            </p>
          </div>
          <Link href="/portfolio" className="btn-secondary" style={{ whiteSpace: 'nowrap' }}>
            View All Projects <ArrowRight size={15} />
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="portfolio-grid">
          {projects.map(({ id, title, location, category, desc, badge, color, borderColor }) => (
            <div key={id} style={{
              borderRadius: '20px',
              background: 'rgba(15,26,46,0.6)',
              border: '1px solid rgba(255,255,255,0.07)',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
            }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.border = `1px solid ${borderColor}`;
                el.style.transform = 'translateY(-6px)';
                el.style.boxShadow = '0 20px 50px rgba(0,0,0,0.4)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.border = '1px solid rgba(255,255,255,0.07)';
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'none';
              }}>
              {/* Photo placeholder */}
              <div style={{
                height: '200px',
                background: `linear-gradient(135deg, ${color}, rgba(0,0,0,0.3))`,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                gap: '12px', position: 'relative',
                borderBottom: `1px solid ${borderColor}`,
              }}>
                <ImageOff size={36} style={{ color: 'rgba(255,255,255,0.2)' }} />
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', fontWeight: '600' }}>
                  Client photos coming soon
                </span>
                <span style={{
                  position: 'absolute', top: '14px', left: '14px',
                  padding: '5px 12px', borderRadius: '999px',
                  background: 'rgba(0,0,0,0.5)',
                  border: `1px solid ${borderColor}`,
                  fontSize: '11px', fontWeight: '800', color: '#fff',
                  letterSpacing: '0.05em',
                }}>{badge}</span>
              </div>

              <div style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#fff', marginBottom: '4px', fontFamily: 'Poppins, sans-serif' }}>{title}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '10px' }}>
                  <MapPin size={12} style={{ color: '#ffb703', flexShrink: 0 }} />
                  <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)' }}>{location}</span>
                  <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', margin: '0 4px' }}>·</span>
                  <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)' }}>{category}</span>
                </div>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, marginBottom: '16px' }}>{desc}</p>
                <Link href="/contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  fontSize: '12.5px', fontWeight: '700', color: '#ffb703',
                  textDecoration: 'none', transition: 'gap 0.2s',
                }}>
                  Request similar project <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Note about photos */}
        <div style={{
          marginTop: '32px', padding: '16px 24px', borderRadius: '14px',
          background: 'rgba(255,183,3,0.06)', border: '1px solid rgba(255,183,3,0.15)',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
            📸 We're collecting real project photos to showcase our work. If you'd like to see examples of a specific project type, <Link href="/contact" style={{ color: '#ffb703', textDecoration: 'none', fontWeight: '700' }}>contact us directly</Link> and we'll share them with you.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .portfolio-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 580px) {
          .portfolio-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
