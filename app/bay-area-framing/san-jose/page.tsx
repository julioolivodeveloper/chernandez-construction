import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Shield, CheckCircle2, Star, MapPin, ChevronRight, Building2, FileText, Ruler, Clock, DollarSign } from 'lucide-react';
import ServiceInlineForm from '@/components/services/ServiceInlineForm';
import BayAreaHero from '@/components/BayAreaHero';
import PortfolioPreview from '@/components/sections/PortfolioPreview';

export const metadata: Metadata = {
  title: 'Framing Contractor San Jose CA — Residential & ADU | C Hernandez Construction',
  description: 'Licensed framing contractor in San Jose, CA (Lic. #1106454). Structural framing for new homes, ADUs and room additions. Serving Willow Glen, Almaden, Evergreen & all of San Jose. Call (209) 241-3765.',
  keywords: 'framing contractor San Jose CA, residential framing San Jose, ADU framing San Jose, structural framing contractor San Jose, room addition framing San Jose, licensed contractor San Jose California',
  alternates: {
    canonical: 'https://www.chernandezconstructionchg.com/bay-area-framing/san-jose',
  },
  openGraph: {
    title: 'Framing Contractor in San Jose, CA | C Hernandez Construction',
    description: 'Licensed framing contractor serving San Jose. Residential framing, ADUs, room additions. Lic. #1106454 · Free estimates.',
    url: 'https://www.chernandezconstructionchg.com/bay-area-framing/san-jose',
  },
};

const framingServices = [
  { title: 'New Home Framing', desc: 'Complete structural framing for new residential construction in San Jose — floor systems, walls, and roof framing built to California code.' },
  { title: 'ADU Framing San Jose', desc: 'San Jose\'s ADU ordinance is homeowner-friendly. We frame detached ADUs, garage conversions, and attached ADUs that meet City of San Jose requirements.' },
  { title: 'Room Addition Framing', desc: 'Expand your San Jose home properly. We tie new addition framing into your existing structure for a seamless, code-compliant result.' },
  { title: 'Second Story Additions', desc: 'Adding a second floor in San Jose requires structural engineering and precise framing. We work with your engineer to get it right.' },
  { title: 'Garage Conversion Framing', desc: 'Convert your garage to living space with new walls, proper ceiling height, and window openings — all framed for San Jose inspections.' },
  { title: 'Exterior Wall Framing', desc: 'Stand-alone framing for new exterior walls, load-bearing modifications, or shear wall installation in San Jose homes.' },
];

const sanJoseNeighborhoods = [
  'Willow Glen', 'Almaden Valley', 'Evergreen', 'Berryessa', 'Silver Creek',
  'Rose Garden', 'Naglee Park', 'East San Jose', 'South San Jose', 'Downtown San Jose',
  'Cambrian', 'Blossom Hill', 'Alum Rock', 'West San Jose',
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'C Hernandez Construction — San Jose Framing',
  legalName: 'C Hernandez Construction',
  telephone: '+12092413765',
  url: 'https://www.chernandezconstructionchg.com/bay-area-framing/san-jose',
  description: 'Licensed framing contractor serving San Jose, CA. Residential framing, ADUs and room additions. CA Lic. #1106454.',
  priceRange: '$$',
  address: { '@type': 'PostalAddress', addressLocality: 'Ceres', addressRegion: 'CA', postalCode: '95307', addressCountry: 'US' },
  areaServed: {
    '@type': 'City',
    name: 'San Jose',
    sameAs: 'https://en.wikipedia.org/wiki/San_Jose,_California',
    containedInPlace: { '@type': 'State', name: 'California' },
  },
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
};

const BASE_IMG = 'https://umyhcsrxwdogvbxgipnx.supabase.co/storage/v1/object/public/site-images/';

