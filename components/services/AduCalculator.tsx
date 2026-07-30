'use client';
import { useState } from 'react';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';

const types = [
  { id: 'detached', label: 'Detached ADU', costLow: 180, costHigh: 260 },
  { id: 'attached', label: 'Attached ADU', costLow: 150, costHigh: 220 },
  { id: 'garage', label: 'Garage Conversion', costLow: 80, costHigh: 140 },
  { id: 'jadu', label: 'Junior ADU (JADU)', costLow: 50, costHigh: 100 },
];

const fmt = (n: number) => '$' + Math.round(n).toLocaleString();

export default function AduCalculator() {
  const [sqft, setSqft] = useState(600);
  const [typeId, setTypeId] = useState('detached');

  const t = types.find(x => x.id === typeId)!;
  const low = sqft * t.costLow;
  const high = sqft * t.costHigh;
  const mid = (low + high) / 2;
  const monthlyRent = Math.round(sqft * 1.75);
  const yearlyRent = monthlyRent * 12;
  const payback = (mid / yearlyRent).toFixed(1);

  return (
    <div style={{ background: 'rgba(255,183,3,0.05)', border: '1px solid rgba(255,183,3,0.2)', borderRadius: '24px', padding: '36px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
        <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(255,183,3,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffb703' }}>
          <Calculator size={22} />
        </div>
        <div>
          <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '800', fontSize: '18px', color: '#fff', marginBottom: '2px' }}>ADU Cost & ROI Estimator</h3>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>Estimates for Central Valley, CA — actual cost varies by project</p>
        </div>
      </div>

      {/* ADU Type */}
      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '10px' }}>ADU Type</label>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }} className="calc-grid">
          {types.map(t => (
            <button key={t.id} onClick={() => setTypeId(t.id)} style={{
              padding: '11px 14px', borderRadius: '12px', cursor: 'pointer', textAlign: 'left',
              background: typeId === t.id ? 'rgba(255,183,3,0.15)' : 'rgba(255,255,255,0.04)',
              border: typeId === t.id ? '1px solid rgba(255,183,3,0.5)' : '1px solid rgba(255,255,255,0.08)',
              color: typeId === t.id ? '#ffb703' : 'rgba(255,255,255,0.6)',
              fontSize: '13px', fontWeight: '700', transition: 'all 0.15s',
            }}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Size slider */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <label style={{ fontSize: '11px', fontWeight: '800', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>ADU Size</label>
          <span style={{ fontSize: '15px', fontWeight: '800', color: '#ffb703' }}>{sqft.toLocaleString()} sq ft</span>
        </div>
        <input
          type="range" min={200} max={1200} step={50}
          value={sqft}
          onChange={e => setSqft(Number(e.target.value))}
          style={{ width: '100%', accentColor: '#ffb703', cursor: 'pointer' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}>200 sq ft</span>
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}>1,200 sq ft</span>
        </div>
      </div>

      {/* Results */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }} className="calc-results">
        <div style={{ padding: '18px', borderRadius: '14px', background: 'rgba(255,183,3,0.08)', border: '1px solid rgba(255,183,3,0.2)', textAlign: 'center' }}>
          <DollarSign size={18} style={{ color: '#ffb703', margin: '0 auto 6px' }} />
          <div style={{ fontSize: '10px', fontWeight: '700', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Est. Cost</div>
          <div style={{ fontSize: '16px', fontWeight: '900', color: '#ffb703', fontFamily: 'Poppins, sans-serif' }}>{fmt(low)}</div>
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)' }}>– {fmt(high)}</div>
        </div>
        <div style={{ padding: '18px', borderRadius: '14px', background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', textAlign: 'center' }}>
          <TrendingUp size={18} style={{ color: '#4ade80', margin: '0 auto 6px' }} />
          <div style={{ fontSize: '10px', fontWeight: '700', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Monthly Rent</div>
          <div style={{ fontSize: '16px', fontWeight: '900', color: '#4ade80', fontFamily: 'Poppins, sans-serif' }}>{fmt(monthlyRent)}</div>
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)' }}>est. income</div>
        </div>
        <div style={{ padding: '18px', borderRadius: '14px', background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.2)', textAlign: 'center' }}>
          <Calculator size={18} style={{ color: '#818cf8', margin: '0 auto 6px' }} />
          <div style={{ fontSize: '10px', fontWeight: '700', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Payback</div>
          <div style={{ fontSize: '16px', fontWeight: '900', color: '#818cf8', fontFamily: 'Poppins, sans-serif' }}>{payback} yrs</div>
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)' }}>at {fmt(monthlyRent)}/mo</div>
        </div>
      </div>

      <p style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.25)', textAlign: 'center', marginTop: '16px', lineHeight: 1.6 }}>
        * Estimates based on Central Valley averages. Actual cost depends on site conditions, finishes, and permits. Request a free estimate for an accurate quote.
      </p>

      <style>{`
        @media (max-width: 540px) {
          .calc-grid { grid-template-columns: 1fr !important; }
          .calc-results { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
