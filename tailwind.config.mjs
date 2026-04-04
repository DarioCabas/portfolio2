/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0c0a1a',
          elevated: '#14112b',
          glass: 'rgba(20, 17, 43, 0.7)',
        },
        brand: {
          blue: '#0693E3',
          purple: '#7C3AED',
          cyan: '#22d3ee',
        },
        text: {
          DEFAULT: '#e8e6f0',
          muted: '#8b87a8',
          faint: '#4a4669',
        },
        border: {
          DEFAULT: 'rgba(106, 90, 205, 0.15)',
          glow: 'rgba(6, 147, 227, 0.3)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'clamp-hero': 'clamp(52px, 10vw, 100px)',
        'clamp-xl': 'clamp(2rem, 4vw, 3.5rem)',
        'clamp-lg': 'clamp(1.5rem, 3vw, 2.5rem)',
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.04) inset',
        glow: '0 0 40px rgba(6,147,227,0.12)',
        'glow-lg': '0 0 60px rgba(124,58,237,0.2)',
      },
      backdropBlur: {
        glass: '20px',
        card: '12px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
      },
      keyframes: {
        'cursor-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-left': {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-right': {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
      animation: {
        'cursor-blink': 'cursor-blink 1s step-end infinite',
        'fade-up': 'fade-up 0.6s ease forwards',
        'fade-left': 'fade-left 0.6s ease forwards',
        'fade-right': 'fade-right 0.6s ease forwards',
        'fade-in': 'fade-in 0.5s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
