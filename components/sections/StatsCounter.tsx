'use client';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 50, suffix: '+', label: 'Projects Completed', sub: 'ADUs, framing & additions' },
  { value: 9, suffix: '', label: 'Google Reviews', sub: '5.0 ★ average rating' },
  { value: 6, suffix: '+', label: 'Cities Served', sub: 'Across the Central Valley' },
  { value: 100, suffix: '%', label: 'Licensed & Insured', sub: 'Lic. #1106454 · CSLB verified' },
];

function useCounter(target: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);
  return count;
}

function StatCard({ value, suffix, label, sub, active }: typeof stats[0] & { active: boolean }) {
  const count = useCounter(value, active);
  return (
    <div style={{ textAlign: 'center', padding: '36px 20px' }}>
      <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2.4rem, 4vw, 3.6rem)', fontWeight: '900', color: '#ffb703', lineHeight: 1, marginBottom: '10px', letterSpacing: '-0.04em' }}>
        {count}{suffix}
      </div>
      <div style={{ fontSize: '15px', fontWeight: '800', color: '#fff', marginBottom: '6px' }}>{label}</div>
      <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.02em' }}>{sub}</div>
    </div>
  );
}

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setActive(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ background: 'linear-gradient(135deg, #080e1d 0%, #0d1829 100%)', borderTop: '1px solid rgba(255,183,3,0.1)', borderBottom: '1px solid rgba(255,183,3,0.1)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0' }} className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} style={{ borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }} className="stat-item">
              <StatCard {...s} active={active} />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 680px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .stat-item { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.06); }
        }
      `}</style>
    </section>
  );
}
