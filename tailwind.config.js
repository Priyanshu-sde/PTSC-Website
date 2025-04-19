/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EAE6F5',
          100: '#D5CDEA',
          200: '#AB9BD5',
          300: '#8268C0',
          400: '#5836AB',
          500: '#2D1B69', // Main primary color
          600: '#251557',
          700: '#1D1045',
          800: '#150A34',
          900: '#0C0522',
        },
        accent: {
          50: '#E0FBF3',
          100: '#C2F7E8',
          200: '#85F0D0',
          300: '#47E9B9',
          400: '#06D6A0', // Main accent color
          500: '#05AC80',
          600: '#048160',
          700: '#035740',
          800: '#022C20',
          900: '#011610',
        },
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};