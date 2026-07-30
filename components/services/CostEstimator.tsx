'use client';
import { useState } from 'react';
import { Calculator, DollarSign } from 'lucide-react';

interface Range {
  label: string;
  low: number;
  high: number;
}

interface Props {
  title: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  defaultVal: number;
  ranges: Range[];
  note?: string;
}

const fmt = (n: number) => '$' + Math.round(n).toLocaleString();

export default function CostEstimator({ title, unit, min, max, step, defaultVal, ranges, note }: Props) {
  const [val, setVal] = useState(defaultVal);
  const [rangeIdx, setRangeIdx] = useState(0);

  const r = ranges[rangeIdx];
  const low = val * r.low;
  const high = val * r.high;

  return (
    <div style={{ background: 'rgba(255,183,3,0.05)', border: '1px solid rgba(255,183,3,0.2)', borderRadius: '24px', padding: '36px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
        <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(255,183,3,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffb703' }}>
          <Calculator size={22} />
        </div>
        <div>
          <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '800', fontSize: '18px', color: '#fff', marginBottom: '2px' }}>{title}</h3>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>Estimates for Central Valley, CA</p>
        </div>
      </div>

      {/* Scope selector */}
      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '10px' }}>Project Scope</label>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {ranges.map((r, i) => (
            <button key={r.label} onClick={() => setRangeIdx(i)} style={{
              padding: '9px 16px', borderRadius: '999px', cursor: 'pointer',
              background: rangeIdx === i ? 'rgba(255,183,3,0.15)' : 'rgba(255,255,255,0.04)',
              border: rangeIdx === i ? '1px solid rgba(255,183,3,0.5)' : '1px solid rgba(255,255,255,0.08)',
              color: rangeIdx === i ? '#ffb703' : 'rgba(255,255,255,0.6)',
              fontSize: '13px', fontWeight: '700', transition: 'all 0.15s',
            }}>
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {/* Slider */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <label style={{ fontSize: '11px', fontWeight: '800', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Size</label>
          <span style={{ fontSize: '15px', fontWeight: '800', color: '#ffb703' }}>{val.toLocaleString()} {unit}</span>
        </div>
        <input
          type="range" min={min} max={max} step={step}
          value={val}
          onChange={e => setVal(Number(e.target.value))}
          style={{ width: '100%', accentColor: '#ffb703', cursor: 'pointer' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}>{min.toLocaleString()} {unit}</span>
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}>{max.toLocaleString()} {unit}</span>
        </div>
      </div>

      {/* Result */}
      <div style={{ padding: '24px', borderRadius: '16px', background: 'rgba(255,183,3,0.08)', border: '1px solid rgba(255,183,3,0.25)', textAlign: 'center' }}>
        <DollarSign size={20} style={{ color: '#ffb703', margin: '0 auto 8px' }} />
        <div style={{ fontSize: '12px', fontWeight: '700', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Estimated Cost Range</div>
        <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: '900', color: '#ffb703' }}>
          {fmt(low)} – {fmt(high)}
        </div>
        <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginTop: '6px' }}>
          for {val.toLocaleString()} {unit} · {r.label.toLowerCase()}
        </div>
      </div>

      {note && (
        <p style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.25)', textAlign: 'center', marginTop: '14px', lineHeight: 1.6 }}>
          * {note}
        </p>
      )}
    </div>
  );
}
