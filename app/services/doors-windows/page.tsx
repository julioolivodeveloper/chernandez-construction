import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function ServicePage() {
  return (
    <>
      <section style={{ paddingTop: '140px', paddingBottom: '80px', background: 'linear-gradient(145deg, #040a16, #0a1428)' }}>
        <div className="container">
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', color: '#fff', letterSpacing: '-0.04em', marginBottom: '20px' }}>
            <span className="text-gradient">C Hernandez Construction</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '560px', marginBottom: '32px' }}>
            Licensed General Contractor serving Ceres, Modesto and the Central Valley. CA Lic. #1106454.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Request a Free Estimate →</Link>
            <a href="tel:+12092413765" className="btn-secondary"><Phone size={16} />(209) 241-3765</a>
          </div>
        </div>
      </section>
    </>
  );
}
