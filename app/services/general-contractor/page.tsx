import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Licensed General Contractor | C Hernandez Construction – Ceres & Modesto CA',
  description: 'C Hernandez Construction — Licensed General Contractor (Lic. #1106454) in Ceres, CA. Residential construction, framing, ADUs and more in the Central Valley. (209) 241-3765.',
};

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
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '580px', marginBottom: '32px' }}>
            C Hernandez Construction holds an active California General Contractor license. We manage residential construction projects from framing through completion — with permits, inspections and accountability.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '24px' }}>
            <Link href="/contact" className="btn-primary">Request a Free Estimate →</Link>
            <a href="tel:+12092413765" className="btn-secondary"><Phone size={16} />(209) 241-3765</a>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {['CA License #1106454', 'Insured', 'Permit Coordination', 'Ceres & Modesto Area'].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <CheckCircle2 size={14} style={{ color: '#ffb703' }} />
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', fontWeight: '600' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#fff', marginBottom: '40px' }}>
            What We Manage as <span className="text-gradient">General Contractor</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="three-col">
            {[
              { title: 'Permit Coordination', desc: 'We pull the necessary permits and coordinate with local building departments throughout your project.' },
              { title: 'Project Scheduling', desc: 'We manage the sequence of work so trades show up in the right order and your project stays on track.' },
              { title: 'Quality Control', desc: 'We inspect work at each stage to ensure it meets California building code and our own standards.' },
              { title: 'Residential Framing', desc: 'Our core trade — structural framing for new homes, ADUs, additions and remodels.' },
              { title: 'Subcontractor Management', desc: 'When specialty trades are needed, we work with reliable licensed subs and remain responsible for the work.' },
              { title: 'Client Communication', desc: 'We keep you informed throughout the project. Spanish and English spoken.' },
            ].map(({ title, desc }) => (
              <div key={title} style={{ padding: '22px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>{title}</h3>
                <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#0b1220', padding: '64px 0', borderTop: '1px solid rgba(255,183,3,0.1)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: '800', color: '#fff', marginBottom: '14px' }}>
            Work With a <span className="text-gradient">Licensed Contractor</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '28px' }}>
            CA Lic. #1106454 · Ceres, CA · Free estimates
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Request a Free Estimate →</Link>
            <a href="tel:+12092413765" className="btn-secondary"><Phone size={16} />(209) 241-3765</a>
          </div>
          <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <MapPin size={13} style={{ color: '#ffb703' }} />
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>Serving Ceres · Modesto · Turlock · Central Valley</span>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) { .three-col { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .three-col { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
