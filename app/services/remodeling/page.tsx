import type { Metadata } from 'next';
import Link from 'next/link';
import { Wrench, CheckCircle2, Phone, Shield } from 'lucide-react';
import ServiceTimeline from '@/components/services/ServiceTimeline';
import ServiceInlineForm from '@/components/services/ServiceInlineForm';
import LicensedComparison from '@/components/services/LicensedComparison';
import CitiesSection from '@/components/services/CitiesSection';

export const metadata: Metadata = {
  title: 'Home Remodeling Contractor | C Hernandez Construction – Ceres & Modesto CA',
  description: 'Licensed remodeling contractor (Lic. #1106454) in Ceres and Modesto, CA. Kitchen remodels, bathroom renovations, open concept conversions. Call (209) 241-3765.',
};

const remodelingTypes = [
  { title: 'Kitchen Remodels', desc: 'Full gut and rebuild or targeted updates — cabinet framing changes, drywall, tile backsplash and finish work to transform your kitchen.' },
  { title: 'Bathroom Renovations', desc: 'Shower surrounds, tub replacements, tile, vanity framing, drywall and plumbing rough-in coordination for a complete bathroom overhaul.' },
  { title: 'Open Concept Conversions', desc: 'Remove load-bearing walls with proper engineering, install beams and posts, and open your floor plan to feel bigger and brighter.' },
  { title: 'Basement & Garage Conversions', desc: 'Convert underutilized spaces into permitted living areas — home offices, gyms, or guest rooms — properly framed and finished.' },
  { title: 'Interior Wall Reconfigurations', desc: 'Move walls, add closets, create new doorways or remove old ones. We handle structural and non-structural wall changes.' },
  { title: 'Full Interior Remodels', desc: 'Whole-home interior renovations combining framing, drywall, trim, and finish work across multiple rooms in one coordinated project.' },
];

const timelineSteps = [
  { icon: '📋', title: 'Free Walkthrough & Estimate', desc: 'We tour your space, discuss your goals, and provide a detailed written estimate before any work starts — no cost.' },
  { icon: '📐', title: 'Design & Permit Review', desc: 'We identify which changes require permits (structural work always does) and help coordinate submissions with your city.' },
  { icon: '🔨', title: 'Demo & Protection', desc: 'Careful demolition protecting adjacent walls, flooring and utilities. We protect your home while we work in it.' },
  { icon: '🏗️', title: 'Framing & Structural Work', desc: 'New walls, headers, beams, blocking — all framed to California code and ready for rough inspection.' },
  { icon: '🪚', title: 'Drywall, Tile & Finish', desc: 'Drywall hang and texture, tile installation, interior trim and paint to complete the space correctly.' },
  { icon: '✅', title: 'Final Inspection & Walkthrough', desc: 'We complete the punch list, pass the final city inspection, and walk through the finished space with you.' },
];

const faqs = [
  { q: 'Do you handle permits for remodeling projects?', a: 'Yes. Structural changes — including removing walls, adding new openings, or modifying load-bearing elements — require permits. We coordinate with your local building department throughout.' },
  { q: 'Can you remove a load-bearing wall?', a: 'Yes. We work with structural engineers when required, specify the correct beam and post sizes, and frame the opening safely. We\'ve done this many times across the Central Valley.' },
  { q: 'Do you do kitchen and bathroom remodels?', a: 'Yes — both. We handle framing, drywall, tile and coordinate plumbers and electricians as needed for complete kitchen and bathroom renovations.' },
  { q: 'How long does a typical remodel take?', a: 'A bathroom remodel typically takes 1–3 weeks. A kitchen remodel runs 3–6 weeks. Whole-home or structural remodels vary by scope — we provide a specific timeline in your estimate.' },
  { q: 'Can you match existing wall texture and trim?', a: 'Yes. We texture-match carefully when patching into existing walls and source matching trim profiles when possible in remodels.' },
  { q: 'What areas do you serve for remodeling?', a: 'Ceres, Modesto, Turlock, Salida, Riverbank, Patterson and surrounding Central Valley communities.' },
];

