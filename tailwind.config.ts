import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#135CFF',
          dark: '#071224',
          ice: '#EAF3FF',
          electric: '#0D7CFF',
        },
      },
      boxShadow: {
        kiosk: '0 20px 60px rgba(0,0,0,0.25)',
      },
      borderRadius: {
        kiosk: '24px',
      },
    },
  },
  plugins: [],
} satisfies Config;