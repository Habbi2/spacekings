import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/ui/Navbar';
import BackgroundGlow from '@/components/ui/BackgroundGlow';

export const metadata: Metadata = {
  title: 'Space Kings — Esports',
  description: 'Organización de esports enfocada en Counter-Strike 2. Tryouts, competiciones y clips.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <body className="min-h-screen antialiased">
        <BackgroundGlow />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
