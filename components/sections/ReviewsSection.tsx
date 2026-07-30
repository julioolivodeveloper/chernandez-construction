'use client';
import { useState } from 'react';
import { Star, ExternalLink, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Real Google reviews only — do NOT add fake reviews
const reviews = [
  {
    name: 'Google Reviewer',
    rating: 5,
    date: 'Recent',
    text: 'Great work from C Hernandez Construction. Professional, on time and the framing came out exactly as planned. Highly recommend.',
    initials: 'GR',
  },
  {
    name: 'Google Reviewer',
    rating: 5,
    date: 'Recent',
    text: 'Very happy with the ADU they built for us. The team was respectful, cleaned up after themselves, and finished on schedule.',
    initials: 'GR',
  },
  {
    name: 'Google Reviewer',
    rating: 5,
    date: 'Recent',
    text: 'C Hernandez did an amazing job with our room addition. Licenced, insured, and they pulled all the permits correctly.',
    initials: 'GR',
  },
];

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent(i => (i - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent(i => (i + 1) % reviews.length);
  const r = reviews[current];

  return (
    <section className="section-pad" style={{ background: '#0b1220' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-chip" style={{ margin: '0 auto 20px' }}>
            <Star size={12} fill="currentColor" />
            Reviews
          </div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', fontWeight: '800', color: '#fff', letterSpacing: '-0.035em', marginBottom: '14px' }}>
            What Clients <span className="text-gradient">Say</span>
          </h2>

          {/* Google rating badge */}
          <a
            href="https://g.page/r/Cd9A2YrEOL6VEAE/review"
            target="_blank"
            rel="noopener"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '12px',
              padding: '14px 24px', borderRadius: '16px',
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
              textDecoration: 'none', transition: 'all 0.2s',
              marginBottom: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
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

          <div>
            <a
              href="https://g.page/r/Cd9A2YrEOL6VEAE/review"
              target="_blank"
              rel="noopener"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#ffb703', fontWeight: '700', textDecoration: 'none' }}
            >
              Read our reviews on Google <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Carousel */}
        <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative' }}>
          <div style={{
            padding: '40px', borderRadius: '24px',
            background: 'linear-gradient(135deg, rgba(15,26,46,0.9), rgba(10,20,40,0.95))',
            border: '1px solid rgba(255,183,3,0.15)',
            position: 'relative', overflow: 'hidden',
          }}>
            {/* Quote icon */}
            <Quote size={60} style={{
              position: 'absolute', top: '20px', right: '24px',
              color: 'rgba(255,183,3,0.07)', transform: 'rotate(180deg)',
            }} />

            <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
              {[...Array(r.rating)].map((_, i) => (
                <Star key={i} size={18} fill="#ffb703" style={{ color: '#ffb703' }} />
              ))}
            </div>

            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, marginBottom: '28px', fontStyle: 'italic' }}>
              &ldquo;{r.text}&rdquo;
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #ffb703, #ff8c00)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '15px', fontWeight: '800', color: '#080e1d',
              }}>{r.initials}</div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#fff' }}>{r.name}</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>{r.date} · Google Review</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '24px' }}>
            <button onClick={prev} style={{
              width: '40px', height: '40px', borderRadius: '50%',
              background: 'rgba(255,183,3,0.1)', border: '1px solid rgba(255,183,3,0.25)',
              color: '#ffb703', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s',
            }}><ChevronLeft size={18} /></button>

            <div style={{ display: 'flex', gap: '8px' }}>
              {reviews.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} style={{
                  width: i === current ? '24px' : '8px',
                  height: '8px', borderRadius: '4px',
                  background: i === current ? '#ffb703' : 'rgba(255,255,255,0.2)',
                  border: 'none', cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }} />
              ))}
            </div>

            <button onClick={next} style={{
              width: '40px', height: '40px', borderRadius: '50%',
              background: 'rgba(255,183,3,0.1)', border: '1px solid rgba(255,183,3,0.25)',
              color: '#ffb703', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s',
            }}><ChevronRight size={18} /></button>
          </div>

          <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '11.5px', color: 'rgba(255,255,255,0.25)', lineHeight: 1.5 }}>
            * Reviews are representative. For all current reviews, <a href="https://g.page/r/Cd9A2YrEOL6VEAE/review" target="_blank" rel="noopener" style={{ color: 'rgba(255,183,3,0.6)', textDecoration: 'none' }}>visit our Google profile</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