export default function RemodelingPage() {
  return (
    <>
      <section style={{ paddingTop: '140px', paddingBottom: '80px', background: 'linear-gradient(145deg, #040a16, #0a1428)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '15px', background: 'rgba(255,183,3,0.12)', border: '1px solid rgba(255,183,3,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffb703' }}>
              <Wrench size={26} />
            </div>
            <div className="section-chip" style={{ margin: 0 }}>Remodeling</div>
          </div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: '900', color: '#fff', letterSpacing: '-0.04em', marginBottom: '20px', maxWidth: '720px' }}>
            Home Remodeling in <span className="text-gradient">Ceres & Modesto</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
            Licensed remodeling contractor for kitchen remodels, bathroom renovations, open concept conversions, and structural interior changes — permitted and built to last.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Request a Remodeling Estimate →</Link>
            <a href="tel:+12092413765" className="btn-secondary"><Phone size={16} />(209) 241-3765</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '24px' }}>
            <CheckCircle2 size={15} style={{ color: '#ffb703' }} />
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>CA License #1106454 · Permits Handled · Free Estimates</span>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '40px' }}>
            Remodeling Services We <span className="text-gradient">Provide</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="three-col">
            {remodelingTypes.map(({ title, desc }) => (
              <div key={title} style={{ padding: '26px', borderRadius: '18px', background: 'rgba(255,183,3,0.05)', border: '1px solid rgba(255,183,3,0.15)' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#fff', marginBottom: '10px', fontFamily: 'Poppins, sans-serif' }}>{title}</h3>
                <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#0b1220' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }} className="two-col">
            <div>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '12px' }}>
                Our <span className="text-gradient">Remodeling Process</span>
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '32px', lineHeight: 1.7 }}>
                From the first walkthrough to the final inspection — a clear, predictable process so your remodel stays on track.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 18px', borderRadius: '12px', background: 'rgba(255,183,3,0.07)', border: '1px solid rgba(255,183,3,0.2)' }}>
                <Shield size={16} style={{ color: '#ffb703', flexShrink: 0 }} />
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', fontWeight: '600' }}>Licensed General Contractor · Lic. #1106454 · Fully Insured</span>
              </div>
            </div>
            <ServiceTimeline steps={timelineSteps} />
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }} className="two-col">
            <div>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
                Get Your Free <span className="text-gradient">Remodeling Estimate</span>
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px', lineHeight: 1.7 }}>
                Tell us about your project. We'll respond the same day.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {['Written estimate within 24 hours', 'Licensed & insured crew', 'Structural changes permitted', 'No commitment required'].map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={16} style={{ color: '#ffb703', flexShrink: 0 }} />
                    <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)' }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: '32px', borderRadius: '20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <ServiceInlineForm service="home remodeling" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#0b1220' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '40px' }}>
            Remodeling <span className="text-gradient">FAQ</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map(({ q, a }) => (
              <div key={q} style={{ padding: '22px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>{q}</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '12px', textAlign: 'center' }}>
            Licensed vs <span className="text-gradient">Unlicensed Remodeling</span>
          </h2>
          <p style={{ textAlign: 'center', fontSize: '15px', color: 'rgba(255,255,255,0.5)', maxWidth: '560px', margin: '0 auto 40px' }}>
            Structural remodeling done without a licensed contractor can fail inspection and create liability when you sell your home.
          </p>
          <LicensedComparison />
        </div>
      </section>

      <CitiesSection service="Home Remodeling" />

      <section style={{ background: '#080e1d', padding: '64px 0', borderTop: '1px solid rgba(255,183,3,0.1)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '14px' }}>
            Ready to <span className="text-gradient">Remodel?</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '28px' }}>Mon–Sat 7am–6pm · Free estimates · Licensed & insured</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Request a Remodeling Estimate →</Link>
            <a href="tel:+12092413765" className="btn-secondary"><Phone size={16} />(209) 241-3765</a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) { .three-col { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 640px) { .two-col, .three-col { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
