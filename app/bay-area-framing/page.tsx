import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Shield, CheckCircle2, Star, MapPin, ChevronRight, Layers, Home, Building2, Hammer, Clock } from 'lucide-react';
import ServiceInlineForm from '@/components/services/ServiceInlineForm';

export const metadata: Metadata = {
  title: 'Bay Area Framing Services — San Jose & Milpitas | C Hernandez Construction',
  description: 'Licensed framing contractor (Lic. #1106454) serving San Jose, Milpitas & Silicon Valley. Residential framing, ADUs, room additions. Free estimates — call (209) 241-3765.',
  keywords: 'framing contractor San Jose CA, framing contractor Milpitas, residential framing Bay Area, ADU framing San Jose, structural framing Silicon Valley, room addition framing Bay Area, licensed framing contractor Bay Area',
  alternates: {
    canonical: 'https://www.chernandezconstructionchg.com/bay-area-framing',
  },
  openGraph: {
    title: 'Bay Area Framing Services — San Jose & Milpitas | C Hernandez Construction',
    description: 'Licensed framing contractor serving San Jose, Milpitas & Silicon Valley. Free estimates · Lic. #1106454 · (209) 241-3765.',
    url: 'https://www.chernandezconstructionchg.com/bay-area-framing',
  },
};

const services = [
  {
    icon: <Layers size={28} />,
    title: 'Structural Framing',
    desc: 'New homes, ADUs and room additions framed to California code. Walls, floors and roof systems built right.',
    href: '/bay-area-framing',
    gradient: 'linear-gradient(135deg, rgba(255,183,3,0.18), rgba(255,183,3,0.05))',
  },
  {
    icon: <Home size={28} />,
    title: 'ADU Bay Area',
    desc: 'Accessory dwelling units for San Jose and Milpitas properties. Detached, attached and garage conversion ADUs.',
    href: '/bay-area-framing/adu',
    gradient: 'linear-gradient(135deg, rgba(99,179,237,0.15), rgba(99,179,237,0.04))',
  },
  {
    icon: <Building2 size={28} />,
    title: 'Room Additions',
    desc: 'Expand your Bay Area home with a structurally sound addition. Properly tied into existing framing.',
    href: '/bay-area-framing/room-additions',
    gradient: 'linear-gradient(135deg, rgba(154,230,180,0.15), rgba(154,230,180,0.04))',
  },
  {
    icon: <Hammer size={28} />,
    title: 'General Contractor',
    desc: 'Full general contracting for Bay Area residential projects. One licensed crew from foundation to finish.',
    href: '/contact',
    gradient: 'linear-gradient(135deg, rgba(252,129,74,0.15), rgba(252,129,74,0.04))',
  },
];

const bayAreaCities = [
  { name: 'San Jose', slug: 'san-jose', primary: true },
  { name: 'Milpitas', slug: 'milpitas', primary: true },
  { name: 'Fremont', slug: null },
  { name: 'Sunnyvale', slug: null },
  { name: 'Santa Clara', slug: null },
  { name: 'Mountain View', slug: null },
  { name: 'Cupertino', slug: null },
  { name: 'Campbell', slug: null },
  { name: 'Los Gatos', slug: null },
  { name: 'Morgan Hill', slug: null },
  { name: 'Gilroy', slug: null },
  { name: 'Newark', slug: null },
];

const faqs = [
  { q: 'Do you serve San Jose and Milpitas?', a: 'Yes — San Jose and Milpitas are our primary Bay Area markets. We serve these cities and all surrounding Silicon Valley communities.' },
  { q: 'How far do you travel from Ceres?', a: 'We regularly travel to the Bay Area for framing projects. Distance is never an issue — we plan logistics to arrive ready to work, and Bay Area projects receive the same commitment as local jobs.' },
  { q: 'Are your rates different for Bay Area projects?', a: 'We offer competitive pricing regardless of location. Bay Area projects may include a travel and logistics fee depending on scope, but we always provide a clear, written estimate before any work begins.' },
  { q: 'Do you know Bay Area building codes and permits?', a: 'Yes. We are familiar with the City of San Jose Building Department and surrounding municipalities. All our work is fully permitted and inspection-ready.' },
  { q: 'Can you frame an ADU in San Jose or Milpitas?', a: 'Absolutely. ADU framing is one of our core specialties. We have framed detached ADUs, garage conversions, and attached ADUs across the Bay Area.' },
  { q: 'How long does Bay Area framing take?', a: 'A room addition typically takes 1–2 weeks of framing. A full ADU or new home takes 2–5 weeks depending on size and complexity. We give you a clear timeline with your estimate.' },
];

