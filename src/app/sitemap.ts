import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://spacekings.vercel.app';
  const now = new Date().toISOString();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/#about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/#competitions`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/#tryouts`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
  ];
}
