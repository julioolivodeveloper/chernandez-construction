import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Phone } from 'lucide-react';
import ServiceTimeline from '@/components/services/ServiceTimeline';
import ServiceInlineForm from '@/components/services/ServiceInlineForm';
import LicensedComparison from '@/components/services/LicensedComparison';
import CitiesSection from '@/components/services/CitiesSection';

export const metadata: Metadata = {
  title: 'Licensed General Contractor | C Hernandez Construction – Ceres & Modesto CA',
  description: 'C Hernandez Construction — Licensed General Contractor (Lic. #1106454) in Ceres, CA. Residential construction management, framing, ADUs and more in the Central Valley. (209) 241-3765.',
};

const gcServices = [
  { title: 'Permit Coordination', desc: 'We pull all required permits and work directly with local building departments throughout your project — so you don\'t have to.' },
  { title: 'Project Scheduling', desc: 'We sequence trades correctly and keep your project on schedule. No downtime waiting for the wrong sub to show up.' },
  { title: 'Structural Framing', desc: 'Our core trade — wall, floor, and roof framing for new homes, additions, and ADUs, built to California code.' },
  { title: 'Subcontractor Management', desc: 'When specialty work is needed, we coordinate licensed subs for electrical, plumbing and HVAC and remain accountable for the whole job.' },
  { title: 'Quality Control & Inspections', desc: 'We inspect work at every stage, coordinate city inspections, and don\'t move forward until each phase is right.' },
  { title: 'Clear Client Communication', desc: 'We keep you informed throughout — in both English and Spanish. You\'ll always know where your project stands.' },
];

const timelineSteps = [
  { icon: '📋', title: 'Initial Consultation', desc: 'We discuss your project goals, timeline, and budget. No cost, no pressure — just honest answers and a clear scope.' },
  { icon: '📐', title: 'Estimate & Scope of Work', desc: 'You receive a detailed written estimate covering labor, scheduling, and what trades we\'ll coordinate.' },
  { icon: '🏛️', title: 'Permits & Pre-Construction', desc: 'We pull permits, finalize the construction schedule, and mobilize materials before breaking ground.' },
  { icon: '🏗️', title: 'Construction Phase', desc: 'We manage framing, subcontractors, and daily site operations. You get weekly updates and an open line of communication.' },
  { icon: '🔍', title: 'Inspections', desc: 'We schedule and pass all required city and county inspections at every phase — framing, rough-in, and final.' },
  { icon: '✅', title: 'Final Walkthrough & Closeout', desc: 'We complete a punch-list walkthrough with you, address any items, and close out the permit. Your project is done right.' },
];

const faqs = [
  { q: 'What does a general contractor actually do?', a: 'A general contractor manages the entire construction project — permitting, scheduling, hiring and overseeing subcontractors, quality control, and inspections. We\'re accountable for the whole job, not just one trade.' },
  { q: 'Do you self-perform framing?', a: 'Yes. Framing is our core in-house trade. We self-perform all structural framing work and coordinate other trades as needed.' },
  { q: 'Can you manage my project if I already have plans?', a: 'Absolutely. If you have approved architectural plans, we can step in as general contractor and manage execution from start to finish.' },
  { q: 'Do you work with owner-builders?', a: 'Yes. We can work under an owner-builder permit or as the licensed GC depending on the scope and local requirements.' },
  { q: 'What types of residential projects do you manage?', a: 'New homes, room additions, ADUs, garage conversions, remodels and any project requiring coordinated licensed construction work in the Central Valley.' },
  { q: 'What areas do you serve as a general contractor?', a: 'Ceres, Modesto, Turlock, Salida, Riverbank, Patterson and the surrounding Stanislaus County area.' },
];

export default function GeneralContractorPage() {
  return (
    <>
      <section style={{ paddingTop: '140px', paddingBottom: '80px', background: 'linear-gradient(145deg, #040a16, #0a1428)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '15px', background: 'rgba(255,183,3,0.12)', border: '1px solid rgba(255,183,3,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffb703' }}>
              <Shield size={26} />
            </div>
            <div className="section-chip" style={{ margin: 0 }}>Lic. #1106454</div>
          </div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: '900', color: '#fff', letterSpacing: '-0.04em', marginBottom: '20px', maxWidth: '720px' }}>
            Licensed General Contractor in <span className="text-gradient">Ceres & Modesto</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
            C Hernandez Construction holds an active California General Contractor license. We manage residential construction from planning through final inspection — with permits, scheduling, and accountability on every job.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Request a Free Estimate →</Link>
            <a href="tel:+12092413765" className="btn-secondary"><Phone size={16} />(209) 241-3765</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '24px' }}>
            <CheckCircle2 size={15} style={{ color: '#ffb703' }} />
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>CA License #1106454 · Fully Insured · Free Estimates</span>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '40px' }}>
            What We Manage as <span className="text-gradient">General Contractor</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="three-col">
            {gcServices.map(({ title, desc }) => (
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
                How We <span className="text-gradient">Run Your Project</span>
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '32px', lineHeight: 1.7 }}>
                A transparent process from the first call to the final inspection pass.
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
                Get Your Free <span className="text-gradient">Project Estimate</span>
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px', lineHeight: 1.7 }}>
                Tell us about your project and we'll respond the same day.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {['Detailed written estimate', 'Licensed & insured crew', 'Permit coordination included', 'No commitment required'].map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={16} style={{ color: '#ffb703', flexShrink: 0 }} />
                    <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)' }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: '32px', borderRadius: '20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <ServiceInlineForm service="general contracting" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#0b1220' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '40px' }}>
            General Contractor <span className="text-gradient">FAQ</span>
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
            Licensed vs <span className="text-gradient">Unlicensed Contractors</span>
          </h2>
          <p style={{ textAlign: 'center', fontSize: '15px', color: 'rgba(255,255,255,0.5)', maxWidth: '560px', margin: '0 auto 40px' }}>
            Hiring an unlicensed contractor in California puts your property — and your wallet — at serious risk.
          </p>
          <LicensedComparison />
        </div>
      </section>

      <CitiesSection service="General Contracting" />

      <section style={{ background: '#080e1d', padding: '64px 0', borderTop: '1px solid rgba(255,183,3,0.1)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '14px' }}>
            Work With a <span className="text-gradient">Licensed Contractor</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '28px' }}>Mon–Sat 7am–6pm · Free estimates · Licensed & insured</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Request a Free Estimate →</Link>
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