const BASE_IMG = 'https://umyhcsrxwdogvbxgipnx.supabase.co/storage/v1/object/public/site-images/';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'C Hernandez Construction — Bay Area Framing Services',
  legalName: 'C Hernandez Construction',
  telephone: '+12092413765',
  url: 'https://www.chernandezconstructionchg.com/bay-area-framing',
  image: 'https://www.chernandezconstructionchg.com/og-image.jpg',
  description: 'Licensed framing contractor (Lic. #1106454) serving San Jose, Milpitas and the Bay Area. Residential framing, ADUs and room additions.',
  priceRange: '$$',
  address: { '@type': 'PostalAddress', addressLocality: 'Ceres', addressRegion: 'CA', postalCode: '95307', addressCountry: 'US' },
  areaServed: [
    { '@type': 'City', name: 'San Jose', sameAs: 'https://en.wikipedia.org/wiki/San_Jose,_California' },
    { '@type': 'City', name: 'Milpitas', sameAs: 'https://en.wikipedia.org/wiki/Milpitas,_California' },
    { '@type': 'City', name: 'Fremont', sameAs: 'https://en.wikipedia.org/wiki/Fremont,_California' },
    { '@type': 'City', name: 'Sunnyvale' },
    { '@type': 'City', name: 'Santa Clara' },
    { '@type': 'City', name: 'Cupertino' },
  ],
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    opens: '07:00',
    closes: '18:00',
  }],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '9', bestRating: '5' },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'license',
    name: 'California Contractor License',
    identifier: '1106454',
    recognizedBy: { '@type': 'Organization', name: 'California Contractors State License Board' },
  },
  knowsAbout: ['Residential Framing', 'ADU Construction', 'Room Additions', 'Structural Framing', 'Bay Area Construction'],
};

