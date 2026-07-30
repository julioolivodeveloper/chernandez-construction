'use client';
import { useRef, useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Volume2, VolumeX, X, Expand } from 'lucide-react';

const BASE = 'https://umyhcsrxwdogvbxgipnx.supabase.co/storage/v1/object/public/video/';

const VIDEOS = [
  { file: '18550F17-9722-43E9-BC9D-4AFA2678FFFE.MOV',         label: 'Construction Work' },
  { file: 'AQMTpyRFqL1_fCPjM9WikyLN-N1YLZh7imAZQzSfVSRaZxgcZCHLtNGMW67Dm0-Z5BKYZgoWSHuiScqMXmVHUJPLd8E8hb8DbJOgHVvzLQ (1).mp4', label: 'Structural Framing' },
  { file: 'AQMzDa9ukHMmMOIZLH0AEARH00eFwGgOiBH-44YzVVAxURtBgpZqbWHv3LNQVLhgO7cUtoAkUyFRhUS4anDLSARwyB_Ov6dtfQimWg3PVA (1).mp4', label: 'Wall Framing' },
  { file: '854CB4A9-DF53-494C-BD28-9C153228E7CB (1).mov',       label: 'Site Progress' },
  { file: 'AQMTXk2szVHuKJitSUhc43Rqz1ojatvZNtwKavO26f50Vl6chT2W4DbH9BCzZlFUOpMch9tNGJZQb5xmpxxBUp1nduR49HaPzj8WtMLtig (1).mp4', label: 'Roof Framing' },
  { file: '0D19F057-10D9-4BC7-972D-A8257E059554.MOV',           label: 'Framing Project' },
  { file: 'AQPLbZoO5tQSeDimKvqKfZuM-LO1evS9phCIIBZ5fHuW9j2AFFXWYwqdAVCe23mWhOC79MAY90A473ZpJOa6NCwkr9g6ltxu8DMmlEEfsw (1).mp4', label: 'Construction Progress' },
  { file: 'AQPRrSyqI_BpP5pV5fN8qsCfngKiBu_oeKZOsqN1bw9Gu-j_hxk_Ih1UBUrjBVP9yJVexkfX_PH7iKiebjsSXKk3CXh4aHzZuRltXFL-tA (1).mp4', label: 'Building Frame' },
];

function videoUrl(file: string) {
  return BASE + encodeURIComponent(file);
}

