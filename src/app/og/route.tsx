import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

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
            padding: 64,
            backgroundColor: '#0b1220',
            color: 'white',
            fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial',
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
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: 56, fontWeight: 800 }}> {title} </div>
              <div style={{ marginTop: 8, fontSize: 28, color: 'rgba(255,255,255,0.85)' }}>{subtitle}</div>
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: 36, left: 64, display: 'flex', gap: 8, color: 'rgba(255,255,255,0.7)', fontSize: 22 }}>
            <span>spacekings.vercel.app</span>
          </div>
        </div>
      ),
      size
    );
  } catch (e) {
    return new Response('OG image generation failed', { status: 500 });
  }
}
