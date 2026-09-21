/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#1a1a1a',
          50: '#f5f5f5',
          100: '#e8e8e8',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#3d3d3d',
          900: '#2d2d2d',
          950: '#1a1a1a',
        },
        ivory: {
          DEFAULT: '#f8f4ee',
          50: '#fdfcfa',
          100: '#f8f4ee',
          200: '#f0e8d8',
          300: '#e6d8c0',
          400: '#d9c4a0',
          500: '#ccaf80',
        },
        champagne: {
          DEFAULT: '#e8d5b7',
          light: '#f2e8d5',
          dark: '#d4bc96',
        },
        gold: {
          DEFAULT: '#c9a96e',
          light: '#dcc48f',
          dark: '#a8883a',
          muted: '#b8986a',
        },
        burgundy: {
          DEFAULT: '#5c1a2e',
          light: '#7a2540',
          muted: '#8b3a50',
        },
        warm: {
          black: '#0d0c0b',
          dark: '#1c1a18',
          mid: '#2e2b27',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        widest: '0.25em',
        'ultra-wide': '0.35em',
      },
      lineHeight: {
        tight: '1.1',
        snug: '1.3',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-overlay': 'linear-gradient(to bottom, transparent 0%, rgba(13,12,11,0.7) 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'slide-right': 'slideRight 0.8s ease forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
    },
  },
  plugins: [],
}
