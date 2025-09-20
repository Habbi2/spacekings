import { ImageResponse } from 'next/og';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title') || 'Space Kings — Esports';
    const subtitle = searchParams.get('subtitle') || 'Counter‑Strike 2 • LATAM';
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
            alignItems: 'flex-start',
            padding: '64px',
            background:
              'radial-gradient(1200px 600px at 80% 0%, rgba(124,92,255,0.30), transparent), radial-gradient(800px 400px at 10% 100%, rgba(0,224,255,0.25), transparent), #0b1220',
            color: 'white',
            fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            {/* Vector badge instead of external image */}
            <div
              style={{
                width: 128,
                height: 128,
                borderRadius: 28,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background:
                  'conic-gradient(from 180deg at 50% 50%, rgba(124,92,255,0.9), rgba(0,224,255,0.8))',
                boxShadow: '0 10px 60px rgba(124,92,255,0.45)'
              }}
            >
              <div style={{
                background: 'rgba(0,0,0,0.25)',
                padding: '6px 14px',
                borderRadius: 14,
                border: '2px solid rgba(255,255,255,0.25)'
              }}>
                <span style={{ fontSize: 48, fontWeight: 900, letterSpacing: 2 }}>SK</span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.1 }}> {title} </div>
              <div style={{ marginTop: 8, fontSize: 28, color: 'rgba(255,255,255,0.7)' }}>{subtitle}</div>
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: 36, left: 64, display: 'flex', gap: 8, color: 'rgba(255,255,255,0.6)', fontSize: 22 }}>
            <span>spacekings.vercel.app</span>
          </div>
        </div>
      ),
      { width: 1200, height: 630 }
    );
  } catch (e) {
    return new Response('OG image generation failed', { status: 500 });
  }
}
