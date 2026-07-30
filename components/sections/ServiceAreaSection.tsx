import { MapPin } from 'lucide-react';

const cities = [
  { name: 'Ceres', primary: true },
  { name: 'Modesto', primary: true },
  { name: 'Turlock' },
  { name: 'Salida' },
  { name: 'Riverbank' },
  { name: 'Patterson' },
  { name: 'Oakdale' },
  { name: 'Manteca' },
];

export default function ServiceAreaSection() {
  return (
    <section style={{ background: '#080e1d', padding: '80px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }} className="area-grid">
          <div>
            <div className="section-chip">
              <MapPin size={12} />
              Service Area
            </div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', fontWeight: '800', color: '#fff', letterSpacing: '-0.035em', marginBottom: '14px' }}>
              We Come to <span className="text-gradient">You</span>
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: '28px' }}>
              C Hernandez Construction is a service-area business based in Ceres, CA. We travel to your project — no need to come to us.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '28px' }}>
              {cities.map(({ name, primary }) => (
                <span key={name} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '8px 14px', borderRadius: '999px',
                  background: primary ? 'rgba(255,183,3,0.1)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${primary ? 'rgba(255,183,3,0.3)' : 'rgba(255,255,255,0.08)'}`,
                  fontSize: '13px', fontWeight: primary ? '700' : '500',
                  color: primary ? '#ffb703' : 'rgba(255,255,255,0.6)',
                }}>
                  <MapPin size={11} />
                  {name}
                </span>
              ))}
            </div>

            <a
              href="https://maps.app.goo.gl/z2UaDBrEoabbagax5"
              target="_blank"
              rel="noopener"
              className="btn-secondary"
            >
              <MapPin size={16} />
              View on Google Maps
            </a>
          </div>

          <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,183,3,0.15)', boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}>
            <iframe
              src="https://maps.google.com/maps?cid=14688347946188977697&ll=37.5947,-120.9577&z=11&output=embed"
              width="100%"
              height="380"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="C Hernandez Construction service area – Central Valley CA"
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .area-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
