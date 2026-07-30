import { MapPin } from 'lucide-react';

const cities = [
  { name: 'Ceres', desc: 'Our home base. We know the local permit office and inspection requirements inside and out.' },
  { name: 'Modesto', desc: 'Serving all Modesto neighborhoods — from East Side to West Side and surrounding areas.' },
  { name: 'Turlock', desc: 'ADUs, framing, and home additions throughout Turlock and nearby communities.' },
  { name: 'Salida', desc: 'Fast service to Salida with the same licensed, inspected quality as everywhere we build.' },
  { name: 'Riverbank', desc: 'Experienced with Riverbank building codes and permit processes for residential projects.' },
  { name: 'Patterson', desc: 'Serving Patterson with framing, ADU construction, and general contracting services.' },
];

interface Props {
  service: string;
}

export default function CitiesSection({ service }: Props) {
  return (
    <section className="section-pad" style={{ background: '#080e1d' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-chip" style={{ margin: '0 auto 16px' }}>
            <MapPin size={12} />
            Service Area
          </div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '12px' }}>
            {service} in the <span className="text-gradient">Central Valley</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', maxWidth: '540px', margin: '0 auto' }}>
            We serve the entire Stanislaus County area and surrounding communities. Same licensed crew, same quality — wherever you are.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }} className="cities-grid">
          {cities.map(({ name, desc }) => (
            <div key={name} style={{
              padding: '22px', borderRadius: '16px',
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
              transition: 'border-color 0.2s',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <MapPin size={15} style={{ color: '#ffb703', flexShrink: 0 }} />
                <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '800', fontSize: '15px', color: '#fff' }}>{name}, CA</span>
              </div>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) { .cities-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 540px) { .cities-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
