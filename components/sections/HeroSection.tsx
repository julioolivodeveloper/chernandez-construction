'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Phone, ChevronDown, Shield, CheckCircle2, Star } from 'lucide-react';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255,183,3,${p.a})`;
        ctx!.fill();
      });

      // Draw connecting lines
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

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'linear-gradient(145deg, #040a16 0%, #080e1d 40%, #0a1428 100%)',
    }}>
      {/* Canvas particles */}
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      {/* Grid lines overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(255,183,3,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,183,3,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Radial glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%',
        transform: 'translateX(-50%)',
        width: '600px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(255,183,3,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Decorative construction elements */}
      <div style={{
        position: 'absolute', right: '-60px', top: '50%', transform: 'translateY(-50%)',
        width: '500px', height: '500px', opacity: 0.04, pointerEvents: 'none',
      }}>
        <svg viewBox="0 0 200 200" fill="none" stroke="#ffb703" strokeWidth="1">
          <rect x="20" y="20" width="160" height="160" />
          <line x1="20" y1="80" x2="180" y2="80" />
          <line x1="20" y1="120" x2="180" y2="120" />
          <line x1="80" y1="20" x2="80" y2="180" />
          <line x1="120" y1="20" x2="120" y2="180" />
          <path d="M20 80 L100 20 L180 80" />
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '100px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '780px' }}>

          {/* License badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            marginBottom: '28px',
            padding: '7px 16px', borderRadius: '999px',
            background: 'rgba(255,183,3,0.08)',
            border: '1px solid rgba(255,183,3,0.25)',
            animation: 'fadeUp 0.6s ease both',
          }}>
            <Shield size={13} style={{ color: '#ffb703' }} />
            <span style={{ fontSize: '12px', fontWeight: '700', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.03em' }}>
              CA Licensed General Contractor · Lic. <span style={{ color: '#ffb703' }}>#1106454</span>
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
            fontWeight: '900',
            lineHeight: 1.1,
            letterSpacing: '-0.04em',
            marginBottom: '24px',
            animation: 'fadeUp 0.7s 0.1s ease both',
            opacity: 0,
          }}>
            <span style={{ color: '#fff' }}>Licensed General Contractor</span>
            <br />
            <span style={{
              background: 'linear-gradient(90deg, #ffb703, #ffd60a, #ffb703)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'fadeUp 0.7s 0.1s ease both, shimmer 3s linear infinite',
            }}>
              Framing · ADUs · Additions
            </span>
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.7,
            maxWidth: '600px',
            marginBottom: '36px',
            animation: 'fadeUp 0.7s 0.2s ease both',
            opacity: 0,
          }}>
            Specializing in residential framing, ADUs and room additions in <strong style={{ color: '#fff', fontWeight: '700' }}>Ceres and Modesto</strong>, CA. Quality craftsmanship, honest pricing, and a team that shows up.
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex', gap: '14px', flexWrap: 'wrap',
            marginBottom: '40px',
            animation: 'fadeUp 0.7s 0.3s ease both',
            opacity: 0,
          }}>
            <Link href="/contact" className="btn-primary" style={{ fontSize: '16px', padding: '15px 32px', boxShadow: '0 8px 30px rgba(255,183,3,0.3)' }}>
              Request a Framing Estimate →
            </Link>
            <a href="tel:+12092413765" className="btn-secondary" style={{ fontSize: '16px', padding: '15px 32px' }}>
              <Phone size={18} />
              (209) 241-3765
            </a>
          </div>

          {/* Trust signals */}
          <div style={{
            display: 'flex', gap: '20px', flexWrap: 'wrap',
            animation: 'fadeUp 0.7s 0.4s ease both',
            opacity: 0,
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

            {/* Google reviews */}
            <a
              href="https://g.page/r/Cd9A2YrEOL6VEAE/review"
              target="_blank"
              rel="noopener"
              style={{
                display: 'flex', alignItems: 'center', gap: '7px',
                padding: '6px 14px', borderRadius: '999px',
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                textDecoration: 'none', transition: 'border-color 0.2s',
              }}
            >
              <div style={{ display: 'flex', gap: '2px', color: '#ffb703' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
              </div>
              <span style={{ fontSize: '13px', fontWeight: '700', color: '#fff' }}>5.0</span>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)' }}>· 9 Google reviews</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
        animation: 'float 2s infinite',
        cursor: 'pointer',
      }}
        onClick={() => window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' })}>
        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
        <ChevronDown size={20} style={{ color: 'rgba(255,183,3,0.5)' }} />
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes float {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-8px); }
        }
      `}</style>
    </section>
  );
}
