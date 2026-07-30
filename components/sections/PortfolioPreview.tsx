'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Camera, MapPin, ArrowRight, Star, BadgeCheck, ImageOff } from 'lucide-react';

const BASE = 'https://umyhcsrxwdogvbxgipnx.supabase.co/storage/v1/object/public/site-images/';

const featured = {
  client: 'Jose Carmona',
  title: 'ADU Framing – Detached Unit',
  location: 'Modesto, CA',
  category: 'ADU Construction',
  badge: 'ADU',
  review: '"From start to finish it was a great experience. We looked at the plans and got the work done very efficiently — passed city inspections with no problem on the first try, which allowed the rest of the project to move forward. Great price too."',
  priceBadge: 'Good Price · ⭐ Licensed & Insured',
  images: [
    BASE + 'josecarmona/Captura%20de%20pantalla%202026-07-30%20a%20la%28s%29%201.15.17%20p.m..png',
    BASE + 'josecarmona/Captura%20de%20pantalla%202026-07-30%20a%20la%28s%29%201.15.37%20p.m..png',
  ],
};

const placeholders = [
  { id: 2, title: 'Custom Home Framing',      location: 'Ceres, CA',   category: 'Structural Framing', badge: 'Framing',   color: 'rgba(59,130,246,0.1)',  border: 'rgba(59,130,246,0.2)' },
  { id: 3, title: 'Room Addition',            location: 'Turlock, CA', category: 'Room Addition',      badge: 'Addition',  color: 'rgba(34,197,94,0.1)',   border: 'rgba(34,197,94,0.2)' },
  { id: 4, title: 'ADU – Detached Unit',      location: 'Ceres, CA',   category: 'ADU Construction',   badge: 'ADU',       color: 'rgba(255,183,3,0.12)',  border: 'rgba(255,183,3,0.25)' },
  { id: 5, title: 'Kitchen Remodel',          location: 'Modesto, CA', category: 'Remodeling',         badge: 'Remodel',   color: 'rgba(168,85,247,0.1)',  border: 'rgba(168,85,247,0.2)' },
  { id: 6, title: 'Roof Shingle Installation',location: 'Salida, CA',  category: 'Roofing',            badge: 'Roofing',   color: 'rgba(239,68,68,0.1)',   border: 'rgba(239,68,68,0.2)' },
];

