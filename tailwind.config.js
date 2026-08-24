/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#0A2342',
          deep: '#071A2E',
          light: '#133560',
          hover: '#0E2D54',
        },
        offwhite: {
          DEFAULT: '#F6F3EE',
          warm: '#FAF8F5',
          card: '#F1EFEA',
        },
        anthracite: {
          DEFAULT: '#202020',
          muted: '#4A4A4A',
          subtle: '#6B6B6B',
        },
        pearl: {
          DEFAULT: '#E8E8E6',
          border: '#DCDCD9',
        },
        bronze: {
          DEFAULT: '#B38E5D',
          subtle: '#C5A880',
          dark: '#8C6C42',
          light: '#F4ECE1',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        editorial: '0.14em',
        tightest: '-0.03em',
      },
      lineHeight: {
        editorial: '1.15',
        relaxedEditorial: '1.7',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(10, 35, 66, 0.05)',
        'elevated': '0 12px 32px -4px rgba(10, 35, 66, 0.08)',
        'dark-subtle': '0 8px 30px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
