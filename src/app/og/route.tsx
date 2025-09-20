import { ImageResponse } from 'next/og';

const size = { width: 1200, height: 630 } as const;
const contentType = 'image/png';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Space Kings — Esports';
  const subtitle = searchParams.get('subtitle') || 'Counter-Strike 2 • LATAM';
  // Avoid external fetches (can fail on some deployments/scrapers). Render a vector-style badge instead.

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 64,
            backgroundColor: '#0b1220',
            color: 'white',
            fontFamily: 'sans-serif',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Vector badge instead of external image */}
            <div
              style={{
                width: 128,
                height: 128,
                borderRadius: 28,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#7C5CFF'
              }}
            >
              <div style={{
                backgroundColor: 'rgba(0,0,0,0.25)',
                padding: '6px 14px',
                borderRadius: 14,
                border: '2px solid rgba(255,255,255,0.25)'
              }}>
                <span style={{ fontSize: 48, fontWeight: 900 }}>SK</span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 24 }}>
              <div style={{ fontSize: 56, fontWeight: 800 }}>{title}</div>
              <div style={{ marginTop: 8, fontSize: 28, color: 'rgba(255,255,255,0.85)' }}>{subtitle}</div>
            </div>
          </div>
          <div style={{ marginTop: 24, fontSize: 22, color: 'rgba(255,255,255,0.75)' }}>spacekings.vercel.app</div>
        </div>
      ),
      size
    );
  } catch (e) {
    const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://spacekings.vercel.app';
    // Fallback: redirect to a static image that always exists
    return Response.redirect(`${base}/logo.png`, 307);
  }
}
