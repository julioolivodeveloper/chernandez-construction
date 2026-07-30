import { CheckCircle2, XCircle } from 'lucide-react';

const rows = [
  { label: 'CA State License Verified', licensed: true, unlicensed: false },
  { label: 'Liability Insurance', licensed: true, unlicensed: false },
  { label: 'Workers\' Compensation', licensed: true, unlicensed: false },
  { label: 'Pulls Required Permits', licensed: true, unlicensed: false },
  { label: 'Passes City Inspections', licensed: true, unlicensed: false },
  { label: 'Protects Your Home Value', licensed: true, unlicensed: false },
  { label: 'Legal for Sale/Refinance', licensed: true, unlicensed: false },
  { label: 'Accountable if Issues Arise', licensed: true, unlicensed: false },
];

export default function LicensedComparison() {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0 }}>
        <thead>
          <tr>
            <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: '12px', fontWeight: '800', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              Factor
            </th>
            <th style={{ padding: '14px 20px', textAlign: 'center', fontSize: '12px', fontWeight: '800', color: '#ffb703', textTransform: 'uppercase', letterSpacing: '0.1em', borderBottom: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,183,3,0.06)', borderRadius: '12px 12px 0 0' }}>
              C Hernandez Construction<br />
              <span style={{ fontSize: '10px', fontWeight: '600', color: 'rgba(255,183,3,0.7)' }}>Lic. #1106454</span>
            </th>
            <th style={{ padding: '14px 20px', textAlign: 'center', fontSize: '12px', fontWeight: '800', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              Unlicensed Contractor
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ label, licensed, unlicensed }, i) => (
            <tr key={label} style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)' }}>
              <td style={{ padding: '14px 20px', fontSize: '14px', color: 'rgba(255,255,255,0.65)', borderBottom: '1px solid rgba(255,255,255,0.05)', fontWeight: '500' }}>
                {label}
              </td>
              <td style={{ padding: '14px 20px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,183,3,0.04)' }}>
                {licensed
                  ? <CheckCircle2 size={20} style={{ color: '#22c55e', margin: '0 auto' }} />
                  : <XCircle size={20} style={{ color: '#ef4444', margin: '0 auto' }} />}
              </td>
              <td style={{ padding: '14px 20px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                {unlicensed
                  ? <CheckCircle2 size={20} style={{ color: '#22c55e', margin: '0 auto' }} />
                  : <XCircle size={20} style={{ color: '#ef4444', margin: '0 auto' }} />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '14px', textAlign: 'center' }}>
        In California, hiring an unlicensed contractor for projects over $500 is illegal and can void your homeowner's insurance.
      </p>
    </div>
  );
}