export default function VideoCarousel() {
  const [idx, setIdx] = useState(0);
  const [muted, setMuted] = useState(true);
  const [fading, setFading] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  const [lbMuted, setLbMuted] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const lbVideoRef = useRef<HTMLVideoElement>(null);
  const busyRef = useRef(false);

  /* ── carousel navigation ── */
  const navigate = useCallback((dir: 1 | -1) => {
    if (busyRef.current) return;
    busyRef.current = true;
    setFading(true);
    setTimeout(() => setIdx(i => (i + dir + VIDEOS.length) % VIDEOS.length), 280);
  }, []);

  const goTo = useCallback((i: number) => {
    if (busyRef.current || i === idx) return;
    busyRef.current = true;
    setFading(true);
    setTimeout(() => setIdx(i), 280);
  }, [idx]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.load();
    v.play().catch(() => {});
    setFading(false);
    busyRef.current = false;
  }, [idx]);

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted;
  }, [muted]);

  /* ── lightbox ── */
  const openLightbox = () => {
    setLightbox(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightbox(false);
    document.body.style.overflow = '';
    // resume carousel muted preview
    setTimeout(() => {
      const v = videoRef.current;
      if (v) { v.load(); v.play().catch(() => {}); }
    }, 100);
  };

  useEffect(() => {
    if (!lightbox) return;
    const v = lbVideoRef.current;
    if (v) { v.load(); v.play().catch(() => {}); }
  }, [lightbox, idx]);

  useEffect(() => {
    if (lbVideoRef.current) lbVideoRef.current.muted = lbMuted;
  }, [lbMuted]);

  // keyboard: ESC to close lightbox, arrows to navigate
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (!lightbox) return;
      if (e.key === 'ArrowRight') navigate(1);
      if (e.key === 'ArrowLeft') navigate(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, navigate]);

  /* ── navigate in lightbox ── */
  const lbNavigate = (dir: 1 | -1) => {
    if (busyRef.current) return;
    busyRef.current = true;
    setFading(true);
    setTimeout(() => {
      setIdx(i => (i + dir + VIDEOS.length) % VIDEOS.length);
    }, 200);
  };

  return (
    <>
      <section className="section-pad" style={{ background: '#040a16' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <div className="section-chip" style={{ margin: '0 auto 16px' }}>Real Work · Real Projects</div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: '900', color: '#fff', letterSpacing: '-0.03em', marginBottom: '12px' }}>
              Watch Our Work <span className="text-gradient">in Action</span>
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)', maxWidth: '520px', margin: '0 auto' }}>
              Real footage from our job sites — framing, roofing and remodeling across Ceres, Modesto and the Central Valley.
            </p>
          </div>

          {/* Carousel */}
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 40px', position: 'relative' }}>

            {/* Video box */}
            <div style={{
              position: 'relative', borderRadius: '22px', overflow: 'hidden',
              background: '#000', aspectRatio: '16/9',
              boxShadow: '0 40px 100px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,183,3,0.15)',
              opacity: fading ? 0 : 1,
              transform: fading ? 'scale(0.975)' : 'scale(1)',
              transition: 'opacity 0.28s ease, transform 0.28s ease',
              cursor: 'pointer',
            }}
              onClick={openLightbox}
              title="Click para ver en pantalla completa"
            >
              <video
                ref={videoRef}
                autoPlay muted playsInline loop={false}
                onEnded={() => navigate(1)}
                onError={() => navigate(1)}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', pointerEvents: 'none' }}
              >
                <source src={videoUrl(VIDEOS[idx].file)} />
              </video>

              {/* Counter */}
              <div style={{
                position: 'absolute', top: '14px', left: '14px',
                background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(10px)',
                borderRadius: '999px', padding: '5px 14px',
                fontSize: '12px', fontWeight: '800', color: 'rgba(255,255,255,0.9)',
                border: '1px solid rgba(255,255,255,0.12)',
                pointerEvents: 'none',
              }}>
                {idx + 1} / {VIDEOS.length}
              </div>

              {/* Expand icon hint */}
              <div style={{
                position: 'absolute', top: '14px', right: '14px',
                width: '38px', height: '38px', borderRadius: '50%',
                background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                pointerEvents: 'none',
              }}>
                <Expand size={15} />
              </div>

              {/* Play overlay hint on hover */}
              <div className="vid-play-hint" style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(0,0,0,0)',
                transition: 'background 0.25s',
                pointerEvents: 'none',
              }}>
                <div className="vid-play-circle" style={{
                  width: '68px', height: '68px', borderRadius: '50%',
                  background: 'rgba(255,183,3,0.9)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  opacity: 0, transform: 'scale(0.8)',
                  transition: 'opacity 0.25s, transform 0.25s',
                }}>
                  <Expand size={26} style={{ color: '#040a16' }} />
                </div>
              </div>

              {/* Bottom label */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(transparent, rgba(4,10,22,0.85))',
                padding: '36px 20px 18px',
                display: 'flex', alignItems: 'center', gap: '8px',
                pointerEvents: 'none',
              }}>
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ffb703', flexShrink: 0 }} />
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#fff', letterSpacing: '0.02em' }}>
                  {VIDEOS[idx].label}
                </span>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginLeft: 'auto' }}>Toca para ver completo</span>
              </div>
            </div>

            {/* Prev */}
            <button onClick={e => { e.stopPropagation(); navigate(-1); }} aria-label="Anterior" className="vid-arrow"
              style={{ position: 'absolute', left: '-4px', top: '50%', transform: 'translateY(-60%)', width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255,183,3,0.1)', border: '1px solid rgba(255,183,3,0.28)', color: '#ffb703', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', zIndex: 10, backdropFilter: 'blur(8px)' }}>
              <ChevronLeft size={24} />
            </button>

            {/* Next */}
            <button onClick={e => { e.stopPropagation(); navigate(1); }} aria-label="Siguiente" className="vid-arrow"
              style={{ position: 'absolute', right: '-4px', top: '50%', transform: 'translateY(-60%)', width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255,183,3,0.1)', border: '1px solid rgba(255,183,3,0.28)', color: '#ffb703', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', zIndex: 10, backdropFilter: 'blur(8px)' }}>
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '28px' }}>
            {VIDEOS.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} aria-label={`Video ${i + 1}`}
                style={{ width: i === idx ? '30px' : '8px', height: '8px', borderRadius: '999px', border: 'none', padding: 0, background: i === idx ? '#ffb703' : 'rgba(255,255,255,0.18)', cursor: 'pointer', transition: 'all 0.3s ease' }}
              />
            ))}
          </div>
        </div>

        <style>{`
          .vid-arrow:hover { background: rgba(255,183,3,0.22) !important; box-shadow: 0 4px 16px rgba(255,183,3,0.2); }
          div:has(> .vid-play-hint):hover .vid-play-hint { background: rgba(0,0,0,0.3) !important; }
          div:has(> .vid-play-hint):hover .vid-play-circle { opacity: 1 !important; transform: scale(1) !important; }
        `}</style>
      </section>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          onClick={closeLightbox}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(4,10,22,0.97)', backdropFilter: 'blur(20px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            animation: 'lbFadeIn 0.25s ease',
          }}
        >
          {/* Close */}
          <button onClick={closeLightbox} aria-label="Cerrar"
            style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 10, width: '46px', height: '46px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
            className="lb-close"
          >
            <X size={20} />
          </button>

          {/* Counter */}
          <div style={{ position: 'absolute', top: '26px', left: '50%', transform: 'translateX(-50%)', fontSize: '13px', fontWeight: '800', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.05em' }}>
            {idx + 1} / {VIDEOS.length}
          </div>

          {/* Prev */}
          <button onClick={e => { e.stopPropagation(); lbNavigate(-1); }} aria-label="Anterior"
            style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', width: '54px', height: '54px', borderRadius: '50%', background: 'rgba(255,183,3,0.15)', border: '1px solid rgba(255,183,3,0.3)', color: '#ffb703', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s', zIndex: 10 }}
            className="lb-arrow"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Video */}
          <div onClick={e => e.stopPropagation()}
            style={{ position: 'relative', width: '92vw', maxWidth: '1100px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.8)', animation: 'lbScaleIn 0.25s ease' }}>
            <video
              ref={lbVideoRef}
              autoPlay playsInline controls={false}
              muted={lbMuted}
              onEnded={() => lbNavigate(1)}
              onError={() => lbNavigate(1)}
              style={{ width: '100%', display: 'block', maxHeight: '85vh', background: '#000', objectFit: 'contain' }}
            >
              <source src={videoUrl(VIDEOS[idx].file)} />
            </video>

            {/* Custom controls bar */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(4,10,22,0.9))', padding: '40px 20px 20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffb703', flexShrink: 0 }} />
              <span style={{ fontSize: '14px', fontWeight: '700', color: '#fff', flex: 1 }}>{VIDEOS[idx].label}</span>
              <button
                onClick={() => setLbMuted(m => !m)}
                style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
              >
                {lbMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
            </div>
          </div>

          {/* Next */}
          <button onClick={e => { e.stopPropagation(); lbNavigate(1); }} aria-label="Siguiente"
            style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', width: '54px', height: '54px', borderRadius: '50%', background: 'rgba(255,183,3,0.15)', border: '1px solid rgba(255,183,3,0.3)', color: '#ffb703', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s', zIndex: 10 }}
            className="lb-arrow"
          >
            <ChevronRight size={28} />
          </button>

          {/* Dots */}
          <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px' }}>
            {VIDEOS.map((_, i) => (
              <button key={i} onClick={e => { e.stopPropagation(); goTo(i); }}
                style={{ width: i === idx ? '28px' : '8px', height: '8px', borderRadius: '999px', border: 'none', padding: 0, background: i === idx ? '#ffb703' : 'rgba(255,255,255,0.25)', cursor: 'pointer', transition: 'all 0.3s ease' }}
              />
            ))}
          </div>

          <style>{`
            @keyframes lbFadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes lbScaleIn { from { opacity: 0; transform: scale(0.94); } to { opacity: 1; transform: scale(1); } }
            .lb-close:hover { background: rgba(255,255,255,0.18) !important; }
            .lb-arrow:hover { background: rgba(255,183,3,0.28) !important; }
          `}</style>
        </div>
      )}
    </>
  );
}
