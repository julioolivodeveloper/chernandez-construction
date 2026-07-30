'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, ChevronDown, Shield, CheckCircle2, Star } from 'lucide-react';

const LOGO_URL = 'https://umyhcsrxwdogvbxgipnx.supabase.co/storage/v1/object/public/site-images/logo.png';
const BASE = 'https://umyhcsrxwdogvbxgipnx.supabase.co/storage/v1/object/public/site-images/';

const bgImages = [
  BASE + 'framing.jpg',
  BASE + 'framing344.jpg',
  BASE + 'framing1.jpg',
  BASE + 'roofing4744e4.jpg',
  BASE + 'framing73763673.jpg',
  BASE + 'adu.png',
  BASE + 'framing88484.jpg',
];

const typewriterPhrases = [
  'Framing · ADUs · Additions',
  'Licensed in California',
  'Remodeling & Roofing',
  'Ceres · Modesto · Turlock',
  'Quality Craftsmanship',
];

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [bgIndex, setBgIndex] = useState(0);
  const [nextBgIndex, setNextBgIndex] = useState(1);
  const [fading, setFading] = useState(false);
  const [typed, setTyped] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Background image crossfade
  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setBgIndex(i => (i + 1) % bgImages.length);
        setNextBgIndex(i => (i + 1) % bgImages.length);
        setFading(false);
      }, 1000);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const phrase = typewriterPhrases[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (typed.length < phrase.length) {
        timeout = setTimeout(() => setTyped(phrase.slice(0, typed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (typed.length > 0) {
        timeout = setTimeout(() => setTyped(phrase.slice(0, typed.length - 1)), 35);
      } else {
        setIsDeleting(false);
        setPhraseIdx(i => (i + 1) % typewriterPhrases.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [typed, isDeleting, phraseIdx]);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
        a: Math.random() * 0.5 + 0.1,
      });
    }

    let animId: number;
    function draw() {
      ctx!.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255,183,3,${p.a})`;
        ctx!.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx!.beginPath();
            ctx!.strokeStyle = `rgba(255,183,3,${0.1 * (1 - dist / 100)})`;
            ctx!.lineWidth = 0.5;
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    }
    draw();

    const onResize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize); };
  }, []);

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#040a16' }}>

      {/* Background image slideshow */}
      {bgImages.map((src, i) => (
        <div key={src} style={{
          position: 'absolute', inset: 0, zIndex: 0,
          opacity: i === bgIndex ? (fading ? 0 : 1) : i === nextBgIndex ? (fading ? 1 : 0) : 0,
          transition: 'opacity 1s ease-in-out',
        }}>
          <Image src={src} alt="" fill sizes="100vw" style={{ objectFit: 'cover' }} priority={i === 0} />
        </div>
      ))}

      {/* Dark overlay over images */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(145deg, rgba(4,10,22,0.88) 0%, rgba(8,14,29,0.82) 50%, rgba(4,10,22,0.75) 100%)' }} />

      {/* Grid lines */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        backgroundImage: `linear-gradient(rgba(255,183,3,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,183,3,0.04) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Radial glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '400px', zIndex: 2,
        background: 'radial-gradient(ellipse, rgba(255,183,3,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Canvas particles — on top of everything */}
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 4, paddingTop: '100px', paddingBottom: '80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: '48px' }} className="hero-grid">

          {/* Left — Text */}
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '28px',
              padding: '7px 16px', borderRadius: '999px',
              background: 'rgba(255,183,3,0.08)', border: '1px solid rgba(255,183,3,0.25)',
              animation: 'fadeUp 0.6s ease both',
            }}>
              <Shield size={13} style={{ color: '#ffb703' }} />
              <span style={{ fontSize: '12px', fontWeight: '700', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.03em' }}>
                CA Licensed General Contractor · Lic. <span style={{ color: '#ffb703' }}>#1106454</span>
              </span>
            </div>

            <h1 style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
              fontWeight: '900', lineHeight: 1.1, letterSpacing: '-0.04em',
              marginBottom: '24px',
              animation: 'fadeUp 0.7s 0.1s ease both', opacity: 0,
            }}>
              <span style={{ color: '#fff' }}>Licensed General Contractor</span>
              <br />
              {/* Typewriter line */}
              <span style={{
                background: 'linear-gradient(90deg, #ffb703, #ffd60a, #ffb703)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'shimmer 3s linear infinite',
                display: 'inline-block',
                minHeight: '1.15em',
              }}>
                {typed}
                <span style={{
                  display: 'inline-block', width: '3px', height: '0.85em',
                  background: '#ffb703', marginLeft: '3px', verticalAlign: 'middle',
                  animation: 'blink 0.75s step-end infinite',
                }} />
              </span>
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
              color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: '580px',
              marginBottom: '36px',
              animation: 'fadeUp 0.7s 0.2s ease both', opacity: 0,
            }}>
              Specializing in residential framing, ADUs and room additions in <strong style={{ color: '#fff', fontWeight: '700' }}>Ceres and Modesto</strong>, CA. Quality craftsmanship, honest pricing, and a team that shows up.
            </p>

            <div style={{
              display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '40px',
              animation: 'fadeUp 0.7s 0.3s ease both', opacity: 0,
            }}>
              <Link href="/contact" className="btn-primary" style={{ fontSize: '16px', padding: '15px 32px', boxShadow: '0 8px 30px rgba(255,183,3,0.3)' }}>
                Request a Framing Estimate →
              </Link>
              <a href="tel:+12092413765" className="btn-secondary" style={{ fontSize: '16px', padding: '15px 32px' }}>
                <Phone size={18} />(209) 241-3765
              </a>
            </div>

            <div style={{
              display: 'flex', gap: '20px', flexWrap: 'wrap',
              animation: 'fadeUp 0.7s 0.4s ease both', opacity: 0,
            }}>
              {[
                { icon: CheckCircle2, text: 'Licensed & Insured' },
                { icon: CheckCircle2, text: 'Ceres & Modesto Area' },
                { icon: CheckCircle2, text: 'Free Estimates' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <Icon size={16} style={{ color: '#ffb703', flexShrink: 0 }} />
                  <span style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.7)', fontWeight: '600' }}>{text}</span>
                </div>
              ))}
              <a href="https://maps.app.goo.gl/j9AH5qksBDwbx7v29" target="_blank" rel="noopener" style={{
                display: 'flex', alignItems: 'center', gap: '7px', padding: '6px 14px', borderRadius: '999px',
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                textDecoration: 'none', transition: 'border-color 0.2s',
              }}>
                <div style={{ display: 'flex', gap: '2px', color: '#ffb703' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#fff' }}>5.0</span>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)' }}>· 9 Google reviews</span>
              </a>
            </div>
          </div>

          {/* Right — Logo */}
          <div className="hero-logo" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            animation: 'fadeUp 0.8s 0.3s ease both', opacity: 0,
          }}>
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', inset: '-36px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,183,3,0.22) 0%, transparent 70%)',
                animation: 'pulse-glow 3s ease-in-out infinite',
              }} />
              <div style={{
                position: 'absolute', inset: '-2px', borderRadius: '50%',
                border: '1px solid rgba(255,183,3,0.2)',
                animation: 'spin-slow 20s linear infinite',
              }} />
              <Image
                src={LOGO_URL}
                alt="C Hernandez Construction"
                width={300}
                height={300}
                priority
                style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 40px rgba(255,183,3,0.45)) drop-shadow(0 0 80px rgba(255,183,3,0.2))' }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
        animation: 'float 2s infinite', cursor: 'pointer', zIndex: 4,
      }} onClick={() => window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' })}>
        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
        <ChevronDown size={20} style={{ color: 'rgba(255,183,3,0.5)' }} />
      </div>

      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes float { 0%, 100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(-8px); } }
        @keyframes pulse-glow { 0%, 100% { opacity: 0.6; transform: scale(1); } 50% { opacity: 1; transform: scale(1.1); } }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; } .hero-logo { display: none !important; } }
      `}</style>
    </section>
  );
}
