import { MetadataRoute } from 'next';
import { posts } from '@/lib/blog/posts';
import { cities } from '@/lib/cities/data';

const BASE = 'https://www.chernandezconstructionchg.com';

const SERVICE_SLUGS = [
  'adu', 'framing', 'additions', 'roofing', 'drywall',
  'general-contractor', 'remodeling', 'carpentry', 'new-construction', 'doors-windows',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,                                        lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/about`,                             lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/portfolio`,                         lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`,                           lastModified: now, changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${BASE}/blog`,                              lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/cities`,                            lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // Bay Area landing pages (hidden from main nav, indexed for SEO)
    { url: `${BASE}/bay-area-framing`,                  lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/bay-area-framing/san-jose`,         lastModified: now, changeFrequency: 'monthly', priority: 0.88 },
    { url: `${BASE}/bay-area-framing/milpitas`,         lastModified: now, changeFrequency: 'monthly', priority: 0.88 },
    { url: `${BASE}/bay-area-framing/adu`,              lastModified: now, changeFrequency: 'monthly', priority: 0.87 },
    { url: `${BASE}/bay-area-framing/room-additions`,   lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICE_SLUGS.map(slug => ({
    url: `${BASE}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  const cityRoutes: MetadataRoute.Sitemap = cities.map(city => ({
    url: `${BASE}/cities/${city.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const cityServiceRoutes: MetadataRoute.Sitemap = cities.flatMap(city =>
    SERVICE_SLUGS.map(service => ({
      url: `${BASE}/cities/${city.slug}/${service}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    }))
  );

  const blogRoutes: MetadataRoute.Sitemap = posts.map(post => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...cityRoutes, ...cityServiceRoutes, ...blogRoutes];
}
