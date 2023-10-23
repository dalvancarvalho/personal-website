module.exports = {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  darkMode: 'class', // Enables manual dark mode customization
  mode: 'jit', // Enables 'Just-in-Time' feature to set custom CSS properties
  theme: {
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
    },
  },
  plugins: [],
}
