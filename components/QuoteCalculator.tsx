'use client';
import { useState } from 'react';
import { Calculator, ChevronRight, ChevronLeft, CheckCircle2, DollarSign, Phone, Home, PlusSquare, Layers, Wrench, CloudRain, Paintbrush, Building2, Ruler, type LucideIcon } from 'lucide-react';
import Link from 'next/link';

const fmt = (n: number) => n >= 1000
  ? '$' + (Math.round(n / 1000)).toLocaleString() + 'K'
  : '$' + Math.round(n).toLocaleString();

// ── Service categories ────────────────────────────────────────────
interface Category {
  id: string;
  label: string;
  desc: string;
  Icon: LucideIcon;
  gradient: string;
  glow: string;
  ring: string;
}

const CATEGORIES: Category[] = [
  { id: 'adu',       label: 'ADU Construction',  desc: 'Detached, attached, or garage conversion', Icon: Home,      gradient: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)', glow: 'rgba(59,130,246,0.4)',  ring: 'rgba(59,130,246,0.15)' },
  { id: 'addition',  label: 'Room Addition',      desc: 'Add square footage to your home',         Icon: PlusSquare, gradient: 'linear-gradient(135deg, #92400e 0%, #f59e0b 100%)', glow: 'rgba(245,158,11,0.4)',  ring: 'rgba(245,158,11,0.15)' },
  { id: 'framing',   label: 'Structural Framing', desc: 'New home or project framing',             Icon: Layers,    gradient: 'linear-gradient(135deg, #5b21b6 0%, #8b5cf6 100%)', glow: 'rgba(139,92,246,0.4)', ring: 'rgba(139,92,246,0.15)' },
  { id: 'remodel',   label: 'Home Remodeling',    desc: 'Kitchen, bathroom, or whole home',        Icon: Wrench,    gradient: 'linear-gradient(135deg, #0e7490 0%, #06b6d4 100%)', glow: 'rgba(6,182,212,0.4)',   ring: 'rgba(6,182,212,0.15)'  },
  { id: 'roofing',   label: 'Roofing',            desc: 'Re-roof or new shingle installation',     Icon: CloudRain, gradient: 'linear-gradient(135deg, #991b1b 0%, #ef4444 100%)', glow: 'rgba(239,68,68,0.4)',   ring: 'rgba(239,68,68,0.15)'  },
  { id: 'drywall',   label: 'Drywall & Painting', desc: 'Hang, tape, texture, and paint',          Icon: Paintbrush,gradient: 'linear-gradient(135deg, #14532d 0%, #22c55e 100%)', glow: 'rgba(34,197,94,0.4)',   ring: 'rgba(34,197,94,0.15)'  },
  { id: 'newbuild',  label: 'New Construction',   desc: 'Full custom home build',                  Icon: Building2, gradient: 'linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)', glow: 'rgba(37,99,235,0.4)',   ring: 'rgba(37,99,235,0.15)'  },
  { id: 'carpentry', label: 'Carpentry & Trim',   desc: 'Molding, built-ins, finish work',         Icon: Ruler,     gradient: 'linear-gradient(135deg, #78350f 0%, #d97706 100%)', glow: 'rgba(217,119,6,0.4)',   ring: 'rgba(217,119,6,0.15)'  },
];

// ── Price data ────────────────────────────────────────────────────
interface PriceData {
  subtypes: { id: string; label: string }[];
  slider: { label: string; unit: string; min: number; max: number; step: number; def: number };
  // per unit price by [subtype][finish]
  prices: Record<string, [number, number, number]>; // [basic, standard, premium] per unit
  note: string;
}