export default function SanJoseFramingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <BayAreaHero
        badge="San Jose, CA"
        badgeIcon={<MapPin size={11} />}
        title={<>Framing Contractor <br /><span className="text-gradient">San Jose, CA</span></>}
        description="Licensed general contractor (Lic. #1106454) providing residential framing services throughout San Jose — from Willow Glen to Evergreen, Almaden to Berryessa."
        bullets={[
          'City of San Jose permits & inspections',
          'ADU framing specialists',
          'Free written estimates — same day',
          'Fully licensed & insured · CA Lic. #1106454',
        ]}
        image={`${BASE_IMG}framing1.jpg`}
        imageAlt="Residential framing contractor San Jose CA — C Hernandez Construction"
        breadcrumb={{ label: 'San Jose' }}
      />

            {/* ── SERVICES ── */}
      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '12px' }}>
            Framing Services in <span className="text-gradient">San Jose</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '40px', maxWidth: '560px' }}>
            Every San Jose framing project is permitted, inspected, and built to exceed California Building Code requirements.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="three-col">
            {framingServices.map(({ title, desc }) => (
              <div key={title} style={{ padding: '24px', borderRadius: '18px', background: 'rgba(255,183,3,0.05)', border: '1px solid rgba(255,183,3,0.13)' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#fff', marginBottom: '9px', fontFamily: 'Poppins, sans-serif' }}>{title}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SAN JOSE NEIGHBORHOODS ── */}
      <section className="section-pad" style={{ background: '#0b1220' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'start' }} className="two-col">
            <div>
              <div className="section-chip"><MapPin size={11} /> Neighborhoods</div>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 2.8vw, 2.3rem)', fontWeight: '800', color: '#fff', marginBottom: '14px' }}>
                We Frame Across All <span className="text-gradient">San Jose Neighborhoods</span>
              </h2>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: '28px' }}>
                Whether you're in Willow Glen, Almaden Valley, or East San Jose — we come to you. All San Jose framing projects include permit coordination with the City of San Jose Building Department.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {sanJoseNeighborhoods.map(n => (
                  <span key={n} style={{ padding: '6px 14px', borderRadius: '999px', background: 'rgba(255,183,3,0.08)', border: '1px solid rgba(255,183,3,0.2)', fontSize: '12.5px', color: 'rgba(255,255,255,0.7)', fontWeight: '600' }}>
                    {n}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ padding: '28px', borderRadius: '22px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '800', fontSize: '17px', color: '#fff', marginBottom: '18px' }}>
                San Jose Framing — Quick Stats
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { IconEl: <Building2 size={16} style={{ color: '#ffb703' }} />, bg: 'rgba(255,183,3,0.12)', border: 'rgba(255,183,3,0.25)', title: 'Permitting Authority', val: 'City of San Jose Building Division' },
                  { IconEl: <FileText size={16} style={{ color: '#63b3ed' }} />, bg: 'rgba(99,179,237,0.12)', border: 'rgba(99,179,237,0.25)', title: 'ADU Allowance', val: 'Per SB9 + local ordinance' },
                  { IconEl: <Ruler size={16} style={{ color: '#9ae6b4' }} />, bg: 'rgba(154,230,180,0.12)', border: 'rgba(154,230,180,0.25)', title: 'Typical ADU Size', val: '400–1,200 sq ft' },
                  { IconEl: <Clock size={16} style={{ color: '#f6ad55' }} />, bg: 'rgba(246,173,85,0.12)', border: 'rgba(246,173,85,0.25)', title: 'Framing Timeline', val: '1–5 weeks by project scope' },
                  { IconEl: <DollarSign size={16} style={{ color: '#68d391' }} />, bg: 'rgba(104,211,145,0.12)', border: 'rgba(104,211,145,0.25)', title: 'Estimates', val: 'Free · Written · Within 24 hrs' },
                  { IconEl: <Shield size={16} style={{ color: '#ffb703' }} />, bg: 'rgba(255,183,3,0.12)', border: 'rgba(255,183,3,0.25)', title: 'Our License', val: 'CA Lic. #1106454 — all of CA' },
                ].map(({ IconEl, bg, border, title, val }) => (
                  <div key={title} style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingBottom: '14px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: bg, border: `1px solid ${border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {IconEl}
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: '700', color: '#ffb703', marginBottom: '2px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{title}</div>
                      <div style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.65)' }}>{val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEW HIGHLIGHT ── */}
      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <div className="section-chip" style={{ margin: '0 auto 28px' }}>
            <Star size={11} /> Client Testimonial
          </div>
          <div style={{ padding: '36px', borderRadius: '24px', background: 'rgba(255,183,3,0.06)', border: '1px solid rgba(255,183,3,0.2)' }}>
            <div style={{ display: 'flex', gap: '3px', justifyContent: 'center', marginBottom: '18px' }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#ffb703" style={{ color: '#ffb703' }} />)}
            </div>
            <blockquote style={{ fontSize: '17px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '22px' }}>
              "From start to finish it was a great experience. We looked at the plans and got the work done very efficiently — passed city inspections with no problem on the first try, which allowed the rest of the project to move forward. Great price too."
            </blockquote>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,183,3,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: '800', color: '#ffb703' }}>J</div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '14px', fontWeight: '800', color: '#fff' }}>Jose Carmona</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>Bay Area Project · Google Review ✓</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ESTIMATE FORM ── */}
      {/* ── GALLERY ── */}
      <PortfolioPreview />

      <section id="estimate" className="section-pad" style={{ background: '#0b1220' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }} className="two-col">
            <div>
              <div className="section-chip"><Phone size={11} /> Free Estimate — San Jose</div>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 2.8vw, 2.3rem)', fontWeight: '800', color: '#fff', marginBottom: '14px' }}>
                Request Your <span className="text-gradient">San Jose Framing Quote</span>
              </h2>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: '24px' }}>
                Tell us about your San Jose project — new home, ADU, or room addition. We respond the same day with a clear, no-obligation estimate.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Free estimate — no commitment', 'Licensed: CA Lic. #1106454', 'San Jose permits included', 'Mon–Sat 7am–6pm availability'].map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                    <CheckCircle2 size={14} style={{ color: '#ffb703', flexShrink: 0 }} />
                    <span style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.65)' }}>{t}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link href="/bay-area-framing/milpitas" className="bay-muted-link" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.45)', fontSize: '13px', textDecoration: 'none' }}>
                  <ChevronRight size={13} /> Also serving Milpitas →
                </Link>
                <Link href="/bay-area-framing/adu" className="bay-muted-link" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.45)', fontSize: '13px', textDecoration: 'none' }}>
                  <ChevronRight size={13} /> ADU framing Bay Area →
                </Link>
              </div>
            </div>
            <div style={{ padding: '32px', borderRadius: '24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <ServiceInlineForm service="San Jose framing" />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .bay-muted-link:hover { color: #ffb703 !important; }
        @media (max-width: 860px) {
          .hero-two-col, .two-col { grid-template-columns: 1fr !important; }
          .three-col { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .three-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
