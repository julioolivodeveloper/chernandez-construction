import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { cities } from '@/lib/cities/data';

export const metadata: Metadata = {
  title: 'Service Areas | C Hernandez Construction – Central Valley CA',
  description: 'C Hernandez Construction serves Modesto, Turlock, Stockton, Tracy, Manteca, Ceres and the Central Valley. Licensed general contractor Lic. #1106454.',
};

export default function CitiesPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(180deg, #04081a 0%, #080e1d 100%)', paddingTop: '120px', paddingBottom: '64px', borderBottom: '1px solid rgba(255,183,3,0.1)' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 14px', borderRadius: '999px', background: 'rgba(255,183,3,0.08)', border: '1px solid rgba(255,183,3,0.25)', fontSize: '11px', fontWeight: '800', color: '#ffb703', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '20px' }}>
            <MapPin size={11} />
            Service Areas
          </div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', color: '#fff', marginBottom: '14px', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
            We Serve the <span style={{ color: '#ffb703' }}>Central Valley</span>
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: '600px' }}>
            Based in Ceres, CA — C Hernandez Construction travels to your project. Select your city below for local information, permit details, and services available in your area.
          </p>
        </div>
      </section>

      <section style={{ background: '#080e1d', padding: '64px 0 96px' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          {/* Ceres — home base */}
          <div style={{ padding: '28px 32px', borderRadius: '20px', background: 'rgba(255,183,3,0.06)', border: '1px solid rgba(255,183,3,0.25)', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(255,183,3,0.15)', border: '1px solid rgba(255,183,3,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MapPin size={20} style={{ color: '#ffb703' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem', fontWeight: '800', color: '#fff' }}>Ceres, CA</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,183,3,0.7)', fontWeight: '700' }}>Stanislaus County · Home Base · Lic. #1106454</div>
              </div>
            </div>
            <Link href="/contact" className="btn-primary" style={{ fontSize: '13px' }}>Get Estimate →</Link>
          </div>

          {/* Other cities grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            {cities.map(city => (
              <Link key={city.slug} href={`/cities/${city.slug}`} style={{ padding: '24px 28px', borderRadius: '18px', background: '#0d1829', border: '1px solid rgba(255,255,255,0.07)', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '12px', transition: 'border-color 0.2s, transform 0.2s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,183,3,0.3)'; el.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.07)'; el.style.transform = 'none'; }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <MapPin size={15} style={{ color: '#ffb703', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.05rem', fontWeight: '800', color: '#fff' }}>{city.name}, {city.state}</div>
                      <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', marginTop: '2px' }}>{city.county} · {city.distanceFromCeres}</div>
                    </div>
                  </div>
                  <ArrowRight size={16} style={{ color: 'rgba(255,183,3,0.6)', flexShrink: 0 }} />
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {city.services.slice(0, 3).map(s => (
                    <span key={s.name} style={{ padding: '3px 10px', borderRadius: '999px', fontSize: '10px', fontWeight: '700', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.45)' }}>{s.name}</span>
                  ))}
                  {city.services.length > 3 && <span style={{ padding: '3px 10px', borderRadius: '999px', fontSize: '10px', color: 'rgba(255,183,3,0.5)', fontWeight: '700' }}>+{city.services.length - 3} more</span>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
