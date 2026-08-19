'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Star, ExternalLink, ChevronLeft, ChevronRight, BadgeCheck } from 'lucide-react';

const BASE = 'https://umyhcsrxwdogvbxgipnx.supabase.co/storage/v1/object/public/site-images/';

const reviews = [
  {
    client: 'Jose Carmona',
    title: 'ADU Framing – Detached Unit',
    location: 'Modesto, CA',
    badge: 'ADU',
    text: 'From start to finish it was a great experience. We looked at the plans and got the work done very efficiently — passed city inspections with no problem on the first try, which allowed the rest of the project to move forward. Great price too.',
    image: BASE + 'josecarmona/Captura%20de%20pantalla%202026-07-30%20a%20la%28s%29%201.15.17%20p.m..png',
  },
  {
    client: 'Ruben Escareno',
    title: 'Custom Home Framing',
    location: 'Central Valley, CA',
    badge: 'Framing',
    text: 'Very fast and clean work he did at my custom home. I recommend him for all the framing projects that you may have!!',
    image: BASE + 'Ruben%20Esreno/Captura%20de%20pantalla%202026-07-30%20a%20la%28s%29%201.28.02%20p.m..png',
  },
  {
    client: 'Daniel Sanchez',
    title: 'ADU Framing – Bay Area',
    location: 'Milpitas, CA',
    badge: 'ADU',
    text: 'Great experience framing that ADU in Milpitas. ADU construction in the Bay Area is something we really enjoy — every project is unique and we love the challenge. Always a pleasure working with professional contractors like Daniel. Looking forward to the next framing project together.',
    image: BASE + 'daniel%20sanchez/Captura%20de%20pantalla%202026-07-30%20a%20la%28s%29%201.39.07%20p.m..png',
  },
];

const GOOGLE_URL = 'https://maps.app.goo.gl/j9AH5qksBDwbx7v29';

const GoogleLogo = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);
  const total = reviews.length;
  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const r = reviews[current];

  return (
    <section className="section-pad" style={{ background: '#0b1220' }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-chip" style={{ margin: '0 auto 20px' }}>
            <Star size={12} fill="currentColor" />
            Reviews
          </div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', fontWeight: '800', color: '#fff', letterSpacing: '-0.035em', marginBottom: '14px' }}>
            What Clients <span className="text-gradient">Say</span>
          </h2>

          <a href={GOOGLE_URL} target="_blank" rel="noopener" style={{
            display: 'inline-flex', alignItems: 'center', gap: '12px',
            padding: '14px 24px', borderRadius: '16px',
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
            textDecoration: 'none',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <GoogleLogo size={20} />
              <div style={{ display: 'flex', gap: '2px', color: '#ffb703' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="currentColor" />)}
              </div>
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '16px', fontWeight: '800', color: '#fff', lineHeight: 1 }}>5.0 on Google</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', marginTop: '2px' }}>9 verified reviews</div>
            </div>
            <ExternalLink size={14} style={{ color: 'rgba(255,255,255,0.3)', marginLeft: '8px' }} />
          </a>
        </div>

        {/* Carousel */}
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          <div style={{
            borderRadius: '24px', overflow: 'hidden',
            background: 'rgba(15,26,46,0.7)',
            border: '1px solid rgba(255,183,3,0.2)',
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
          }} className="review-card">

            {/* Project image */}
            <div style={{ position: 'relative', minHeight: '340px', overflow: 'hidden' }}>
              <Image
                src={r.image}
                alt={r.title}
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 70%, rgba(15,26,46,0.4) 100%)' }} />
              <span style={{ position: 'absolute', top: '16px', left: '16px', padding: '5px 14px', borderRadius: '999px', background: 'rgba(0,0,0,0.65)', border: '1px solid rgba(255,183,3,0.4)', fontSize: '11px', fontWeight: '800', color: '#ffb703', letterSpacing: '0.08em' }}>
                {r.badge}
              </span>
            </div>

            {/* Review content */}
            <div style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                {/* Stars */}
                <div style={{ display: 'flex', gap: '3px', marginBottom: '20px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#ffb703" style={{ color: '#ffb703' }} />)}
                </div>

                {/* Review text */}
                <blockquote style={{ margin: 0, marginBottom: '24px' }}>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, fontStyle: 'italic' }}>
                    "{r.text}"
                  </p>
                </blockquote>

                {/* Client */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(255,183,3,0.2)', border: '1px solid rgba(255,183,3,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '800', color: '#ffb703', flexShrink: 0 }}>
                    {r.client[0]}
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '800', color: '#fff' }}>{r.client}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '2px' }}>
                      <BadgeCheck size={13} style={{ color: '#4ade80' }} />
                      <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Verified Google Review</span>
                    </div>
                  </div>
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', marginBottom: '24px', paddingLeft: '48px' }}>
                  {r.location} · {r.title}
                </div>
              </div>

              {/* CTA */}
              <a href={GOOGLE_URL} target="_blank" rel="noopener" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 20px', borderRadius: '12px',
                background: 'rgba(66,133,244,0.1)', border: '1px solid rgba(66,133,244,0.3)',
                fontSize: '13px', fontWeight: '700', color: '#4285f4',
                textDecoration: 'none', transition: 'background 0.2s', alignSelf: 'flex-start',
              }} className="ver-resena-btn">
                <GoogleLogo size={15} />
                Ver reseña en Google
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginTop: '28px' }}>
            <button onClick={prev} style={{
              width: '44px', height: '44px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
              color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <ChevronLeft size={20} />
            </button>
            <div style={{ display: 'flex', gap: '8px' }}>
              {reviews.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} style={{
                  width: i === current ? '28px' : '8px', height: '8px', borderRadius: '999px',
                  background: i === current ? '#b8860b' : 'rgba(255,255,255,0.2)',
                  border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.3s',
                }} />
              ))}
            </div>
            <button onClick={next} style={{
              width: '44px', height: '44px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
              color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Counter */}
          <p style={{ textAlign: 'center', marginTop: '12px', fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>
            {current + 1} / {total}
          </p>
        </div>

        {/* Bottom link */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href={GOOGLE_URL} target="_blank" rel="noopener" style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            padding: '14px 32px', borderRadius: '999px',
            background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)',
            color: '#fff', fontSize: '14px', fontWeight: '700', textDecoration: 'none',
          }}>
            <GoogleLogo size={18} />
            Ver todas las reseñas en Google
            <ExternalLink size={14} style={{ color: 'rgba(255,255,255,0.5)' }} />
          </a>
        </div>
      </div>

      <style>{`
        .ver-resena-btn:hover { background: rgba(66,133,244,0.22) !important; }
        @media (max-width: 700px) {
          .review-card { grid-template-columns: 1fr !important; }
          .review-card > div:first-child { min-height: 220px !important; }
        }
      `}</style>
    </section>
  );
}
