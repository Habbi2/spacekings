import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  try {
    const size = { width: 1200, height: 630 } as const;
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
            color: '#ffffff',
            fontFamily: 'sans-serif'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                width: 128,
                height: 128,
                borderRadius: 24,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#7C5CFF'
              }}
            >
              <span
                style={{
                  fontSize: 56,
                  fontWeight: 800,
                  color: '#ffffff'
                }}
              >
                SK
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 24 }}>
              <div style={{ fontSize: 56, fontWeight: 800 }}>Space Kings — Esports</div>
              <div style={{ marginTop: 8, fontSize: 28, color: 'rgba(255,255,255,0.85)' }}>Counter-Strike 2 • LATAM</div>
            </div>
          </div>
          <div style={{ marginTop: 24, fontSize: 22, color: 'rgba(255,255,255,0.75)' }}>spacekings.vercel.app</div>
        </div>
      ),
      size
    );
  } catch (e) {
    const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://spacekings.vercel.app';
    return new Response(null, { status: 307, headers: { Location: `${base}/logo.png` } });
  }
}
