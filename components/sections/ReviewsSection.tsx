'use client';
import { useEffect } from 'react';
import { Star, ExternalLink } from 'lucide-react';

export default function ReviewsSection() {
  useEffect(() => {
    const container = document.getElementById('ti-widget-container');
    if (!container || container.querySelector('script')) return;

    const script = document.createElement('script');
    script.src = 'https://cdn.trustindex.io/loader.js?f9d89c478cd71374789673baabe';
    script.async = true;
    script.defer = true;
    container.appendChild(script);
  }, []);

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
            href="https://maps.app.goo.gl/j9AH5qksBDwbx7v29"
            target="_blank"
            rel="noopener"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '12px',
              padding: '14px 24px', borderRadius: '16px',
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
              textDecoration: 'none', marginBottom: '12px',
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
              href="https://maps.app.goo.gl/j9AH5qksBDwbx7v29"
              target="_blank"
              rel="noopener"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#ffb703', fontWeight: '700', textDecoration: 'none' }}
            >
              Read our reviews on Google <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Trustindex widget — auto-updates from Google */}
        <div id="ti-widget-container" style={{ maxWidth: '1100px', margin: '0 auto' }} />

        {/* CTA button below carousel */}
        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <a
            href="https://maps.app.goo.gl/j9AH5qksBDwbx7v29"
            target="_blank"
            rel="noopener"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '14px 32px', borderRadius: '999px',
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)',
              color: '#fff', fontSize: '14px', fontWeight: '700', textDecoration: 'none',
              transition: 'all 0.2s',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Ver todas las reseñas en Google
            <ExternalLink size={14} style={{ color: 'rgba(255,255,255,0.5)' }} />
          </a>
        </div>
      </div>
    </section>
  );
}
