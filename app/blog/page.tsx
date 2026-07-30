import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/lib/blog/posts';

export const metadata: Metadata = {
  title: 'Construction Blog | C Hernandez Construction – ADU, Framing & More',
  description: 'Expert advice on ADU construction, residential framing, permits, and home improvements in Ceres, Modesto and the Central Valley. Licensed contractor insights.',
};

const CATEGORY_COLORS: Record<string, string> = {
  ADU: '#3b82f6',
  Framing: '#f97316',
  Tips: '#22c55e',
  Planning: '#a855f7',
  Roofing: '#ef4444',
  Remodeling: '#06b6d4',
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(180deg, #040a16 0%, #080e1d 100%)', paddingTop: '120px', paddingBottom: '64px', borderBottom: '1px solid rgba(255,183,3,0.1)' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 14px', borderRadius: '999px', background: 'rgba(255,183,3,0.08)', border: '1px solid rgba(255,183,3,0.25)', fontSize: '11px', fontWeight: '800', color: '#ffb703', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '20px' }}>
            Construction Guide
          </div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: '900', color: '#fff', marginBottom: '16px', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
            Expert Advice on<br /><span style={{ color: '#ffb703' }}>Construction in the Central Valley</span>
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: '600px' }}>
            ADU costs, permit guides, framing tips, and contractor advice from C Hernandez Construction — licensed general contractor in Ceres, CA.
          </p>
        </div>
      </section>

      {/* Post grid */}
      <section style={{ background: '#080e1d', padding: '64px 0 96px' }}>
        <div className="container" style={{ maxWidth: '1080px' }}>
          {/* Featured post */}
          <Link href={`/blog/${posts[0].slug}`} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '32px', textDecoration: 'none', background: '#0f1a2e', transition: 'border-color 0.2s' }}
            className="blog-featured">
            <div style={{ position: 'relative', minHeight: '320px' }}>
              <Image src={posts[0].image} alt={posts[0].title} fill sizes="50vw" style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent 60%, #0f1a2e 100%)' }} />
            </div>
            <div style={{ padding: '40px 40px 40px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
                <span style={{ padding: '4px 12px', borderRadius: '999px', fontSize: '11px', fontWeight: '800', background: `${CATEGORY_COLORS[posts[0].category]}22`, color: CATEGORY_COLORS[posts[0].category], border: `1px solid ${CATEGORY_COLORS[posts[0].category]}44` }}>{posts[0].category}</span>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', lineHeight: '24px' }}>{posts[0].readTime}</span>
              </div>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.5rem', fontWeight: '800', color: '#fff', marginBottom: '12px', lineHeight: 1.3 }}>{posts[0].title}</h2>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: '24px' }}>{posts[0].excerpt}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>{posts[0].date}</span>
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#ffb703' }}>Read article →</span>
              </div>
            </div>
          </Link>

          {/* Rest of posts */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
            {posts.slice(1).map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', background: '#0f1a2e', textDecoration: 'none', display: 'flex', flexDirection: 'column', transition: 'border-color 0.2s, transform 0.2s' }}
                className="blog-card">
                <div style={{ position: 'relative', height: '180px' }}>
                  <Image src={post.image} alt={post.title} fill sizes="400px" style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, #0f1a2e 0%, transparent 60%)' }} />
                </div>
                <div style={{ padding: '20px 24px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                    <span style={{ padding: '3px 10px', borderRadius: '999px', fontSize: '10px', fontWeight: '800', background: `${CATEGORY_COLORS[post.category]}22`, color: CATEGORY_COLORS[post.category], border: `1px solid ${CATEGORY_COLORS[post.category]}44` }}>{post.category}</span>
                    <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', lineHeight: '22px' }}>{post.readTime}</span>
                  </div>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: '800', color: '#fff', marginBottom: '10px', lineHeight: 1.35, flex: 1 }}>{post.title}</h3>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, marginBottom: '16px' }}>{post.excerpt.substring(0, 120)}...</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)' }}>{post.date}</span>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#ffb703' }}>Read →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#040a16', padding: '64px 0', borderTop: '1px solid rgba(255,183,3,0.08)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.8rem', fontWeight: '800', color: '#fff', marginBottom: '12px' }}>Ready to Start Your Project?</h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '28px' }}>Get a free, no-obligation estimate from a licensed contractor who knows the Central Valley.</p>
          <Link href="/contact" className="btn-primary">Request a Free Estimate →</Link>
        </div>
      </section>

      <style>{`
        .blog-featured:hover { border-color: rgba(255,183,3,0.3) !important; }
        .blog-card:hover { border-color: rgba(255,183,3,0.25) !important; transform: translateY(-3px); }
        @media (max-width: 700px) { .blog-featured { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
