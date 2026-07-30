import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, Phone, CheckCircle2, ChevronDown } from 'lucide-react';
import { cities, getCity } from '@/lib/cities/data';
import ReviewsSection from '@/components/sections/ReviewsSection';
import QuoteForm from '@/components/sections/QuoteForm';

export function generateStaticParams() {
  return cities.map(c => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  return { title: city.metaTitle, description: city.metaDesc };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #04081a 0%, #0b1525 100%)', paddingTop: '120px', paddingBottom: '72px', borderBottom: '1px solid rgba(255,183,3,0.1)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 14px', borderRadius: '999px', background: 'rgba(255,183,3,0.08)', border: '1px solid rgba(255,183,3,0.25)', fontSize: '11px', fontWeight: '800', color: '#ffb703', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              <MapPin size={11} />
              {city.county}
            </span>
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>· {city.distanceFromCeres} from Ceres</span>
          </div>

          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.9rem, 4vw, 3.2rem)', fontWeight: '900', color: '#fff', marginBottom: '16px', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
            Licensed Contractor in<br />
            <span style={{ color: '#ffb703' }}>{city.name}, {city.state}</span>
          </h1>

          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '650px', marginBottom: '32px' }}>
            {city.heroDesc}
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
            <Link href="/contact" className="btn-primary">Get a Free Estimate →</Link>
            <a href="tel:+12092413765" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '999px', border: '1px solid rgba(255,183,3,0.3)', color: '#ffb703', fontSize: '14px', fontWeight: '700', textDecoration: 'none' }}>
              <Phone size={15} />
              (209) 241-3765
            </a>
          </div>

          {/* Trust chips */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {['Lic. #1106454', '5.0 ★ Google', 'Free Estimates', 'Permits Included'].map(t => (
              <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '6px 13px', borderRadius: '999px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', fontSize: '12px', color: 'rgba(255,255,255,0.55)', fontWeight: '600' }}>
                <CheckCircle2 size={11} style={{ color: '#22c55e' }} />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Intro + Services */}
      <section style={{ background: '#080e1d', padding: '72px 0' }}>
        <div className="container city-main-grid" style={{ maxWidth: '1080px', display: 'grid', gridTemplateColumns: '1fr 380px', gap: '56px', alignItems: 'start' }}>

          {/* Left: intro + neighborhoods + permit */}
          <div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: '800', color: '#fff', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              Serving {city.name} Since Day One
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, marginBottom: '32px' }}>
              {city.intro}
            </p>

            {/* Why us */}
            <div style={{ padding: '24px', borderRadius: '16px', background: 'rgba(255,183,3,0.05)', border: '1px solid rgba(255,183,3,0.18)', marginBottom: '32px' }}>
              <div style={{ fontSize: '11px', fontWeight: '800', color: '#ffb703', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '10px' }}>Why {city.name} Homeowners Choose Us</div>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, margin: 0 }}>{city.whyUs}</p>
            </div>

            {/* Neighborhoods */}
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.05rem', fontWeight: '800', color: '#fff', marginBottom: '12px' }}>
              Neighborhoods We Serve in {city.name}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
              {city.neighborhoods.map(n => (
                <span key={n} style={{ padding: '6px 13px', borderRadius: '999px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', fontSize: '12px', color: 'rgba(255,255,255,0.55)' }}>
                  {n}
                </span>
              ))}
            </div>

            {/* Permit info */}
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.05rem', fontWeight: '800', color: '#fff', marginBottom: '12px' }}>
              Building Permits in {city.name}
            </h3>
            <div style={{ padding: '20px 24px', borderRadius: '14px', background: '#0d1829', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div style={{ fontSize: '13px', fontWeight: '700', color: 'rgba(255,255,255,0.8)', marginBottom: '8px' }}>{city.permitInfo.office}</div>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, margin: 0 }}>{city.permitInfo.note}</p>
            </div>
          </div>

          {/* Right: services card */}
          <div style={{ position: 'sticky', top: '88px' }}>
            <div style={{ borderRadius: '20px', background: '#0d1829', border: '1px solid rgba(255,183,3,0.15)', overflow: 'hidden' }}>
              <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,183,3,0.05)' }}>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: '800', color: '#fff' }}>
                  Services in {city.name}
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '3px' }}>Lic. #1106454 · All work permitted</div>
              </div>
              <div style={{ padding: '16px' }}>
                {city.services.map(s => (
                  <Link key={s.href} href={s.href} style={{ display: 'block', padding: '14px 12px', borderRadius: '12px', textDecoration: 'none', marginBottom: '4px', transition: 'background 0.15s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,183,3,0.07)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: '#fff', marginBottom: '3px' }}>{s.name}</div>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{s.desc}</div>
                  </Link>
                ))}
              </div>
              <div style={{ padding: '16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <Link href="/contact" className="btn-primary" style={{ display: 'block', textAlign: 'center', width: '100%', boxSizing: 'border-box' }}>
                  Free Estimate in {city.name} →
                </Link>
                <a href="tel:+12092413765" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '10px', fontSize: '13px', color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>
                  <Phone size={13} /> (209) 241-3765
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#040a16', padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: '900', color: '#fff', marginBottom: '40px', textAlign: 'center', letterSpacing: '-0.03em' }}>
            FAQs — Construction in <span style={{ color: '#ffb703' }}>{city.name}</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {city.faq.map((item, i) => (
              <details key={i} style={{ borderRadius: '16px', background: '#0b1525', border: '1px solid rgba(255,255,255,0.07)', overflow: 'hidden' }}>
                <summary style={{ padding: '20px 24px', fontSize: '15px', fontWeight: '700', color: '#fff', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', listStyle: 'none' }}>
                  {item.q}
                  <ChevronDown size={16} style={{ color: '#ffb703', flexShrink: 0, marginLeft: '12px' }} />
                </summary>
                <div style={{ padding: '0 24px 20px', fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ paddingTop: '16px' }}>{item.a}</div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsSection />

      {/* Quote */}
      <QuoteForm />

      <style>{`
        .city-main-grid { display: grid; grid-template-columns: 1fr 380px; gap: 56px; }
        @media (max-width: 900px) { .city-main-grid { grid-template-columns: 1fr !important; } }
        details summary::-webkit-details-marker { display: none; }
      `}</style>
    </>
  );
}
