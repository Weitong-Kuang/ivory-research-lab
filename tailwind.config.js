/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        foreground: '#000000',
        accents: {
          1: '#FAFAFA',
          2: '#EAEAEA',
          3: '#999999',
          4: '#888888',
          5: '#666666',
          6: '#444444',
          7: '#333333',
          8: '#111111',
        },
        'geist-success': '#0070F3',
        'geist-error': '#EE0000',
        'geist-warning': '#F5A623',
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"],
        mono: ["Menlo", "Monaco", "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", "monospace"],
      },
    },
  },
  plugins: [],
}