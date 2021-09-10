const plugin = require('tailwindcss/plugin')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        graytm: '#4E4E4E',
        primary: {
          50: '#f3f8fe',
          100: '#e7f0fd',
          200: '#c3daf9',
          300: '#9fc4f6',
          400: '#5698ef',
          500: '#0e6ce8',
          600: '#0d61d1',
          700: '#0b51ae',
          800: '#08418b',
          900: '#073572'
        },
      },
      fontFamily: {
        poppins: [
          'Poppins',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Ubuntu',
          'Cantarell',
          'Noto Sans',
          'sans-serif',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
        ],
      },
      animation: {
        arrow: 'arrow 1s infinite',
      },
      keyframes: {
        arrow: {
          '0%, 100%': {
            transform: 'translateX(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          },
        },
      },
      spacing: {
        75: '25rem',
        70: '20rem',
        80: '30rem',
      },
      minHeight: {
        70: '20rem',
        75: '25rem',
        80: '30rem',
      },
      opacity: {
        0: '0',
        5: '0.05',
        10: '0.1',
        20: '0.2',
        25: '0.25',
        30: '0.3',
        40: '0.4',
        50: '0.5',
        60: '0.6',
        65: '0.65',
        70: '0.7',
        75: '0.75',
        80: '0.8',
        90: '0.9',
        95: '0.95',
        100: '1',
      },
      screens: {
        xs: '420px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  variants: {},
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.filter-none': {
          filter: 'none',
        },
        '.filter-grayscale': {
          filter: 'grayscale(100%)',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }),
  ],
}
