'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ChevronRight } from 'lucide-react';
import { usePathname } from 'next/navigation';

const LOGO_URL = 'https://umyhcsrxwdogvbxgipnx.supabase.co/storage/v1/object/public/site-images/logo.png';

const navLinks = [
  { href: '/bay-area-framing', label: 'Bay Area Framing' },
  { href: '/bay-area-framing/san-jose', label: 'San Jose' },
  { href: '/bay-area-framing/milpitas', label: 'Milpitas' },
  { href: '/bay-area-framing/adu', label: 'ADU Bay Area' },
];

function BayAreaNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(8,14,29,0.97)' : 'rgba(8,14,29,0.92)',
      backdropFilter: 'blur(20px)',
      borderBottom: scrolled ? '1px solid rgba(255,183,3,0.2)' : '1px solid transparent',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
        {/* Logo */}
        <Link href="/bay-area-framing" style={{ display: 'flex', alignItems: 'center', gap: '11px', textDecoration: 'none' }}>
          <Image src={LOGO_URL} alt="C Hernandez Construction" width={42} height={42} style={{ objectFit: 'contain', flexShrink: 0 }} priority />
          <div>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '800', fontSize: '14px', color: '#fff', lineHeight: 1.2 }}>
              C Hernandez <span style={{ color: '#ffb703' }}>Construction</span>
            </div>
            <div style={{ fontSize: '10px', color: '#ffb703', fontWeight: '700', letterSpacing: '0.06em' }}>
              BAY AREA FRAMING DIVISION
            </div>
          </div>
        </Link>

        {/* Call button only */}
        <a href="tel:+12092413765" style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          padding: '10px 20px', borderRadius: '999px',
          background: 'rgba(255,183,3,0.1)', border: '1px solid rgba(255,183,3,0.35)',
          color: '#ffb703', fontSize: '13.5px', fontWeight: '700', textDecoration: 'none',
          transition: 'all 0.2s',
        }}>
          <Phone size={14} />
          (209) 241-3765
        </a>
      </div>
    </header>
  );
}

function BayAreaFooter() {
  return (
    <footer style={{ background: '#050b18', borderTop: '1px solid rgba(255,183,3,0.12)', fontFamily: 'Inter, sans-serif' }}>
      <div className="bay-footer-grid" style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px 24px', display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '40px' }}>
        {/* Brand col */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <Image src={LOGO_URL} alt="C Hernandez Construction" width={44} height={44} style={{ objectFit: 'contain' }} />
            <div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '800', fontSize: '15px', color: '#fff' }}>C Hernandez Construction</div>
              <div style={{ fontSize: '10px', color: '#ffb703', fontWeight: '700', letterSpacing: '0.08em' }}>BAY AREA FRAMING DIVISION</div>
            </div>
          </div>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.48)', lineHeight: 1.7, marginBottom: '16px', maxWidth: '300px' }}>
            Licensed framing contractor serving San Jose, Milpitas & the greater Bay Area. CA Lic. #1106454.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '20px' }}>
            <a href="tel:+12092413765" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.55)', fontSize: '13px', textDecoration: 'none' }}>
              <Phone size={13} style={{ color: '#ffb703' }} /> (209) 241-3765
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.45)', fontSize: '13px' }}>
              <span style={{ color: '#ffb703', fontSize: '12px' }}>⏰</span> Mon–Sat 7am–6pm
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <a href="tel:+12092413765" style={{ padding: '9px 16px', borderRadius: '999px', background: 'rgba(255,183,3,0.1)', border: '1px solid rgba(255,183,3,0.3)', color: '#ffb703', fontSize: '12.5px', fontWeight: '700', textDecoration: 'none' }}>
              Call Now
            </a>
            <a href="https://wa.link/roppnh" target="_blank" rel="noopener" style={{ padding: '9px 16px', borderRadius: '999px', background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.3)', color: '#25d366', fontSize: '12.5px', fontWeight: '700', textDecoration: 'none' }}>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Bay Area pages */}
        <div>
          <p style={{ fontSize: '10px', fontWeight: '800', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#ffb703', marginBottom: '14px' }}>Bay Area Services</p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px' }}>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '5px' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#ffb703'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}>
                  <ChevronRight size={12} /> {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Main site + CTA */}
        <div>
          <p style={{ fontSize: '10px', fontWeight: '800', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#ffb703', marginBottom: '14px' }}>Company</p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '24px' }}>
            {[
              { href: '/', label: 'Main Website' },
              { href: '/services/framing', label: 'All Framing Services' },
              { href: '/services/adu', label: 'ADU Construction' },
              { href: '/portfolio', label: 'Portfolio' },
              { href: '/contact', label: 'Contact Us' },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '13px' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#ffb703'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div style={{ padding: '16px', borderRadius: '14px', background: 'rgba(255,183,3,0.06)', border: '1px solid rgba(255,183,3,0.15)' }}>
            <div style={{ fontSize: '12px', fontWeight: '700', color: '#ffb703', marginBottom: '6px' }}>Ready to build?</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: '12px' }}>Free estimate — we respond the same day.</div>
            <a href="#estimate" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '8px 14px', borderRadius: '999px', background: '#ffb703', color: '#080e1d', fontSize: '12px', fontWeight: '800', textDecoration: 'none' }}>
              Request Estimate →
            </a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '14px 24px', textAlign: 'center', fontSize: '12px', color: 'rgba(255,255,255,0.25)', maxWidth: '1200px', margin: '0 auto' }}>
        © {new Date().getFullYear()} <strong style={{ color: 'rgba(255,255,255,0.4)' }}>C Hernandez Construction</strong> · Bay Area Framing Division · CA Lic. #1106454
      </div>

      <style>{`
        .bay-footer-grid { display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 40px; }
        @media (max-width: 760px) { .bay-footer-grid { grid-template-columns: 1fr !important; gap: 28px !important; } }
      `}</style>
    </footer>
  );
}

export default function BayAreaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BayAreaNav />
      <main style={{ paddingTop: '68px' }}>{children}</main>
      <BayAreaFooter />
    </>
  );
}
