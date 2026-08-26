import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Shield, CheckCircle2, Star, MapPin, ChevronRight, Home } from 'lucide-react';
import ServiceInlineForm from '@/components/services/ServiceInlineForm';

export const metadata: Metadata = {
  title: 'ADU Framing Bay Area — San Jose & Milpitas | C Hernandez Construction',
  description: 'Licensed ADU framing contractor serving San Jose, Milpitas & Bay Area (Lic. #1106454). Detached ADUs, garage conversions, attached ADUs. Completed Bay Area ADU projects. Free estimates.',
  keywords: 'ADU framing Bay Area, ADU construction San Jose, ADU framing Milpitas, ADU contractor Bay Area, accessory dwelling unit framing San Jose, ADU builder Bay Area CA',
  alternates: {
    canonical: 'https://www.chernandezconstructionchg.com/bay-area-framing/adu',
  },
  openGraph: {
    title: 'ADU Framing Bay Area — San Jose & Milpitas | C Hernandez Construction',
    description: 'Licensed ADU framing contractor for Bay Area projects. Completed ADU in Milpitas. Lic. #1106454 · Free estimates.',
    url: 'https://www.chernandezconstructionchg.com/bay-area-framing/adu',
  },
};

const aduTypes = [
  {
    title: 'Detached ADU Framing',
    desc: 'Stand-alone ADU structures from slab to roof. We frame detached ADUs from 400–1,200 sq ft, including all interior walls, floor systems, and roof framing.',
    icon: '🏠',
  },
  {
    title: 'Garage Conversion Framing',
    desc: 'Converting your Bay Area garage to an ADU is one of the fastest paths to rental income. We frame new walls, insulation-ready cavities, and proper window/door openings.',
    icon: '🏢',
  },
  {
    title: 'Attached ADU Framing',
    desc: 'An attached ADU shares a wall with the main home. We tie the new structure into your existing framing properly — load paths, shear walls, and all.',
    icon: '🔗',
  },
  {
    title: 'Junior ADU (JADU) Framing',
    desc: 'Smaller conversions within the existing home footprint. Bedroom conversions, studio configurations — permitted and inspected.',
    icon: '🪄',
  },
];

