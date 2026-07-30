import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, Phone, CheckCircle2, ChevronDown, ArrowRight } from 'lucide-react';
import { cities, getCity } from '@/lib/cities/data';
import { serviceTemplates, getServiceTemplate, SERVICE_SLUGS } from '@/lib/cities/serviceTemplates';
import ReviewsSection from '@/components/sections/ReviewsSection';
import QuoteForm from '@/components/sections/QuoteForm';

export function generateStaticParams() {
  return cities.flatMap(city =>
    SERVICE_SLUGS.map(service => ({ city: city.slug, service }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCity(citySlug);
  const svc = getServiceTemplate(serviceSlug);
  if (!city || !svc) return {};
  return {
    title: svc.metaTitle(city.name),
    description: svc.metaDesc(city.name),
    alternates: { canonical: `https://www.chernandezconstructionchg.com/cities/${city.slug}/${svc.slug}` },
    openGraph: {
      title: svc.metaTitle(city.name),
      description: svc.metaDesc(city.name),
      url: `https://www.chernandezconstructionchg.com/cities/${city.slug}/${svc.slug}`,
    },
  };
}

export default async function CityServicePage({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCity(citySlug);
  const svc = getServiceTemplate(serviceSlug);
  if (!city || !svc) notFound();

  const faq = svc.faq(city.name, city.distanceFromCeres);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${svc.name} in ${city.name}, CA`,
    description: svc.heroDesc(city.name),
    provider: {
      '@type': 'GeneralContractor',
      name: 'C Hernandez Construction',
      telephone: '+12092413765',
      hasCredential: { '@type': 'EducationalOccupationalCredential', identifier: '1106454' },
    },
    areaServed: { '@type': 'City', name: city.name, containedInPlace: { '@type': 'State', name: 'California' } },
    url: `https://www.chernandezconstructionchg.com/cities/${city.slug}/${svc.slug}`,
  };

  const otherServices = serviceTemplates.filter(s => s.slug !== svc.slug).slice(0, 5);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #04081a 0%, #0b1525 100%)', paddingTop: '120px', paddingBottom: '72px', borderBottom: '1px solid rgba(255,183,3,0.1)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '12px' }}>›</span>
            <Link href="/cities" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>Cities</Link>
            <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '12px' }}>›</span>
            <Link href={`/cities/${city.slug}`} style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>{city.name}</Link>
            <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '12px' }}>›</span>
            <span style={{ fontSize: '12px', color: 'rgba(255,183,3,0.7)' }}>{svc.name}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 14px', borderRadius: '999px', background: 'rgba(255,183,3,0.08)', border: '1px solid rgba(255,183,3,0.25)', fontSize: '11px', fontWeight: '800', color: '#ffb703', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              <MapPin size={11} />
              {city.name}, {city.county}
            </span>
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>· {city.distanceFromCeres} from Ceres</span>
          </div>

          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.9rem, 4vw, 3.2rem)', fontWeight: '900', color: '#fff', marginBottom: '16px', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
            {svc.heroTitle(city.name)}
          </h1>

          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '650px', marginBottom: '32px' }}>
            {svc.heroDesc(city.name)}
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
            <Link href="/contact" className="btn-primary">{svc.ctaLabel}</Link>
            <a href="tel:+12092413765" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '999px', border: '1px solid rgba(255,183,3,0.3)', color: '#ffb703', fontSize: '14px', fontWeight: '700', textDecoration: 'none' }}>
              <Phone size={15} />
              (209) 241-3765
            </a>
          </div>

          {/* Trust chips */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {['Lic. #1106454', '5.0 ★ Google', 'Free Estimates', 'Fully Insured'].map(t => (
              <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '6px 13px', borderRadius: '999px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', fontSize: '12px', color: 'rgba(255,255,255,0.55)', fontWeight: '600' }}>
                <CheckCircle2 size={11} style={{ color: '#22c55e' }} />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Intro + What's Included */}
      <section style={{ background: '#080e1d', padding: '72px 0' }}>
        <div className="container csp-grid" style={{ maxWidth: '1080px', display: 'grid', gridTemplateColumns: '1fr 340px', gap: '56px', alignItems: 'start' }}>

          {/* Left */}
          <div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: '800', color: '#fff', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              {svc.name} in {city.name}
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, marginBottom: '32px' }}>
              {svc.intro(city.name, city.county)}
            </p>

            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
              What&apos;s Included
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
              {svc.bullets.map(b => (
                <div key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={15} style={{ color: '#ffb703', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>{b}</span>
                </div>
              ))}
            </div>

            {/* Why us box */}
            <div style={{ padding: '24px', borderRadius: '16px', background: 'rgba(255,183,3,0.05)', border: '1px solid rgba(255,183,3,0.18)' }}>
              <div style={{ fontSize: '11px', fontWeight: '800', color: '#ffb703', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '10px' }}>
                Why {city.name} Homeowners Choose Us
              </div>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, margin: 0 }}>
                {city.whyUs}
              </p>
            </div>
          </div>

          {/* Right: sticky card */}
          <div style={{ position: 'sticky', top: '88px' }}>
            <div style={{ borderRadius: '20px', background: '#0d1829', border: '1px solid rgba(255,183,3,0.15)', overflow: 'hidden' }}>
              <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,183,3,0.05)' }}>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: '800', color: '#fff' }}>
                  {svc.name} in {city.name}
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '3px' }}>Lic. #1106454 · Free Estimates</div>
              </div>
              <div style={{ padding: '20px 24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                  {['Licensed & Insured', `Serving ${city.name} & Central Valley`, 'Same-day response', 'No-obligation estimate'].map(t => (
                    <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={13} style={{ color: '#22c55e', flexShrink: 0 }} />
                      <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)' }}>{t}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="btn-primary" style={{ display: 'block', textAlign: 'center', width: '100%', boxSizing: 'border-box', marginBottom: '10px' }}>
                  {svc.ctaLabel}
                </Link>
                <a href="tel:+12092413765" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '13px', color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>
                  <Phone size={13} /> (209) 241-3765
                </a>
              </div>

              {/* Other services */}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '16px 24px' }}>
                <div style={{ fontSize: '11px', fontWeight: '800', color: 'rgba(255,183,3,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>
                  More Services in {city.name}
                </div>
                {otherServices.map(s => (
                  <Link key={s.slug} href={`/cities/${city.slug}/${s.slug}`} className="csp-other-link" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', fontWeight: '600' }}>{s.name}</span>
                    <ArrowRight size={13} style={{ color: 'rgba(255,183,3,0.5)' }} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#040a16', padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: '900', color: '#fff', marginBottom: '40px', textAlign: 'center', letterSpacing: '-0.03em' }}>
            FAQs — <span style={{ color: '#ffb703' }}>{svc.shortName}</span> in {city.name}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faq.map((item, i) => (
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

      {/* City internal link */}
      <section style={{ background: '#080e1d', padding: '48px 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container" style={{ maxWidth: '760px', textAlign: 'center' }}>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginBottom: '12px' }}>
            See all services we offer in {city.name}:
          </p>
          <Link href={`/cities/${city.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: '700', color: '#ffb703', textDecoration: 'none' }}>
            <MapPin size={14} />
            All Services in {city.name}, CA →
          </Link>
        </div>
      </section>

      <ReviewsSection />
      <QuoteForm />

      <style>{`
        .csp-grid { display: grid; grid-template-columns: 1fr 340px; gap: 56px; }
        @media (max-width: 900px) { .csp-grid { grid-template-columns: 1fr !important; } }
        details summary::-webkit-details-marker { display: none; }
        .csp-other-link:hover span { color: #fff !important; }
      `}</style>
    </>
  );
}
