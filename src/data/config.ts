export const org = {
  name: 'Space Kings',
  game: 'Counter‑Strike 2',
  logo: '/logo.png', // PNG principal (adjunta tu archivo en /public/logo.png)
  logoFallback: '/logo.svg' // Fallback SVG
};

export const socials = {
  twitter: 'https://x.com/Space_Kings_',
  instagram: 'https://www.instagram.com/spacekingsteam/',
  youtube: 'https://www.youtube.com/channel/UCNBjYdUSiUOIlbfIO7LsBow',
  twitch: 'https://www.twitch.tv/space_kings_',
  gmail: 'mailto:spacekingsteam@gmail.com',
  discord: 'https://discord.gg/Rmy7UR5zqg'
};

export type Competition = { name: string; date: string; location: string; url: string };
export const competitions: Competition[] = [
  { name: 'Serie Aberta - Gamersclub', date: 'Oct 2025', location: 'Online', url: '#' },
  { name: 'Serie C - Gamersclub', date: 'Nov 2025', location: 'Online', url: '#' },
  { name: 'Liga de Patriotas', date: 'Dic 2025', location: 'Buenos Aires, AR', url: '#' }
];

// Clips removidos por decisión de diseño.
