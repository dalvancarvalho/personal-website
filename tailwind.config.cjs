const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  darkMode: 'class', // Enables manual dark mode customization
  mode: 'jit', // Enables 'Just-in-Time' feature to set custom CSS properties
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        md: '2rem',
        xl: '6rem',
        '2xl': '10rem',
      },
    },
    extend: {
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        dark: {
          1: '#323232',
          2: '#282828',
          3: '#252525',
          4: '#232323',
          5: '#202020',
          6: '#1a1a1a',
        },
        slate: {
          150: '#eaeff4',
          250: '#dbe3ec',
          350: '#b0bccd',
        },
      },
      fontFamily: {
        'jetbrains-mono': ['JetBrains Mono Variable', 'monospace'],
        'mark-pro': ['Mark Pro', 'sans-serif'],
        'rock-salt': ['Rock Salt', 'cursive'],
        urbanist: ['Urbanist Variable', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      transitionTimingFunction: {
        'elastic-out': 'cubic-bezier(0.5, 1.8, 0.3, 0.8)',
      },
    },
    screens: {
      xs: '600px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
