/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        bg: '#0b1020',
        surface: {
          DEFAULT: '#121933',
          2: '#1a2247',
        },
        brand: {
          50: '#eef3ff',
          400: '#6d93ff',
          500: '#4f7cff',
          600: '#3f6bf0',
          700: '#2f58d6',
        },
        accent: {
          400: '#22d3ee',
          500: '#06b6d4',
        },
        ink: {
          DEFAULT: '#e6ecff',
          muted: '#9aa7d0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      boxShadow: {
        card: '0 8px 24px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(120deg, #4f7cff, #22d3ee)',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};
