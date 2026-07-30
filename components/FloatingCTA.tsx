'use client';
import { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 100,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      alignItems: 'flex-end',
    }}>
      {/* WhatsApp */}
      <a
        href="https://wa.link/roppnh"
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        style={{
          width: '52px', height: '52px', borderRadius: '50%',
          background: '#25d366',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,0.45)',
          color: '#fff', textDecoration: 'none',
          transition: 'transform 0.2s, box-shadow 0.2s',
          animation: 'pulse-wa 2s infinite',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
      >
        <MessageCircle size={24} fill="white" />
      </a>

      {/* Call */}
      <a
        href="tel:+12092413765"
        aria-label="Call now"
        style={{
          width: '52px', height: '52px', borderRadius: '50%',
          background: '#ffb703',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(255,183,3,0.45)',
          color: '#080e1d', textDecoration: 'none',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
      >
        <Phone size={22} />
      </a>

      <style>{`
        @keyframes pulse-wa {
          0%, 100% { box-shadow: 0 4px 20px rgba(37,211,102,0.45); }
          50% { box-shadow: 0 4px 30px rgba(37,211,102,0.7), 0 0 0 8px rgba(37,211,102,0.1); }
        }
      `}</style>
    </div>
  );
}
