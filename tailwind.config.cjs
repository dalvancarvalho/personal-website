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
        'fira-code': ['Fira Code Variable', 'monospace'],
        'mark-pro': ['Mark Pro', 'sans-serif'],
        'rock-salt': ['Rock Salt', 'cursive'],
        urbanist: ['Urbanist Variable', 'sans-serif'],
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