export default function PortfolioPreview() {
  return (
    <section className="section-pad" style={{ background: 'linear-gradient(180deg, #0b1220 0%, #080e1d 100%)' }}>
      <div className="container">

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '20px', marginBottom: '48px', flexWrap: 'wrap' }}>
          <div>
            <div className="section-chip"><Camera size={12} />Our Work</div>
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

        {/* ── Featured: Jose Carmona ── */}
        <div style={{
          borderRadius: '24px', overflow: 'hidden',
          background: 'rgba(15,26,46,0.7)',
          border: '1px solid rgba(255,183,3,0.2)',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          marginBottom: '24px',
          boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
        }} className="featured-card">

          {/* Images */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px', minHeight: '340px' }}>
            {featured.images.map((src, i) => (
              <div key={i} style={{ position: 'relative', overflow: 'hidden' }}>
                <Image
                  src={src}
                  alt={`${featured.title} – photo ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  className="feat-img"
                />
              </div>
            ))}
          </div>

          {/* Details */}
          <div style={{ padding: '36px 36px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              {/* Badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <span style={{ padding: '5px 14px', borderRadius: '999px', background: 'rgba(255,183,3,0.15)', border: '1px solid rgba(255,183,3,0.3)', fontSize: '11px', fontWeight: '800', color: '#ffb703', letterSpacing: '0.08em' }}>
                  {featured.badge}
                </span>
                <div style={{ display: 'flex', gap: '2px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#ffb703" style={{ color: '#ffb703' }} />)}
                </div>
              </div>

              {/* Title & location */}
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.2rem, 2vw, 1.55rem)', fontWeight: '900', color: '#fff', marginBottom: '10px', lineHeight: 1.2 }}>
                {featured.title}
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '24px' }}>
                <MapPin size={13} style={{ color: '#ffb703', flexShrink: 0 }} />
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>{featured.location}</span>
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.25)' }}>·</span>
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>{featured.category}</span>
              </div>

              {/* Review quote */}
              <blockquote style={{
                margin: 0, padding: '18px 20px',
                borderRadius: '14px',
                background: 'rgba(255,183,3,0.06)',
                border: '1px solid rgba(255,183,3,0.15)',
                borderLeft: '3px solid #ffb703',
                marginBottom: '20px',
              }}>
                <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
                  {featured.review}
                </p>
                <footer style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,183,3,0.2)', border: '1px solid rgba(255,183,3,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '800', color: '#ffb703', flexShrink: 0 }}>
                    {featured.client[0]}
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '800', color: '#fff' }}>{featured.client}</div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Verified Google Review</div>
                  </div>
                  <BadgeCheck size={16} style={{ color: '#4ade80', marginLeft: 'auto', flexShrink: 0 }} />
                </footer>
              </blockquote>

              {/* Price badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 13px', borderRadius: '999px', background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.2)', fontSize: '11.5px', fontWeight: '700', color: '#4ade80' }}>
                {featured.priceBadge}
              </div>
            </div>

            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              marginTop: '24px', padding: '12px 22px', borderRadius: '12px',
              background: 'rgba(255,183,3,0.1)', border: '1px solid rgba(255,183,3,0.25)',
              fontSize: '13px', fontWeight: '800', color: '#ffb703', textDecoration: 'none',
              transition: 'all 0.2s', alignSelf: 'flex-start',
            }} className="feat-cta">
              Request a similar project <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* ── Placeholder grid ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="portfolio-grid">
          {placeholders.map(({ id, title, location, category, badge, color, border }) => (
            <div key={id} style={{
              borderRadius: '18px', background: 'rgba(15,26,46,0.6)',
              border: '1px solid rgba(255,255,255,0.07)', overflow: 'hidden', transition: 'all 0.3s ease',
            }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.border = `1px solid ${border}`; el.style.transform = 'translateY(-5px)'; el.style.boxShadow = '0 16px 40px rgba(0,0,0,0.35)'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.border = '1px solid rgba(255,255,255,0.07)'; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'none'; }}
            >
              <div style={{ height: '160px', background: `linear-gradient(135deg, ${color}, rgba(0,0,0,0.3))`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px', position: 'relative', borderBottom: `1px solid ${border}` }}>
                <ImageOff size={28} style={{ color: 'rgba(255,255,255,0.18)' }} />
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', fontWeight: '600' }}>Photos coming soon</span>
                <span style={{ position: 'absolute', top: '12px', left: '12px', padding: '4px 10px', borderRadius: '999px', background: 'rgba(0,0,0,0.5)', border: `1px solid ${border}`, fontSize: '10px', fontWeight: '800', color: '#fff', letterSpacing: '0.05em' }}>{badge}</span>
              </div>
              <div style={{ padding: '16px 18px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: '800', color: '#fff', marginBottom: '4px', fontFamily: 'Poppins, sans-serif' }}>{title}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '12px' }}>
                  <MapPin size={11} style={{ color: '#ffb703', flexShrink: 0 }} />
                  <span style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.4)' }}>{location}</span>
                  <span style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.2)', margin: '0 2px' }}>·</span>
                  <span style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.4)' }}>{category}</span>
                </div>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '12px', fontWeight: '700', color: '#ffb703', textDecoration: 'none' }}>
                  Request similar <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .feat-img:hover { transform: scale(1.04); }
        .feat-cta:hover { background: rgba(255,183,3,0.18) !important; }
        @media (max-width: 860px) {
          .featured-card { grid-template-columns: 1fr !important; }
          .portfolio-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .portfolio-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
