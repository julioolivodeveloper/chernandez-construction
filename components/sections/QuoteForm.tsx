'use client';
import { useState, useRef } from 'react';
import { Send, Phone, CheckCircle2, Paperclip } from 'lucide-react';

const projectTypes = [
  'Structural Framing',
  'ADU Construction',
  'Room Addition',
  'General Contractor',
  'Kitchen Remodel',
  'Bathroom Remodel',
  'Roof Shingles',
  'Drywall & Painting',
  'Doors & Windows',
  'New Construction',
  'Other',
];

const timelines = [
  'As soon as possible',
  'Within 1 month',
  '1–3 months',
  '3–6 months',
  'Just planning ahead',
];

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: connect to email service / Formspree / Resend
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="estimate" className="section-pad" style={{ background: '#080e1d' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{
            maxWidth: '480px', margin: '0 auto',
            padding: '48px', borderRadius: '24px',
            background: 'rgba(255,183,3,0.06)', border: '1px solid rgba(255,183,3,0.2)',
          }}>
            <CheckCircle2 size={56} style={{ color: '#ffb703', marginBottom: '20px' }} />
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '24px', fontWeight: '800', color: '#fff', marginBottom: '12px' }}>
              Message Received!
            </h3>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '24px' }}>
              Thank you! We'll get back to you within 24 hours. For a faster response, call or text us directly.
            </p>
            <a href="tel:+12092413765" className="btn-primary" style={{ justifyContent: 'center', width: '100%' }}>
              <Phone size={16} />
              Call (209) 241-3765
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="estimate" className="section-pad" style={{ background: '#080e1d' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '56px', alignItems: 'start' }} className="quote-grid">

          {/* Left info */}
          <div>
            <div className="section-chip">
              <Send size={12} />
              Free Estimate
            </div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', fontWeight: '800', color: '#fff', letterSpacing: '-0.035em', marginBottom: '16px' }}>
              Request a <span className="text-gradient">Free Estimate</span>
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '32px' }}>
              Fill out the form with your project details. We'll review and reach out within 24 hours with a free, no-obligation estimate.
            </p>

            {/* Contact options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
              <a href="tel:+12092413765" style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                padding: '16px', borderRadius: '14px',
                background: 'rgba(255,183,3,0.06)', border: '1px solid rgba(255,183,3,0.15)',
                textDecoration: 'none', transition: 'all 0.2s',
              }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '11px', background: 'rgba(255,183,3,0.12)', border: '1px solid rgba(255,183,3,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffb703', flexShrink: 0 }}>
                  <Phone size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: '700', color: '#fff' }}>Call or Text</div>
                  <div style={{ fontSize: '15px', fontWeight: '800', color: '#ffb703' }}>(209) 241-3765</div>
                </div>
              </a>

              <a href="https://wa.link/roppnh" target="_blank" rel="noopener" style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                padding: '16px', borderRadius: '14px',
                background: 'rgba(37,211,102,0.05)', border: '1px solid rgba(37,211,102,0.15)',
                textDecoration: 'none', transition: 'all 0.2s',
              }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '11px', background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25d366', flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: '700', color: '#fff' }}>WhatsApp Chat</div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#25d366' }}>Send your plans directly</div>
                </div>
              </a>
            </div>

            <div style={{ padding: '16px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div style={{ fontSize: '12px', fontWeight: '800', color: '#ffb703', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px' }}>Business Hours</div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>Mon – Sat: 7:00 AM – 6:00 PM</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', marginTop: '4px' }}>Ceres, CA · License #1106454</div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{
            background: 'rgba(15,26,46,0.7)',
            border: '1px solid rgba(255,183,3,0.12)',
            borderRadius: '24px',
            padding: '36px',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }} className="form-row">
              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '600', color: 'rgba(255,255,255,0.6)', marginBottom: '6px', letterSpacing: '0.03em' }}>
                  Full Name *
                </label>
                <input required type="text" className="form-input" placeholder="Your name" />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '600', color: 'rgba(255,255,255,0.6)', marginBottom: '6px', letterSpacing: '0.03em' }}>
                  Phone Number *
                </label>
                <input required type="tel" className="form-input" placeholder="(209) 000-0000" />
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '600', color: 'rgba(255,255,255,0.6)', marginBottom: '6px', letterSpacing: '0.03em' }}>
                City / Zip Code *
              </label>
              <input required type="text" className="form-input" placeholder="e.g. Ceres, CA or 95307" />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }} className="form-row">
              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '600', color: 'rgba(255,255,255,0.6)', marginBottom: '6px', letterSpacing: '0.03em' }}>
                  Type of Project *
                </label>
                <select required className="form-select form-input">
                  <option value="">Select a service...</option>
                  {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '600', color: 'rgba(255,255,255,0.6)', marginBottom: '6px', letterSpacing: '0.03em' }}>
                  Desired Timeline
                </label>
                <select className="form-select form-input">
                  <option value="">Select timeline...</option>
                  {timelines.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '600', color: 'rgba(255,255,255,0.6)', marginBottom: '6px', letterSpacing: '0.03em' }}>
                Project Description
              </label>
              <textarea className="form-textarea form-input" placeholder="Tell us about your project — size, scope, any specific requirements..." style={{ minHeight: '100px' }} />
            </div>

            {/* File upload */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '600', color: 'rgba(255,255,255,0.6)', marginBottom: '6px', letterSpacing: '0.03em' }}>
                Attach Photos or Plans (optional)
              </label>
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  width: '100%', padding: '14px 16px', borderRadius: '12px',
                  background: 'rgba(255,255,255,0.04)', border: '1px dashed rgba(255,255,255,0.15)',
                  color: 'rgba(255,255,255,0.5)', fontSize: '13.5px', cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,183,3,0.4)'; (e.currentTarget as HTMLElement).style.color = '#ffb703'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}
              >
                <Paperclip size={16} />
                {fileName || 'Click to upload photos or plans'}
              </button>
              <input
                ref={fileRef}
                type="file"
                accept="image/*,.pdf"
                multiple
                style={{ display: 'none' }}
                onChange={e => setFileName(e.target.files?.[0]?.name || '')}
              />
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', marginTop: '6px' }}>
                Accepted: JPG, PNG, PDF · Max 10MB. Or send via <a href="https://wa.link/roppnh" target="_blank" rel="noopener" style={{ color: 'rgba(255,183,3,0.6)', textDecoration: 'none' }}>WhatsApp</a>.
              </p>
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '15px', padding: '15px' }}>
              <Send size={16} />
              Request a Framing Estimate
            </button>

            <p style={{ textAlign: 'center', marginTop: '14px', fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>
              We respond within 24 hours · No spam · No obligation
            </p>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .quote-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 540px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
