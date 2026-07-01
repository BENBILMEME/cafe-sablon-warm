/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        warm: {
          50: '#FFF8F0',
          100: '#FFF0E0',
          200: '#F5E1C8',
          300: '#E8C9A0',
          400: '#D4A574',
          500: '#C67B5C',
          600: '#B0654A',
          700: '#8B4A35',
          800: '#6B3524',
          900: '#3C2415',
        },
        olive: {
          50: '#F2F5F0',
          100: '#E3EBE0',
          400: '#8FAF8A',
          500: '#6B8F71',
          600: '#527358',
          700: '#3D5C43',
        },
        cream: {
          50: '#FFFCF7',
          100: '#FFF8F0',
          200: '#FEF0E0',
          300: '#FCE8D0',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(3rem, 7vw, 6rem)', { lineHeight: '1.05' }],
        'display': ['clamp(2.25rem, 4.5vw, 4rem)', { lineHeight: '1.1' }],
        'heading': ['clamp(1.5rem, 2.5vw, 2.5rem)', { lineHeight: '1.2' }],
      },
    },
  },
  plugins: [],
};
