import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/ui/Navbar';
import BackgroundGlow from '@/components/ui/BackgroundGlow';

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://spacekings.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: 'Space Kings — Esports',
    template: '%s | Space Kings'
  },
  description: 'Organización de esports enfocada en Counter-Strike 2. Tryouts y competiciones en LATAM.',
  keywords: ['Space Kings','esports','Counter-Strike 2','CS2','LATAM','equipo','tryouts','competitivo'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: '/',
    siteName: 'Space Kings',
    title: 'Space Kings — Esports',
    description: 'Organización de esports enfocada en Counter-Strike 2 en LATAM.',
    images: [{ url: `${BASE}/og-banner.png`, width: 1200, height: 630, type: 'image/png', alt: 'Space Kings — Esports OG' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Space Kings — Esports',
    description: 'Organización de esports enfocada en Counter-Strike 2 en LATAM.',
    images: [`${BASE}/og-banner.png`]
  },
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
  manifest: '/manifest.webmanifest'
};

export const viewport: Viewport = {
  themeColor: '#0b1220'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SportsOrganization',
              name: 'Space Kings',
              sport: 'Counter-Strike 2',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://spacekings.vercel.app',
              sameAs: [
                'https://twitter.com/',
                'https://instagram.com/',
                'https://www.twitch.tv/',
                'https://www.youtube.com/'
              ]
            })
          }}
        />
        <BackgroundGlow />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
