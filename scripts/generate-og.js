// Simple static OG PNG generator using Sharp (via an SVG template)
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const WIDTH = 1200;
const HEIGHT = 630;

const svg = (title, subtitle, hasLogo) => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b1220" />
      <stop offset="100%" stop-color="#0a0f1a" />
    </linearGradient>
    <radialGradient id="vignette" cx="50%" cy="0%" r="80%">
      <stop offset="0%" stop-color="#000000" stop-opacity="0" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0.35" />
    </radialGradient>
    <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="18" flood-color="#000" flood-opacity="0.35"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <rect width="100%" height="100%" fill="url(#vignette)"/>
  <!-- Accent diagonal -->
  <g opacity="0.15">
    <rect x="-100" y="460" width="1400" height="220" fill="#7C5CFF" transform="rotate(-8 0 0)"/>
  </g>

  <!-- Logo / Badge -->
  <g filter="url(#soft)">
    <rect x="64" y="180" rx="28" ry="28" width="128" height="128" fill="#7C5CFF"/>
    ${hasLogo
      ? '<image href="logo.png" x="76" y="192" width="104" height="104" preserveAspectRatio="xMidYMid meet"/>'
      : '<text x="128" y="244" font-family="Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" font-weight="800" font-size="56" fill="#fff" text-anchor="middle" alignment-baseline="middle">SK</text>'}
  </g>

  <!-- Copy -->
  <text x="224" y="230" font-family="Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" font-weight="800" font-size="64" fill="#ffffff">${title}</text>
  <text x="224" y="286" font-family="Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" font-weight="500" font-size="30" fill="rgba(255,255,255,0.85)">${subtitle.replace(' • ', '  •  ')}</text>
  <text x="64" y="360" font-family="Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" font-weight="500" font-size="22" fill="rgba(255,255,255,0.75)">spacekings.vercel.app</text>

  <!-- Watermark corner -->
  <g opacity="0.07">
    <rect x="880" y="420" width="420" height="420" fill="#ffffff" transform="rotate(-28 880 420)"/>
  </g>

</svg>`;

async function main() {
  const outDir = path.resolve('public');
  await fs.mkdir(outDir, { recursive: true });
  const pngPath = path.join(outDir, 'og-banner.png');

  const title = 'Space Kings — Esports';
  const subtitle = 'Counter-Strike 2 • LATAM';

  // Check if we have a logo file in public
  let hasLogo = false;
  try {
    await fs.access(path.join(outDir, 'logo.png'));
    hasLogo = true;
  } catch {}

  const svgBuffer = Buffer.from(svg(title, subtitle, hasLogo));
  const image = sharp(svgBuffer).png({ compressionLevel: 9 }).resize(WIDTH, HEIGHT, { fit: 'cover' });
  await image.toFile(pngPath);
  console.log('Generated', pngPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
