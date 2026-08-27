import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Shield, CheckCircle2, Star, MapPin, ChevronRight, Building2, Home, Ruler, Clock, DollarSign } from 'lucide-react';
import ServiceInlineForm from '@/components/services/ServiceInlineForm';
import BayAreaHero from '@/components/BayAreaHero';
import PortfolioPreview from '@/components/sections/PortfolioPreview';

export const metadata: Metadata = {
  title: 'Framing Contractor Milpitas CA — ADU & Residential Framing | C Hernandez Construction',
  description: 'Licensed framing contractor in Milpitas, CA (Lic. #1106454). ADU framing, room additions, and new home construction. Proven track record in Milpitas. Call (209) 241-3765.',
  keywords: 'framing contractor Milpitas CA, ADU framing Milpitas, residential framing Milpitas, structural framing contractor Milpitas, room addition framing Milpitas, licensed contractor Milpitas California',
  alternates: {
    canonical: 'https://www.chernandezconstructionchg.com/bay-area-framing/milpitas',
  },
  openGraph: {
    title: 'Framing Contractor in Milpitas, CA | C Hernandez Construction',
    description: 'Licensed framing contractor with proven ADU experience in Milpitas. Lic. #1106454 · Free estimates · (209) 241-3765.',
    url: 'https://www.chernandezconstructionchg.com/bay-area-framing/milpitas',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'C Hernandez Construction — Milpitas Framing',
  legalName: 'C Hernandez Construction',
  telephone: '+12092413765',
  url: 'https://www.chernandezconstructionchg.com/bay-area-framing/milpitas',
  description: 'Licensed framing contractor serving Milpitas, CA. ADU framing, residential framing, room additions. CA Lic. #1106454. Proven track record with completed Milpitas ADU projects.',
  priceRange: '$$',
  address: { '@type': 'PostalAddress', addressLocality: 'Ceres', addressRegion: 'CA', postalCode: '95307', addressCountry: 'US' },
  areaServed: {
    '@type': 'City',
    name: 'Milpitas',
    sameAs: 'https://en.wikipedia.org/wiki/Milpitas,_California',
    containedInPlace: { '@type': 'State', name: 'California' },
  },
  review: {
    '@type': 'Review',
    author: { '@type': 'Person', name: 'Daniel Sanchez' },
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    reviewBody: 'Great experience framing that ADU in Milpitas. ADU construction in the Bay Area is something we really enjoy — every project is unique and we love the challenge.',
  },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '9', bestRating: '5' },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'license',
    name: 'California Contractor License',
    identifier: '1106454',
  },
};

const BASE_IMG = 'https://umyhcsrxwdogvbxgipnx.supabase.co/storage/v1/object/public/site-images/';

