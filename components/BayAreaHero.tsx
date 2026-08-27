'use client';
import { useEffect, useState } from 'react';
import type React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Shield, CheckCircle2, Star, ChevronRight } from 'lucide-react';

const BASE = 'https://umyhcsrxwdogvbxgipnx.supabase.co/storage/v1/object/public/site-images/';

const bgImages = [
  BASE + 'framing.jpg',
  BASE + 'framing344.jpg',
  BASE + 'framing1.jpg',
  BASE + 'framing73763673.jpg',
  BASE + 'adu.png',
  BASE + 'framing88484.jpg',
];

interface BayAreaHeroProps {
  badge: string;
  badgeIcon?: React.ReactNode;
  title: React.ReactNode;
  description: string;
  bullets: string[];
  ctaHref?: string;
  ctaLabel?: string;
  image: string;
  imageAlt: string;
  breadcrumb?: { label: string };
}

export default function BayAreaHero({
  badge,
  badgeIcon,
  title,
  description,
  bullets,
  ctaHref = '#estimate',
  ctaLabel = 'Get Free Estimate →',
  image,
  imageAlt,
  breadcrumb,
}: BayAreaHeroProps) {
  const [bgIndex, setBgIndex] = useState(0);
  const [nextBgIndex, setNextBgIndex] = useState(1);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setBgIndex(i => (i + 1) % bgImages.length);
        setNextBgIndex(i => (i + 1) % bgImages.length);
        setFading(false);
      }, 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ position: 'relative', minHeight: '88vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#040a16' }}>

      {/* Background slideshow */}
      {bgImages.map((src, i) => (
        <div key={src} style={{
          position: 'absolute', inset: 0, zIndex: 0,
          opacity: i === bgIndex ? (fading ? 0 : 1) : i === nextBgIndex ? (fading ? 1 : 0) : 0,
          transition: 'opacity 1s ease-in-out',
        }}>
          <Image src={src} alt="" fill sizes="100vw" style={{ objectFit: 'cover' }} priority={i === 0} />
        </div>
      ))}

      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(145deg, rgba(4,10,22,0.93) 0%, rgba(8,14,29,0.88) 50%, rgba(4,10,22,0.85) 100%)' }} />

      {/* Grid lines */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(255,183,3,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,183,3,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Radial glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '40%', transform: 'translateX(-50%)',
        width: '700px', height: '400px', zIndex: 2,
        background: 'radial-gradient(ellipse, rgba(255,183,3,0.09) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 4, paddingTop: '110px', paddingBottom: '80px', width: '100%' }}>

        {/* Breadcrumb */}
        {breadcrumb && (
          <nav style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '28px', fontSize: '12.5px' }}>
            <Link href="/bay-area-framing" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Bay Area Framing</Link>
            <ChevronRight size={12} style={{ color: 'rgba(255,255,255,0.25)' }} />
            <span style={{ color: '#ffb703', fontWeight: '700' }}>{breadcrumb.label}</span>
          </nav>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }} className="bay-hero-grid">

          {/* Left: text */}
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              padding: '6px 16px', borderRadius: '999px',
              background: 'rgba(255,183,3,0.1)', border: '1px solid rgba(255,183,3,0.3)',
              fontSize: '11px', fontWeight: '800', color: '#ffb703',
              letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: '24px',
            }}>
              {badgeIcon}
              {badge}
            </div>

            <h1 style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(2.1rem, 4.6vw, 3.6rem)',
              fontWeight: '900', color: '#fff', lineHeight: 1.1,
              letterSpacing: '-0.03em', marginBottom: '20px',
            }}>
              {title}
            </h1>

            <p style={{
              fontSize: 'clamp(14px, 1.5vw, 17px)',
              color: 'rgba(255,255,255,0.65)', lineHeight: 1.75,
              marginBottom: '28px', maxWidth: '480px',
            }}>
              {description}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '32px' }}>
              {bullets.map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                  <CheckCircle2 size={15} style={{ color: '#ffb703', flexShrink: 0 }} />
                  <span style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.75)' }}>{t}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href={ctaHref} className="btn-primary">{ctaLabel}</a>
              <a href="tel:+12092413765" className="btn-secondary">
                <Phone size={14} /> (209) 241-3765
              </a>
            </div>
          </div>

          {/* Right: project photo */}
          <div style={{ position: 'relative' }} className="bay-hero-image">
            <div style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,183,3,0.22)', boxShadow: '0 32px 80px rgba(0,0,0,0.65)' }}>
              <Image
                src={image}
                alt={imageAlt}
                width={600}
                height={450}
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                priority
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,14,29,0.5) 0%, transparent 60%)', borderRadius: '24px' }} />
            </div>

            {/* Rating badge */}
            <div style={{ position: 'absolute', bottom: '-20px', left: '24px', padding: '14px 18px', borderRadius: '16px', background: 'rgba(8,14,29,0.96)', border: '1px solid rgba(255,183,3,0.3)', backdropFilter: 'blur(16px)', boxShadow: '0 12px 40px rgba(0,0,0,0.5)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ display: 'flex', gap: '2px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#ffb703" style={{ color: '#ffb703' }} />)}
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: '800', color: '#fff' }}>5.0 Google Rating</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>9 verified reviews</div>
                </div>
              </div>
            </div>

            {/* License badge */}
            <div style={{ position: 'absolute', top: '18px', right: '18px', padding: '8px 14px', borderRadius: '12px', background: 'rgba(8,14,29,0.92)', border: '1px solid rgba(255,183,3,0.35)', backdropFilter: 'blur(12px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Shield size={13} style={{ color: '#ffb703' }} />
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#ffb703' }}>Lic. #1106454</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .bay-hero-grid { grid-template-columns: 1fr !important; }
          .bay-hero-image { display: none !important; }
        }
      `}</style>
    </section>
  );
}
