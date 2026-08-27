import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Shield, CheckCircle2, MapPin, ChevronRight, Building2 } from 'lucide-react';
import ServiceInlineForm from '@/components/services/ServiceInlineForm';
import BayAreaHero from '@/components/BayAreaHero';
import PortfolioPreview from '@/components/sections/PortfolioPreview';

export const metadata: Metadata = {
  title: 'Room Addition Framing Bay Area — San Jose & Milpitas | C Hernandez Construction',
  description: 'Licensed room addition framing contractor in San Jose, Milpitas & Bay Area (Lic. #1106454). Expand your home with a properly framed addition. Free estimates — call (209) 241-3765.',
  keywords: 'room addition framing San Jose, room addition contractor Bay Area, home addition framing Milpitas, addition framing Bay Area, home expansion contractor San Jose CA',
  alternates: {
    canonical: 'https://www.chernandezconstructionchg.com/bay-area-framing/room-additions',
  },
  openGraph: {
    title: 'Room Addition Framing Bay Area — San Jose & Milpitas | C Hernandez Construction',
    description: 'Licensed room addition framing contractor for Bay Area projects. Lic. #1106454 · Free estimates.',
    url: 'https://www.chernandezconstructionchg.com/bay-area-framing/room-additions',
  },
};

const BASE_IMG = 'https://umyhcsrxwdogvbxgipnx.supabase.co/storage/v1/object/public/site-images/';

const additionTypes = [
  { title: 'Family Room Addition', desc: 'Add living space for a growing family. We frame single-story additions that tie into your existing home structure seamlessly.' },
  { title: 'Master Suite Addition', desc: 'A private master bedroom and bathroom addition. Proper framing means sound isolation, correct ceiling heights, and code compliance.' },
  { title: 'Second Story Addition', desc: 'Adding a floor to your Bay Area home requires structural engineering. We work with your engineer and frame the second story right.' },
  { title: 'In-Law Suite', desc: 'A semi-independent suite addition for family members. Proper framing includes soundproofing-ready wall assemblies and separate entry.' },
  { title: 'Home Office Addition', desc: 'Dedicated home office space added to your footprint. We frame it to match your existing home\'s design and structure.' },
  { title: 'Sunroom / Flex Space', desc: 'Light-filled additions with large window openings and proper structural headers. Engineered to span the Bay Area\'s seismic requirements.' },
];

const faqs = [
  { q: 'Do you frame room additions in San Jose and Milpitas?', a: 'Yes — we regularly travel to San Jose, Milpitas and the greater Bay Area for room addition projects. Same licensed crew, same quality.' },
  { q: 'Does a room addition require a permit in San Jose?', a: 'Yes. All room additions in San Jose require a building permit from the City of San Jose Building Division. We coordinate the permit process for you.' },
  { q: 'How long does a room addition take to frame?', a: 'A typical room addition frames in 1–2 weeks. Larger additions or second-story projects may take 2–4 weeks. We give you a clear timeline with your estimate.' },
  { q: 'Can you tie a new addition into my existing home framing?', a: 'Yes — that\'s what sets us apart. We properly tie new framing into existing load paths and wall systems. No shortcuts, no guessing.' },
  { q: 'Do you do second-story additions in the Bay Area?', a: 'Yes. Second-story additions require structural engineering and precise framing. We coordinate with your structural engineer throughout the process.' },
];

