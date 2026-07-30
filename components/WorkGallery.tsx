'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const BASE = 'https://umyhcsrxwdogvbxgipnx.supabase.co/storage/v1/object/public/site-images/';

const projects = [
  // Framing
  { src: 'framing.jpg',           category: 'Framing',    label: 'Residential Framing' },
  { src: 'framing1.jpg',          category: 'Framing',    label: 'Wall Framing' },
  { src: 'framing344.jpg',        category: 'Framing',    label: 'Structural Framing' },
  { src: 'framing364945.jpg',     category: 'Framing',    label: 'Frame Structure' },
  { src: 'framing37374.jpg',      category: 'Framing',    label: 'Residential Build' },
  { src: 'framing4488.jpg',       category: 'Framing',    label: 'Framing Detail' },
  { src: 'framing4994.jpg',       category: 'Framing',    label: 'Wall System' },
  { src: 'framing73763673.jpg',   category: 'Framing',    label: 'Exterior Framing' },
  { src: 'framing747645.jpg',     category: 'Framing',    label: 'New Construction Frame' },
  { src: 'framing8383333.jpg',    category: 'Framing',    label: 'Floor System' },
  { src: 'framing88484.jpg',      category: 'Framing',    label: 'Roof Framing' },
  { src: 'framing384099.jpg',     category: 'Framing',    label: 'Room Addition Frame' },
  { src: 'framing33333.jpg',      category: 'Framing',    label: 'Wall Framing' },
  { src: 'framing33445.jpg',      category: 'Framing',    label: 'Structural Work' },
  { src: 'framingssss.jpg',       category: 'Framing',    label: 'Frame Detail' },
  { src: 'framiung.jpg',          category: 'Framing',    label: 'Construction Progress' },
  { src: 'ramingco.jpg',          category: 'Framing',    label: 'Residential Frame' },
  { src: 'framin5874584.jpg',     category: 'Framing',    label: 'Framing Project' },
  { src: 'framiunbgu3u3.jpg',     category: 'Framing',    label: 'Frame Structure' },
  { src: 'framingwww.jpg',        category: 'Framing',    label: 'Wall System' },
  { src: 'framingsd.jpg',         category: 'Framing',    label: 'Framing Work' },
  { src: 'framing364854094.jpg',  category: 'Framing',    label: 'Structural Framing' },
  { src: 'framing3737494.jpg',    category: 'Framing',    label: 'Residential Framing' },
  { src: 'framing384848484.jpg',  category: 'Framing',    label: 'Frame Detail' },
  { src: 'framing4675544.jpg',    category: 'Framing',    label: 'New Build Frame' },
  { src: 'framings984949494.jpg', category: 'Framing',    label: 'Wall Framing' },
  { src: 'framing3333333.jpg',    category: 'Framing',    label: 'Structural Work' },
  { src: 'framing33333444.jpg',   category: 'Framing',    label: 'Framing Progress' },
  // Roofing
  { src: 'roofing4744e4.jpg',     category: 'Roofing',    label: 'Shingle Installation' },
  { src: 'roofing834847474.jpg',  category: 'Roofing',    label: 'Roof Replacement' },
  { src: 'roofing84789404.jpg',   category: 'Roofing',    label: 'Roofing Project' },
  { src: 'rofing940404.jpg',      category: 'Roofing',    label: 'New Roof' },
  { src: 'rooofj.jpg',            category: 'Roofing',    label: 'Roof Shingles' },
  // Remodeling
  { src: 'bano.jpg',              category: 'Remodeling', label: 'Bathroom Remodel' },
  { src: 'bano5940404.jpg',       category: 'Remodeling', label: 'Bathroom Renovation' },
  { src: 'banos737348494.jpg',    category: 'Remodeling', label: 'Bathroom Finish' },
  { src: 'cocina.jpg',            category: 'Remodeling', label: 'Kitchen Remodel' },
  { src: 'tilehhdhdd.jpg',        category: 'Remodeling', label: 'Tile Work' },
  { src: 'pintura.jpg',           category: 'Remodeling', label: 'Interior Paint' },
  { src: 'pintura1.jpg',          category: 'Remodeling', label: 'Painting & Finish' },
  // ADU
  { src: 'adu.png',               category: 'ADU',        label: 'ADU Construction' },
  { src: '4e4984.jpg',            category: 'ADU',        label: 'ADU Project' },
];

const categories = ['All', 'Framing', 'Roofing', 'Remodeling', 'ADU'];

