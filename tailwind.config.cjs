module.exports = {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  darkMode: 'class', // Enables manual dark mode customization
  mode: 'jit', // Enables 'Just-in-Time' feature to set custom CSS properties
  theme: {
    extend: {
      colors: {
        dark: {
          1: '#1a1a1a', // darkest
          2: '#202020',
          3: '#232323',
          4: '#252525',
          5: '#282828',
          6: '#323232', // lightest
        },
        slate: {
          150: '#eaeff4',
          250: '#dbe3ec',
          350: '#b0bccd',
        },
      },
      fontFamily: {
        'fira-code': ['Fira Code', 'monospace'],
        'mark-pro': ['Mark Pro', 'sans-serif'],
        'rock-salt': ['Rock Salt', 'cursive'],
        urbanist: ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