export default function MilpitasFramingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <BayAreaHero
        badge="Milpitas, CA"
        badgeIcon={<MapPin size={11} />}
        title={<>Framing Contractor <br /><span className="text-gradient">Milpitas, CA</span></>}
        description="We have a proven track record in Milpitas — including completed ADU framing projects. CA Lic. #1106454, fully insured, and inspection-ready every time."
        bullets={[
          'Completed ADU projects in Milpitas — verified review',
          'City of Milpitas permits & inspections',
          'Free written estimate — responds same day',
          'Licensed: CA Lic. #1106454 · Fully insured',
        ]}
        image={`${BASE_IMG}daniel%20sanchez/Captura%20de%20pantalla%202026-07-30%20a%20la%28s%29%201.39.07%20p.m..png`}
        imageAlt="ADU framing project completed in Milpitas, CA — C Hernandez Construction"
        breadcrumb={{ label: 'Milpitas' }}
      />

            {/* ── FEATURED REVIEW ── */}
      <section style={{ background: '#0a1526', padding: '60px 0', borderBottom: '1px solid rgba(255,183,3,0.1)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'stretch' }} className="two-col">
            <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,183,3,0.2)', position: 'relative', minHeight: '240px' }}>
              <Image
                src={`${BASE_IMG}daniel%20sanchez/Captura%20de%20pantalla%202026-07-30%20a%20la%28s%29%201.39.07%20p.m..png`}
                alt="Milpitas ADU framing project"
                fill
                style={{ objectFit: 'cover' }}
                sizes="450px"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,26,46,0.8) 0%, transparent 50%)' }} />
              <span style={{ position: 'absolute', bottom: '14px', left: '14px', padding: '4px 12px', borderRadius: '999px', background: 'rgba(0,0,0,0.75)', border: '1px solid rgba(255,183,3,0.4)', fontSize: '11px', fontWeight: '800', color: '#ffb703' }}>
                ADU Framing · Milpitas
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '4px 0' }}>
              <div style={{ display: 'flex', gap: '2px', marginBottom: '16px' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#ffb703" style={{ color: '#ffb703' }} />)}
              </div>
              <blockquote style={{ fontSize: '15px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '20px' }}>
                "Great experience framing that ADU in Milpitas. ADU construction in the Bay Area is something we really enjoy — every project is unique and we love the challenge. Always a pleasure working with professional contractors like Daniel."
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(255,183,3,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', fontWeight: '800', color: '#ffb703', flexShrink: 0 }}>D</div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '800', color: '#fff' }}>Daniel Sanchez</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Milpitas, CA · ADU Bay Area · Google Review ✓</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES + INFO ── */}
      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'start' }} className="two-col">
            <div>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 2.8vw, 2.3rem)', fontWeight: '800', color: '#fff', marginBottom: '12px' }}>
                Framing Services in <span className="text-gradient">Milpitas</span>
              </h2>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: '28px' }}>
                Milpitas is one of the Bay Area's most active ADU markets. With dense Silicon Valley lots and strong homeowner demand, we bring the right crew and the right process.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { title: 'ADU Framing — Our Specialty', desc: 'We\'ve framed ADUs in Milpitas and know the City\'s requirements. Detached, attached, or garage conversion — we handle it.' },
                  { title: 'New Home Structural Framing', desc: 'Complete framing packages for new residential construction — walls, floors, and roof systems to code.' },
                  { title: 'Room Additions', desc: 'Expand your Milpitas home with a properly permitted and framed addition tied into existing structure.' },
                  { title: 'Garage Conversions', desc: 'Convert your Milpitas garage to livable space. Framing, insulation-ready openings, and city-compliant ceiling heights.' },
                ].map(({ title, desc }) => (
                  <div key={title} style={{ padding: '20px', borderRadius: '16px', background: 'rgba(255,183,3,0.05)', border: '1px solid rgba(255,183,3,0.12)' }}>
                    <h3 style={{ fontSize: '14px', fontWeight: '800', color: '#fff', marginBottom: '7px', fontFamily: 'Poppins, sans-serif' }}>{title}</h3>
                    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div style={{ padding: '28px', borderRadius: '22px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', marginBottom: '20px' }}>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '800', fontSize: '16px', color: '#fff', marginBottom: '18px' }}>Milpitas Framing — Key Info</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
                  {[
                    { IconEl: <Building2 size={16} style={{ color: '#ffb703' }} />, bg: 'rgba(255,183,3,0.12)', border: 'rgba(255,183,3,0.25)', label: 'Permit Authority', val: 'City of Milpitas Building Dept.' },
                    { IconEl: <Home size={16} style={{ color: '#63b3ed' }} />, bg: 'rgba(99,179,237,0.12)', border: 'rgba(99,179,237,0.25)', label: 'Common Project', val: 'ADU framing · Room additions' },
                    { IconEl: <Ruler size={16} style={{ color: '#9ae6b4' }} />, bg: 'rgba(154,230,180,0.12)', border: 'rgba(154,230,180,0.25)', label: 'ADU Ordinance', val: 'Per Santa Clara County rules' },
                    { IconEl: <Clock size={16} style={{ color: '#f6ad55' }} />, bg: 'rgba(246,173,85,0.12)', border: 'rgba(246,173,85,0.25)', label: 'Avg. ADU Framing', val: '2–4 weeks start to inspection' },
                    { IconEl: <DollarSign size={16} style={{ color: '#68d391' }} />, bg: 'rgba(104,211,145,0.12)', border: 'rgba(104,211,145,0.25)', label: 'Our Estimates', val: 'Free · Written · No obligation' },
                    { IconEl: <Shield size={16} style={{ color: '#ffb703' }} />, bg: 'rgba(255,183,3,0.12)', border: 'rgba(255,183,3,0.25)', label: 'License', val: 'CA Lic. #1106454 · Fully insured' },
                  ].map(({ IconEl, bg, border, label, val }) => (
                    <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingBottom: '13px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: bg, border: `1px solid ${border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        {IconEl}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '11px', fontWeight: '700', color: '#ffb703', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{label}</div>
                        <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', marginTop: '2px' }}>{val}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Internal link cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link href="/bay-area-framing/san-jose" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 18px', borderRadius: '14px', background: 'rgba(255,183,3,0.06)', border: '1px solid rgba(255,183,3,0.15)', textDecoration: 'none' }}>
                  <span style={{ fontSize: '14px', fontWeight: '700', color: '#fff' }}>Also serving San Jose →</span>
                  <ChevronRight size={16} style={{ color: '#ffb703' }} />
                </Link>
                <Link href="/bay-area-framing/adu" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 18px', borderRadius: '14px', background: 'rgba(255,183,3,0.06)', border: '1px solid rgba(255,183,3,0.15)', textDecoration: 'none' }}>
                  <span style={{ fontSize: '14px', fontWeight: '700', color: '#fff' }}>ADU framing Bay Area →</span>
                  <ChevronRight size={16} style={{ color: '#ffb703' }} />
                </Link>
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
              <div className="section-chip"><Phone size={11} /> Free Estimate — Milpitas</div>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 2.8vw, 2.3rem)', fontWeight: '800', color: '#fff', marginBottom: '14px' }}>
                Start Your <span className="text-gradient">Milpitas Framing Project</span>
              </h2>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: '24px' }}>
                We've already completed ADU framing in Milpitas. Tell us about your project and we'll send you a free, written estimate the same day.
              </p>
              <div style={{ padding: '20px', borderRadius: '16px', background: 'rgba(255,183,3,0.06)', border: '1px solid rgba(255,183,3,0.2)', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Shield size={15} style={{ color: '#ffb703', flexShrink: 0 }} />
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', fontWeight: '600' }}>Licensed General Contractor · CA Lic. #1106454 · Mon–Sat 7am–6pm</span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a href="tel:+12092413765" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '13px 20px', borderRadius: '999px', background: 'rgba(255,183,3,0.1)', border: '1px solid rgba(255,183,3,0.3)', color: '#ffb703', fontWeight: '700', fontSize: '14px', textDecoration: 'none' }}>
                  <Phone size={15} /> (209) 241-3765
                </a>
                <a href="https://wa.link/roppnh" target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '13px 20px', borderRadius: '999px', background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.3)', color: '#25d366', fontWeight: '700', fontSize: '14px', textDecoration: 'none' }}>
                  WhatsApp Chat
                </a>
              </div>
            </div>
            <div style={{ padding: '32px', borderRadius: '24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <ServiceInlineForm service="Milpitas framing" />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .hero-two-col, .two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
