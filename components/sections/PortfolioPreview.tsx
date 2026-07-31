'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Camera, MapPin, ArrowRight, Star, BadgeCheck } from 'lucide-react';

const BASE = 'https://umyhcsrxwdogvbxgipnx.supabase.co/storage/v1/object/public/site-images/';

const realProjects = [
  {
    client: 'Jose Carmona',
    title: 'ADU Framing – Detached Unit',
    location: 'Modesto, CA',
    category: 'ADU Construction',
    badge: 'ADU',
    review: '"From start to finish it was a great experience. We looked at the plans and got the work done very efficiently — passed city inspections with no problem on the first try, which allowed the rest of the project to move forward. Great price too."',
    priceBadge: 'Good Price · Licensed & Insured',
    images: [
      BASE + 'josecarmona/Captura%20de%20pantalla%202026-07-30%20a%20la%28s%29%201.15.17%20p.m..png',
      BASE + 'josecarmona/Captura%20de%20pantalla%202026-07-30%20a%20la%28s%29%201.15.37%20p.m..png',
    ],
  },
  {
    client: 'Ruben Escareno',
    title: 'Custom Home Framing',
    location: 'Central Valley, CA',
    category: 'Structural Framing',
    badge: 'Framing',
    review: '"Very fast and clean work he did at my custom home. I recommend him for all the framing projects that you may have!!"',
    priceBadge: '5 Stars · Fast & Clean Work',
    images: [
      BASE + 'Ruben%20Esreno/Captura%20de%20pantalla%202026-07-30%20a%20la%28s%29%201.28.02%20p.m..png',
      BASE + 'Ruben%20Esreno/Captura%20de%20pantalla%202026-07-30%20a%20la%28s%29%201.31.02%20p.m..png',
    ],
  },
  {
    client: 'Daniel Sanchez',
    title: 'ADU Framing – Bay Area',
    location: 'Milpitas, CA',
    category: 'ADU Construction',
    badge: 'ADU',
    review: '"Great experience framing that ADU in Milpitas. ADU construction in the Bay Area is something we really enjoy — every project is unique and we love the challenge. Always a pleasure working with professional contractors like Daniel. Looking forward to the next framing project together."',
    priceBadge: 'B2B Project · Professional Contractor',
    images: [
      BASE + 'daniel%20sanchez/Captura%20de%20pantalla%202026-07-30%20a%20la%28s%29%201.39.07%20p.m..png',
      BASE + 'daniel%20sanchez/Captura%20de%20pantalla%202026-07-30%20a%20la%28s%29%201.39.25%20p.m..png',
    ],
  },
];

const serviceCards = [
  {
    id: 3,
    title: 'Room Addition',
    location: 'Turlock, CA',
    category: 'Room Addition',
    badge: 'Addition',
    border: 'rgba(34,197,94,0.2)',
    img: BASE + 'framing384099.jpg',
    desc: 'Expand your living space with a properly framed room addition — tied into your existing structure and built to pass inspection.',
  },
  {
    id: 4,
    title: 'Roof Shingle Installation',
    location: 'Salida, CA',
    category: 'Roofing',
    badge: 'Roofing',
    border: 'rgba(239,68,68,0.2)',
    img: BASE + 'roofing4744e4.jpg',
    desc: 'Complete shingle tear-off and re-roof on residential properties. Clean, fast, and built to last the Central Valley weather.',
  },
  {
    id: 5,
    title: 'Kitchen Remodel',
    location: 'Modesto, CA',
    category: 'Remodeling',
    badge: 'Remodel',
    border: 'rgba(168,85,247,0.2)',
    img: BASE + 'cocina.jpg',
    desc: 'Full kitchen renovation — framing, drywall, cabinetry and tile. We transform outdated kitchens into modern, functional spaces.',
  },
  {
    id: 6,
    title: 'Drywall & Paint',
    location: 'Ceres, CA',
    category: 'Drywall',
    badge: 'Drywall',
    border: 'rgba(99,102,241,0.2)',
    img: BASE + 'pintura.jpg',
    desc: 'Professional drywall installation, texture and interior painting. Clean finish every time — for new builds, additions and remodels.',
  },
];

type Project = typeof realProjects[0];