const PRICE_DATA: Record<string, PriceData> = {
  adu: {
    subtypes: [
      { id: 'detached', label: 'Detached ADU' },
      { id: 'garage',   label: 'Garage Conversion' },
      { id: 'attached', label: 'Attached ADU' },
      { id: 'jadu',     label: 'Junior ADU (JADU)' },
    ],
    slider: { label: 'Size', unit: 'sq ft', min: 200, max: 1200, step: 50, def: 600 },
    prices: {
      detached: [155, 220, 300],
      garage:   [110, 155, 220],
      attached: [130, 185, 260],
      jadu:     [90,  130, 190],
    },
    note: 'Includes framing, MEP rough-in, drywall, and basic finishes. Permits, design, and site prep separate.',
  },
  addition: {
    subtypes: [
      { id: 'bedroom',   label: 'Bedroom Addition' },
      { id: 'family',    label: 'Family Room' },
      { id: 'second',    label: 'Second Story' },
      { id: 'suite',     label: 'Primary Suite' },
    ],
    slider: { label: 'Size', unit: 'sq ft', min: 100, max: 1000, step: 50, def: 300 },
    prices: {
      bedroom:  [180, 240, 330],
      family:   [165, 230, 320],
      second:   [220, 290, 390],
      suite:    [210, 280, 380],
    },
    note: 'Includes framing, roofing tie-in, drywall, and basic finishes. Foundation and permits separate.',
  },
  framing: {
    subtypes: [
      { id: 'single',  label: 'Single Story' },
      { id: 'two',     label: 'Two Story' },
      { id: 'adu',     label: 'ADU / Structure' },
      { id: 'addition', label: 'Addition Framing' },
    ],
    slider: { label: 'Floor Area', unit: 'sq ft', min: 200, max: 4000, step: 100, def: 1200 },
    prices: {
      single:   [18, 24, 32],
      two:      [22, 29, 38],
      adu:      [20, 27, 35],
      addition: [22, 30, 40],
    },
    note: 'Framing labor and materials only. Foundation, sheathing, and roofing separate.',
  },
  remodel: {
    subtypes: [
      { id: 'kitchen-minor', label: 'Kitchen (Minor)' },
      { id: 'kitchen-major', label: 'Kitchen (Full)' },
      { id: 'bathroom',      label: 'Bathroom' },
      { id: 'whole',         label: 'Whole Home' },
    ],
    slider: { label: 'Size', unit: 'sq ft', min: 50, max: 2000, step: 25, def: 200 },
    prices: {
      'kitchen-minor': [120, 180, 260],
      'kitchen-major': [200, 300, 420],
      bathroom:        [150, 220, 320],
      whole:           [80,  130, 210],
    },
    note: 'Remodeling estimates include demo, framing modifications, drywall, paint, and basic fixtures.',
  },
  roofing: {
    subtypes: [
      { id: 'reroof',   label: 'Full Re-Roof (tear-off)' },
      { id: 'overlay',  label: 'Overlay (layer over)' },
      { id: 'new',      label: 'New Roof Installation' },
      { id: 'repair',   label: 'Partial Repair' },
    ],
    slider: { label: 'Roof Area', unit: 'sq ft', min: 500, max: 4000, step: 100, def: 1800 },
    prices: {
      reroof:  [5.5, 7.5, 10],
      overlay: [3.5, 5.0, 7.0],
      new:     [6.0, 8.0, 11],
      repair:  [8.0, 11,  15],
    },
    note: 'Includes materials and labor. Decking replacement and flashing upgrades billed separately if needed.',
  },
  drywall: {
    subtypes: [
      { id: 'hang',    label: 'Hang & Tape Only' },
      { id: 'texture', label: 'Hang, Tape & Texture' },
      { id: 'full',    label: 'Hang, Tape, Texture & Paint' },
      { id: 'patch',   label: 'Patch & Repair' },
    ],
    slider: { label: 'Area', unit: 'sq ft', min: 100, max: 3000, step: 50, def: 800 },
    prices: {
      hang:    [2.5, 3.5, 4.5],
      texture: [3.5, 5.0, 6.5],
      full:    [5.0, 7.0, 9.0],
      patch:   [4.0, 6.0, 9.0],
    },
    note: 'Per sq ft of wall/ceiling area. Multi-room projects often qualify for volume pricing.',
  },
  newbuild: {
    subtypes: [
      { id: 'single', label: 'Single Story Home' },
      { id: 'two',    label: 'Two Story Home' },
      { id: 'custom', label: 'Custom / High-End' },
    ],
    slider: { label: 'Living Area', unit: 'sq ft', min: 800, max: 4000, step: 100, def: 1800 },
    prices: {
      single: [200, 270, 360],
      two:    [220, 290, 390],
      custom: [280, 370, 500],
    },
    note: 'Full construction cost estimate. Land, permits, design/engineering, and landscaping not included.',
  },
  carpentry: {
    subtypes: [
      { id: 'trim',     label: 'Trim & Molding' },
      { id: 'builtin',  label: 'Custom Built-Ins' },
      { id: 'closet',   label: 'Closet Systems' },
      { id: 'stair',    label: 'Stair & Railing' },
    ],
    slider: { label: 'Linear / Area', unit: 'ln ft', min: 20, max: 500, step: 10, def: 100 },
    prices: {
      trim:    [12, 18, 28],
      builtin: [25, 40, 65],
      closet:  [20, 32, 55],
      stair:   [35, 55, 90],
    },
    note: 'Per linear foot. Custom built-ins and closets measured by linear foot of installed cabinetry.',
  },
};

