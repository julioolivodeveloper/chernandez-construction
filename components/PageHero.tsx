'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone, Shield,
  Layers, Home, Building2, Wrench, Grid3X3,
  PaintBucket, DoorOpen, Warehouse, Hammer, Camera,
} from 'lucide-react';

const ICONS: Record<string, React.ElementType> = {
  layers: Layers, home: Home, building2: Building2, shield: Shield,
  wrench: Wrench, grid3x3: Grid3X3, paintbucket: PaintBucket,
  dooropen: DoorOpen, warehouse: Warehouse, hammer: Hammer,
  camera: Camera, phone: Phone,
};

const LOGO_URL = '/logo.png';
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

interface Props {
  chip?: string;
  iconName?: string;
  title: string;
  phrases: string[];
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  badge?: string;
}

export default function PageHero({
  chip,
  iconName,
  title,
  phrases,
  description,
  ctaLabel = 'Get a Free Estimate →',
  ctaHref = '/contact',
  badge,
}: Props) {
  const Icon = iconName ? ICONS[iconName.toLowerCase()] : undefined;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [bgIndex, setBgIndex] = useState(() => {
    const hash = title.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
    return (hash % (bgImages.length - 1)) + 1;
  });
  const [nextBgIndex, setNextBgIndex] = useState(() => {
    const hash = title.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
    const start = (hash % (bgImages.length - 1)) + 1;
    return (start + 1) % bgImages.length;
  });
  const [fading, setFading] = useState(false);
  const [typed, setTyped] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Background crossfade
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

  // Typewriter
  useEffect(() => {
    const phrase = phrases[phraseIdx];
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
        setPhraseIdx(i => (i + 1) % phrases.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [typed, isDeleting, phraseIdx, phrases]);

  // Particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let W = canvas.width = window.innerWidth;
    let H = canvas.height = 600;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];
    for (let i = 0; i < 45; i++) {
      particles.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4, r: Math.random() * 1.5 + 0.5, a: Math.random() * 0.5 + 0.1 });
    }
    let animId: number;
    function draw() {
      ctx!.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx!.beginPath(); ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255,183,3,${p.a})`; ctx!.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx!.beginPath();
            ctx!.strokeStyle = `rgba(255,183,3,${0.08 * (1 - dist / 100)})`;
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
    const onResize = () => { W = canvas.width = window.innerWidth; };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize); };
  }, []);

  return (
    <section style={{ position: 'relative', minHeight: '600px', display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#040a16', paddingTop: '100px', paddingBottom: '64px' }}>

      {/* Background slideshow */}
      {bgImages.map((src, i) => (
        <div key={src} style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: i === bgIndex ? (fading ? 0 : 1) : i === nextBgIndex ? (fading ? 1 : 0) : 0, transition: 'opacity 1s ease-in-out' }}>
          <Image src={src} alt="" fill sizes="100vw" style={{ objectFit: 'cover' }} priority={i === 0} />
        </div>
      ))}

      {/* Overlays */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(145deg, rgba(4,10,22,0.55) 0%, rgba(8,14,29,0.45) 50%, rgba(4,10,22,0.38) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none', backgroundImage: `linear-gradient(rgba(255,183,3,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,183,3,0.03) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 4 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: '48px' }} className="page-hero-grid">

          {/* Left */}
          <div>
            {/* Chip */}
            {(chip || Icon) && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                {Icon && (
                  <div style={{ width: '48px', height: '48px', borderRadius: '13px', background: 'rgba(255,183,3,0.12)', border: '1px solid rgba(255,183,3,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffb703', flexShrink: 0 }}>
                    <Icon size={22} />
                  </div>
                )}
                {chip && <div className="section-chip" style={{ margin: 0 }}>{chip}</div>}
              </div>
            )}

            {/* Title */}
            <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', fontWeight: '900', lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: '20px', color: '#fff' }}>
              {title}
              <br />
              <span style={{ background: 'linear-gradient(90deg, #ffb703, #ffd60a, #ffb703)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: 'shimmer 3s linear infinite', display: 'inline-block', minHeight: '1.15em' }}>
                {typed}
                <span style={{ display: 'inline-block', width: '3px', height: '0.8em', background: '#ffb703', marginLeft: '3px', verticalAlign: 'middle', animation: 'blink 0.75s step-end infinite' }} />
              </span>
            </h1>

            {/* Description */}
            <p style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '560px', marginBottom: '32px' }}>
              {description}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '24px' }}>
              <Link href={ctaHref} className="btn-primary" style={{ fontSize: '15px', padding: '13px 28px', boxShadow: '0 8px 24px rgba(255,183,3,0.25)' }}>
                {ctaLabel}
              </Link>
              <a href="tel:+12092413765" className="btn-secondary" style={{ fontSize: '15px', padding: '13px 28px' }}>
                <Phone size={16} />(209) 241-3765
              </a>
            </div>

            {/* Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '7px 14px', borderRadius: '999px', background: 'rgba(255,183,3,0.08)', border: '1px solid rgba(255,183,3,0.2)' }}>
              <Shield size={13} style={{ color: '#ffb703' }} />
              <span style={{ fontSize: '12px', fontWeight: '700', color: 'rgba(255,255,255,0.7)' }}>
                {badge ?? 'CA License #1106454 · Free Estimates · Mon–Sat 7am–6pm'}
              </span>
            </div>
          </div>

          {/* Right — Logo */}
          <div className="page-hero-logo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', inset: '-32px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,183,3,0.18) 0%, transparent 70%)', animation: 'pulse-glow 3s ease-in-out infinite' }} />
              <Image src={LOGO_URL} alt="C Hernandez Construction" width={320} height={320} style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 36px rgba(255,183,3,0.4))' }} />
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes pulse-glow { 0%, 100% { opacity: 0.6; transform: scale(1); } 50% { opacity: 1; transform: scale(1.08); } }
        @media (max-width: 900px) { .page-hero-grid { grid-template-columns: 1fr !important; } .page-hero-logo { display: none !important; } }
      `}</style>
    </section>
  );
}
