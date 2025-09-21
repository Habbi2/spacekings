// Simple static OG PNG generator using Sharp (via an SVG template)
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const WIDTH = 1200;
const HEIGHT = 630;

const svg = (title, subtitle) => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b1220" />
      <stop offset="100%" stop-color="#0f1422" />
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#000" flood-opacity="0.35"/>
    </filter>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <!-- Badge -->
  <g filter="url(#shadow)">
    <rect x="64" y="180" rx="24" ry="24" width="128" height="128" fill="#7C5CFF"/>
    <text x="128" y="260" font-family="Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" font-weight="800" font-size="56" fill="#fff" text-anchor="middle" alignment-baseline="middle">SK</text>
  </g>
  <!-- Text -->
  <text x="224" y="240" font-family="Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" font-weight="800" font-size="56" fill="#ffffff">${title}</text>
  <text x="224" y="290" font-family="Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" font-weight="500" font-size="28" fill="rgba(255,255,255,0.85)">${subtitle}</text>
  <text x="64" y="360" font-family="Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" font-weight="500" font-size="22" fill="rgba(255,255,255,0.75)">spacekings.vercel.app</text>
  
</svg>`;

async function main() {
  const outDir = path.resolve('public');
  await fs.mkdir(outDir, { recursive: true });
  const pngPath = path.join(outDir, 'og-banner.png');

  const title = 'Space Kings — Esports';
  const subtitle = 'Counter-Strike 2 • LATAM';

  const svgBuffer = Buffer.from(svg(title, subtitle));
  const image = sharp(svgBuffer).png({ compressionLevel: 9 }).resize(WIDTH, HEIGHT, { fit: 'cover' });
  await image.toFile(pngPath);
  console.log('Generated', pngPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
