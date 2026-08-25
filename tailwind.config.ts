import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#050505',
          subtle: '#09090b',
          surface: '#111114',
          elevated: '#18181b',
        },
        foreground: {
          DEFAULT: '#f4f4f6',
          muted: '#a1a1aa',
          subtle: '#71717a',
          faint: '#3f3f46',
        },
        border: {
          subtle: '#18181b',
          DEFAULT: '#27272a',
          active: '#3f3f46',
          bright: '#52525b',
        },
        accent: {
          DEFAULT: '#e2e8f0',
          silver: '#cbd5e1',
          cyanGlow: 'rgba(203, 213, 225, 0.15)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 30s linear infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
