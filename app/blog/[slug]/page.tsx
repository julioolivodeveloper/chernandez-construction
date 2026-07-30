import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { posts, getPost, type ContentBlock } from '@/lib/blog/posts';

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | C Hernandez Construction — Licensed Contractor CA`,
    description: post.excerpt,
  };
}

function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case 'h2':
      return <h2 key={i} style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)', fontWeight: '800', color: '#fff', marginTop: '48px', marginBottom: '16px', letterSpacing: '-0.02em' }}>{block.text}</h2>;
    case 'h3':
      return <h3 key={i} style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: '700', color: '#e2e8f0', marginTop: '32px', marginBottom: '12px' }}>{block.text}</h3>;
    case 'p':
      return <p key={i} style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.85, marginBottom: '20px' }}>{block.text}</p>;
    case 'ul':
      return <ul key={i} style={{ margin: '0 0 20px', paddingLeft: '0', listStyle: 'none' }}>
        {block.items.map((item, j) => (
          <li key={j} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '15px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '10px' }}>
            <span style={{ flexShrink: 0, width: '6px', height: '6px', borderRadius: '50%', background: '#ffb703', marginTop: '10px' }} />
            {item}
          </li>
        ))}
      </ul>;
    case 'ol':
      return <ol key={i} style={{ margin: '0 0 20px', paddingLeft: '0', listStyle: 'none', counterReset: 'list' }}>
        {block.items.map((item, j) => (
          <li key={j} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', fontSize: '15px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '14px' }}>
            <span style={{ flexShrink: 0, width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,183,3,0.15)', border: '1px solid rgba(255,183,3,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800', color: '#ffb703', marginTop: '2px' }}>{j + 1}</span>
            <span style={{ flex: 1 }}>{item}</span>
          </li>
        ))}
      </ol>;
    case 'tip':
      return <div key={i} style={{ margin: '28px 0', padding: '20px 24px', borderRadius: '16px', background: 'rgba(255,183,3,0.06)', border: '1px solid rgba(255,183,3,0.25)', borderLeft: '4px solid #ffb703' }}>
        <div style={{ fontSize: '11px', fontWeight: '800', color: '#ffb703', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px' }}>Pro Tip</div>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, margin: 0 }}>{block.text}</p>
      </div>;
    case 'table':
      return <div key={i} style={{ overflowX: 'auto', marginBottom: '24px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid rgba(255,183,3,0.3)' }}>
              {block.headers.map((h, j) => <th key={j} style={{ padding: '12px 16px', textAlign: 'left', fontSize: '11px', fontWeight: '800', color: '#ffb703', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, j) => (
              <tr key={j} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: j % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                {row.map((cell, k) => <td key={k} style={{ padding: '12px 16px', fontSize: '14px', color: k === 0 ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.55)', fontWeight: k === 0 ? '600' : '400' }}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>;
    default:
      return null;
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const others = posts.filter(p => p.slug !== slug).slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    url: `https://www.chernandezconstructionchg.com/blog/${post.slug}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.chernandezconstructionchg.com/blog/${post.slug}` },
    author: { '@type': 'Organization', name: 'C Hernandez Construction', url: 'https://www.chernandezconstructionchg.com' },
    publisher: {
      '@type': 'Organization',
      name: 'C Hernandez Construction',
      logo: { '@type': 'ImageObject', url: 'https://www.chernandezconstructionchg.com/logo.png' },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {/* Hero */}
      <section style={{ position: 'relative', paddingTop: '100px', minHeight: '420px', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <Image src={post.image} alt={post.title} fill sizes="100vw" style={{ objectFit: 'cover' }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, #080e1d 0%, rgba(8,14,29,0.6) 60%, rgba(4,10,22,0.4) 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '860px', paddingBottom: '56px' }}>
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', marginBottom: '20px' }}>
            ← Back to Blog
          </Link>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
            <span style={{ padding: '5px 14px', borderRadius: '999px', fontSize: '11px', fontWeight: '800', background: 'rgba(255,183,3,0.15)', color: '#ffb703', border: '1px solid rgba(255,183,3,0.35)' }}>{post.category}</span>
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: '28px' }}>{post.date} · {post.readTime}</span>
          </div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', fontWeight: '900', color: '#fff', lineHeight: 1.2, letterSpacing: '-0.03em' }}>{post.title}</h1>
        </div>
      </section>

      {/* Article */}
      <section style={{ background: '#080e1d', padding: '56px 0 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '48px', maxWidth: '1080px', margin: '0 auto', padding: '0 24px' }} className="blog-post-grid">
          {/* Content */}
          <article>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.85, marginBottom: '32px', borderLeft: '3px solid #ffb703', paddingLeft: '20px', fontStyle: 'italic' }}>{post.excerpt}</p>
            {post.content.map((block, i) => renderBlock(block, i))}

            {/* CTA */}
            <div style={{ marginTop: '56px', padding: '32px', borderRadius: '20px', background: 'rgba(255,183,3,0.06)', border: '1px solid rgba(255,183,3,0.2)', textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.3rem', fontWeight: '800', color: '#fff', marginBottom: '10px' }}>Ready for a Free Estimate?</h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '20px' }}>C Hernandez Construction · Lic. #1106454 · Ceres, CA · (209) 241-3765</p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn-primary" style={{ fontSize: '14px' }}>Request Estimate →</Link>
                <a href="tel:+12092413765" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '999px', border: '1px solid rgba(255,183,3,0.3)', color: '#ffb703', fontSize: '14px', fontWeight: '700', textDecoration: 'none' }}>(209) 241-3765</a>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* About box */}
            <div style={{ padding: '24px', borderRadius: '16px', background: '#0f1a2e', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '11px', fontWeight: '800', color: 'rgba(255,183,3,0.7)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '12px' }}>About the Author</div>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '16px' }}>C Hernandez Construction is a licensed general contractor (Lic. #1106454) in Ceres, CA specializing in ADUs, framing, and room additions in the Central Valley.</p>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {['5.0 ★ Google', 'Lic. #1106454', 'Ceres, CA'].map(t => (
                  <span key={t} style={{ padding: '4px 10px', borderRadius: '999px', fontSize: '10px', fontWeight: '700', background: 'rgba(255,183,3,0.08)', color: 'rgba(255,183,3,0.8)', border: '1px solid rgba(255,183,3,0.15)' }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Other posts */}
            <div style={{ padding: '24px', borderRadius: '16px', background: '#0f1a2e', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '11px', fontWeight: '800', color: 'rgba(255,183,3,0.7)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '16px' }}>More Articles</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {others.map(p => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: 'none' }}>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: 'rgba(255,255,255,0.8)', lineHeight: 1.4, marginBottom: '4px' }}>{p.title}</div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}>{p.readTime}</div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) { .blog-post-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