export default function RoomAdditionsBayAreaPage() {
  return (
    <>
      <BayAreaHero
        badge="Room Addition Specialists"
        badgeIcon={<Building2 size={11} />}
        title={<>Room Addition Framing <br /><span className="text-gradient">Bay Area</span></>}
        description="Expand your San Jose or Milpitas home with a properly framed addition. We tie new framing into your existing structure — permitted, inspected, and built to California code."
        bullets={[
          'Tied into existing structure — no shortcuts',
          'City of San Jose & Milpitas permits included',
          'Second-story additions with engineer coordination',
          'Licensed: CA Lic. #1106454 · Fully insured',
        ]}
        image={`${BASE_IMG}framing88484.jpg`}
        imageAlt="Room addition framing Bay Area — C Hernandez Construction"
        breadcrumb={{ label: 'Room Additions' }}
      />

            {/* ── ADDITION TYPES ── */}
      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '12px' }}>
            Room Addition Types We <span className="text-gradient">Frame in the Bay Area</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '40px', maxWidth: '560px' }}>
            Every addition is different. We've framed them all — and we know the Bay Area building requirements for each.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="three-col">
            {additionTypes.map(({ title, desc }) => (
              <div key={title} style={{ padding: '24px', borderRadius: '18px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,183,3,0.12)' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#fff', marginBottom: '9px', fontFamily: 'Poppins, sans-serif' }}>{title}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-pad" style={{ background: '#0b1220' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="section-chip" style={{ margin: '0 auto 20px' }}>FAQ</div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', letterSpacing: '-0.03em' }}>
              Room Addition <span className="text-gradient">Questions</span>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
            {faqs.map(({ q, a }) => (
              <div key={q} style={{ padding: '20px 22px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#fff', marginBottom: '7px', fontFamily: 'Poppins, sans-serif' }}>{q}</h3>
                <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.53)', lineHeight: 1.7 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED PAGES ── */}
      <section style={{ background: '#080e1d', padding: '48px 0', borderTop: '1px solid rgba(255,183,3,0.08)' }}>
        <div className="container">
          <p style={{ fontSize: '12px', fontWeight: '800', letterSpacing: '0.15em', color: '#ffb703', textTransform: 'uppercase', marginBottom: '20px', textAlign: 'center' }}>
            Explore More Bay Area Services
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/bay-area-framing/san-jose" style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '12px 22px', borderRadius: '999px', background: 'rgba(255,183,3,0.08)', border: '1px solid rgba(255,183,3,0.25)', color: '#ffb703', fontWeight: '700', fontSize: '14px', textDecoration: 'none' }}>
              San Jose Framing <ChevronRight size={14} />
            </Link>
            <Link href="/bay-area-framing/milpitas" style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '12px 22px', borderRadius: '999px', background: 'rgba(255,183,3,0.08)', border: '1px solid rgba(255,183,3,0.25)', color: '#ffb703', fontWeight: '700', fontSize: '14px', textDecoration: 'none' }}>
              Milpitas Framing <ChevronRight size={14} />
            </Link>
            <Link href="/bay-area-framing/adu" style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '12px 22px', borderRadius: '999px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.7)', fontWeight: '600', fontSize: '14px', textDecoration: 'none' }}>
              ADU Bay Area <ChevronRight size={14} />
            </Link>
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
              <div className="section-chip"><Phone size={11} /> Free Estimate — Additions</div>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 2.8vw, 2.3rem)', fontWeight: '800', color: '#fff', marginBottom: '14px' }}>
                Get Your <span className="text-gradient">Bay Area Addition Estimate</span>
              </h2>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: '24px' }}>
                Tell us about your San Jose or Milpitas room addition. We'll respond same day with a free written estimate.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '28px' }}>
                {['Free estimate — no commitment', 'Licensed: CA Lic. #1106454', 'Bay Area permits included', 'Mon–Sat 7am–6pm'].map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                    <CheckCircle2 size={14} style={{ color: '#ffb703', flexShrink: 0 }} />
                    <span style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.65)' }}>{t}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['Also serve San Jose →', 'Also serve Milpitas →'].map((label, i) => (
                  <Link key={label} href={i === 0 ? '/bay-area-framing/san-jose' : '/bay-area-framing/milpitas'}
                    className="bay-muted-link"
                    style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'rgba(255,255,255,0.4)', fontSize: '13px', textDecoration: 'none' }}>
                    <ChevronRight size={12} /> {label}
                  </Link>
                ))}
              </div>
            </div>
            <div style={{ padding: '32px', borderRadius: '24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <ServiceInlineForm service="Bay Area room addition framing" />
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
