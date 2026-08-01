'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const LOGO_URL = 'https://umyhcsrxwdogvbxgipnx.supabase.co/storage/v1/object/public/site-images/logo.png';
import { Phone, Menu, X, ChevronDown, Home, Hammer, Layers, Grid3X3, Wrench, PaintBucket, Warehouse, DoorOpen, Building2, Shield } from 'lucide-react';

const services = [
  { href: '/services/framing', label: 'Structural Framing', sub: 'Walls, roofs, room additions', Icon: Layers },
  { href: '/services/adu', label: 'ADU Construction', sub: 'Accessory dwelling units', Icon: Home },
  { href: '/services/additions', label: 'Room Additions', sub: 'Expand your living space', Icon: Building2 },
  { href: '/services/general-contractor', label: 'General Contractor', sub: 'Lic. #1106454 · Licensed & Insured', Icon: Shield },
  { href: '/services/remodeling', label: 'Remodeling', sub: 'Kitchens, baths & more', Icon: Wrench },
  { href: '/services/roofing', label: 'Roof Shingles', sub: 'Installation & repair', Icon: Grid3X3 },
  { href: '/services/drywall', label: 'Drywall & Painting', sub: 'Install, texture & interior paint', Icon: PaintBucket },
  { href: '/services/doors-windows', label: 'Doors & Windows', sub: 'Interior & exterior installs', Icon: DoorOpen },
  { href: '/services/new-construction', label: 'New Construction', sub: 'Custom homes from ground up', Icon: Warehouse },
  { href: '/services/carpentry', label: 'Carpentry & Trim', sub: 'Baseboards, crown molding', Icon: Hammer },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.3s ease',
          background: scrolled
            ? 'rgba(8,14,29,0.95)'
            : 'linear-gradient(180deg, rgba(8,14,29,0.9) 0%, transparent 100%)',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,183,3,0.12)' : '1px solid transparent',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          {/* Brand */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <Image
              src={LOGO_URL}
              alt="C Hernandez Construction logo"
              width={48}
              height={48}
              style={{ objectFit: 'contain', flexShrink: 0 }}
              priority
            />
            <div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '800', fontSize: '15px', color: '#fff', lineHeight: 1.2 }}>
                C Hernandez <span style={{ color: '#ffb703' }}>Construction</span>
              </div>
              <div style={{ fontSize: '10.5px', color: 'rgba(255,255,255,0.45)', fontWeight: '500', letterSpacing: '0.03em' }}>
                Lic. #1106454 · Ceres, CA
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="hidden-mobile">
            <Link href="/" style={{ padding: '8px 14px', borderRadius: '8px', color: 'rgba(255,255,255,0.8)', fontSize: '14px', fontWeight: '600', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color = '#ffb703'; (e.target as HTMLElement).style.background = 'rgba(255,183,3,0.08)'; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.8)'; (e.target as HTMLElement).style.background = 'transparent'; }}>
              Home
            </Link>

            {/* Services dropdown */}
            <div style={{ position: 'relative' }}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}>
              <button style={{
                display: 'flex', alignItems: 'center', gap: '5px',
                padding: '8px 14px', borderRadius: '8px',
                color: servicesOpen ? '#ffb703' : 'rgba(255,255,255,0.8)',
                background: servicesOpen ? 'rgba(255,183,3,0.08)' : 'transparent',
                fontSize: '14px', fontWeight: '600',
                border: 'none', cursor: 'pointer',
                transition: 'all 0.2s',
              }}>
                Services
                <ChevronDown size={13} style={{ transform: servicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>

              {/* Mega menu */}
              <div style={{
                position: 'absolute', top: 'calc(100% + 8px)', left: '50%',
                transform: servicesOpen ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-8px)',
                width: '560px',
                background: '#0f1a2e',
                border: '1px solid rgba(255,183,3,0.2)',
                borderRadius: '20px',
                boxShadow: '0 24px 60px rgba(0,0,0,0.6)',
                padding: '20px',
                opacity: servicesOpen ? 1 : 0,
                visibility: servicesOpen ? 'visible' : 'hidden',
                pointerEvents: servicesOpen ? 'all' : 'none',
                transition: 'all 0.2s ease',
              }}>
                {/* Featured */}
                <Link href="/services/framing" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '14px 16px', borderRadius: '14px', marginBottom: '12px',
                  background: 'linear-gradient(135deg, rgba(255,183,3,0.15), rgba(255,183,3,0.06))',
                  border: '1px solid rgba(255,183,3,0.3)', textDecoration: 'none',
                  transition: 'background 0.2s',
                }}>
                  <div>
                    <div style={{ color: '#ffb703', fontWeight: '800', fontSize: '14px', marginBottom: '3px' }}>
                      🏆 Featured: Framing, ADUs & Additions
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>Our core specialty · Lic. #1106454</div>
                  </div>
                  <ChevronDown size={14} style={{ color: '#ffb703', transform: 'rotate(-90deg)' }} />
                </Link>

                <div style={{ fontSize: '10px', fontWeight: '800', letterSpacing: '0.18em', color: 'rgba(255,183,3,0.6)', textTransform: 'uppercase', paddingBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.07)', marginBottom: '12px' }}>
                  All Services
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
                  {services.map(({ href, label, sub, Icon }) => (
                    <Link key={href} href={href} style={{
                      display: 'flex', alignItems: 'center', gap: '11px',
                      padding: '11px 12px', borderRadius: '12px', textDecoration: 'none',
                      color: '#fff', transition: 'all 0.15s',
                    }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,183,3,0.09)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}>
                      <span style={{
                        width: '34px', height: '34px', borderRadius: '9px', flexShrink: 0,
                        background: 'rgba(255,183,3,0.1)', border: '1px solid rgba(255,183,3,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffb703',
                      }}>
                        <Icon size={16} />
                      </span>
                      <span>
                        <strong style={{ display: 'block', fontSize: '13px', fontWeight: '700', lineHeight: 1.2 }}>{label}</strong>
                        <small style={{ display: 'block', fontSize: '11px', color: 'rgba(255,255,255,0.45)', marginTop: '2px' }}>{sub}</small>
                      </span>
                    </Link>
                  ))}
                </div>

                <div style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.07)', textAlign: 'center' }}>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '7px',
                    padding: '10px 22px', borderRadius: '999px',
                    background: 'rgba(255,183,3,0.12)', border: '1px solid rgba(255,183,3,0.28)',
                    color: '#ffb703', fontSize: '13px', fontWeight: '700', textDecoration: 'none',
                    transition: 'background 0.2s',
                  }}>
                    <Phone size={13} />
                    Get a Free Estimate
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/portfolio" style={{ padding: '8px 14px', borderRadius: '8px', color: 'rgba(255,255,255,0.8)', fontSize: '14px', fontWeight: '600', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color = '#ffb703'; (e.target as HTMLElement).style.background = 'rgba(255,183,3,0.08)'; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.8)'; (e.target as HTMLElement).style.background = 'transparent'; }}>
              Portfolio
            </Link>

            <Link href="/about" style={{ padding: '8px 14px', borderRadius: '8px', color: 'rgba(255,255,255,0.8)', fontSize: '14px', fontWeight: '600', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color = '#ffb703'; (e.target as HTMLElement).style.background = 'rgba(255,183,3,0.08)'; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.8)'; (e.target as HTMLElement).style.background = 'transparent'; }}>
              About
            </Link>

            <Link href="/blog" style={{ padding: '8px 14px', borderRadius: '8px', color: 'rgba(255,255,255,0.8)', fontSize: '14px', fontWeight: '600', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color = '#ffb703'; (e.target as HTMLElement).style.background = 'rgba(255,183,3,0.08)'; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.8)'; (e.target as HTMLElement).style.background = 'transparent'; }}>
              Blog
            </Link>

            <Link href="/contact" style={{ padding: '8px 14px', borderRadius: '8px', color: 'rgba(255,255,255,0.8)', fontSize: '14px', fontWeight: '600', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color = '#ffb703'; (e.target as HTMLElement).style.background = 'rgba(255,183,3,0.08)'; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.8)'; (e.target as HTMLElement).style.background = 'transparent'; }}>
              Contact
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="hidden-mobile">
            <a href="tel:+12092413765" style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '9px 18px', borderRadius: '999px',
              background: 'rgba(255,183,3,0.1)', border: '1px solid rgba(255,183,3,0.3)',
              color: '#ffb703', fontSize: '13px', fontWeight: '700', textDecoration: 'none',
              transition: 'all 0.2s',
            }}>
              <Phone size={14} />
              (209) 241-3765
            </a>
            <Link href="/contact#form" className="btn-primary" style={{ padding: '9px 20px', fontSize: '13px' }}>
              Free Estimate
            </Link>
          </div>

          {/* Burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none', alignItems: 'center', justifyContent: 'center',
              width: '42px', height: '42px', borderRadius: '10px',
              background: 'rgba(255,183,3,0.1)', border: '1px solid rgba(255,183,3,0.25)',
              color: '#ffb703', cursor: 'pointer',
            }}
            aria-label="Toggle menu"
            className="show-mobile-flex"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 49,
          background: 'rgba(8,14,29,0.98)',
          backdropFilter: 'blur(20px)',
          display: 'flex', flexDirection: 'column',
          paddingTop: '88px', paddingBottom: '24px',
          overflowY: 'auto',
        }}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { href: '/', label: 'Home' },
              { href: '/portfolio', label: 'Portfolio' },
              { href: '/about', label: 'About Us' },
              { href: '/blog', label: 'Blog' },
              { href: '/contact', label: 'Contact' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} onClick={() => setMobileOpen(false)} style={{
                padding: '16px 20px', borderRadius: '14px',
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
                color: '#fff', fontSize: '16px', fontWeight: '700', textDecoration: 'none',
                display: 'block',
              }}>
                {label}
              </Link>
            ))}

            <div style={{ marginTop: '8px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '10px', fontWeight: '800', letterSpacing: '0.18em', color: 'rgba(255,183,3,0.7)', textTransform: 'uppercase', marginBottom: '12px' }}>
                Our Services
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {services.map(({ href, label, Icon }) => (
                  <Link key={href} href={href} onClick={() => setMobileOpen(false)} style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '12px 12px', borderRadius: '12px',
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
                    color: 'rgba(255,255,255,0.8)', fontSize: '12.5px', fontWeight: '600', textDecoration: 'none',
                  }}>
                    <Icon size={15} style={{ color: '#ffb703', flexShrink: 0 }} />
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: '16px', flexDirection: 'column' }}>
              <a href="tel:+12092413765" className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center' }}>
                <Phone size={16} />
                Call (209) 241-3765
              </a>
              <a href="https://wa.link/roppnh" target="_blank" rel="noopener" className="btn-whatsapp" style={{ textAlign: 'center', justifyContent: 'center' }}>
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile-flex { display: flex !important; }
        }
        @media (min-width: 901px) {
          .show-mobile-flex { display: none !important; }
        }
      `}</style>
    </>
  );
}
