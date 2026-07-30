'use client';
import { useState } from 'react';
import { Send, CheckCircle2, Phone } from 'lucide-react';

interface Props {
  service: string;
}

export default function ServiceInlineForm({ service }: Props) {
  const [form, setForm] = useState({ name: '', phone: '', details: '', timeline: '' });
  const [sent, setSent] = useState(false);

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi! I found your website and I need a ${service} estimate.\n\nName: ${form.name}\nPhone: ${form.phone}\nProject details: ${form.details}\nTimeline: ${form.timeline}\n\nPlease contact me for a free estimate. Thank you!`
    );
    window.open(`https://wa.me/12092413765?text=${msg}`, '_blank');
    setSent(true);
  };

  if (sent) {
    return (
      <div style={{ textAlign: 'center', padding: '48px 32px' }}>
        <CheckCircle2 size={52} style={{ color: '#25d366', margin: '0 auto 16px' }} />
        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '800', fontSize: '20px', color: '#fff', marginBottom: '8px' }}>
          Message Sent to WhatsApp!
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', marginBottom: '24px' }}>
          We'll get back to you as soon as possible with your free estimate.
        </p>
        <a href="tel:+12092413765" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '11px 24px', borderRadius: '999px',
          background: 'rgba(255,183,3,0.1)', border: '1px solid rgba(255,183,3,0.3)',
          color: '#ffb703', fontWeight: '700', fontSize: '14px', textDecoration: 'none',
        }}>
          <Phone size={15} /> Or call us directly
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }} className="form-two-col">
        <div>
          <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Your Name *</label>
          <input
            required
            type="text"
            placeholder="John Smith"
            value={form.name}
            onChange={e => set('name', e.target.value)}
            className="form-input"
          />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Phone Number *</label>
          <input
            required
            type="tel"
            placeholder="(209) 000-0000"
            value={form.phone}
            onChange={e => set('phone', e.target.value)}
            className="form-input"
          />
        </div>
      </div>

      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Project Details</label>
        <textarea
          rows={3}
          placeholder={`Describe your ${service} project — size, location, any special requirements...`}
          value={form.details}
          onChange={e => set('details', e.target.value)}
          className="form-textarea"
          style={{ resize: 'none' }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>When do you want to start?</label>
        <select value={form.timeline} onChange={e => set('timeline', e.target.value)} className="form-select">
          <option value="">Select timeline</option>
          <option value="ASAP">As soon as possible</option>
          <option value="1-2 months">1–2 months</option>
          <option value="3-6 months">3–6 months</option>
          <option value="Just planning">Just planning for now</option>
        </select>
      </div>

      <button type="submit" style={{
        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
        padding: '15px 28px', borderRadius: '14px',
        background: 'linear-gradient(135deg, #ffb703, #ff9500)',
        color: '#080e1d', fontSize: '15px', fontWeight: '800',
        border: 'none', cursor: 'pointer',
        boxShadow: '0 8px 24px rgba(255,183,3,0.3)',
        transition: 'all 0.2s',
      }}>
        <Send size={16} />
        Send via WhatsApp — Free Estimate
      </button>
      <p style={{ textAlign: 'center', fontSize: '11.5px', color: 'rgba(255,255,255,0.3)', marginTop: '10px' }}>
        No commitment · We respond within a few hours
      </p>
    </form>
  );
}