const FINISHES = [
  { id: 'basic',    label: 'Basic',    desc: 'Functional and code-compliant', color: '#64748b' },
  { id: 'standard', label: 'Standard', desc: 'Mid-range finishes, most popular', color: '#ffb703' },
  { id: 'premium',  label: 'Premium',  desc: 'High-end materials and finishes', color: '#a78bfa' },
];

export default function QuoteCalculator() {
  const [step, setStep] = useState(0); // 0=category, 1=details, 2=finish, 3=result
  const [category, setCategory] = useState('');
  const [subtype, setSubtype] = useState('');
  const [size, setSize] = useState(0);
  const [finish, setFinish] = useState('standard');
  const [showForm, setShowForm] = useState(false);

  const data = PRICE_DATA[category];
  const finishIdx = FINISHES.findIndex(f => f.id === finish);
  const pricePerUnit = data && subtype ? data.prices[subtype]?.[finishIdx] ?? 0 : 0;
  const low = Math.round(size * pricePerUnit * 0.85 / 500) * 500;
  const high = Math.round(size * pricePerUnit * 1.15 / 500) * 500;
  const estimateStr = low > 0 ? `${fmt(low)} – ${fmt(high)}` : '';

  const selectCategory = (id: string) => {
    setCategory(id);
    const d = PRICE_DATA[id];
    setSubtype(d.subtypes[0].id);
    setSize(d.slider.def);
    setStep(1);
  };

  const goBack = () => {
    if (step === 1) { setStep(0); setCategory(''); }
    else if (step === 2) setStep(1);
    else if (step === 3) setStep(2);
  };

  const categoryInfo = CATEGORIES.find(c => c.id === category);

  return (
    <section style={{ background: 'linear-gradient(180deg, #040a16 0%, #080e1d 100%)', padding: '96px 0', borderTop: '1px solid rgba(255,183,3,0.08)' }}>
      <div className="container" style={{ maxWidth: '820px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 16px', borderRadius: '999px', background: 'rgba(255,183,3,0.08)', border: '1px solid rgba(255,183,3,0.25)', fontSize: '11px', fontWeight: '800', color: '#ffb703', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '18px' }}>
            <Calculator size={12} />
            Project Estimator
          </div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: '900', color: '#fff', marginBottom: '12px', letterSpacing: '-0.03em' }}>
            Estimate Your <span style={{ color: '#ffb703' }}>Project Cost</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', maxWidth: '500px', margin: '0 auto' }}>
            Get an instant rough estimate based on Central Valley CA pricing — then request your free official quote.
          </p>
        </div>

        {/* Progress bar */}
        {step > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '40px' }}>
            {['Service', 'Details', 'Finishes', 'Estimate'].map((label, i) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800', background: i <= step ? 'rgba(255,183,3,0.2)' : 'rgba(255,255,255,0.05)', border: `1px solid ${i <= step ? 'rgba(255,183,3,0.5)' : 'rgba(255,255,255,0.1)'}`, color: i <= step ? '#ffb703' : 'rgba(255,255,255,0.3)' }}>
                    {i < step ? <CheckCircle2 size={14} /> : i + 1}
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: '600', color: i <= step ? '#fff' : 'rgba(255,255,255,0.3)' }}>{label}</span>
                </div>
                {i < 3 && <div style={{ width: '32px', height: '1px', background: i < step ? 'rgba(255,183,3,0.4)' : 'rgba(255,255,255,0.1)' }} />}
              </div>
            ))}
          </div>
        )}

        {/* ── Step 0: Category ─────────────────────────── */}
        {step === 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '12px' }}>
            {CATEGORIES.map(cat => {
              const { Icon } = cat;
              return (
                <button key={cat.id} onClick={() => selectCategory(cat.id)}
                  className="calc-cat-btn"
                  style={{ padding: '24px 18px 20px', borderRadius: '20px', background: '#0d1829', border: '1px solid rgba(255,255,255,0.07)', cursor: 'pointer', textAlign: 'center', transition: 'all 0.2s', position: 'relative', overflow: 'hidden' }}>
                  {/* glow background */}
                  <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', width: '100px', height: '60px', borderRadius: '50%', background: cat.glow, filter: 'blur(30px)', opacity: 0.5, pointerEvents: 'none' }} />
                  {/* icon */}
                  <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                    <div style={{ position: 'absolute', width: '72px', height: '72px', borderRadius: '50%', background: cat.ring, border: `1px solid ${cat.ring}` }} />
                    <div style={{ position: 'relative', width: '54px', height: '54px', borderRadius: '50%', background: cat.gradient, boxShadow: `0 8px 24px ${cat.glow}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={24} color="#fff" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: '800', color: '#fff', marginBottom: '4px', lineHeight: 1.3 }}>{cat.label}</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.4 }}>{cat.desc}</div>
                </button>
              );
            })}
          </div>
        )}

        {/* ── Step 1: Details ──────────────────────────── */}
        {step === 1 && data && (
          <div style={{ background: '#0d1829', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.07)', padding: '36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
              {categoryInfo && (() => { const { Icon } = categoryInfo; return (
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: categoryInfo.gradient, boxShadow: `0 6px 16px ${categoryInfo.glow}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={20} color="#fff" strokeWidth={1.5} />
                </div>
              ); })()}
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: '800', color: '#fff', margin: 0 }}>{categoryInfo?.label}</h3>
            </div>

            <div style={{ marginBottom: '28px' }}>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '12px' }}>Project Type</label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {data.subtypes.map(s => (
                  <button key={s.id} onClick={() => setSubtype(s.id)} style={{ padding: '10px 18px', borderRadius: '999px', cursor: 'pointer', background: subtype === s.id ? 'rgba(255,183,3,0.15)' : 'rgba(255,255,255,0.04)', border: `1px solid ${subtype === s.id ? 'rgba(255,183,3,0.5)' : 'rgba(255,255,255,0.08)'}`, color: subtype === s.id ? '#ffb703' : 'rgba(255,255,255,0.6)', fontSize: '13px', fontWeight: '700', transition: 'all 0.15s' }}>
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <label style={{ fontSize: '11px', fontWeight: '800', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>{data.slider.label}</label>
                <span style={{ fontSize: '16px', fontWeight: '800', color: '#ffb703' }}>{size.toLocaleString()} {data.slider.unit}</span>
              </div>
              <input type="range" min={data.slider.min} max={data.slider.max} step={data.slider.step} value={size} onChange={e => setSize(Number(e.target.value))} style={{ width: '100%', accentColor: '#ffb703', cursor: 'pointer', height: '6px' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}>{data.slider.min.toLocaleString()} {data.slider.unit}</span>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}>{data.slider.max.toLocaleString()} {data.slider.unit}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={goBack} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '12px 20px', borderRadius: '999px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', fontSize: '14px', fontWeight: '700', cursor: 'pointer' }}>
                <ChevronLeft size={15} /> Back
              </button>
              <button onClick={() => setStep(2)} style={{ display: 'flex', alignItems: 'center', gap: '6px', flex: 1, justifyContent: 'center', padding: '12px 20px', borderRadius: '999px', background: '#ffb703', border: 'none', color: '#080e1d', fontSize: '14px', fontWeight: '800', cursor: 'pointer' }}>
                Choose Finishes <ChevronRight size={15} />
              </button>
            </div>
          </div>
        )}

        {/* ── Step 2: Finish level ─────────────────────── */}
        {step === 2 && (
          <div style={{ background: '#0d1829', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.07)', padding: '36px' }}>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: '800', color: '#fff', marginBottom: '24px' }}>Select Finish Level</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              {FINISHES.map(f => (
                <button key={f.id} onClick={() => setFinish(f.id)} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px 24px', borderRadius: '16px', cursor: 'pointer', background: finish === f.id ? `${f.color}15` : 'rgba(255,255,255,0.02)', border: `2px solid ${finish === f.id ? f.color + '60' : 'rgba(255,255,255,0.06)'}`, textAlign: 'left', transition: 'all 0.15s' }}>
                  <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: finish === f.id ? f.color : 'transparent', border: `2px solid ${finish === f.id ? f.color : 'rgba(255,255,255,0.2)'}`, flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '15px', fontWeight: '800', color: finish === f.id ? '#fff' : 'rgba(255,255,255,0.7)', marginBottom: '3px' }}>{f.label}</div>
                    <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>{f.desc}</div>
                  </div>
                  {finish === f.id && <CheckCircle2 size={18} style={{ color: f.color, flexShrink: 0 }} />}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={goBack} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '12px 20px', borderRadius: '999px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', fontSize: '14px', fontWeight: '700', cursor: 'pointer' }}>
                <ChevronLeft size={15} /> Back
              </button>
              <button onClick={() => setStep(3)} style={{ display: 'flex', alignItems: 'center', gap: '6px', flex: 1, justifyContent: 'center', padding: '12px 20px', borderRadius: '999px', background: '#ffb703', border: 'none', color: '#080e1d', fontSize: '14px', fontWeight: '800', cursor: 'pointer' }}>
                See Estimate <ChevronRight size={15} />
              </button>
            </div>
          </div>
        )}

        {/* ── Step 3: Result ───────────────────────────── */}
        {step === 3 && data && (
          <div>
            <div style={{ background: '#0d1829', borderRadius: '24px', border: '1px solid rgba(255,183,3,0.2)', padding: '36px', marginBottom: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '13px', fontWeight: '700', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '12px' }}>
                {categoryInfo?.label} · {data.subtypes.find(s => s.id === subtype)?.label} · {size.toLocaleString()} {data.slider.unit} · {FINISHES.find(f => f.id === finish)?.label} finishes
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '8px' }}>
                <DollarSign size={28} style={{ color: '#ffb703' }} />
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: '900', color: '#ffb703', letterSpacing: '-0.03em' }}>
                  {fmt(low)} – {fmt(high)}
                </div>
              </div>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', marginBottom: '0' }}>
                Rough estimate for Central Valley, CA · Actual quote may vary based on site conditions
              </p>
            </div>

            <div style={{ padding: '16px 20px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', marginBottom: '24px' }}>
              <p style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>
                * {data.note} This is a rough estimate only. Your actual cost may differ based on site conditions, soil, existing structure, material availability, and project complexity. Request a free on-site estimate for an accurate price.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link href={`/contact?service=${encodeURIComponent(categoryInfo?.label || '')}&estimate=${encodeURIComponent(estimateStr)}`} className="btn-primary" style={{ display: 'flex', justifyContent: 'center', fontSize: '15px', padding: '16px' }}>
                Request My Free Official Quote →
              </Link>
              <a href="tel:+12092413765" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px', borderRadius: '999px', border: '1px solid rgba(255,183,3,0.3)', color: '#ffb703', fontSize: '14px', fontWeight: '700', textDecoration: 'none' }}>
                <Phone size={15} /> Call (209) 241-3765 for Faster Response
              </a>
              <button onClick={() => { setStep(0); setCategory(''); setSubtype(''); }} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.35)', fontSize: '13px', cursor: 'pointer', padding: '8px' }}>
                ← Start over
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .calc-cat-btn:hover { border-color: rgba(255,183,3,0.35) !important; background: rgba(255,183,3,0.05) !important; }
      `}</style>
    </section>
  );
}
