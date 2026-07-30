interface Step {
  title: string;
  desc: string;
  icon: string;
}

interface Props {
  steps: Step[];
}

export default function ServiceTimeline({ steps }: Props) {
  return (
    <div style={{ position: 'relative' }}>
      {/* Vertical line */}
      <div style={{
        position: 'absolute', left: '27px', top: '32px', bottom: '32px', width: '2px',
        background: 'linear-gradient(180deg, rgba(255,183,3,0.6), rgba(255,183,3,0.1))',
      }} className="timeline-line" />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {steps.map((step, i) => (
          <div key={i} style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', paddingBottom: i < steps.length - 1 ? '32px' : '0' }}>
            {/* Circle */}
            <div style={{
              width: '56px', height: '56px', borderRadius: '50%', flexShrink: 0,
              background: 'linear-gradient(135deg, rgba(255,183,3,0.2), rgba(255,183,3,0.05))',
              border: '2px solid rgba(255,183,3,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '22px', position: 'relative', zIndex: 1,
              boxShadow: '0 0 20px rgba(255,183,3,0.15)',
            }}>
              {step.icon}
            </div>
            <div style={{ paddingTop: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                <span style={{ fontSize: '10px', fontWeight: '800', color: '#ffb703', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  Step {i + 1}
                </span>
              </div>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: '800', color: '#fff', marginBottom: '6px' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .timeline-line { left: 23px !important; }
        }
      `}</style>
    </div>
  );
}
