import type { Metadata } from 'next';
import Link from 'next/link';
import { Camera, MapPin, ImageOff } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Portfolio | C Hernandez Construction – Framing, ADUs & Additions',
  description: 'View projects from C Hernandez Construction — residential framing, ADU construction, room additions and remodeling in Ceres, Modesto and the Central Valley.',
};

const projects = [
  { id: 1, title: 'ADU Framing – Detached Unit', location: 'Modesto, CA', category: 'ADU Construction', desc: 'Complete structural framing for a 600 sq ft detached ADU. Foundation sill plate through roof plate. Project included all permit coordination with the city.', challenge: 'Limited access on a narrow lot required precise sequencing of lumber delivery and framing stages.', result: 'Fully permitted ADU framing completed on schedule, ready for inspections.', badge: 'ADU', color: '#ffb703' },
  { id: 2, title: 'Custom Home Framing', location: 'Ceres, CA', category: 'Structural Framing', desc: 'Full residential framing package for a 2,200 sq ft custom home. Wall systems, floor joists, roof trusses and stair framing.', challenge: 'Complex roofline with multiple hip and valley intersections.', result: 'Framing completed within 3 weeks, passed structural inspection first attempt.', badge: 'Framing', color: '#3b82f6' },
  { id: 3, title: 'Master Suite Addition', location: 'Turlock, CA', category: 'Room Addition', desc: '400 sq ft addition tying into existing structure. Framing, sheathing, roofline integration and exterior wrap.', challenge: 'Matching pitch of existing roof and tying in the ridge without removing interior ceiling.', result: 'Seamless addition — exterior matches original home. Passed all framing and energy inspections.', badge: 'Addition', color: '#22c55e' },
  { id: 4, title: 'Attached ADU – Garage Conversion', location: 'Ceres, CA', category: 'ADU Construction', desc: 'Permitted conversion of a two-car garage to a 480 sq ft ADU. Framing, drywall, windows and exterior door install.', challenge: 'Existing slab had no moisture barrier — had to add proper insulation and raised floor system.', result: 'Converted ADU passed final inspection and is currently occupied.', badge: 'ADU', color: '#ffb703' },
  { id: 5, title: 'Kitchen & Bath Remodel', location: 'Modesto, CA', category: 'Remodeling', desc: 'Full gut and rebuild of kitchen and primary bathroom. Framing changes, drywall, tile, paint and trim work.', challenge: 'Load-bearing wall removal required engineered beam and new post footings.', result: 'Open concept kitchen achieved. All work permitted and inspected.', badge: 'Remodel', color: '#a855f7' },
  { id: 6, title: 'Residential Re-Roof', location: 'Salida, CA', category: 'Roofing', desc: 'Complete shingle tear-off and re-roof on 1,800 sq ft home. Replaced damaged decking, installed new underlayment and dimensional shingles.', challenge: 'Multiple layers of old shingles required full deck removal and replacement in several areas.', result: 'New roof installed in two days. Property protected for decades.', badge: 'Roofing', color: '#ef4444' },
];

export default function PortfolioPage() {
  return (
    <>
      <section style={{ paddingTop: '140px', paddingBottom: '60px', background: 'linear-gradient(180deg, #040a16, #080e1d)' }}>
        <div className="container">
          <div className="section-chip">
            <Camera size={12} />
            Portfolio
          </div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: '900', color: '#fff', letterSpacing: '-0.04em', marginBottom: '16px', maxWidth: '600px' }}>
            Our <span className="text-gradient">Projects</span>
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', maxWidth: '520px', lineHeight: 1.7 }}>
            Real projects from the C Hernandez Construction crew — framing, ADUs, additions and more across the Central Valley.
          </p>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="portfolio-page-grid">
            {projects.map(({ id, title, location, category, desc, challenge, result, badge, color }) => (
              <div key={id} className="portfolio-card" style={{ borderRadius: '20px', background: 'rgba(15,26,46,0.7)', border: '1px solid rgba(255,255,255,0.07)', overflow: 'hidden', transition: 'all 0.3s ease' }}>
                <div style={{ height: '220px', background: `linear-gradient(135deg, ${color}20, rgba(0,0,0,0.4))`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', position: 'relative', borderBottom: `1px solid ${color}30` }}>
                  <ImageOff size={40} style={{ color: 'rgba(255,255,255,0.15)' }} />
                  <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>Photos coming soon</span>
                  <span style={{ position: 'absolute', top: '14px', left: '14px', padding: '5px 12px', borderRadius: '999px', background: 'rgba(0,0,0,0.6)', border: `1px solid ${color}60`, fontSize: '11px', fontWeight: '800', color: '#fff' }}>{badge}</span>
                </div>

                <div style={{ padding: '22px' }}>
                  <h2 style={{ fontSize: '15px', fontWeight: '800', color: '#fff', marginBottom: '5px', fontFamily: 'Poppins, sans-serif' }}>{title}</h2>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '12px' }}>
                    <MapPin size={11} style={{ color: '#ffb703' }} />
                    <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>{location}</span>
                    <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)' }}>·</span>
                    <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>{category}</span>
                  </div>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, marginBottom: '12px' }}>{desc}</p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.03)', padding: '8px 12px', borderRadius: '8px', borderLeft: '3px solid rgba(255,183,3,0.4)' }}>
                      <strong style={{ color: 'rgba(255,255,255,0.6)', display: 'block', marginBottom: '2px' }}>Challenge</strong>
                      {challenge}
                    </div>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', background: 'rgba(34,197,94,0.04)', padding: '8px 12px', borderRadius: '8px', borderLeft: '3px solid rgba(34,197,94,0.4)' }}>
                      <strong style={{ color: 'rgba(255,255,255,0.6)', display: 'block', marginBottom: '2px' }}>Result</strong>
                      {result}
                    </div>
                  </div>

                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '9px 18px', borderRadius: '999px', background: 'rgba(255,183,3,0.1)', border: '1px solid rgba(255,183,3,0.25)', color: '#ffb703', fontSize: '12.5px', fontWeight: '700', textDecoration: 'none' }}>
                    Request similar project →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '48px', padding: '24px', borderRadius: '16px', background: 'rgba(255,183,3,0.06)', border: '1px solid rgba(255,183,3,0.15)', textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: '800', color: '#fff', marginBottom: '10px' }}>Have a Similar Project?</h3>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '20px', lineHeight: 1.6 }}>
              📸 We&apos;re gathering real project photos. Contact us directly and we&apos;ll share examples specific to your project type.
            </p>
            <Link href="/contact" className="btn-primary">Get a Free Estimate →</Link>
          </div>
        </div>
      </section>

      <style>{`
        .portfolio-page-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .portfolio-card { transition: all 0.3s ease; }
        .portfolio-card:hover { transform: translateY(-6px); box-shadow: 0 20px 60px rgba(0,0,0,0.4); border-color: rgba(255,183,3,0.3) !important; }
        @media (max-width: 900px) { .portfolio-page-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 580px) { .portfolio-page-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
