import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/ui/Navbar';
import BackgroundGlow from '@/components/ui/BackgroundGlow';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Space Kings — Esports',
    template: '%s | Space Kings'
  },
  description: 'Organización de esports enfocada en Counter-Strike 2. Tryouts y competiciones en LATAM.',
  keywords: ['Space Kings','esports','Counter-Strike 2','CS2','LATAM','equipo','tryouts','competitivo'],
  themeColor: '#0b1220',
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
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Space Kings' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Space Kings — Esports',
    description: 'Organización de esports enfocada en Counter-Strike 2 en LATAM.',
    images: ['/logo.png']
  },
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
  manifest: '/manifest.webmanifest'
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