export default function WorkGallery() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  const openLightbox = (idx: number) => setLightbox(idx);
  const closeLightbox = () => setLightbox(null);

  const navigate = useCallback((dir: 1 | -1) => {
    if (lightbox === null || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setLightbox(i => {
        if (i === null) return null;
        return (i + dir + filtered.length) % filtered.length;
      });
      setAnimating(false);
    }, 150);
  }, [lightbox, filtered.length, animating]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === 'ArrowRight') navigate(1);
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, navigate]);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  return (
    <>
      {/* Category Tabs */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '36px', justifyContent: 'center' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            style={{
              padding: '9px 22px', borderRadius: '999px', cursor: 'pointer',
              fontSize: '13px', fontWeight: '700',
              background: active === cat ? '#ffb703' : 'rgba(255,255,255,0.05)',
              color: active === cat ? '#080e1d' : 'rgba(255,255,255,0.6)',
              border: active === cat ? '1px solid #ffb703' : '1px solid rgba(255,255,255,0.1)',
              transition: 'all 0.2s',
            }}
          >
            {cat}
            <span style={{
              marginLeft: '7px', fontSize: '11px', fontWeight: '800',
              background: active === cat ? 'rgba(0,0,0,0.15)' : 'rgba(255,183,3,0.15)',
              color: active === cat ? '#080e1d' : '#ffb703',
              padding: '1px 7px', borderRadius: '999px',
            }}>
              {cat === 'All' ? projects.length : projects.filter(p => p.category === cat).length}
            </span>
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div style={{
        columns: '4 220px', columnGap: '12px',
      }} className="gallery-columns">
        {filtered.map((p, i) => (
          <div
            key={p.src}
            onClick={() => openLightbox(i)}
            style={{
              breakInside: 'avoid', marginBottom: '12px',
              borderRadius: '14px', overflow: 'hidden',
              cursor: 'pointer', position: 'relative',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.07)',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            }}
            className="gallery-card"
          >
            <div style={{ position: 'relative', width: '100%', paddingBottom: i % 3 === 0 ? '75%' : i % 3 === 1 ? '100%' : '60%' }}>
              <Image
                src={BASE + p.src}
                alt={p.label}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                style={{ objectFit: 'cover' }}
              />
              {/* Hover overlay */}
              <div className="gallery-overlay" style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, transparent 40%, rgba(8,14,29,0.92) 100%)',
                opacity: 0, transition: 'opacity 0.25s ease',
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                padding: '16px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ZoomIn size={16} style={{ color: '#ffb703' }} />
                  <span style={{ fontSize: '13px', fontWeight: '700', color: '#fff' }}>{p.label}</span>
                </div>
                <span style={{ fontSize: '11px', color: 'rgba(255,183,3,0.7)', marginTop: '3px' }}>{p.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          onClick={closeLightbox}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            background: 'rgba(4,10,22,0.97)',
            backdropFilter: 'blur(16px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute', top: '20px', right: '20px', zIndex: 10,
              width: '44px', height: '44px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s',
            }}
          ><X size={20} /></button>

          {/* Counter */}
          <div style={{
            position: 'absolute', top: '24px', left: '50%', transform: 'translateX(-50%)',
            fontSize: '13px', fontWeight: '700', color: 'rgba(255,255,255,0.5)',
          }}>
            {lightbox + 1} / {filtered.length}
          </div>

          {/* Prev */}
          <button
            onClick={e => { e.stopPropagation(); navigate(-1); }}
            style={{
              position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)',
              width: '52px', height: '52px', borderRadius: '50%',
              background: 'rgba(255,183,3,0.15)', border: '1px solid rgba(255,183,3,0.3)',
              color: '#ffb703', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s', zIndex: 10,
            }}
          ><ChevronLeft size={26} /></button>

          {/* Image */}
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative', maxWidth: '90vw', maxHeight: '85vh',
              width: '900px', height: '600px',
              borderRadius: '20px', overflow: 'hidden',
              opacity: animating ? 0 : 1, transform: animating ? 'scale(0.96)' : 'scale(1)',
              transition: 'opacity 0.15s ease, transform 0.15s ease',
              boxShadow: '0 32px 80px rgba(0,0,0,0.7)',
            }}
          >
            <Image
              src={BASE + filtered[lightbox].src}
              alt={filtered[lightbox].label}
              fill
              sizes="90vw"
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>

          {/* Label */}
          <div style={{
            position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '15px', fontWeight: '800', color: '#fff', marginBottom: '4px' }}>
              {filtered[lightbox].label}
            </div>
            <div style={{ fontSize: '12px', color: '#ffb703', fontWeight: '700' }}>
              {filtered[lightbox].category}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={e => { e.stopPropagation(); navigate(1); }}
            style={{
              position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)',
              width: '52px', height: '52px', borderRadius: '50%',
              background: 'rgba(255,183,3,0.15)', border: '1px solid rgba(255,183,3,0.3)',
              color: '#ffb703', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s', zIndex: 10,
            }}
          ><ChevronRight size={26} /></button>
        </div>
      )}

      <style>{`
        .gallery-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.4); }
        .gallery-card:hover .gallery-overlay { opacity: 1 !important; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @media (max-width: 860px) { .gallery-columns { columns: 3 180px !important; } }
        @media (max-width: 540px) { .gallery-columns { columns: 2 140px !important; } }
      `}</style>
    </>
  );
}