function ProjectDetails({ p }: { p: Project }) {
  return (
    <div style={{ padding: '32px 32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
          <span style={{ padding: '4px 13px', borderRadius: '999px', background: 'rgba(255,183,3,0.15)', border: '1px solid rgba(255,183,3,0.3)', fontSize: '11px', fontWeight: '800', color: '#ffb703', letterSpacing: '0.08em' }}>
            {p.badge}
          </span>
          <div style={{ display: 'flex', gap: '2px' }}>
            {[...Array(5)].map((_, i) => <Star key={i} size={11} fill="#ffb703" style={{ color: '#ffb703' }} />)}
          </div>
        </div>

        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.1rem, 1.8vw, 1.45rem)', fontWeight: '900', color: '#fff', marginBottom: '8px', lineHeight: 1.2 }}>
          {p.title}
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '20px' }}>
          <MapPin size={12} style={{ color: '#ffb703', flexShrink: 0 }} />
          <span style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.5)' }}>{p.location}</span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
          <span style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.5)' }}>{p.category}</span>
        </div>

        <blockquote style={{ margin: 0, padding: '16px 18px', borderRadius: '14px', background: 'rgba(255,183,3,0.06)', border: '1px solid rgba(255,183,3,0.15)', borderLeft: '3px solid #ffb703', marginBottom: '16px' }}>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            {p.review}
          </p>
          <footer style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'rgba(255,183,3,0.2)', border: '1px solid rgba(255,183,3,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800', color: '#ffb703', flexShrink: 0 }}>
              {p.client[0]}
            </div>
            <div>
              <div style={{ fontSize: '12.5px', fontWeight: '800', color: '#fff' }}>{p.client}</div>
              <div style={{ fontSize: '10.5px', color: 'rgba(255,255,255,0.4)' }}>Verified Google Review</div>
            </div>
            <BadgeCheck size={15} style={{ color: '#4ade80', marginLeft: 'auto', flexShrink: 0 }} />
          </footer>
        </blockquote>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', borderRadius: '999px', background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.2)', fontSize: '11px', fontWeight: '700', color: '#4ade80' }}>
            {p.priceBadge}
          </div>
          <a href="https://maps.app.goo.gl/j9AH5qksBDwbx7v29" target="_blank" rel="noopener"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 12px', borderRadius: '999px', background: 'rgba(66,133,244,0.1)', border: '1px solid rgba(66,133,244,0.3)', fontSize: '11px', fontWeight: '700', color: '#4285f4', textDecoration: 'none', transition: 'background 0.2s' }}
            className="google-btn"
          >
            <svg width="11" height="11" viewBox="0 0 24 24"><path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            Ver en Google
          </a>
        </div>
      </div>

      <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '20px', padding: '11px 20px', borderRadius: '12px', background: 'rgba(255,183,3,0.1)', border: '1px solid rgba(255,183,3,0.25)', fontSize: '13px', fontWeight: '800', color: '#ffb703', textDecoration: 'none', transition: 'all 0.2s', alignSelf: 'flex-start' }} className="feat-cta">
        Request a similar project <ArrowRight size={13} />
      </Link>
    </div>
  );
}

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

        {/* ── Real projects ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '24px' }}>
          {realProjects.map((p, pi) => (
            <div key={p.client} style={{
              borderRadius: '24px', overflow: 'hidden',
              background: 'rgba(15,26,46,0.7)',
              border: '1px solid rgba(255,183,3,0.2)',
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
            }} className="featured-card">

              {/* Images — alternate side on second card */}
              {pi % 2 === 0 ? (
                <>
                  <div className="proj-images" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px', minHeight: '320px' }}>
                    {p.images.map((src, i) => (
                      <div key={i} style={{ position: 'relative', overflow: 'hidden' }}>
                        <Image src={src} alt={`${p.title} photo ${i + 1}`} fill sizes="25vw" style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }} className="feat-img" />
                      </div>
                    ))}
                  </div>
                  <ProjectDetails p={p} />
                </>
              ) : (
                <>
                  <ProjectDetails p={p} />
                  <div className="proj-images" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px', minHeight: '320px' }}>
                    {p.images.map((src, i) => (
                      <div key={i} style={{ position: 'relative', overflow: 'hidden' }}>
                        <Image src={src} alt={`${p.title} photo ${i + 1}`} fill sizes="25vw" style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }} className="feat-img" />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* ── Service cards with real images ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }} className="portfolio-grid">
          {serviceCards.map(({ id, title, location, category, badge, border, img, desc }) => (
            <div key={id} style={{ borderRadius: '18px', background: 'rgba(15,26,46,0.6)', border: '1px solid rgba(255,255,255,0.07)', overflow: 'hidden', transition: 'all 0.3s ease' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.border = `1px solid ${border}`; el.style.transform = 'translateY(-5px)'; el.style.boxShadow = '0 16px 40px rgba(0,0,0,0.35)'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.border = '1px solid rgba(255,255,255,0.07)'; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'none'; }}
            >
              {/* Real image */}
              <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                <Image src={img} alt={title} fill sizes="(max-width:900px) 50vw, 25vw" style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }} className="feat-img" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(8,14,29,0.7) 100%)' }} />
                <span style={{ position: 'absolute', top: '12px', left: '12px', padding: '4px 10px', borderRadius: '999px', background: 'rgba(0,0,0,0.6)', border: `1px solid ${border}`, fontSize: '10px', fontWeight: '800', color: '#fff', letterSpacing: '0.05em' }}>{badge}</span>
              </div>
              <div style={{ padding: '16px 18px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: '800', color: '#fff', marginBottom: '4px', fontFamily: 'Poppins, sans-serif' }}>{title}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '10px' }}>
                  <MapPin size={11} style={{ color: '#ffb703', flexShrink: 0 }} />
                  <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>{location}</span>
                  <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)' }}>·</span>
                  <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>{category}</span>
                </div>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, marginBottom: '14px' }}>{desc}</p>
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
        .google-btn:hover { background: rgba(66,133,244,0.18) !important; }
        @media (max-width: 900px) {
          .featured-card { grid-template-columns: 1fr !important; }
          .featured-card .proj-images { order: -1; }
          .portfolio-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .portfolio-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
