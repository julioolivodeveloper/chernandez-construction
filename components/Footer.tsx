'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Clock, ExternalLink, Shield, Star } from 'lucide-react';

const LOGO_URL = 'https://umyhcsrxwdogvbxgipnx.supabase.co/storage/v1/object/public/site-images/logo.png';

export default function Footer() {
  return (
    <footer style={{ background: '#050b18', borderTop: '1px solid rgba(255,183,3,0.15)', fontFamily: 'Inter, sans-serif' }}>
      {/* Map section */}
      <section style={{ background: '#080e1d', padding: '60px 0 0', overflow: 'hidden' }}>
        <div className="container" style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div className="section-chip" style={{ margin: '0 auto 16px' }}>
            <MapPin size={12} />
            Service Area
          </div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '10px' }}>
            Proudly Serving the <span className="text-gradient">Central Valley</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '15px' }}>
            Ceres · Modesto · Turlock · Salida · Riverbank · Patterson
          </p>
        </div>

        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <div style={{ borderRadius: '20px 20px 0 0', overflow: 'hidden', border: '1px solid rgba(255,183,3,0.15)', borderBottom: 'none', boxShadow: '0 -8px 40px rgba(0,0,0,0.4)' }}>
            <iframe
              src="https://maps.google.com/maps?cid=14688347946188977697&ll=37.5947,-120.9577&z=12&output=embed"
              width="100%"
              height="380"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="C Hernandez Construction – Ceres, CA service area map"
            />
          </div>
          <a
            href="https://maps.app.goo.gl/z2UaDBrEoabbagax5"
            target="_blank"
            rel="noopener"
            style={{
              position: 'absolute', top: '14px', right: '38px', zIndex: 10,
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '9px 16px', borderRadius: '999px',
              background: '#ffb703', color: '#080e1d',
              fontSize: '12.5px', fontWeight: '800', textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(0,0,0,0.35)',
            }}
          >
            <MapPin size={13} />
            Open in Google Maps
          </a>
        </div>
      </section>

      {/* Main footer */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '52px 24px 32px', display: 'grid', gridTemplateColumns: '1.7fr 1fr 1fr', gap: '48px' }}
        className="footer-grid">

        {/* Col 1: Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <Image
              src={LOGO_URL}
              alt="C Hernandez Construction logo"
              width={52}
              height={52}
              style={{ objectFit: 'contain', flexShrink: 0 }}
            />
            <div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '800', fontSize: '17px', color: '#fff' }}>C Hernandez Construction</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)' }}>Licensed General Contractor</div>
            </div>
          </div>

          <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: '20px', maxWidth: '320px' }}>
            Specializing in Residential Framing, ADUs & Additions in Ceres, Modesto and the Central Valley.
          </p>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,183,3,0.08)', border: '1px solid rgba(255,183,3,0.2)', borderRadius: '10px', padding: '8px 14px', marginBottom: '20px' }}>
            <Shield size={14} style={{ color: '#ffb703' }} />
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.65)', fontWeight: '600' }}>
              CA License <span style={{ color: '#ffb703', fontWeight: '800' }}>#1106454</span>
            </span>
          </div>

          {/* Google reviews link */}
          <a
            href="https://g.page/r/Cd9A2YrEOL6VEAE/review"
            target="_blank"
            rel="noopener"
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              marginBottom: '20px', textDecoration: 'none',
              padding: '10px 14px', borderRadius: '12px',
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
              transition: 'border-color 0.2s',
            }}
          >
            <div style={{ display: 'flex', gap: '2px', color: '#ffb703' }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="currentColor" />)}
            </div>
            <span style={{ fontSize: '13px', fontWeight: '700', color: '#fff' }}>5.0</span>
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)' }}>· 9 Google reviews</span>
            <ExternalLink size={11} style={{ color: 'rgba(255,255,255,0.3)', marginLeft: 'auto' }} />
          </a>

          {/* Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
            <a href="tel:+12092413765" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.55)', fontSize: '13.5px', textDecoration: 'none', transition: 'color 0.2s' }}>
              <Phone size={14} style={{ color: '#ffb703', flexShrink: 0 }} />
              (209) 241-3765
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.55)', fontSize: '13.5px' }}>
              <MapPin size={14} style={{ color: '#ffb703', flexShrink: 0 }} />
              Ceres, CA 95307 (service area business)
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.55)', fontSize: '13.5px' }}>
              <Clock size={14} style={{ color: '#ffb703', flexShrink: 0 }} />
              Mon – Sat: 7am – 6pm
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="tel:+12092413765" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '10px 18px', borderRadius: '999px',
              background: 'rgba(255,183,3,0.12)', border: '1px solid rgba(255,183,3,0.3)',
              color: '#ffb703', fontSize: '13px', fontWeight: '700', textDecoration: 'none',
            }}>
              <Phone size={13} />
              Call Now
            </a>
            <a href="https://wa.link/roppnh" target="_blank" rel="noopener" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '10px 18px', borderRadius: '999px',
              background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.3)',
              color: '#25d366', fontSize: '13px', fontWeight: '700', textDecoration: 'none',
            }}>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Col 2: Services */}
        <div>
          <p style={{ fontSize: '10px', fontWeight: '800', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#ffb703', marginBottom: '16px' }}>Services</p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { href: '/services/framing', label: 'Structural Framing' },
              { href: '/services/adu', label: 'ADU Construction' },
              { href: '/services/additions', label: 'Room Additions' },
              { href: '/services/general-contractor', label: 'General Contractor' },
              { href: '/services/remodeling', label: 'Remodeling' },
              { href: '/services/roofing', label: 'Roof Shingles' },
              { href: '/services/drywall', label: 'Drywall & Painting' },
              { href: '/services/doors-windows', label: 'Doors & Windows' },
              { href: '/services/new-construction', label: 'New Construction' },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '13.5px', transition: 'color 0.18s' }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.color = '#ffb703'; }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Links */}
        <div>
          <p style={{ fontSize: '10px', fontWeight: '800', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#ffb703', marginBottom: '16px' }}>Company</p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { href: '/about', label: 'About Us' },
              { href: '/portfolio', label: 'Portfolio' },
              { href: '/contact', label: 'Get a Free Estimate' },
              { href: 'https://g.page/r/Cd9A2YrEOL6VEAE/review', label: 'Google Reviews', external: true },
              { href: 'https://maps.app.goo.gl/z2UaDBrEoabbagax5', label: 'Google Maps', external: true },
            ].map(({ href, label, external }) => (
              <li key={href}>
                <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener' : undefined}
                  style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '13.5px', transition: 'color 0.18s', display: 'flex', alignItems: 'center', gap: '5px' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#ffb703'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}>
                  {label}
                  {external && <ExternalLink size={11} />}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: '28px', padding: '16px', borderRadius: '14px', background: 'rgba(255,183,3,0.06)', border: '1px solid rgba(255,183,3,0.15)' }}>
            <div style={{ fontSize: '12px', fontWeight: '700', color: '#ffb703', marginBottom: '6px' }}>Ready to start your project?</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: '12px' }}>
              Call or message us for a free, no-obligation estimate.
            </div>
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '9px 16px', borderRadius: '999px',
              background: '#ffb703', color: '#080e1d',
              fontSize: '12.5px', fontWeight: '800', textDecoration: 'none',
            }}>
              Request Estimate →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '16px 24px', textAlign: 'center', fontSize: '12px', color: 'rgba(255,255,255,0.25)', maxWidth: '1200px', margin: '0 auto' }}>
        © {new Date().getFullYear()} <strong style={{ color: 'rgba(255,255,255,0.4)' }}>C Hernandez Construction</strong> · Ceres, CA · CA Lic. #1106454 · All rights reserved.
      </div>

      <style>{`
        @media (max-width: 860px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </footer>
  );
}