const framingProcess = [
  { step: '01', title: 'Free Estimate', desc: 'Review your plans or visit the site. Clear written estimate at no charge — within 24 hours.' },
  { step: '02', title: 'Plan Review', desc: 'We review your ADU drawings and identify any structural or framing challenges before breaking ground.' },
  { step: '03', title: 'Permit Pull', desc: 'We coordinate with the City of San Jose or Milpitas building department and pull the framing permit.' },
  { step: '04', title: 'ADU Framing', desc: 'Our licensed crew frames your ADU efficiently — walls, roof, window/door openings, shear walls.' },
  { step: '05', title: 'Inspection', desc: 'We pass the framing inspection. Every connection, every bolt, every block is inspection-ready before we call for inspection.' },
  { step: '06', title: 'Handoff', desc: 'Once inspection passes, your ADU framing is ready for the next trades: electrical, plumbing, drywall.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'C Hernandez Construction — ADU Framing Bay Area',
  legalName: 'C Hernandez Construction',
  telephone: '+12092413765',
  url: 'https://www.chernandezconstructionchg.com/bay-area-framing/adu',
  description: 'Licensed ADU framing contractor serving San Jose, Milpitas and the Bay Area. CA Lic. #1106454. Detached ADUs, garage conversions, attached ADUs.',
  priceRange: '$$',
  address: { '@type': 'PostalAddress', addressLocality: 'Ceres', addressRegion: 'CA', postalCode: '95307', addressCountry: 'US' },
  areaServed: [
    { '@type': 'City', name: 'San Jose', sameAs: 'https://en.wikipedia.org/wiki/San_Jose,_California' },
    { '@type': 'City', name: 'Milpitas', sameAs: 'https://en.wikipedia.org/wiki/Milpitas,_California' },
    { '@type': 'City', name: 'Fremont' },
    { '@type': 'City', name: 'Sunnyvale' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '9', bestRating: '5' },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'license',
    name: 'California Contractor License',
    identifier: '1106454',
  },
};

const BASE_IMG = 'https://umyhcsrxwdogvbxgipnx.supabase.co/storage/v1/object/public/site-images/';

export default function AduBayAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(145deg, #060d1c 0%, #0b1828 50%, #080e1d 100%)',
        position: 'relative', overflow: 'hidden', padding: '100px 0 80px',
        minHeight: '82vh', display: 'flex', alignItems: 'center',
      }}>
        <div style={{ position: 'absolute', top: 0, left: '30%', width: '70%', height: '100%', background: 'radial-gradient(ellipse at top right, rgba(154,230,180,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,183,3,0.06) 1px, transparent 1px)', backgroundSize: '38px 38px', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '28px', fontSize: '12.5px' }}>
            <Link href="/bay-area-framing" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Bay Area Framing</Link>
            <ChevronRight size={12} style={{ color: 'rgba(255,255,255,0.25)' }} />
            <span style={{ color: '#ffb703', fontWeight: '700' }}>ADU Bay Area</span>
          </nav>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }} className="hero-two-col">
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '5px 14px', borderRadius: '999px', background: 'rgba(154,230,180,0.1)', border: '1px solid rgba(154,230,180,0.25)', fontSize: '11px', fontWeight: '800', color: '#9ae6b4', letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: '22px' }}>
                <Home size={10} /> ADU Framing Specialist
              </div>
              <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: '900', color: '#fff', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '18px' }}>
                ADU Framing in the <br /><span className="text-gradient">Bay Area</span>
              </h1>
              <p style={{ fontSize: 'clamp(14px, 1.4vw, 17px)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: '28px', maxWidth: '480px' }}>
                We have completed ADU framing projects in Milpitas and across the Bay Area. Licensed, insured, and ready to frame your accessory dwelling unit to California code.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '32px' }}>
                {[
                  'Completed ADU projects in Milpitas — real review',
                  'Detached, attached & garage conversions',
                  'City of San Jose & Milpitas permits included',
                  '100% framing inspection pass rate',
                ].map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                    <CheckCircle2 size={15} style={{ color: '#ffb703', flexShrink: 0 }} />
                    <span style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.7)' }}>{t}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="#estimate" className="btn-primary">Get ADU Estimate →</a>
                <a href="tel:+12092413765" className="btn-secondary"><Phone size={14} /> (209) 241-3765</a>
              </div>
            </div>

            {/* Right: project image + badge */}
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,183,3,0.2)', boxShadow: '0 28px 70px rgba(0,0,0,0.5)' }}>
                <Image
                  src={`${BASE_IMG}josecarmona/Captura%20de%20pantalla%202026-07-30%20a%20la%28s%29%201.15.17%20p.m..png`}
                  alt="ADU framing project Bay Area — C Hernandez Construction"
                  width={580}
                  height={440}
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  priority
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,14,29,0.55) 0%, transparent 55%)', borderRadius: '24px' }} />
              </div>
              <div style={{ position: 'absolute', bottom: '-18px', left: '20px', padding: '14px 18px', borderRadius: '16px', background: 'rgba(8,14,29,0.95)', border: '1px solid rgba(255,183,3,0.3)', backdropFilter: 'blur(16px)', boxShadow: '0 10px 36px rgba(0,0,0,0.4)' }}>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '700' }}>Completed ADU</div>
                <div style={{ fontSize: '14px', fontWeight: '800', color: '#fff' }}>Bay Area Project</div>
                <div style={{ display: 'flex', gap: '2px', marginTop: '5px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#ffb703" style={{ color: '#ffb703' }} />)}
                </div>
              </div>
              <div style={{ position: 'absolute', top: '16px', right: '16px', padding: '8px 14px', borderRadius: '12px', background: 'rgba(8,14,29,0.9)', border: '1px solid rgba(255,183,3,0.35)', backdropFilter: 'blur(12px)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Shield size={12} style={{ color: '#ffb703' }} />
                  <span style={{ fontSize: '11px', fontWeight: '800', color: '#ffb703' }}>Lic. #1106454</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ADU TYPES ── */}
      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="section-chip" style={{ margin: '0 auto 20px' }}><Home size={11} /> ADU Types We Frame</div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.7rem)', fontWeight: '800', color: '#fff', letterSpacing: '-0.03em', marginBottom: '14px' }}>
              Every Type of ADU <span className="text-gradient">Framed Right</span>
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', maxWidth: '520px', margin: '0 auto' }}>
              San Jose and Milpitas have high ADU demand. We frame every configuration — and we know the Bay Area permit process.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '18px' }} className="two-col-grid">
            {aduTypes.map(({ title, desc, icon }) => (
              <div key={title} style={{ padding: '28px', borderRadius: '20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,183,3,0.12)', display: 'flex', gap: '16px' }}>
                <div style={{ fontSize: '28px', flexShrink: 0, marginTop: '2px' }}>{icon}</div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#fff', marginBottom: '9px', fontFamily: 'Poppins, sans-serif' }}>{title}</h3>
                  <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.52)', lineHeight: 1.7 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section-pad" style={{ background: '#0b1220' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="section-chip" style={{ margin: '0 auto 20px' }}>Our Process</div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.5rem)', fontWeight: '800', color: '#fff', letterSpacing: '-0.03em' }}>
              From Estimate to <span className="text-gradient">Framing Inspection</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="three-col">
            {framingProcess.map(({ step, title, desc }) => (
              <div key={step} style={{ padding: '24px', borderRadius: '18px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', position: 'relative' }}>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: '900', color: 'rgba(255,183,3,0.2)', lineHeight: 1, marginBottom: '12px' }}>{step}</div>
                <h3 style={{ fontSize: '14px', fontWeight: '800', color: '#fff', marginBottom: '8px', fontFamily: 'Poppins, sans-serif' }}>{title}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BAY AREA ADU CONTEXT ── */}
      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'start' }} className="two-col">
            <div>
              <div className="section-chip"><MapPin size={11} /> Bay Area ADU Market</div>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 2.8vw, 2.3rem)', fontWeight: '800', color: '#fff', marginBottom: '14px' }}>
                Why the Bay Area is <span className="text-gradient">Perfect for ADUs</span>
              </h2>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '24px' }}>
                San Jose and Milpitas are among California's most ADU-friendly jurisdictions. State law (SB9, SB13) plus local ordinances make it easier than ever to add an ADU to your Bay Area property.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { title: 'High Rental Demand', desc: 'Bay Area rents are among the highest in the US. An ADU can generate $2,000–$3,500+/month in rental income in San Jose.' },
                  { title: 'SB9 & Streamlined Permits', desc: 'California state law streamlines ADU permitting. Many San Jose and Milpitas ADUs qualify for ministerial (fast-track) approval.' },
                  { title: 'Property Value Boost', desc: 'A properly permitted ADU adds significant value to Bay Area properties — often $200,000–$400,000 or more.' },
                  { title: 'No Owner-Occupancy Required', desc: 'San Jose removed owner-occupancy requirements for ADUs through 2025, making ADU investment easier than ever.' },
                ].map(({ title, desc }) => (
                  <div key={title} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ width: '26px', height: '26px', borderRadius: '7px', background: 'rgba(255,183,3,0.15)', border: '1px solid rgba(255,183,3,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '3px' }}>
                      <CheckCircle2 size={13} style={{ color: '#ffb703' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '700', color: '#fff', marginBottom: '4px' }}>{title}</div>
                      <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* Milpitas review */}
              <div style={{ padding: '28px', borderRadius: '22px', background: 'rgba(15,26,46,0.7)', border: '1px solid rgba(255,183,3,0.2)', marginBottom: '16px' }}>
                <div style={{ display: 'flex', gap: '2px', marginBottom: '14px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="#ffb703" style={{ color: '#ffb703' }} />)}
                </div>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '16px' }}>
                  "Great experience framing that ADU in Milpitas. ADU construction in the Bay Area is something we really enjoy — every project is unique and we love the challenge."
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,183,3,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '800', color: '#ffb703', flexShrink: 0 }}>D</div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '800', color: '#fff' }}>Daniel Sanchez</div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Milpitas, CA · ADU Bay Area · Google Review ✓</div>
                  </div>
                </div>
              </div>

              {/* Cost estimator card */}
              <div style={{ padding: '24px', borderRadius: '20px', background: 'rgba(255,183,3,0.06)', border: '1px solid rgba(255,183,3,0.18)' }}>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
                  Bay Area ADU Framing — Typical Ranges
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                  {[
                    { type: 'Garage Conversion (400–600 sq ft)', range: 'Labor: $6,000–$14,000' },
                    { type: 'Detached ADU (600–900 sq ft)', range: 'Labor: $14,000–$28,000' },
                    { type: 'Detached ADU (900–1,200 sq ft)', range: 'Labor: $24,000–$42,000' },
                    { type: 'Attached ADU Addition', range: 'Labor: $12,000–$30,000' },
                  ].map(({ type, range }) => (
                    <div key={type} style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', paddingBottom: '11px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>{type}</span>
                      <span style={{ fontSize: '13px', fontWeight: '700', color: '#ffb703', flexShrink: 0 }}>{range}</span>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginTop: '12px', lineHeight: 1.6 }}>
                  Framing labor estimates only. Does not include materials, permits, or other trades. Bay Area pricing may vary. Free written estimate for your specific project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CITY LINKS ── */}
      <section style={{ background: '#0b1220', padding: '48px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <p style={{ fontSize: '12px', fontWeight: '800', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#ffb703', marginBottom: '20px', textAlign: 'center' }}>
            ADU Framing by City
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/bay-area-framing/san-jose" style={{ padding: '12px 22px', borderRadius: '999px', background: 'rgba(255,183,3,0.08)', border: '1px solid rgba(255,183,3,0.25)', color: '#ffb703', fontWeight: '700', fontSize: '14px', textDecoration: 'none' }}>
              ADU Framing San Jose
            </Link>
            <Link href="/bay-area-framing/milpitas" style={{ padding: '12px 22px', borderRadius: '999px', background: 'rgba(255,183,3,0.08)', border: '1px solid rgba(255,183,3,0.25)', color: '#ffb703', fontWeight: '700', fontSize: '14px', textDecoration: 'none' }}>
              ADU Framing Milpitas
            </Link>
            <Link href="/bay-area-framing" style={{ padding: '12px 22px', borderRadius: '999px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.7)', fontWeight: '600', fontSize: '14px', textDecoration: 'none' }}>
              All Bay Area Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── ESTIMATE FORM ── */}
      <section id="estimate" className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }} className="two-col">
            <div>
              <div className="section-chip"><Phone size={11} /> Free ADU Estimate</div>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 2.8vw, 2.3rem)', fontWeight: '800', color: '#fff', marginBottom: '14px' }}>
                Start Your <span className="text-gradient">Bay Area ADU Project</span>
              </h2>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: '24px' }}>
                Share your ADU plans — we'll give you a free, written framing estimate within 24 hours. No commitment required.
              </p>
              <div style={{ padding: '18px', borderRadius: '14px', background: 'rgba(255,183,3,0.07)', border: '1px solid rgba(255,183,3,0.18)', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Shield size={14} style={{ color: '#ffb703', flexShrink: 0 }} />
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', fontWeight: '600' }}>
                    CA Lic. #1106454 · Completed ADU projects in Milpitas · Mon–Sat 7am–6pm
                  </span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                {[
                  'Free estimate for detached, attached & garage conversion ADUs',
                  'Permit coordination with San Jose or Milpitas included',
                  '100% framing inspection pass rate',
                  'Competitive pricing — same-day response',
                ].map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                    <CheckCircle2 size={14} style={{ color: '#ffb703', flexShrink: 0 }} />
                    <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)' }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: '32px', borderRadius: '24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <ServiceInlineForm service="Bay Area ADU framing" />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .hero-two-col, .two-col { grid-template-columns: 1fr !important; }
          .two-col-grid { grid-template-columns: 1fr !important; }
          .three-col { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .three-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
