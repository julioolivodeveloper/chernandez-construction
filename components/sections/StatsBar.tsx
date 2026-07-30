import { Shield, MapPin, Clock, Star } from 'lucide-react';

const stats = [
  { icon: Shield, label: 'CA License', value: '#1106454', sub: 'Verified & Active' },
  { icon: Star, label: 'Google Rating', value: '5.0 ★', sub: '9 verified reviews' },
  { icon: MapPin, label: 'Service Area', value: 'Central Valley', sub: 'Ceres · Modesto & more' },
  { icon: Clock, label: 'Hours', value: 'Mon – Sat', sub: '7:00 AM – 6:00 PM' },
];

export default function StatsBar() {
  return (
    <section style={{
      background: '#0b1220',
      borderTop: '1px solid rgba(255,183,3,0.1)',
      borderBottom: '1px solid rgba(255,183,3,0.1)',
      padding: '32px 0',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2px',
        }} className="stats-grid">
          {stats.map(({ icon: Icon, label, value, sub }, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              padding: '16px 24px',
              borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
            }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
                background: 'rgba(255,183,3,0.1)', border: '1px solid rgba(255,183,3,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#ffb703',
              }}>
                <Icon size={20} />
              </div>
              <div>
                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '3px' }}>{label}</div>
                <div style={{ fontSize: '15px', fontWeight: '800', color: '#fff', fontFamily: 'Poppins, sans-serif', lineHeight: 1.2 }}>{value}</div>
                <div style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.45)', marginTop: '2px' }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .stats-grid > div { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.06); }
        }
        @media (max-width: 440px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
