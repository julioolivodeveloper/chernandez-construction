'use client';
import { useRef, useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const busyRef = useRef(false);

  const navigate = useCallback((dir: 1 | -1) => {
    if (busyRef.current) return;
    busyRef.current = true;
    setFading(true);
    setTimeout(() => {
      setIdx(i => (i + dir + VIDEOS.length) % VIDEOS.length);
    }, 280);
  }, []);

  const goTo = useCallback((i: number) => {
    if (busyRef.current || i === idx) return;
    busyRef.current = true;
    setFading(true);
    setTimeout(() => { setIdx(i); }, 280);
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

  return (
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

        {/* Carousel wrapper — extra horizontal padding so arrows don't clip */}
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 40px', position: 'relative' }}>

          {/* Video box */}
          <div style={{
            position: 'relative', borderRadius: '22px', overflow: 'hidden',
            background: '#000', aspectRatio: '16/9',
            boxShadow: '0 40px 100px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,183,3,0.15)',
            opacity: fading ? 0 : 1,
            transform: fading ? 'scale(0.975)' : 'scale(1)',
            transition: 'opacity 0.28s ease, transform 0.28s ease',
          }}>
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              loop={false}
              onEnded={() => navigate(1)}
              onError={() => navigate(1)}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
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
            }}>
              {idx + 1} / {VIDEOS.length}
            </div>

            {/* Mute */}
            <button
              onClick={() => setMuted(m => !m)}
              aria-label={muted ? 'Unmute' : 'Mute'}
              style={{
                position: 'absolute', top: '14px', right: '14px',
                width: '38px', height: '38px', borderRadius: '50%',
                background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#fff', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.2s',
              }}
              className="vid-mute"
            >
              {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            </button>

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
            </div>
          </div>

          {/* Prev */}
          <button
            onClick={() => navigate(-1)}
            aria-label="Previous video"
            className="vid-arrow"
            style={{
              position: 'absolute', left: '-4px', top: '50%', transform: 'translateY(-60%)',
              width: '50px', height: '50px', borderRadius: '50%',
              background: 'rgba(255,183,3,0.1)', border: '1px solid rgba(255,183,3,0.28)',
              color: '#ffb703', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s', zIndex: 10, backdropFilter: 'blur(8px)',
            }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next */}
          <button
            onClick={() => navigate(1)}
            aria-label="Next video"
            className="vid-arrow"
            style={{
              position: 'absolute', right: '-4px', top: '50%', transform: 'translateY(-60%)',
              width: '50px', height: '50px', borderRadius: '50%',
              background: 'rgba(255,183,3,0.1)', border: '1px solid rgba(255,183,3,0.28)',
              color: '#ffb703', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s', zIndex: 10, backdropFilter: 'blur(8px)',
            }}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '28px' }}>
          {VIDEOS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Video ${i + 1}`}
              style={{
                width: i === idx ? '30px' : '8px', height: '8px',
                borderRadius: '999px', border: 'none', padding: 0,
                background: i === idx ? '#ffb703' : 'rgba(255,255,255,0.18)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        .vid-arrow:hover { background: rgba(255,183,3,0.22) !important; box-shadow: 0 4px 16px rgba(255,183,3,0.2); }
        .vid-mute:hover { background: rgba(255,255,255,0.15) !important; }
      `}</style>
    </section>
  );
}
