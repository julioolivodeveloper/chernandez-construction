'use client';
import Link from 'next/link';
import { Layers, Home, Building2, Shield, Wrench, Grid3X3, PaintBucket, DoorOpen, Warehouse, Hammer, ArrowRight } from 'lucide-react';

const services = [
  {
    href: '/services/framing',
    Icon: Layers,
    label: 'Structural Framing',
    sub: 'Walls, roof systems & room additions',
    featured: true,
    badge: 'Core Specialty',
  },
  {
    href: '/services/adu',
    Icon: Home,
    label: 'ADU Construction',
    sub: 'Accessory dwelling units built to code',
    featured: true,
    badge: 'High Demand',
  },
  {
    href: '/services/additions',
    Icon: Building2,
    label: 'Room Additions',
    sub: 'Expand your home the right way',
    featured: true,
    badge: 'Popular',
  },
  {
    href: '/services/general-contractor',
    Icon: Shield,
    label: 'General Contractor',
    sub: 'Licensed · Lic. #1106454',
    featured: true,
  },
  { href: '/services/remodeling', Icon: Wrench, label: 'Remodeling', sub: 'Kitchens, baths & interior' },
  { href: '/services/roofing', Icon: Grid3X3, label: 'Roof Shingles', sub: 'Installation & repair' },
  { href: '/services/drywall', Icon: PaintBucket, label: 'Drywall & Painting', sub: 'Install, texture & paint' },
  { href: '/services/doors-windows', Icon: DoorOpen, label: 'Doors & Windows', sub: 'Interior & exterior installs' },
  { href: '/services/new-construction', Icon: Warehouse, label: 'New Construction', sub: 'Custom homes from ground up' },
  { href: '/services/carpentry', Icon: Hammer, label: 'Carpentry & Trim', sub: 'Baseboards, crown molding' },
];

const featured = services.filter(s => s.featured);
const rest = services.filter(s => !s.featured);

export default function ServicesSection() {
  return (
    <section className="section-pad" style={{ background: 'linear-gradient(180deg, #080e1d 0%, #0b1220 100%)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="section-chip" style={{ margin: '0 auto 20px' }}>
            <Layers size={12} />
            What We Build
          </div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', color: '#fff', letterSpacing: '-0.035em', marginBottom: '14px' }}>
            Our <span className="text-gradient">Services</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
            From residential framing and ADUs to full remodels — we handle it with craftsmanship and care.
          </p>
        </div>

        {/* Featured 4 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '16px' }} className="services-featured">
          {featured.map(({ href, Icon, label, sub, badge }) => (
            <Link key={href} href={href} style={{
              display: 'flex', flexDirection: 'column', gap: '14px',
              padding: '28px', borderRadius: '20px',
              background: 'linear-gradient(135deg, rgba(15,26,46,0.9), rgba(10,20,40,0.95))',
              border: '1px solid rgba(255,183,3,0.15)',
              textDecoration: 'none', color: '#fff',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative', overflow: 'hidden',
            }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.border = '1px solid rgba(255,183,3,0.4)';
                el.style.transform = 'translateY(-4px)';
                el.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.border = '1px solid rgba(255,183,3,0.15)';
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'none';
              }}>
              {/* Background glow */}
              <div style={{
                position: 'absolute', top: 0, right: 0,
                width: '200px', height: '200px',
                background: 'radial-gradient(circle, rgba(255,183,3,0.06) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
                <div style={{
                  width: '52px', height: '52px', borderRadius: '14px', flexShrink: 0,
                  background: 'rgba(255,183,3,0.12)', border: '1px solid rgba(255,183,3,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#ffb703',
                }}>
                  <Icon size={24} />
                </div>
                {badge && (
                  <span style={{
                    display: 'inline-block', padding: '4px 10px', borderRadius: '999px',
                    background: 'rgba(255,183,3,0.12)', border: '1px solid rgba(255,183,3,0.25)',
                    fontSize: '10.5px', fontWeight: '800', color: '#ffb703', letterSpacing: '0.05em',
                    whiteSpace: 'nowrap',
                  }}>{badge}</span>
                )}
              </div>

              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#fff', marginBottom: '6px', fontFamily: 'Poppins, sans-serif' }}>{label}</h3>
                <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{sub}</p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#ffb703', fontSize: '13px', fontWeight: '700' }}>
                Learn more <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>

        {/* Rest of services */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }} className="services-rest">
          {rest.map(({ href, Icon, label, sub }) => (
            <Link key={href} href={href} style={{
              display: 'flex', alignItems: 'center', gap: '14px',
              padding: '20px', borderRadius: '16px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              textDecoration: 'none', color: '#fff',
              transition: 'all 0.2s ease',
            }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(255,183,3,0.06)';
                el.style.border = '1px solid rgba(255,183,3,0.2)';
                el.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(255,255,255,0.03)';
                el.style.border = '1px solid rgba(255,255,255,0.07)';
                el.style.transform = 'translateY(0)';
              }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
                background: 'rgba(255,183,3,0.08)', border: '1px solid rgba(255,183,3,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffb703',
              }}>
                <Icon size={18} />
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#fff', marginBottom: '3px' }}>{label}</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>{sub}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="/contact" className="btn-primary" style={{ fontSize: '15px', padding: '14px 32px' }}>
            Request a Free Estimate →
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-featured { grid-template-columns: 1fr !important; }
          .services-rest { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .services-rest { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
