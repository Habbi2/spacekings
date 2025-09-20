import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/data/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#0b0f17',
        surface: '#121826',
        primary: '#7c5cff',
        accent: '#00e0ff'
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 20px rgba(124, 92, 255, 0.25)'
      }
    }
  },
  plugins: []
};

export default config;