export default function BayAreaFramingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(145deg, #060d1c 0%, #0d1f3c 50%, #080e1d 100%)',
        position: 'relative', overflow: 'hidden', padding: '100px 0 90px',
        minHeight: '88vh', display: 'flex', alignItems: 'center',
      }}>
        {/* Decorative blobs */}
        <div style={{ position: 'absolute', top: '-80px', right: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,183,3,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '-80px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,179,237,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        {/* Grid pattern */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,183,3,0.07) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="hero-two-col">
            {/* Left: text */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '999px', background: 'rgba(255,183,3,0.1)', border: '1px solid rgba(255,183,3,0.3)', fontSize: '11px', fontWeight: '800', color: '#ffb703', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '24px' }}>
                <MapPin size={11} /> Bay Area Framing Contractor
              </div>

              <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: '900', color: '#fff', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '8px' }}>
                Framing Services in
              </h1>
              <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: '900', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '24px' }}>
                <span className="text-gradient">San Jose</span>{' '}
                <span style={{ color: 'rgba(255,255,255,0.25)' }}>&</span>{' '}
                <span className="text-gradient">Milpitas</span>
              </h1>

              <p style={{ fontSize: 'clamp(15px, 1.5vw, 18px)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: '32px', maxWidth: '480px' }}>
                Licensed general contractor (Lic. #1106454) bringing Central Valley quality and competitive pricing to the Bay Area. Residential framing, ADUs and room additions — built to California code.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '36px' }}>
                {[
                  'Free written estimates — same-day response',
                  'Licensed & insured · CA Lic. #1106454',
                  'Permit coordination included',
                  'Framing inspection-ready workmanship',
                ].map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={16} style={{ color: '#ffb703', flexShrink: 0 }} />
                    <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>{t}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="#estimate" className="btn-primary">
                  Get a Free Estimate →
                </a>
                <a href="tel:+12092413765" className="btn-secondary">
                  <Phone size={15} /> (209) 241-3765
                </a>
              </div>
            </div>

            {/* Right: image + trust card */}
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,183,3,0.2)', boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}>
                <Image
                  src={`${BASE_IMG}daniel%20sanchez/Captura%20de%20pantalla%202026-07-30%20a%20la%28s%29%201.39.07%20p.m..png`}
                  alt="ADU framing project in Milpitas Bay Area — C Hernandez Construction"
                  width={600}
                  height={450}
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  priority
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,14,29,0.6) 0%, transparent 60%)', borderRadius: '24px' }} />
              </div>
              {/* Floating badge */}
              <div style={{ position: 'absolute', bottom: '-20px', left: '24px', padding: '16px 20px', borderRadius: '18px', background: 'rgba(8,14,29,0.95)', border: '1px solid rgba(255,183,3,0.3)', backdropFilter: 'blur(16px)', boxShadow: '0 12px 40px rgba(0,0,0,0.4)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#ffb703" style={{ color: '#ffb703' }} />)}
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '800', color: '#fff' }}>5.0 Google Rating</div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)' }}>9 verified reviews</div>
                  </div>
                </div>
              </div>
              {/* License badge */}
              <div style={{ position: 'absolute', top: '18px', right: '18px', padding: '8px 14px', borderRadius: '12px', background: 'rgba(8,14,29,0.9)', border: '1px solid rgba(255,183,3,0.35)', backdropFilter: 'blur(12px)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Shield size={13} style={{ color: '#ffb703' }} />
                  <span style={{ fontSize: '12px', fontWeight: '800', color: '#ffb703' }}>Lic. #1106454</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section style={{ background: '#0a1526', borderBottom: '1px solid rgba(255,183,3,0.1)', padding: '0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0' }} className="trust-grid">
            {[
              {
                IconEl: <Shield size={24} style={{ color: '#ffb703' }} />,
                bg: 'linear-gradient(135deg, rgba(255,183,3,0.22), rgba(255,183,3,0.06))',
                glow: 'rgba(255,183,3,0.25)',
                border: 'rgba(255,183,3,0.35)',
                label: 'CA Lic. #1106454',
                sub: 'Fully Licensed & Insured',
              },
              {
                IconEl: <Star size={24} fill="#ffd60a" style={{ color: '#ffd60a' }} />,
                bg: 'linear-gradient(135deg, rgba(255,214,10,0.2), rgba(255,183,3,0.05))',
                glow: 'rgba(255,214,10,0.2)',
                border: 'rgba(255,214,10,0.35)',
                label: '5.0 Google Rating',
                sub: '9 Verified Reviews',
              },
              {
                IconEl: <MapPin size={24} style={{ color: '#63b3ed' }} />,
                bg: 'linear-gradient(135deg, rgba(99,179,237,0.18), rgba(99,179,237,0.04))',
                glow: 'rgba(99,179,237,0.18)',
                border: 'rgba(99,179,237,0.3)',
                label: 'Bay Area Serving',
                sub: 'San Jose · Milpitas · More',
              },
              {
                IconEl: <Clock size={24} style={{ color: '#9ae6b4' }} />,
                bg: 'linear-gradient(135deg, rgba(154,230,180,0.18), rgba(154,230,180,0.04))',
                glow: 'rgba(154,230,180,0.18)',
                border: 'rgba(154,230,180,0.3)',
                label: 'Mon – Sat 7am–6pm',
                sub: 'Free estimates · Same-day reply',
              },
            ].map(({ IconEl, bg, glow, border, label, sub }, i) => (
              <div key={label} style={{
                padding: '28px 20px',
                borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '58px', height: '58px', borderRadius: '16px',
                  background: bg,
                  border: `1px solid ${border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 14px',
                  boxShadow: `0 6px 20px ${glow}`,
                }}>
                  {IconEl}
                </div>
                <div style={{ fontSize: '14px', fontWeight: '800', color: '#fff', fontFamily: 'Poppins, sans-serif' }}>{label}</div>
                <div style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.4)', marginTop: '3px' }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-chip" style={{ margin: '0 auto 20px' }}>
              <Layers size={11} /> Our Bay Area Services
            </div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: '800', color: '#fff', letterSpacing: '-0.03em', marginBottom: '14px' }}>
              What We Build in <span className="text-gradient">San Jose & Milpitas</span>
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', maxWidth: '560px', margin: '0 auto' }}>
              From structural framing to full ADUs — we bring licensed expertise and competitive pricing to every Bay Area project.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }} className="services-two-col">
            {services.map(({ icon, title, desc, href, gradient }) => (
              <Link key={title} href={href} className="bay-service-card" style={{
                display: 'block', padding: '32px 28px',
                borderRadius: '22px', textDecoration: 'none',
                background: gradient,
                border: '1px solid rgba(255,183,3,0.15)',
                transition: 'all 0.25s ease',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(255,183,3,0.12)', border: '1px solid rgba(255,183,3,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffb703', marginBottom: '18px' }}>
                  {icon}
                </div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: '800', color: '#fff', marginBottom: '10px' }}>{title}</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: '20px' }}>{desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#ffb703', fontSize: '13px', fontWeight: '700' }}>
                  Learn more <ChevronRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US FOR BAY AREA ── */}
      <section className="section-pad" style={{ background: '#0b1220' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="two-col">
            {/* Image side */}
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                <Image
                  src={`${BASE_IMG}Ruben%20Esreno/Captura%20de%20pantalla%202026-07-30%20a%20la%28s%29%201.28.02%20p.m..png`}
                  alt="Residential framing project — C Hernandez Construction Bay Area"
                  width={560}
                  height={420}
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
              </div>
              {/* Stats overlay */}
              <div style={{ position: 'absolute', bottom: '-16px', right: '-16px', padding: '20px 24px', borderRadius: '18px', background: 'rgba(8,14,29,0.96)', border: '1px solid rgba(255,183,3,0.25)', backdropFilter: 'blur(16px)', textAlign: 'center', boxShadow: '0 12px 40px rgba(0,0,0,0.4)' }}>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2.2rem', fontWeight: '900', color: '#ffb703', lineHeight: 1 }}>100%</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)', marginTop: '4px', fontWeight: '600' }}>Inspection pass rate</div>
              </div>
            </div>

            {/* Text side */}
            <div>
              <div className="section-chip">
                <Shield size={11} /> Why Choose Us
              </div>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.6rem)', fontWeight: '800', color: '#fff', letterSpacing: '-0.03em', marginBottom: '16px' }}>
                Central Valley Quality at <span className="text-gradient">Bay Area Projects</span>
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '32px' }}>
                We're based in Ceres — but we regularly travel to San Jose, Milpitas and across Silicon Valley for residential framing projects. Same licensed crew, same quality, same work ethic.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {[
                  {
                    title: 'CA Licensed to Work Anywhere',
                    desc: 'CA Lic. #1106454 covers the entire state. We pull permits and pass inspections in San Jose, Milpitas and every Bay Area city we serve.',
                  },
                  {
                    title: 'Competitive Bay Area Pricing',
                    desc: 'Our Central Valley cost structure means better value for your Bay Area project — without cutting corners on quality or compliance.',
                  },
                  {
                    title: 'Bay Area Permit Expertise',
                    desc: 'We navigate the City of San Jose Building Department and Santa Clara County regulations regularly. No learning curve on your project.',
                  },
                  {
                    title: 'Proven Bay Area Track Record',
                    desc: 'We\'ve completed ADU framing in Milpitas and residential projects across Silicon Valley — with perfect inspection records.',
                  },
                ].map(({ title, desc }) => (
                  <div key={title} style={{ display: 'flex', gap: '14px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(255,183,3,0.15)', border: '1px solid rgba(255,183,3,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <CheckCircle2 size={14} style={{ color: '#ffb703' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '700', color: '#fff', marginBottom: '4px' }}>{title}</div>
                      <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CITIES SERVED ── */}
      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="section-chip" style={{ margin: '0 auto 20px' }}>
              <MapPin size={11} /> Service Area
            </div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: '800', color: '#fff', letterSpacing: '-0.03em', marginBottom: '14px' }}>
              Bay Area Cities <span className="text-gradient">We Serve</span>
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', maxWidth: '500px', margin: '0 auto' }}>
              San Jose and Milpitas are our primary Bay Area markets — and we serve the entire South Bay and Silicon Valley.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }} className="cities-grid">
            {bayAreaCities.map(({ name, slug, primary }) => (
              <div key={name} style={{
                padding: primary ? '20px 16px' : '16px 14px',
                borderRadius: '16px',
                background: primary
                  ? 'linear-gradient(135deg, rgba(255,183,3,0.14), rgba(255,183,3,0.04))'
                  : 'rgba(255,255,255,0.03)',
                border: primary ? '1px solid rgba(255,183,3,0.4)' : '1px solid rgba(255,255,255,0.07)',
                textAlign: 'center',
                boxShadow: primary ? '0 8px 24px rgba(255,183,3,0.1)' : 'none',
                transition: 'all 0.2s',
              }}>
                {primary ? (
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '14px',
                    background: 'linear-gradient(135deg, #ffb703 0%, #ff9500 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 12px',
                    boxShadow: '0 6px 22px rgba(255,183,3,0.5), inset 0 1px 0 rgba(255,255,255,0.25)',
                  }}>
                    <Star size={24} fill="#080e1d" style={{ color: '#080e1d' }} />
                  </div>
                ) : (
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '11px',
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 10px',
                  }}>
                    <MapPin size={18} style={{ color: 'rgba(255,255,255,0.55)' }} />
                  </div>
                )}
                {slug ? (
                  <Link href={`/bay-area-framing/${slug}`} style={{ textDecoration: 'none' }}>
                    <div style={{ fontSize: '14px', fontWeight: '800', color: primary ? '#ffb703' : '#fff', fontFamily: 'Poppins, sans-serif' }}>{name}</div>
                    {primary && <div style={{ fontSize: '11px', color: 'rgba(255,183,3,0.7)', marginTop: '4px', fontWeight: '700', letterSpacing: '0.02em' }}>Primary Market · View page →</div>}
                  </Link>
                ) : (
                  <>
                    <div style={{ fontSize: '13.5px', fontWeight: '700', color: 'rgba(255,255,255,0.8)', fontFamily: 'Poppins, sans-serif' }}>{name}</div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginTop: '3px' }}>Service area</div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MILPITAS REVIEW FEATURE ── */}
      <section className="section-pad" style={{ background: '#0b1220' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="section-chip" style={{ margin: '0 auto 20px' }}>
              <Star size={11} /> Client Testimonials
            </div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: '800', color: '#fff', letterSpacing: '-0.03em' }}>
              Trusted by Bay Area <span className="text-gradient">Homeowners</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', maxWidth: '960px', margin: '0 auto' }} className="reviews-two-col">
            {[
              {
                client: 'Daniel Sanchez',
                location: 'Milpitas, CA',
                badge: 'ADU Bay Area',
                text: 'Great experience framing that ADU in Milpitas. ADU construction in the Bay Area is something we really enjoy — every project is unique and we love the challenge. Always a pleasure working with professional contractors like Daniel. Looking forward to the next framing project together.',
                image: BASE_IMG + 'daniel%20sanchez/Captura%20de%20pantalla%202026-07-30%20a%20la%28s%29%201.39.07%20p.m..png',
              },
              {
                client: 'Jose Carmona',
                location: 'Bay Area Project',
                badge: 'ADU Framing',
                text: 'From start to finish it was a great experience. We looked at the plans and got the work done very efficiently — passed city inspections with no problem on the first try, which allowed the rest of the project to move forward. Great price too.',
                image: BASE_IMG + 'josecarmona/Captura%20de%20pantalla%202026-07-30%20a%20la%28s%29%201.15.17%20p.m..png',
              },
            ].map(({ client, location, badge, text, image }) => (
              <div key={client} style={{ borderRadius: '22px', overflow: 'hidden', background: 'rgba(15,26,46,0.7)', border: '1px solid rgba(255,183,3,0.18)', boxShadow: '0 16px 48px rgba(0,0,0,0.3)' }}>
                <div style={{ position: 'relative', height: '220px' }}>
                  <Image src={image} alt={`${client} — framing project`} fill style={{ objectFit: 'cover' }} sizes="480px" />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,26,46,0.9) 0%, transparent 60%)' }} />
                  <span style={{ position: 'absolute', top: '14px', left: '14px', padding: '4px 12px', borderRadius: '999px', background: 'rgba(0,0,0,0.7)', border: '1px solid rgba(255,183,3,0.4)', fontSize: '11px', fontWeight: '800', color: '#ffb703' }}>
                    {badge}
                  </span>
                </div>
                <div style={{ padding: '24px 24px' }}>
                  <div style={{ display: 'flex', gap: '2px', marginBottom: '14px' }}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#ffb703" style={{ color: '#ffb703' }} />)}
                  </div>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '16px' }}>"{text}"</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,183,3,0.2)', border: '1px solid rgba(255,183,3,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '800', color: '#ffb703' }}>
                      {client[0]}
                    </div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: '800', color: '#fff' }}>{client}</div>
                      <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>{location} · Google Review</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <a href="https://maps.app.goo.gl/j9AH5qksBDwbx7v29" target="_blank" rel="noopener" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 28px', borderRadius: '999px',
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)',
              color: '#fff', fontSize: '13.5px', fontWeight: '700', textDecoration: 'none',
            }}>
              See all 9 reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="section-chip" style={{ margin: '0 auto 20px' }}>
              FAQ
            </div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: '800', color: '#fff', letterSpacing: '-0.03em' }}>
              Questions About <span className="text-gradient">Bay Area Framing</span>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map(({ q, a }) => (
              <div key={q} style={{ padding: '22px 24px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#fff', marginBottom: '8px', fontFamily: 'Poppins, sans-serif' }}>{q}</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ESTIMATE FORM ── */}
      <section id="estimate" className="section-pad" style={{ background: '#0b1220' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }} className="two-col">
            <div>
              <div className="section-chip">
                <Phone size={11} /> Free Estimate
              </div>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.6rem)', fontWeight: '800', color: '#fff', letterSpacing: '-0.03em', marginBottom: '16px' }}>
                Get Your Bay Area <span className="text-gradient">Framing Estimate</span>
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '28px' }}>
                Tell us about your San Jose or Milpitas project. We'll respond the same day with a clear, written estimate — at no charge.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                {[
                  'Free written estimate within 24 hours',
                  'Licensed & insured — CA Lic. #1106454',
                  'Bay Area permit coordination included',
                  'No commitment required',
                ].map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={15} style={{ color: '#ffb703', flexShrink: 0 }} />
                    <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)' }}>{t}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="tel:+12092413765" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 24px', borderRadius: '999px',
                  background: 'rgba(255,183,3,0.1)', border: '1px solid rgba(255,183,3,0.3)',
                  color: '#ffb703', fontWeight: '700', fontSize: '15px', textDecoration: 'none',
                }}>
                  <Phone size={16} /> (209) 241-3765
                </a>
                <a href="https://wa.link/roppnh" target="_blank" rel="noopener" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 24px', borderRadius: '999px',
                  background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.3)',
                  color: '#25d366', fontWeight: '700', fontSize: '15px', textDecoration: 'none',
                }}>
                  WhatsApp Chat
                </a>
              </div>
            </div>
            <div style={{ padding: '32px', borderRadius: '24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <ServiceInlineForm service="Bay Area framing" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CITY PAGES CTA ── */}
      <section style={{ background: '#080e1d', padding: '64px 0', borderTop: '1px solid rgba(255,183,3,0.1)' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: '800', color: '#fff', textAlign: 'center', marginBottom: '32px' }}>
            Explore Services by <span className="text-gradient">City</span>
          </h2>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/bay-area-framing/san-jose" className="btn-primary">
              Framing in San Jose →
            </Link>
            <Link href="/bay-area-framing/milpitas" className="btn-secondary">
              Framing in Milpitas →
            </Link>
            <Link href="/bay-area-framing/adu" className="btn-secondary">
              ADU Bay Area →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .bay-service-card:hover { transform: translateY(-4px) !important; box-shadow: 0 20px 50px rgba(0,0,0,0.4) !important; border-color: rgba(255,183,3,0.4) !important; }
        @media (max-width: 860px) {
          .hero-two-col, .two-col, .services-two-col, .reviews-two-col { grid-template-columns: 1fr !important; }
          .trust-grid { grid-template-columns: 1fr 1fr !important; }
          .cities-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .trust-grid, .cities-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </>
  );
}
